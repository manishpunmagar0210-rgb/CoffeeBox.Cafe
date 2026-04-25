import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="h-16 border-b border-[#1E1E1E] px-4 md:px-8 flex items-center justify-between flex-shrink-0 bg-[#0B0B0B]/95 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#B3001B] rounded flex items-center justify-center shadow-lg shadow-red-900/20">
          <span className="text-white font-bold text-xs italic">CB</span>
        </div>
        <span className="text-white font-black text-lg md:text-xl tracking-tighter uppercase relative top-[1px]">CoffeeBox.Cafe</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-[10px] font-bold tracking-widest uppercase">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/60 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="bg-[#B3001B] text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(179,0,27,0.3)] border border-red-500/20">
          Order Now
        </button>
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="md:hidden text-white/80 p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#141414] border-b border-[#1E1E1E] shadow-2xl">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-4 text-xs font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors border-b border-white/5 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 bg-[#B3001B] text-white px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-widest text-center"
            >
              Order Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
