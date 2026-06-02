import { Pool } from "pg";
import fs from "fs";
import path from "path";

export interface Lead {
  id: string | number;
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  budget: string;
  message: string;
  status: "New" | "Contacted" | "Converted" | "Lost";
  createdAt: string;
}

const DATABASE_URL = process.env.DATABASE_URL || process.env.POSTGRES_URL;
const LOCAL_JSON_PATH = process.env.VERCEL
  ? path.join("/tmp", "leads_db.json")
  : path.join(process.cwd(), "src/data/leads_db.json");

// Initialize PostgreSQL pool if URL is available
let pool: Pool | null = null;
if (DATABASE_URL) {
  pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: DATABASE_URL.includes("localhost") || DATABASE_URL.includes("127.0.0.1")
      ? false
      : { rejectUnauthorized: false } // SSL enabled for hosting providers like Neon/Vercel
  });
  
  // Create table if it doesn't exist in PostgreSQL
  initPostgresTable();
}

async function initPostgresTable() {
  if (!pool) return;
  try {
    const client = await pool.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        event_type VARCHAR(100) NOT NULL,
        event_date VARCHAR(100) NOT NULL,
        location VARCHAR(255) NOT NULL,
        budget VARCHAR(100) NOT NULL,
        message TEXT,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    client.release();
  } catch (error) {
    console.error("Failed to initialize PostgreSQL leads table:", error);
  }
}

// Fallback: Read JSON file
function readLocalLeads(): Lead[] {
  try {
    if (!fs.existsSync(LOCAL_JSON_PATH)) {
      // Create folder if not exists
      const dir = path.dirname(LOCAL_JSON_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(LOCAL_JSON_PATH, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const data = fs.readFileSync(LOCAL_JSON_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading local leads:", error);
    return [];
  }
}

// Fallback: Write JSON file
function writeLocalLeads(leads: Lead[]) {
  try {
    const dir = path.dirname(LOCAL_JSON_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_JSON_PATH, JSON.stringify(leads, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing local leads:", error);
  }
}

// --- DATABASE API ---

export async function addLead(leadData: Omit<Lead, "id" | "status" | "createdAt">): Promise<Lead> {
  const newLead: Omit<Lead, "id"> = {
    ...leadData,
    status: "New",
    createdAt: new Date().toISOString()
  };

  if (pool) {
    try {
      const result = await pool.query(
        `INSERT INTO leads (name, phone, email, event_type, event_date, location, budget, message, status, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
         RETURNING id, name, phone, email, event_type as "eventType", event_date as "eventDate", location, budget, message, status, created_at as "createdAt"`,
        [
          newLead.name,
          newLead.phone,
          newLead.email,
          newLead.eventType,
          newLead.eventDate,
          newLead.location,
          newLead.budget,
          newLead.message,
          newLead.status,
          new Date(newLead.createdAt)
        ]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Failed to write to PostgreSQL. Falling back to local JSON database.", error);
    }
  }

  // Local JSON Database Fallback
  const leads = readLocalLeads();
  const id = leads.length > 0 ? Math.max(...leads.map(l => Number(l.id) || 0)) + 1 : 1;
  const lead: Lead = {
    id,
    ...newLead
  };
  leads.push(lead);
  writeLocalLeads(leads);
  return lead;
}

export async function getLeads(): Promise<Lead[]> {
  if (pool) {
    try {
      const result = await pool.query(
        `SELECT id, name, phone, email, event_type as "eventType", event_date as "eventDate", location, budget, message, status, created_at as "createdAt"
         FROM leads
         ORDER BY created_at DESC`
      );
      return result.rows.map(row => ({
        ...row,
        createdAt: new Date(row.createdAt).toISOString()
      }));
    } catch (error) {
      console.error("Failed to fetch from PostgreSQL. Falling back to local JSON database.", error);
    }
  }

  // Local JSON Database Fallback
  const leads = readLocalLeads();
  return leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function updateLeadStatus(id: string | number, status: Lead["status"]): Promise<boolean> {
  if (pool) {
    try {
      const result = await pool.query(
        "UPDATE leads SET status = $1 WHERE id = $2",
        [status, id]
      );
      return (result.rowCount ?? 0) > 0;
    } catch (error) {
      console.error("Failed to update PostgreSQL. Falling back to local JSON database.", error);
    }
  }

  // Local JSON Database Fallback
  const leads = readLocalLeads();
  const index = leads.findIndex(l => String(l.id) === String(id));
  if (index !== -1) {
    leads[index].status = status;
    writeLocalLeads(leads);
    return true;
  }
  return false;
}
