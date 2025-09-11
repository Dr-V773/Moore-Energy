// app/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <main className="relative flex-grow flex flex-col items-center justify-center text-center px-6 py-24">
  {/* Background image */}
  <div className="absolute inset-0 -z-10">
    <Image 
      src="/solar.png" 
      alt="Solar panels background" 
      fill 
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div> {/* dark overlay for readability */}
  </div>

  {/* Content */}
  <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
    Reimagining Grid Interconnection
  </h1>
  <p className="mt-4 max-w-2xl text-lg text-slate-100">
    Software tools and direct-wire energy solutions that streamline interconnection, 
    reduce developer friction, and unlock capacity for distributed renewables.
  </p>
  <div className="mt-8 flex gap-4">
    <a href="/about" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-xl">
      Learn More
    </a>
    <a href="/contact" className="inline-flex items-center px-4 py-2 rounded-xl border border-white text-white text-sm hover:bg-white hover:text-black">
      Get in Touch
    </a>
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
