import { NextResponse } from "next/server";
import { addLead, getLeads, updateLeadStatus } from "@/lib/db";

// POST: Submit a new inquiry lead
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, eventType, eventDate, location, budget, message } = body;

    // Basic Validation
    if (!name || !phone || !email || !eventType || !location || !budget) {
      return NextResponse.json(
        { error: "Required fields are missing: name, phone, email, eventType, location, budget" },
        { status: 400 }
      );
    }

    const lead = await addLead({
      name,
      phone,
      email,
      eventType,
      eventDate: eventDate || new Date().toISOString().split("T")[0],
      location,
      budget,
      message: message || ""
    });

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("API Error in POST /api/leads:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// GET: Retrieve all leads (requires admin authorization)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const password = request.headers.get("x-admin-password") || searchParams.get("password");

    // Simple Admin authentication check
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "RainbowAdmin2026";
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Unauthorized. Invalid admin credentials." },
        { status: 401 }
      );
    }

    const leads = await getLeads();
    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error) {
    console.error("API Error in GET /api/leads:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PATCH: Update lead status
export async function PATCH(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const password = request.headers.get("x-admin-password") || searchParams.get("password");
    
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "RainbowAdmin2026";
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "id and status are required fields" },
        { status: 400 }
      );
    }

    const success = await updateLeadStatus(id, status);
    if (!success) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Error in PATCH /api/leads:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
