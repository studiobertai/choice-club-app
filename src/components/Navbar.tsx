"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Ticket } from "lucide-react"; // Agregué el icono Ticket

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (e: React.MouseEvent, targetId?: string) => {
    e.preventDefault();
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', `#${targetId}`);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState({}, '', '/');
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="shrink-0 cursor-pointer" onClick={(e) => handleNavigation(e)}>
            <span className="text-white font-bold text-xl tracking-wider hover:opacity-80 transition-opacity">
              CHOICE <span className="text-orange-500">CLUB</span>
            </span>
          </div>
          
          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              
              <Link href="/" onClick={(e) => handleNavigation(e)} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">
                Inicio
              </Link>
              
              <Link href="#eventos" onClick={(e) => handleNavigation(e, 'eventos')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">
                Agenda
              </Link>
              
              {/* BOTÓN TICKETS (Ahora Naranja igual que en móvil) */}
              <button 
                onClick={(e) => handleNavigation(e, 'eventos')}
                className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-700 transition-transform hover:scale-105 shadow-[0_0_15px_rgba(234,88,12,0.3)] flex items-center gap-2"
              >
                <Ticket size={16} />
                Comprar Tickets
              </button>
            </div>
          </div>

          {/* BOTÓN MÓVIL */}
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

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 animate-in slide-in-from-top-5 absolute w-full z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            
            <Link href="/" onClick={(e) => handleNavigation(e)} className="text-gray-300 hover:text-white block px-3 py-3 rounded-lg text-lg font-medium hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
              Inicio
            </Link>
            
            <Link href="#eventos" onClick={(e) => handleNavigation(e, 'eventos')} className="text-gray-300 hover:text-white block px-3 py-3 rounded-lg text-lg font-medium hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
              Agenda
            </Link>
            
            <button 
              onClick={(e) => handleNavigation(e, 'eventos')}
              className="w-full flex items-center justify-center gap-2 mt-6 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-4 rounded-xl font-bold shadow-lg shadow-orange-900/20 active:scale-95 transition-transform"
            >
              <Ticket size={20} />
              Comprar Tickets
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}