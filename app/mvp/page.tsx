import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

export default function MVP() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
          Our MVP Roadmap
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center">
          We're moving fast to validate our approach with developers and partners.
          Here’s what’s coming next:
        </p>

        <div className="space-y-10 relative border-l-2 border-slate-200 pl-6">
          {/* Step 1 */}
          <div className="relative">
            <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-green-500"></span>
            <h2 className="text-xl font-semibold">Phase 1 — Feasibility Engine (In Progress)</h2>
            <p className="text-slate-600 mt-2">
              Rapid direct-wire feasibility checks for distributed projects. Developers
              can upload site details and receive instant technical insights.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-500"></span>
            <h2 className="text-xl font-semibold">Phase 2 — Developer Dashboard</h2>
            <p className="text-slate-600 mt-2">
              A centralized hub for project status, queue modeling, and automated
              documentation workflows — built to replace scattered spreadsheets and PDFs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-purple-500"></span>
            <h2 className="text-xl font-semibold">Phase 3 — Utility Collaboration</h2>
            <p className="text-slate-600 mt-2">
              Shared tools for utilities to review, approve, and provide feedback — cutting
              down on slow, manual back-and-forth.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-slate-400"></span>
            <h2 className="text-xl font-semibold">Future — AI-Powered Grid Optimization</h2>
            <p className="text-slate-600 mt-2">
              Long-term, we’re developing predictive modeling and optimization tools that
              help maximize renewable penetration while keeping costs low.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
