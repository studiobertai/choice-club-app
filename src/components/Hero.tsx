// Definimos que este componente recibe una orden
interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* FONDO ANIMADO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black z-10" />
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/40 via-black to-black animate-pulse" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4 drop-shadow-2xl">
          CHOICE <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-600">CLUB</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">
          La experiencia visual nocturna de Villa Nueva.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* BOTÓN PRINCIPAL (Ahora es un botón normal que llama a onOpenModal) */}
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-105"
          >
            TICKETS • SÁBADO 14
          </button>
          
          {/* BOTÓN AGENDA */}
          <a 
            href="#eventos" 
            className="px-8 py-4 w-full sm:w-auto bg-transparent border border-white/30 hover:border-white text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm cursor-pointer flex justify-center hover:bg-white/5"
          >
            Ver Agenda Completa
          </a>

        </div>
      </div>
    </div>
  );
}