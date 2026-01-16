"use client";

import Image from "next/image";
import { MapPin, Music, ArrowRight } from "lucide-react";
import { EVENTS, EventType } from "@/data"; // Importamos los datos y el Tipo

// Definimos que este componente recibe una función que acepta un EVENTO
interface EventsProps {
  onOpenModal: (event: EventType) => void;
}

export default function Events({ onOpenModal }: EventsProps) {
  return (
    <section id="eventos" className="py-20 bg-black relative">
      {/* Luz ambiental de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-orange-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
              PRÓXIMAS <span className="text-orange-500">FECHAS</span>
            </h2>
            <p className="text-gray-400">No te quedes afuera de la experiencia.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors">
            Ver agenda completa <ArrowRight size={16} />
          </button>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div 
              key={event.id} 
              className="group relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Imagen del Evento */}
              <div className="h-64 overflow-hidden relative">
                {/* Fecha flotante */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-white z-20 border border-white/10">
                  {event.date}
                </div>
                
                {/* Estado (Disponible / Sold Out) */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded text-[10px] font-bold z-20 uppercase tracking-wider ${
                  event.status === "SOLD OUT" ? "bg-red-600 text-white" : "bg-orange-500 text-black"
                }`}>
                  {event.status}
                </div>
                
                <Image 
                  src={event.image} 
                  alt={event.dj} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-900/20 to-transparent" />
              </div>

              {/* Información y Botón */}
              <div className="p-6 relative">
                <div className="flex items-center gap-2 text-orange-500 mb-2 text-xs font-bold uppercase tracking-widest">
                  <Music size={14} />
                  {event.style}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-500 transition-colors">
                  {event.dj}
                </h3>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={16} />
                    <span>Main Stage</span>
                  </div>
                  
                  {/* BOTÓN DE ACCIÓN CONECTADO AL MODAL */}
                  <button 
                    onClick={() => {
                      // Solo abrimos el modal si NO está agotado
                      if (event.status !== "SOLD OUT") {
                        onOpenModal(event);
                      }
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                      event.status === "SOLD OUT" 
                        ? "bg-zinc-800 text-gray-500 cursor-not-allowed" 
                        : "bg-white text-black hover:bg-orange-500 hover:text-white cursor-pointer shadow-lg hover:shadow-orange-500/20"
                    }`}
                  >
                    {event.status === "SOLD OUT" ? "Agotado" : "Tickets"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Mobile (Solo visible en celular) */}
        <div className="mt-8 flex md:hidden justify-center">
          <button className="flex items-center gap-2 text-white border-b border-orange-500 pb-1">
            Ver agenda completa <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}