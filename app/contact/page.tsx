import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

export default function Contact() {
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
        <form className="space-y-6 bg-slate-50 p-8 rounded-2xl shadow-sm">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="How can we help?"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow transition"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
