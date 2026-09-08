"use client";

import { useState } from "react";
import { personal } from "../data/meta.js";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  async function submit(event) {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.message);

      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent. I’ll get back to you soon." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please reach out on LinkedIn.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="site-container contact-layout">
      <div>
        <div className="section-label"><span>07</span><p>Contact</p></div>
        <h2 className="section-heading">Let’s make the next useful thing.</h2>
        <p className="contact-copy">
          Tell me where you are stuck, what you are trying to launch, or the engineering role
          you are building. A good first conversation is usually enough to find the next step.
        </p>
        <div className="contact-links">
          <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={personal.socials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="/CV.pdf" download>Résumé ↓</a>
        </div>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <div className="form-honeypot" aria-hidden="true">
          <label>Website<input name="website" value={form.website} onChange={update} tabIndex="-1" autoComplete="off" /></label>
        </div>
        <label>
          Name
          <input name="name" value={form.name} onChange={update} required maxLength="100" autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={update} required maxLength="254" autoComplete="email" placeholder="you@company.com" />
        </label>
        <label>
          Company <small>(optional)</small>
          <input name="company" value={form.company} onChange={update} maxLength="120" autoComplete="organization" placeholder="Company or product" />
        </label>
        <label>
          What are you building?
          <textarea name="message" value={form.message} onChange={update} required maxLength="5000" placeholder="A little context goes a long way." />
        </label>
        {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
        <button type="submit" className="button button-dark" disabled={sending}>
          {sending ? "Sending…" : "Send your message"} <span aria-hidden="true">↗</span>
        </button>
      </form>
    </div>
  );
}
