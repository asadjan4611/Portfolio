import React, { useState } from "react";
import { personal } from "../data/meta.js";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  function update(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) {
      alert("Please fill your email and message.");
      return;
    }
    setSending(true);
    const body =
      encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject || "Portfolio Inquiry");
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setSending(false), 400);
  }

  return (
    <div>
      <div className="text-center mb-6">
        <span className="chip">GET IN TOUCH</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
          Let’s <span className="highlight">Connect</span>
        </h2>
        <p className="mt-2 text-white/80 max-w-3xl mx-auto">
          Ready to bring your ideas to life? Let’s discuss how we can work together to create
          something outstanding.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-semibold">Get In <span className="highlight">Touch</span></h3>
            <p className="mt-3 text-white/80">
              I’m always excited to discuss new opportunities, innovative projects, or potential
              collaborations. Whether you’re looking for a full‑stack engineer, a mobile developer,
              or a mentor for your team, I’d love to hear from you.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${personal.phone}`}
                className="btn btn-primary w-full"
                aria-label="Call"
              >
                Call {personal.phone}
              </a>
              <a
                href={`https://wa.me/${(personal.phone || "").replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full"
                aria-label="WhatsApp Chat"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-primary">🗓</span>
              <h3 className="font-semibold">Schedule a Call</h3>
            </div>
            <p className="mt-2 text-white/70 text-sm">
              Prefer a direct conversation? Book a meeting through Calendly to discuss your
              requirements and how I can help.
            </p>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn btn-primary w-full"
            >
              Book a Meeting
            </a>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold">Send a <span className="highlight">Message</span></h3>
          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-primary"
                placeholder="Your name"
                name="name"
                value={form.name}
                onChange={update}
              />
              <input
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-primary"
                placeholder="your@email.com"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
              />
            </div>
            <input
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-primary"
              placeholder="What’s this about?"
              name="subject"
              value={form.subject}
              onChange={update}
            />
            <textarea
              className="w-full min-h-[160px] rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-primary"
              placeholder="Tell me about your project..."
              name="message"
              value={form.message}
              onChange={update}
            />
            <button disabled={sending} className="btn btn-primary w-full">
              {sending ? "Sending..." : "Send a Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


