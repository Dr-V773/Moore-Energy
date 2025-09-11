// app/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-24">
      <Image 
  src="/logo.png" 
  alt="Moore Energy Logo" 
  width={400} 
  height={400} 
  className="mx-auto"
/>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
          Reimagining Grid Interconnection
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Software tools and direct-wire energy solutions that streamline interconnection, 
          reduce developer friction, and unlock capacity for distributed renewables.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/about" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-xl">
            Learn More
          </a>
          <a 
  href="/contact" 
  className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800 text-white text-sm hover:bg-slate-900"
>
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
