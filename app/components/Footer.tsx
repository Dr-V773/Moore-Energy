// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Moore Energy — All rights reserved</div>
          <div className="mt-3 md:mt-0">Clean energy solutions for the future</div>
        </div>
      </footer>
    );
  }
  