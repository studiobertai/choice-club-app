"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import MapModal from "@/components/MapModal";
import { EVENTS, EventType } from "@/data"; // Importamos los datos y el tipo

export default function Home() {
  // AHORA EL ESTADO GUARDA EL EVENTO ENTERO (O null si está cerrado)
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  // Función para abrir: Recibe el evento específico
  const openModal = (event: EventType) => setSelectedEvent(event);
  
  // Función para cerrar: Pone el estado en null
  const closeModal = () => setSelectedEvent(null);

  // Para el Hero, por defecto abrimos el PRIMER evento (Sábado 14)
  const handleHeroClick = () => openModal(EVENTS[0]);

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      {/* Pasamos funciones específicas */}
      <Hero onOpenModal={handleHeroClick} />
      
      <Events onOpenModal={openModal} />
      
      {/* El Modal recibe el evento seleccionado */}
      <MapModal 
        event={selectedEvent} 
        onClose={closeModal} 
      />
    </main>
  );
}
