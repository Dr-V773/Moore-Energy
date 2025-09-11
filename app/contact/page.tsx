"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-grow max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center">
          Interested in learning more, partnering, or just saying hello?
          Fill out the form below and we’ll get back to you shortly.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-50 p-8 rounded-2xl shadow-sm"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="How can we help?"
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2">Failed to send message. Try again.</p>
          )}
        </form>
      </main>

      <Footer />
    </div>
  );
}
