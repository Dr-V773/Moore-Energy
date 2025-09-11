// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

<Image 
  src="./logo.png" 
  alt="Moore Energy Logo" 
  width={400} 
  height={400} 
  className="mx-auto"
/>

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Moore Energy Logo" width={40} height={40} />
          <span className="font-semibold text-lg text-slate-900">Moore Energy</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-700">
          <Link href="/about" className="hover:text-emerald-600">About</Link>
          <Link href="/mvp" className="hover:text-emerald-600">MVP</Link>
          <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
