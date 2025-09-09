'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function MooreLanding() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* NAV */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold">ME</div>
          <div>
            <div className="text-lg font-semibold">Moore Energy</div>
            <div className="text-xs text-slate-500">Direct-wire software solutions for distributed energy</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#mvp" className="hover:text-slate-900">MVP</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <section>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Reimagining how grid-connected projects interconnect — faster, cleaner, cheaper.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg text-slate-600"
          >
            Moore Energy builds software tools and direct-wire energy solutions that streamline interconnection, reduce developer friction, and unlock capacity for distributed renewables and grid-responsive loads.
          </motion.p>
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-xl">Get in touch</a>
            <a className="inline-flex items-center px-4 py-2 rounded-xl border border-slate-200 text-sm" href="#mvp">See MVP</a>
          </motion.div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-500">
            <div>
              <div className="font-medium text-slate-900">Focus</div>
              <div>Grid interconnection tools</div>
            </div>
            <div>
              <div className="font-medium text-slate-900">Stage</div>
              <div>Pre-seed / prototype</div>
            </div>
            <div>
              <div className="font-medium text-slate-900">Goal</div>
              <div>Garage residency & pilot partners</div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="h-80 md:h-[520px] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
            <img
              alt="Electric grid abstract"
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur rounded-xl p-4">
              <div className="text-sm font-medium">Upcoming MVP</div>
              <div className="text-xs text-slate-600">
                A developer dashboard that automates direct-wire feasibility checks and produces bankable interconnection reports.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ABOUT / PROBLEM & SOLUTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Why Moore Energy?</h2>
            <p className="mt-4 text-slate-600">
              Interconnection is the slowest, most costly barrier for getting renewable and flexible energy projects built. Moore Energy combines domain expertise with software automation to shorten timelines, reduce uncertainty, and create clear commercial pathways for distributed energy assets.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white shadow rounded-2xl p-4">
                <div className="font-semibold">Problem</div>
                <div className="text-sm text-slate-600 mt-2">
                  Fragmented rules, manual processes, and opaque queueing create months-to-years of uncertainty for developers.
                </div>
              </div>
              <div className="bg-white shadow rounded-2xl p-4">
                <div className="font-semibold">Our Approach</div>
                <div className="text-sm text-slate-600 mt-2">
                  Model the grid & interconnection rules, provide automated feasibility checks, and produce clean deliverables for utilities and financiers.
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">What we build</h3>
            <ul className="mt-3 list-disc list-inside text-slate-600">
              <li>Direct-wire feasibility engine — rapid technical checks</li>
              <li>Developer dashboard — status, documentation, and queue modeling</li>
              <li>Utility collaboration workflows — reduce back-and-forth</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Who benefits</h3>
            <p className="mt-2 text-slate-600">
              Renewable project developers, site owners, energy brokers, and utilities who need faster, more predictable interconnection and commissioning.
            </p>
          </div>
        </div>
      </section>

      {/* MVP / ROADMAP */}
      <section id="mvp" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center">MVP & 90‑day Roadmap</h2>
        <div className="mt-8 grid gap-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 text-sm font-semibold">Week 1–4</div>
            <div className="flex-1">
              <div className="font-medium">Core engine</div>
              <div className="text-sm text-slate-600">
                Prototype the direct-wire feasibility checks and simple rule engine for 2–3 target utilities.
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 text-sm font-semibold">Week 5–8</div>
            <div className="flex-1">
              <div className="font-medium">Developer dashboard</div>
              <div className="text-sm text-slate-600">
                UI for uploading site data, running automated checks, and exporting a succinct interconnection report.
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 text-sm font-semibold">Week 9–12</div>
            <div className="flex-1">
              <div className="font-medium">Pilot & feedback</div>
              <div className="text-sm text-slate-600">
                Run pilot with 1–2 developer partners, refine outputs to be utility and lender friendly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Contact — Join the pilot or collaborate</h2>
            <p className="mt-4 text-slate-600">
              We&apos;re looking for pilot partners, utility contacts, and advisors. Tell us about your project and we&apos;ll follow up.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3"><Mail size={18} /><div>hello@mooreenergy.com — general</div></div>
              <div className="flex items-start gap-3"><Phone size={18} /><div>+1 (555) 123‑4567</div></div>
              <div className="flex items-start gap-3"><MapPin size={18} /><div>Based in Chicago </div></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                className="border border-slate-300 rounded-xl p-2 w-full"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                className="border border-slate-300 rounded-xl p-2 w-full"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={5}
                className="border border-slate-300 rounded-xl p-2 w-full"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-xl"
            >
              Send Message
            </button>
            {status === 'sending' && <div className="text-sm text-slate-500">Sending…</div>}
            {status === 'sent' && <div className="text-sm text-green-600">Thanks — we received your message.</div>}
            {status === 'error' && <div className="text-sm text-red-600">Something went wrong. Try again or email hello@mooreenergy.com.</div>}
            <noscript>
              <div className="text-xs text-slate-500">
                If this form doesn&apos;t submit, email us at <a href="mailto:hello@mooreenergy.com">hello@mooreenergy.com</a>
              </div>
            </noscript>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t mt-12 border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Moore Energy — All rights reserved</div>
          <div className="mt-3 md:mt-0">Made by Kiran </div>
        </div>
      </footer>
    </div>
  )
}
