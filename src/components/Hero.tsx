import MapModal from "./MapModal";

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* FONDO ANIMADO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/40 via-black to-black animate-pulse" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4 drop-shadow-2xl">
          CHOICE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">CLUB</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">
          La experiencia visual nocturna de Villa Nueva.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <MapModal />
          <button className="px-8 py-4 w-full sm:w-auto bg-transparent border border-white/30 hover:border-white text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm">
            Próxima Fecha
          </button>
        </div>
      </div>
    </div>
  );
}