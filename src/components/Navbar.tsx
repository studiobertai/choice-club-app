"use client";

import { useState } from "react";
// Eliminamos "Link" que no se usaba
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    // Corrección: shrink-0 y z-50
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="shrink-0 cursor-pointer" onClick={scrollToTop}>
            <span className="text-white font-bold text-xl tracking-wider hover:opacity-80 transition-opacity">
              CHOICE <span className="text-orange-500">CLUB</span>
            </span>
          </div>
          
          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" onClick={scrollToTop} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">
                Inicio
              </a>
              <a href="#eventos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">
                Eventos
              </a>
              <a href="#reservas" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">
                Mesas VIP
              </a>
              <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-transform hover:scale-105 shadow-lg shadow-white/10">
                Reservar Ahora
              </button>
            </div>
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 animate-in slide-in-from-top-5 absolute w-full z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a 
              href="#" 
              onClick={scrollToTop}
              className="text-gray-300 hover:text-white block px-3 py-3 rounded-lg text-lg font-medium hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              Inicio
            </a>
            <a 
              href="#eventos" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block px-3 py-3 rounded-lg text-lg font-medium hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              Eventos
            </a>
            <a 
              href="#reservas" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block px-3 py-3 rounded-lg text-lg font-medium hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              Mesas VIP
            </a>
            {/* Corrección: bg-linear-to-r */}
            <button className="w-full text-center mt-6 bg-linear-to-r from-orange-600 to-red-600 text-white px-4 py-4 rounded-xl font-bold shadow-lg shadow-orange-900/20 active:scale-95 transition-transform">
              Reservar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}