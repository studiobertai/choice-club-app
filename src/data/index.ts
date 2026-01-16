// src/data/index.ts

export const ZONES = [
  { 
    id: 'vip', 
    name: 'Sector VIP', 
    price: '$150.000', 
    desc: 'Mesa exclusiva con servicio de botella.',
    // Foto VIP
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67',
    combo: 'Incluye: 1 Baron B + 4 Speed + Hielo',
    style: { top: '8%', right: '5%', width: '40%', height: '35%' } 
  },
  { 
    id: 'general', 
    name: 'Pista General', 
    price: '$15.000', 
    desc: 'Acceso a la pista principal y barras.',
    // Foto Pista
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    combo: 'Acceso rápido + 1 Consumición (Gin/Fernt)',
    style: { bottom: '5%', left: '10%', width: '80%', height: '40%' } 
  }
];

export const EVENTS = [
  {
    id: 1,
    date: "SÁB 14 SEP",
    dj: "HERNAN CATTANEO",
    style: "Progressive House",
    status: "ÚLTIMAS MESAS",
    // NUEVA FOTO (Crowd/Luces Rojas) - Funciona seguro
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7'
  },
  {
    id: 2,
    date: "VIE 20 SEP",
    dj: "TECHNO NIGHT",
    style: "Hard Techno",
    status: "DISPONIBLE",
    // ESTA ES LA QUE YA FUNCIONABA (DJ Hands)
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    date: "SÁB 28 SEP",
    dj: "SUNSET VIBES",
    style: "Deep House",
    status: "SOLD OUT",
    // NUEVA FOTO (Fiesta/Confeti) - Funciona seguro
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec'
  }
];

export interface EventType {
  id: number;
  date: string;
  dj: string;
  style: string;
  status: string;
  image: string;
}