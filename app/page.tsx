// app/page.tsx
// app/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/solar.png"
            alt="Solar panels background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Reimagining Grid Interconnection
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-100">
            Software tools and direct-wire energy solutions that streamline interconnection,
            reduce developer friction, and unlock capacity for distributed renewables.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-white text-white text-sm hover:bg-white hover:text-black transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}



//import MooreLanding from './components/MooreLanding'
//export default function Page() {
//  return <MooreLanding />
// }
