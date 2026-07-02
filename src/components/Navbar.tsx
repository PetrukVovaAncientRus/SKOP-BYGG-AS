"use strict";
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Hjem' },
    { href: '/om-oss', label: 'Om oss' },
    { href: '/tjenester', label: 'Tjenester' },
    { href: '/prosjekter', label: 'Prosjekter' },
    { href: '/anmeldelser', label: 'Anmeldelser' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-brand-orange text-white rounded-lg group-hover:rotate-12 transition-transform">
                <Hammer size={24} />
              </div>
              <span className="font-black text-xl tracking-wider text-brand-dark">
                SKOP <span className="text-brand-orange">BYGG</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="font-medium text-gray-600 hover:text-brand-orange transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/kontakt" 
              className="bg-brand-dark text-white px-5 py-2.5 rounded-md font-semibold hover:bg-brand-orange transition-colors shadow-md hover:shadow-lg transform active:translate-y-0.5 transition-all"
            >
              Få Estimat
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-orange p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}