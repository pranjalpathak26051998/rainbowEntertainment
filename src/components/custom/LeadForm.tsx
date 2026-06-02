"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface LeadFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export default function LeadForm({ onSuccess, compact = false }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    location: "",
    budget: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const eventTypes = [
    "Wedding Entertainment",
    "Corporate Event",
    "Live Concert / Show",
    "Religious Event (Jagran/Chowki)",
    "Celebrity Management",
    "Stage & Sound Production Only",
    "Other Celebration"
  ];

  const budgetRanges = [
    "Below ₹5 Lakhs",
    "₹5 Lakhs - ₹10 Lakhs",
    "₹10 Lakhs - ₹25 Lakhs",
    "₹25 Lakhs - ₹50 Lakhs",
    "₹50 Lakhs + (Luxury/VIP)"
  ];

  const locations = [
    "Delhi NCR (New Delhi)",
    "Gurugram (Gurgaon)",
    "Noida / Greater Noida",
    "Faridabad",
    "Ghaziabad",
    "Destination (Outside Delhi NCR)"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simple validation
    if (!formData.name || !formData.phone || !formData.email || !formData.eventType || !formData.location || !formData.budget) {
      setError("Please fill out all required fields marked with *");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network error. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-charcoal-light border border-gold/20 rounded-2xl animate-fade-in">
        <CheckCircle2 className="w-16 h-16 text-gold mb-4 animate-bounce" />
        <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">Inquiry Submitted Successfully!</h3>
        <p className="text-white/60 text-sm max-w-sm">
          Thank you for contacting Rainbow Entertainment. Our senior event consultant will call you back within the next 2 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-5 ${compact ? "" : "w-full"}`}>
      {error && (
        <div className="bg-crimson/10 border border-crimson/30 text-crimson text-xs font-semibold p-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-white/70 uppercase">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-white/70 uppercase">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 99999 99999"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-white/70 uppercase">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. name@gmail.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/20"
          />
        </div>

        {/* Event Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-white/70 uppercase">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Event Type */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-white/70 uppercase">Event Type *</label>
          <select
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className="w-full bg-charcoal border border-white/10 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
          >
            <option value="" disabled className="text-white/30">Select Type</option>
            {eventTypes.map(t => (
              <option key={t} value={t} className="bg-charcoal text-white">{t}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-white/70 uppercase">Event Location *</label>
          <select
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-charcoal border border-white/10 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
          >
            <option value="" disabled className="text-white/30">Select Location</option>
            {locations.map(l => (
              <option key={l} value={l} className="bg-charcoal text-white">{l}</option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-white/70 uppercase">Budget Range *</label>
          <select
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-charcoal border border-white/10 rounded-xl px-3 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
          >
            <option value="" disabled className="text-white/30">Select Budget</option>
            {budgetRanges.map(b => (
              <option key={b} value={b} className="bg-charcoal text-white">{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold tracking-wider text-white/70 uppercase">Your Event Vision / Requirements</label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your expected artist, guest count, staging requirements, themes..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/20 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full gold-bg-gradient disabled:opacity-50 text-charcoal font-sans text-xs tracking-widest font-bold uppercase py-4 rounded-xl transition-all hover:scale-[1.01] duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-charcoal" />
            Sending Inquiry...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-charcoal" />
            Submit Get Free Quote
          </>
        )}
      </button>
    </form>
  );
}
