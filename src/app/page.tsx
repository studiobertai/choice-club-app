import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events"; 

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Events /> {/* <--- Agregar aquí */}
    </main>
  );
}
