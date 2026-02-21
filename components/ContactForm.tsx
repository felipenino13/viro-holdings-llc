"use client";

import { useMemo, useState } from "react";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  inquiryType: "General Inquiry" | "Platform Information" | "Partnership Discussion" | "Other";
  message: string;
  website: string; // honeypot anti-spam (debe quedar vacío)
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    company: "",
    email: "",
    inquiryType: "General Inquiry",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const canSubmit = useMemo(() => {
    if (status === "loading") return false;
    if (!form.fullName.trim()) return false;
    if (!form.email.trim()) return false;
    if (!form.message.trim()) return false;
    return true;
  }, [form, status]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFeedback("");

    // Honeypot: bots suelen llenar campos ocultos
    if (form.website.trim().length > 0) {
      setStatus("success");
      setFeedback("Message received.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setFeedback("Thanks — your message has been received. We’ll respond if it aligns with our operational focus.");
      setForm({
        fullName: "",
        company: "",
        email: "",
        inquiryType: "General Inquiry",
        message: "",
        website: "",
      });
    } catch (err: any) {
      setStatus("error");
      setFeedback(err?.message || "Unable to send your message. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl space-y-6">
      {/* Card */}
      <div className="rounded-2xl border border-white/10 bg-[#181818]/40 p-6 shadow-sm backdrop-blur">
        <div className="mb-6">
          <h2 className="text-xl font-semibold tracking-tight text-white">Send Us a Message</h2>
          <p className="mt-1 text-sm text-white/70">
            Please provide the details below so we can route your inquiry appropriately.
          </p>
        </div>

        {/* Honeypot (hidden) */}
        <div className="hidden">
          <label className="text-sm text-white/70">Website</label>
          <input
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Full Name */}
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80">
              Full Name <span className="text-white/50">*</span>
            </label>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/30 focus:border-white/20 focus:bg-black/30"
              placeholder="Your name"
              required
            />
          </div>

          {/* Company */}
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80">Company / Organization</label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-white/20 focus:bg-black/30"
              placeholder="Company name"
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80">
              Email Address <span className="text-white/50">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-white/20 focus:bg-black/30"
              placeholder="name@company.com"
              required
            />
          </div>

          {/* Inquiry Type */}
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80">Inquiry Type</label>
            <select
              value={form.inquiryType}
              onChange={(e) => update("inquiryType", e.target.value as FormState["inquiryType"])}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/20 focus:bg-black/30"
            >
              <option className="bg-black" value="General Inquiry">General Inquiry</option>
              <option className="bg-black" value="Platform Information">Platform Information</option>
              <option className="bg-black" value="Partnership Discussion">Partnership Discussion</option>
              <option className="bg-black" value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/80">
              Message <span className="text-white/50">*</span>
            </label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="mt-2 min-h-[140px] w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-white/20 focus:bg-black/30"
              placeholder="Tell us briefly what you need and how we can help."
              required
            />
            <p className="mt-2 text-xs text-white/50">
              Note: This form is for professional inquiries only. Submission does not create any obligation or relationship.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {feedback ? (
            <p
              className={`text-sm ${
                status === "success" ? "text-emerald-300" : status === "error" ? "text-rose-300" : "text-white/70"
              }`}
            >
              {feedback}
            </p>
          ) : (
            <p className="text-sm text-white/60">We typically respond within 1–2 business days.</p>
          )}
        </div>
      </div>
    </form>
  );
}
