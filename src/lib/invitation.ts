/**
 * Datos de la invitación.
 * Edita este archivo para personalizar la boda: nombres, fechas, direcciones,
 * itinerario, mesa de regalos, etc. Los componentes leen todo desde aquí.
 */

export type Persona = {
  rol: string;
  nombres: string[]; // se unen con "&"
  tipo: "padres" | "padrinos"; // agrupa la sección de la invitación
};

export type Ubicacion = {
  titulo: string;
  lugar: string;
  hora: string; // hora del evento, ej. "19:00"
  icono: "ceremonia" | "recepcion"; // clave del ícono SVG
  // Enlace directo al mapa (Google Maps, Waze, etc.). Déjalo vacío "" y se ocultará el botón.
  mapaUrl: string;
  // Foto del lugar (déjala vacía "" y verás un marcador hasta que la agregues)
  foto: string;
};

export type EventoItinerario = {
  hora: string;
  titulo: string;
};

export type Enlace = {
  nombre: string;
  url: string;
};

export const invitacion = {
  // --- Portada ---
  novia: "Cecy",
  novio: "Carlos",
  subtitulo: "25 Aniversario",
  subtitulo2: "Boda de Plata",
  fechaTexto: "25 de Julio",
  // Fecha objetivo del contador (año-mes-día)
  fechaEvento: "2026-07-25T00:00:00",

  mensaje:
    "Con amor: \n Queremos agradecer a cada uno de ustedes por acompañarnos nuetra boda de plata.\n Nos sentimos afortunados de estar rodeados de nuetros seres queridos con quienes hemos tenido la oportunidad de compartir momentos inolvidables. \n Esperemos pasar un dia memorable",

  // Imagen de fondo de la portada (detrás de los nombres)
  portada: "/Fotos/Portada/portada.jpeg",

  // Imagen de referencia del código de vestimenta
  imagenVestimenta: "/Fotos/CodigoVestimenta/vestimenta.jpeg",

  // --- Galería tipo tarjetas / carrusel (Swiper) ---
  galeriaTarjetas: [
    "/Fotos/galeria/0d6ee77a-667d-44c3-8751-740a5616861b.JPEG",
    "/Fotos/galeria/5d375066-db10-4bf2-b5a0-d4ebf8d58b3f.jpg",
    "/Fotos/galeria/80f3be3e-bbb5-4e99-9204-b2d73cc86190.JPG",
    "/Fotos/galeria/8a7c7c30-4f14-4453-9e9f-6a268d489d5b.jpg",
    "/Fotos/galeria/9a0709a1-607b-4875-9845-13df0bc10d85.JPG",
    "/Fotos/galeria/9c9c6cbd-6b5b-439f-a0e6-eb70b47a2e9c.JPEG",
    "/Fotos/galeria/a8b07d95-14f0-4f77-86d0-60869c799036.jpg",
  ],

  imagenSecundaria: "/Invitaciones/1765644046.png",

  // --- Padres, madrinas y padrinos ---
  personas: [
    { rol: "Padres De La Novia", nombres: ["Guadalupe Chaires", "Cipriano de la Cruz"], tipo: "padres" },
    { rol: "Padres Del Novio", nombres: ["Manuela Espinoza", "Antonio López ✝️"], tipo: "padres" },
    { rol: "Madrina", nombres: ["Michelle López"], tipo: "padrinos" },
    { rol: "Padrino", nombres: ["Carlos López"], tipo: "padrinos" },
  ] as Persona[],

  // --- Ubicaciones ---
  ubicaciones: [
    {
      titulo: "Ceremonia Religiosa",
      lugar: "Parroquia San Isidro Labrador",
      hora: "17:00",
      icono: "ceremonia",
      mapaUrl: "https://maps.app.goo.gl/9y9u5eouV52Jj5vV9", // pega aquí el link de Google Maps
      foto: "/Fotos/Ubicaciones/CapillaSanIsidro.png",
    },
    {
      titulo: "Recepción",
      lugar: "Hotel El Cason: Salón Grand",
      hora: "21:00",
      icono: "recepcion",
      mapaUrl: "https://maps.app.goo.gl/iSmRsyHHHoGouKvM6", // pega aquí el link de Google Maps
      foto: "/Fotos/Ubicaciones/HotelCason.png",
    },
  ] as Ubicacion[],

  // Clave del mapa embebido. Muévela a una variable de entorno en producción:
  // NEXT_PUBLIC_GOOGLE_MAPS_KEY
  googleMapsKey:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ??
    "AIzaSyCtNitE7BO4qi1y0lB7hBENjVFY_Kd6cCI",

  // --- Código de vestimenta ---
  codigoVestimenta: "Formal",

  // --- Itinerario ---
  itinerario: [
    { hora: "17:00", titulo: "Ceremonia Religiosa" },
    { hora: "21:00", titulo: "Recepción" },
    { hora: "02:00", titulo: "Se acabó la fiesta!!" },
  ] as EventoItinerario[],

  // --- Mesa de regalos ---
  mesaRegalos: [
    { nombre: "Amazon", url: "#" },
    { nombre: "Liverpool", url: "#" },
    { nombre: "Shein", url: "#" },
    ] as Enlace[],
  mensajeRegalos:
    "Tu presencia en este dia tan especial es lo importante, pero si deseas algún detalle con nosotros, ponemos a tu disposición la opción de lluvia de sobres",
  notasExtra: ["Plateado solo para la novia"],

  // --- Datos del invitado (normalmente vendrían del backend/URL) ---
  invitado: {
    nombre: "Nombre del Invitado",
    pasesAdultos: 2,
    pasesNinos: 2,
    mesa: 3,
    // URL que codifica el QR de acceso
    urlQr: "https://www.invitame.com/ConfirmaAsistencia.php?Invitado=1&Mid=44",
  },

  // --- Confirmación por WhatsApp ---
  whatsapp: {
    // Número en formato internacional, SOLO dígitos (sin +, espacios ni guiones).
    // Ej. México: "5215512345678". Déjalo vacío "" y el botón queda deshabilitado.
    numero: "526142513010",
  },

  // --- Galería de fotos (carrusel) ---
  fotos: [
    "/Fotos/galeria/0d6ee77a-667d-44c3-8751-740a5616861b.JPEG",
    "/Fotos/galeria/5d375066-db10-4bf2-b5a0-d4ebf8d58b3f.jpg",
    "/Fotos/galeria/80f3be3e-bbb5-4e99-9204-b2d73cc86190.JPG",
    "/Fotos/galeria/8a7c7c30-4f14-4453-9e9f-6a268d489d5b.jpg",
    "/Fotos/galeria/9a0709a1-607b-4875-9845-13df0bc10d85.JPG",
    "/Fotos/galeria/9c9c6cbd-6b5b-439f-a0e6-eb70b47a2e9c.JPEG",
    "/Fotos/galeria/a8b07d95-14f0-4f77-86d0-60869c799036.jpg",
  ],

  // --- Música de fondo ---
  musica: "/Musica/14.mp3",
};

export type Invitacion = typeof invitacion;
