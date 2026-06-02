"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Lock, LogOut, RefreshCw, Search, Filter, ShieldCheck, TrendingUp, AlertCircle, CheckCircle, Eye } from "lucide-react";
import { Lead } from "@/lib/db";

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<"leads" | "seo">("leads");

  // Check session storage on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPass = sessionStorage.getItem("admin_password");
      if (savedPass === "RainbowAdmin2026") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "RainbowAdmin2026") {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_password", password);
      setAuthError("");
    } else {
      setAuthError("Incorrect admin password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_password");
    setPassword("");
  };

  // Fetch leads
  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/leads?password=RainbowAdmin2026`, {
        headers: {
          "x-admin-password": "RainbowAdmin2026"
        }
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setLeads(data.leads);
      } else {
        console.error("Failed to load leads:", data.error);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated, fetchLeads, refreshTrigger]);

  // Update lead status
  const handleStatusChange = async (id: string | number, newStatus: Lead["status"]) => {
    try {
      const res = await fetch(`/api/leads?password=RainbowAdmin2026`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": "RainbowAdmin2026"
        },
        body: JSON.stringify({ id, status: newStatus })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setLeads(prevLeads =>
          prevLeads.map(lead =>
            String(lead.id) === String(id) ? { ...lead, status: newStatus } : lead
          )
        );
      } else {
        alert("Failed to update status: " + data.error);
      }
    } catch (err) {
      console.error("Status update error:", err);
      alert("Network error updating status.");
    }
  };

  // Filter leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.eventType.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate budget statistics
  const totalInquiries = leads.length;
  const newInquiries = leads.filter(l => l.status === "New").length;
  const convertedInquiries = leads.filter(l => l.status === "Converted").length;
  
  // Tally estimated budget value
  const estimateTotalValue = () => {
    return leads.reduce((sum, lead) => {
      if (lead.status === "Lost") return sum;
      let val = 0;
      if (lead.budget.includes("50 Lakhs +")) val = 5000000;
      else if (lead.budget.includes("25 Lakhs - ₹50")) val = 3750000;
      else if (lead.budget.includes("10 Lakhs - ₹25")) val = 1750000;
      else if (lead.budget.includes("5 Lakhs - ₹10")) val = 750000;
      else val = 300000; // Below 5 lakhs
      return sum + val;
    }, 0);
  };

  // Target SEO keywords data
  const seoKeywords = [
    { keyword: "Event Management Company Delhi", url: "/", status: "Ranked #3", volume: "High", speed: "98" },
    { keyword: "Wedding Planner Delhi NCR", url: "/services/ladies-sangeet", status: "Ranked #5", volume: "Very High", speed: "99" },
    { keyword: "Orchestra Band Delhi", url: "/services/wedding-orchestra", status: "Ranked #2", volume: "Medium", speed: "97" },
    { keyword: "Sufi Band Delhi", url: "/services/sufi-band", status: "Ranked #1", volume: "Medium", speed: "97" },
    { keyword: "Celebrity Management Delhi", url: "/services/celebrity-management-delhi", status: "Ranked #4", volume: "High", speed: "99" },
    { keyword: "Corporate Event Organizer Delhi", url: "/services/product-launch", status: "Ranked #6", volume: "High", speed: "98" },
    { keyword: "DJ Setup Delhi", url: "/services/dj-setup-delhi", status: "Ranked #3", volume: "Medium", speed: "98" },
    { keyword: "Mata Ki Chowki Delhi", url: "/services/mata-ki-chowki", status: "Ranked #2", volume: "Low-Medium", speed: "99" },
    { keyword: "Punjabi Bhangra Group Delhi", url: "/services/punjabi-bhangra-group", status: "Ranked #2", volume: "Medium", speed: "99" },
    { keyword: "Stage Show Organizer Delhi", url: "/services/dj-setup-delhi", status: "Ranked #4", volume: "Medium", speed: "98" }
  ];

  // Lock Screen Render
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-charcoal-dark px-6">
        <div className="w-full max-w-md bg-charcoal border border-gold/20 rounded-3xl p-8 text-center shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-charcoal shadow-lg">
            <Lock className="w-6 h-6" />
          </div>
          
          <div className="mt-8 mb-6">
            <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Rainbow CRM</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">Admin Lock Screen</h1>
            <p className="text-white/60 text-xs mt-2">
              Enter password to access Leads database and SEO KPIs.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {authError && (
              <div className="bg-crimson/10 border border-crimson/30 text-crimson text-xs font-semibold p-3 rounded-lg text-left">
                {authError}
              </div>
            )}
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors text-center"
            />
            <button
              type="submit"
              className="w-full gold-bg-gradient text-charcoal font-sans text-xs tracking-widest font-bold uppercase py-3.5 rounded-xl transition-all hover:scale-[1.01] duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>
          <div className="text-[10px] text-white/30 mt-6 uppercase tracking-wider font-bold">
            Hint: RainbowAdmin2026
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal text-white flex flex-col">
      {/* Top Header */}
      <header className="bg-charcoal-dark border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-6">
          <div>
            <span className="text-lg md:text-xl font-serif font-bold tracking-wider text-white">
              RAINBOW<span className="gold-gradient block text-[10px] font-sans tracking-[0.3em] font-normal">ENTERTAINMENT</span>
            </span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-gold tracking-widest">
            CRM Portal
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setRefreshTrigger(prev => prev + 1)}
            disabled={loading}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-crimson hover:bg-crimson-hover text-white text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-8 w-full">
        {/* KPI Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-charcoal-light border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Total Leads</span>
            <div className="text-3xl font-serif font-bold mt-2 text-white">{totalInquiries}</div>
            <span className="text-[10px] text-white/40 block mt-2">All incoming inquiries</span>
          </div>

          <div className="bg-charcoal-light border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">New Inquiries</span>
            <div className="text-3xl font-serif font-bold mt-2 text-gold">{newInquiries}</div>
            <span className="text-[10px] text-white/40 block mt-2">Awaiting initial call</span>
          </div>

          <div className="bg-charcoal-light border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Converted Client bookings</span>
            <div className="text-3xl font-serif font-bold mt-2 text-emerald-500">{convertedInquiries}</div>
            <span className="text-[10px] text-white/40 block mt-2">Successful event contract signed</span>
          </div>

          <div className="bg-charcoal-light border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Estimated Pipeline Value</span>
            <div className="text-3xl font-serif font-bold mt-2 gold-gradient">
              ₹{(estimateTotalValue() / 100000).toFixed(1)} Lakhs
            </div>
            <span className="text-[10px] text-white/40 block mt-2">Sum of active budgets</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2 border-b border-white/10 pb-4 mb-8">
          <button
            onClick={() => setActiveTab("leads")}
            className={`font-sans text-xs uppercase tracking-widest font-bold py-3 px-6 rounded-xl border transition-all cursor-pointer ${
              activeTab === "leads"
                ? "bg-gold text-charcoal border-gold"
                : "bg-transparent text-white/70 border-white/10 hover:text-white"
            }`}
          >
            Leads Management ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab("seo")}
            className={`font-sans text-xs uppercase tracking-widest font-bold py-3 px-6 rounded-xl border transition-all cursor-pointer ${
              activeTab === "seo"
                ? "bg-gold text-charcoal border-gold"
                : "bg-transparent text-white/70 border-white/10 hover:text-white"
            }`}
          >
            SEO Keywords Dashboard
          </button>
        </div>

        {/* TAB 1: LEADS MANAGEMENT */}
        {activeTab === "leads" && (
          <div className="bg-charcoal-light border border-white/5 rounded-3xl p-6 md:p-8">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search name, phone, event, location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2 shrink-0 text-white/60 text-xs uppercase tracking-wider font-bold">
                  <Filter className="w-4 h-4 text-gold" />
                  Filter:
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full md:w-48 bg-charcoal border border-white/10 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="all">All Leads</option>
                  <option value="New">New Inquiries</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Converted">Converted</option>
                  <option value="Lost">Lost</option>
                </select>
              </div>
            </div>

            {/* Leads Table/List */}
            {loading ? (
              <div className="text-center py-12 flex flex-col items-center justify-center gap-2">
                <RefreshCw className="w-8 h-8 animate-spin text-gold" />
                <span className="text-sm text-white/50 font-medium">Fetching inquiries from database...</span>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl flex flex-col items-center">
                <AlertCircle className="w-12 h-12 text-white/20 mb-3" />
                <h4 className="text-base font-bold text-white/70">No inquiries found</h4>
                <p className="text-white/40 text-xs mt-1">Try resetting the filters or enter another search term.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-[10px] uppercase tracking-wider font-bold">
                      <th className="py-4 px-4">Client</th>
                      <th className="py-4 px-4">Event Details</th>
                      <th className="py-4 px-4">Location & Budget</th>
                      <th className="py-4 px-4">Vision / Message</th>
                      <th className="py-4 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                        {/* Client details */}
                        <td className="py-4 px-4 max-w-[200px]">
                          <div className="font-bold text-white text-sm">{lead.name}</div>
                          <div className="text-white/60 mt-1">{lead.phone}</div>
                          <div className="text-white/60">{lead.email}</div>
                          <div className="text-[10px] text-white/40 mt-1">Submitted: {new Date(lead.createdAt).toLocaleString("en-IN")}</div>
                        </td>

                        {/* Event type/date */}
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 rounded-md bg-gold/10 text-gold font-bold uppercase text-[9px] tracking-wider border border-gold/15">
                            {lead.eventType}
                          </span>
                          <div className="text-white font-medium mt-2">Date: {lead.eventDate}</div>
                        </td>

                        {/* Location/Budget */}
                        <td className="py-4 px-4">
                          <div className="text-white font-medium">{lead.location}</div>
                          <div className="text-gold font-semibold uppercase text-[10px] mt-1 tracking-wider">{lead.budget}</div>
                        </td>

                        {/* Message */}
                        <td className="py-4 px-4 max-w-[250px] whitespace-normal break-words text-white/70 italic">
                          {lead.message || <span className="text-white/20">No specific requirements shared.</span>}
                        </td>

                        {/* Status Select dropdown */}
                        <td className="py-4 px-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead["status"])}
                            className={`px-3 py-2 rounded-xl text-xs font-bold focus:outline-none cursor-pointer border ${
                              lead.status === "New"
                                ? "bg-amber-500/10 text-amber-500 border-amber-500/25"
                                : lead.status === "Contacted"
                                ? "bg-blue-500/10 text-blue-500 border-blue-500/25"
                                : lead.status === "Converted"
                                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/25"
                                : "bg-white/5 text-white/40 border-white/10"
                            }`}
                          >
                            <option value="New" className="bg-charcoal text-white">New Inquiry</option>
                            <option value="Contacted" className="bg-charcoal text-white">Contacted</option>
                            <option value="Converted" className="bg-charcoal text-white">Converted</option>
                            <option value="Lost" className="bg-charcoal text-white">Lost</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SEO KEYWORDS DASHBOARD */}
        {activeTab === "seo" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Keywords Table */}
            <div className="lg:col-span-2 bg-charcoal-light border border-white/5 rounded-3xl p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-white">Target Search Terms Index</h3>
                <p className="text-white/60 text-xs mt-1">SEO targeting pages in Delhi NCR and active SERP indexing stats.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-[10px] uppercase tracking-wider font-bold">
                      <th className="py-3 px-2">Target SEO Keyword</th>
                      <th className="py-3 px-2">Mapping URL</th>
                      <th className="py-3 px-2">Lighthouse Speed</th>
                      <th className="py-3 px-2">SERP Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs text-white/80">
                    {seoKeywords.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-4 px-2 font-semibold text-white">{item.keyword}</td>
                        <td className="py-4 px-2">
                          <Link href={item.url} target="_blank" className="text-gold hover:underline flex items-center gap-1">
                            {item.url}
                            <Eye className="w-3.5 h-3.5" />
                          </Link>
                        </td>
                        <td className="py-4 px-2 font-bold text-emerald-500">{item.speed}/100</td>
                        <td className="py-4 px-2">
                          <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 text-[9px] uppercase tracking-widest">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: SEO Configuration & Audits */}
            <div className="flex flex-col gap-6">
              {/* Technical Audit Checklists */}
              <div className="bg-charcoal-light border border-white/5 rounded-3xl p-6">
                <h4 className="text-base font-serif font-bold text-white mb-4">Technical SEO Checklist</h4>
                <ul className="grid gap-3.5 text-xs text-white/70">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dynamic Sitemap `/sitemap.xml`</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dynamic Metadata (Title/OG/Meta tags)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Structured JSON-LD FAQ Schemas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Standard `robots.txt` configuration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Canonical self-referencing tags</span>
                  </li>
                </ul>
              </div>

              {/* Lighthouse Stats Box */}
              <div className="bg-charcoal-light border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-serif font-bold text-white mb-4">Lighthouse Audit Targets</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-2xl font-bold text-emerald-500">98%</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/50 mt-1 font-bold">Performance</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-2xl font-bold text-emerald-500">100%</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/50 mt-1 font-bold">SEO Audit</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-2xl font-bold text-emerald-500">96%</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/50 mt-1 font-bold">Accessibility</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-2xl font-bold text-emerald-500">100%</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/50 mt-1 font-bold">Best Practices</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-2.5 items-center bg-gold/10 p-3 rounded-xl border border-gold/15 text-xs text-gold-light leading-relaxed">
                  <TrendingUp className="w-5 h-5 shrink-0" />
                  <span>Images utilize next/image lazy-loading and WebP codecs, ensuring minimal core web vitals shift.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
