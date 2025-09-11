import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
          About Moore Energy
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center">
          Moore Energy is building next-generation software and direct-wire energy
          solutions that simplify grid interconnection. Our mission is to help
          renewable projects connect faster, cheaper, and with less uncertainty.
        </p>

        {/* Problem Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p className="text-slate-600 leading-relaxed">
            Grid interconnection is one of the most significant barriers to renewable
            and distributed energy projects. Developers face long timelines, fragmented
            rules, and unclear processes — leading to costly delays and missed
            opportunities.
          </p>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p className="text-slate-600 leading-relaxed">
            We combine deep industry expertise with modern software design to automate
            feasibility checks, streamline documentation, and reduce back-and-forth with
            utilities. Our platform creates clarity, speed, and confidence for project
            developers and partners.
          </p>
        </section>

        {/* What We Build */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What We Build</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Direct-wire feasibility engine — rapid technical checks</li>
            <li>Developer dashboard — documentation, status, and queue modeling</li>
            <li>Utility collaboration tools — reducing manual back-and-forth</li>
          </ul>
        </section>

        {/* Who Benefits */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Who Benefits</h2>
          <p className="text-slate-600 leading-relaxed">
            Our solutions support renewable project developers, site owners, energy
            brokers, and utilities — accelerating deployment and unlocking new capacity
            for distributed energy resources.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
