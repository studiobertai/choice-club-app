"use client";

// Eliminamos "Calendar" que no se usaba
import { MapPin, Music, ArrowRight } from "lucide-react";

const EVENTS = [
  {
    id: 1,
    date: "SÁB 14 SEP",
    dj: "HERNAN CATTANEO",
    style: "Progressive House",
    status: "ÚLTIMAS MESAS",
    image: "https://images.unsplash.com/photo-1574391884720-77c07b483c66?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    date: "VIE 20 SEP",
    dj: "TECHNO NIGHT",
    style: "Hard Techno",
    status: "DISPONIBLE",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    date: "SÁB 28 SEP",
    dj: "SUNSET VIBES",
    style: "Deep House",
    status: "SOLD OUT",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Events() {
  return (
    <section id="eventos" className="py-20 bg-black relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-orange-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div 
              key={event.id} 
              className="group relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-white z-20 border border-white/10">
                  {event.date}
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded text-[10px] font-bold z-20 uppercase tracking-wider ${
                  event.status === "SOLD OUT" ? "bg-red-600 text-white" : "bg-orange-500 text-black"
                }`}>
                  {event.status}
                </div>
                
                {/* Nota: Mantenemos <img> para simplificar */}
                <img 
                  src={event.image} 
                  alt={event.dj} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Corrección: bg-linear-to-t */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-900/20 to-transparent" />
              </div>

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
                  <button className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    event.status === "SOLD OUT" 
                      ? "bg-zinc-800 text-gray-500 cursor-not-allowed" 
                      : "bg-white text-black hover:bg-orange-500 hover:text-white"
                  }`}>
                    {event.status === "SOLD OUT" ? "Agotado" : "Tickets"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex md:hidden justify-center">
          <button className="flex items-center gap-2 text-white border-b border-orange-500 pb-1">
            Ver agenda completa <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}