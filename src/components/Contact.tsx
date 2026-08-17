"use client";
import { useState } from "react";
import { IconSend } from "@tabler/icons-react";

const EMAIL = "acahyadava@gmail.com";
const EMPTY = { name: "", email: "", subject: "", message: "" };
type Field = keyof typeof EMPTY;

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

export const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: Field, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSent(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<Field, string>> = {};
    if (!form.name.trim()) next.name = "Please tell me your name.";
    if (!isEmail(form.email)) next.email = "That email address doesn't look right.";
    if (form.message.trim().length < 10) next.message = "A little more detail, please.";

    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = form.subject.trim() || `Message from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n—\n${form.name.trim()}\n${form.email.trim()}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass = (field: Field) =>
    `w-full rounded-xl border bg-white/[0.035] px-4 py-3 text-sm text-white placeholder-white/30 transition-colors duration-300 focus:outline-none focus:border-[rgb(var(--accent))]/50 ${
      errors[field] ? "border-red-400/50" : "border-white/[0.1]"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs text-white/40">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className={inputClass("name")}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400/80">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs text-white/40">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className={inputClass("email")}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400/80">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs text-white/40">
          Subject <span className="text-white/20">(optional)</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Project enquiry, role, collaboration…"
          className={inputClass("subject")}
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs text-white/40">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="What are you building?"
          className={`${inputClass("message")} resize-none`}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400/80">{errors.message}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(255,255,255,0.5)]"
        >
          Send message
          <IconSend
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
        <p className="text-xs text-white/30">
          Opens your email app — or write to{" "}
          <a href={`mailto:${EMAIL}`} className="text-white/60 underline underline-offset-2">
            {EMAIL}
          </a>{" "}
          directly.
        </p>
      </div>

      {sent && (
        <p className="rounded-xl border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-3 text-sm text-emerald-300/90">
          Your email app should be open now. If nothing happened, send the message to{" "}
          {EMAIL} instead.
        </p>
      )}
    </form>
  );
};
