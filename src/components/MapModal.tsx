"use client";

import { useState } from "react";
import { Loader2, CheckCircle, MapPin, Sparkles, Wine } from "lucide-react";

// --- CONFIGURACIÓN DE ZONAS (SOLO VIP Y GENERAL) ---
const ZONES = [
  { 
    id: 'vip', 
    name: 'Sector VIP', 
    price: '$150.000', 
    desc: 'Mesa exclusiva con servicio de botella.',
    // Foto de lujo para VIP
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1920&auto=format&fit=crop',
    combo: 'Incluye: 1 Baron B + 4 Speed + Hielo',
    // Coordenadas en el mapa (ajústalas si cambian de lugar)
    style: { top: '8%', right: '5%', width: '40%', height: '35%' } 
  },
  // --- SE ELIMINÓ LA ZONA DJ ---
  { 
    id: 'general', 
    name: 'Pista General', 
    price: '$15.000', 
    desc: 'Acceso a la pista principal y barras.',
    // Foto de fiesta para General
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    combo: 'Acceso rápido + 1 Consumición (Gin/Fernt)',
    style: { bottom: '5%', left: '10%', width: '80%', height: '40%' } 
  }
];

export default function MapModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [step, setStep] = useState(1); // 1:Mapa, 2:Form, 3:Ticket
  const [isLoading, setIsLoading] = useState(false);

  const activeInfo = ZONES.find(z => z.id === selectedZone);

  const handleClose = () => {
    setIsOpen(false);
    setSelectedZone(null);
    setStep(1);
    setIsLoading(false);
  };

  const handleFinalize = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 2000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-105"
      >
        Ver Mapa 3D
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-[600px]">
            
            {/* === COLUMNA IZQUIERDA (VISUAL) === */}
            <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden">
              
              {/* --- PASO 1: EL MAPA 3D --- */}
              {step === 1 && (
                <div className="relative w-full h-full flex items-center justify-center p-4 animate-in zoom-in duration-300">
                   <div className="relative aspect-square h-full max-h-full w-auto shadow-2xl">
                    <img src="/mapa-choice.jpg" alt="Mapa" className="w-full h-full object-cover rounded-lg" />
                    
                    {ZONES.map((zone) => (
                      <button
                        key={zone.id}
                        onClick={() => setSelectedZone(zone.id)}
                        className={`absolute rounded-xl transition-all duration-300 group flex items-center justify-center backdrop-blur-[2px] ${
                          selectedZone === zone.id 
                            ? "border-2 border-orange-500 bg-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.6)] z-20 scale-105" 
                            : "border border-white/20 bg-white/5 hover:bg-orange-500/10 hover:border-orange-500/50 hover:shadow-lg z-10"
                        }`}
                        style={zone.style}
                      >
                        <div className={`flex flex-col items-center transition-opacity duration-300 ${selectedZone === zone.id ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`}>
                          <MapPin className={`w-6 h-6 mb-1 drop-shadow-md ${selectedZone === zone.id ? "text-white animate-bounce" : "text-orange-500"}`} />
                          <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded backdrop-blur-md border border-orange-500/30 shadow-sm">{zone.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* --- PASO 2: VISUALIZACIÓN DE EXPERIENCIA (FOTO + COMBO) --- */}
              {step === 2 && activeInfo && (
                <div className="w-full h-full relative animate-in slide-in-from-right duration-500">
                   <img 
                      src={activeInfo.image} 
                      alt={activeInfo.name} 
                      className="w-full h-full object-cover opacity-80"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                   
                   <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4">
                        <div className="bg-orange-500/20 p-3 rounded-full text-orange-500">
                          <Wine size={24} />
                        </div>
                        <div>
                          <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">Sugerencia Choice</p>
                          <p className="text-white font-medium text-sm">{activeInfo.combo}</p>
                        </div>
                      </div>
                   </div>
                </div>
              )}

              {/* --- PASO 3: ANIMACIÓN DE ÉXITO --- */}
              {step === 3 && (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-zinc-950 animate-in zoom-in duration-300 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black animate-pulse" />
                   
                   <div className="relative z-10 flex flex-col items-center">
                      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(34,197,94,0.4)] animate-[bounce_1s_infinite]">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">¡Todo Listo!</h3>
                      <p className="text-gray-400">Tu experiencia en Choice comienza ahora.</p>
                   </div>
                </div>
              )}
            </div>

            {/* === COLUMNA DERECHA (INTERACCIÓN) === */}
            <div className="w-full md:w-96 bg-zinc-950 p-6 flex flex-col border-l border-white/10 shrink-0 relative z-20">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-white font-bold text-xl">{step === 1 ? "Selección" : step === 2 ? "Tus Datos" : "Ticket"}</h3>
                <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors">✕</button>
              </div>

              {/* PASO 1: RESUMEN SELECCIÓN */}
              {step === 1 && (
                <div className="flex-1 flex flex-col justify-center text-center animate-in fade-in space-y-4">
                  {activeInfo ? (
                    <>
                      <div className="text-orange-500 flex justify-center mb-2"><Sparkles size={32} /></div>
                      <h2 className="text-3xl text-white font-bold">{activeInfo.name}</h2>
                      <p className="text-gray-400 text-sm">{activeInfo.desc}</p>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-2">
                        <span className="text-xs text-gray-500 block mb-1">Valor de Reserva</span>
                        <span className="text-3xl text-white font-mono font-bold">{activeInfo.price}</span>
                      </div>
                      <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 shadow-lg mt-6 transition-transform active:scale-95">
                        Continuar
                      </button>
                    </>
                  ) : (
                    <div className="text-gray-500 py-10 flex flex-col items-center">
                      <MapPin size={40} className="mb-4 opacity-50" />
                      <p>Selecciona un sector en el mapa <br/> para ver disponibilidad.</p>
                    </div>
                  )}
                </div>
              )}

              {/* PASO 2: FORMULARIO */}
              {step === 2 && (
                <div className="flex-1 flex flex-col animate-in slide-in-from-right">
                  <form className="space-y-5 flex-1 mt-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-400 font-bold ml-1">NOMBRE COMPLETO</label>
                        <input type="text" className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Ej: Juan Pérez" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-400 font-bold ml-1">FECHA DEL EVENTO</label>
                        <select className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer">
                            <option>Sábado 14 - Opening Season</option>
                            <option>Viernes 20 - Tech Night</option>
                        </select>
                    </div>
                  </form>
                  <div className="mt-4 flex gap-3">
                    <button onClick={() => setStep(1)} className="px-6 py-3 text-gray-400 hover:text-white font-medium" disabled={isLoading}>Atrás</button>
                    <button onClick={handleFinalize} disabled={isLoading} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full py-3 flex justify-center items-center shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed">
                      {isLoading ? <Loader2 className="animate-spin" /> : "Finalizar Reserva"}
                    </button>
                  </div>
                </div>
              )}

              {/* PASO 3: TICKET DIGITAL */}
              {step === 3 && (
                <div className="flex-1 flex flex-col justify-center animate-in slide-in-from-right">
                  <div className="bg-white text-black p-6 rounded-3xl relative mb-6 shadow-2xl">
                    <div className="absolute top-1/2 -left-3 w-6 h-6 bg-zinc-950 rounded-full" />
                    <div className="absolute top-1/2 -right-3 w-6 h-6 bg-zinc-950 rounded-full" />
                    
                    <div className="border-b-2 border-dashed border-gray-200 mb-6 pb-6 text-center">
                      <h4 className="text-2xl font-black uppercase tracking-tighter">CHOICE CLUB</h4>
                      <p className="text-xs text-gray-500 font-bold tracking-widest mt-1">COMPROBANTE #8392</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-500">Sector</span>
                         <span className="font-bold">{activeInfo?.name}</span>
                       </div>
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-500">Fecha</span>
                         <span className="font-bold">Sábado 14</span>
                       </div>
                    </div>

                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl">
                        <span className="text-sm font-bold text-gray-600">Total</span>
                        <span className="text-xl font-black text-orange-600">{activeInfo?.price}</span>
                    </div>
                  </div>
                  
                  <button onClick={handleClose} className="w-full py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                    Descargar Entrada
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}