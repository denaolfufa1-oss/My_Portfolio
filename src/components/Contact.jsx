import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";


//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EmailJS credentials
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Change these to include VITE_
// Use process.env + REACT_APP_ prefix
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_AUTOREPLY_TEMPLATE = process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const contactLinks = [
  {
    icon: "✉️",
    label: "denaolfufa1@gmail.com",
    href: "mailto:denaolfufa1@gmail.com",
  },
  {
    icon: "🐙",
    label: "github.com/denaolfufa1-oss",
    href: "https://github.com/denaolfufa1-oss",
    external: true,
  },
  {
    icon: "💼",
    label: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
    external: true,
  },
  {
    icon: "📞",
    label: "+ (251) 944-862-288",
    href: "tel:+251944862288",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Pass state directly — fixes the blank {{message}} bug
    // that happens when using sendForm() with controlled React inputs
    const templateVars = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await Promise.all([
        // 1️⃣ Notifies YOU
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateVars,
          EMAILJS_PUBLIC_KEY,
        ),
        // 2️⃣ Auto-reply to sender
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE,
          templateVars,
          EMAILJS_PUBLIC_KEY,
        ),
      ]);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="section-label">04 — Contact</div>

      <h2 className="section-title">Let's Work Together</h2>
      <p className="section-sub">
        Have a project in mind? I'd love to hear about it.
      </p>

      <div className="contact-grid">
        {/* LEFT — Links */}
        <div className="contact-info">
          {contactLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="contact-item"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <div className="contact-icon">{item.icon}</div>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* RIGHT — Form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary send-btn ${status === "sending" ? "sending" : ""}`}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message →"}
          </button>

          {status === "success" && (
            <div className="form-feedback success">
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="form-feedback error">
              ❌ Something went wrong. Please try again or email me directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
