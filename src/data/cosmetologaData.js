import HeroPic from "../assets/images/hero-pic.avif";
import HilosPic from "../assets/images/hilos.jpg";
import BotoxPic from "../assets/images/botox-gallery.avif"; // Corregida extensión .jpg
import PiernasPic from "../assets/images/piernas-gallery.jpg";
import LaserGallery from "../assets/images/laser-gallery.jpg";
import AcidoPic from "../assets/images/acido-gallery.jpg";
import PerfilPic from "../assets/images/perfil.jpg";
export const cosmetologaData = {
  // Información General & Branding
  brand: {
    name: "Dra. Valeria Munguía",
    title: "Medicina Estética & Cosmetología Avanzada",
    tagline: "Resalta tu belleza natural con ciencia, precisión y elegancia.",
    logoText: "Dra. Valeria Mungía",
    accentColor: "#D8B4FE", // Pastel Violet
    whatsappNumber: "523300000000",
    calComUrl: "https://cal.com/dra-valeria-munguia/consulta",
  },

  // Hero Section
  hero: {
    badge: "• Agendamiento Directo",
    title: "Rejuvenecimiento facial y corporal de alta precisión",
    subtitle:
      "Tratamientos cosmetológicos y médicos no invasivos diseñados a la medida de tu piel. Resultados naturales desde la primera sesión.",
    primaryCtaText: "Agendar Cita & Pagar",
    secondaryCtaText: "Ver Procedimientos",
    heroImage: HeroPic,
    stats: [
      { label: "Pacientes Satisfechas", value: "+1,200" },
      { label: "Años de Experiencia", value: "8+" },
      { label: "Tratamientos Certificados", value: "100%" },
    ],
  },

  // Servicios / Procedimientos
  services: [
    {
      id: "botox",
      name: "Toxina Botulínica (Botox)",
      category: "Facial",
      shortDesc:
        "Atenúa líneas de expresión en frente, entrecejo y patas de gallo manteniendo tu gesticulación natural.",
      duration: "45 min",
      price: "$3,500 MXN",
      mpPaymentLink: "https://mpago.la/pos/botox-reserva",
      features: [
        "Efecto visible en 3-5 días",
        "Resultados duraderos de 4 a 6 meses",
        "Aplicación rápida y prácticamente indolora",
      ],
      icon: "Sparkles",
      image: BotoxPic,
    },
    {
      id: "rellenos",
      name: "Rellenos con Ácido Hialurónico",
      category: "Facial",
      shortDesc:
        "Restaura el volumen en labios, pómulos y surcos nasogenianos con hidratación profunda.",
      duration: "60 min",
      price: "$4,800 MXN",
      mpPaymentLink: "https://mpago.la/pos/rellenos-reserva",
      features: [
        "Definición y simetría facial",
        "Resultados inmediatos",
        "Sustancia 100% biocompatible y reabsorbible",
      ],
      icon: "Gem",
      image: AcidoPic,
    },
    {
      id: "hilos-tensores",
      name: "Hilos Tensores (Lifting Sin Cirugía)",
      category: "Facial",
      shortDesc:
        "Efecto tensor inmediato que estimula la producción natural de colágeno a mediano plazo.",
      duration: "60 min",
      price: "$6,500 MXN",
      mpPaymentLink: "https://mpago.la/pos/hilos-reserva",
      features: [
        "Reposicionamiento de tejidos flácidos",
        "Estimulación continua de colágeno",
        "Sin tiempo de inactividad quirúrgico",
      ],
      icon: "Activity",
      image: HilosPic,
    },
    {
      id: "laser-piel",
      name: "Tratamientos Láser para Piel",
      category: "Avanzado",
      shortDesc:
        "Renovación celular para atenuar manchas, cicatrices de acné, poros abiertos y textura irregular.",
      duration: "50 min",
      price: "$2,200 MXN",
      mpPaymentLink: "https://mpago.la/pos/laser-reserva",
      features: [
        "Unificación del tono cutáneo",
        "Estimulación profunda de la dermis",
        "Sesiones personalizadas según fototipo",
      ],
      icon: "Zap",
      image: LaserGallery,
    },
    {
      id: "eliminacion-vello-varices",
      name: "Eliminación de Vello y Varices",
      category: "Corporal & Vascular",
      shortDesc:
        "Tecnología de luz y láser para depilación definitiva y tratamiento no invasivo de arañitas vasculares.",
      duration: "45 min",
      price: "$1,800 MXN",
      mpPaymentLink: "https://mpago.la/pos/vello-varices-reserva",
      features: [
        "Reducción progresiva y permanente del vello",
        "Tratamiento efectivo de microvarices y arañitas",
        "Sistema de enfriamiento para mayor confort",
      ],
      icon: "Feather",
      image: PiernasPic,
    },
  ],

  // Galería Antes y Después
  gallery: [
    {
      id: 1,
      treatment: "Relleno de Labios",
      beforeImg:
        "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=500",
      afterImg:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=500",
      description: "Perfilado y volumen sutil con 1ml de ácido hialurónico.",
    },
    {
      id: 2,
      treatment: "Toxina Botulínica en Frente",
      beforeImg:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500",
      afterImg:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500",
      description:
        "Suavizado de líneas de expresión dinámicas a los 14 días post-aplicación.",
    },
    {
      id: 3,
      treatment: "Láser para Arañitas Vasculares",
      beforeImg:
        "https://images.unsplash.com/photo-1512290900673-05041a3d6f1c?auto=format&fit=crop&q=80&w=500",
      afterImg:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=500",
      description:
        "Atenuación de capilares tras 2 sesiones de tratamiento láser.",
    },
  ],

  // About Me
  aboutMe: {
    name: "Dra. Valeria Munguía",
    role: "Especialista en Cosmetología Médica & Armonización Facial",
    bio: "Con más de 8 años en la industria de la medicina estética, mi enfoque se basa en realzar la belleza propia de cada paciente sin alterar sus rasgos distintivos. Me especializo en protocolos personalizados de rejuvenecimiento cutáneo y técnicas de minima invasión con estándares internacionales de seguridad.",
    credentials: [
      "Médico Cirujano (Céd. Prof. 8473920)",
      "Master en Medicina Estética y Cosmetología",
      "Certificación Internacional en Aplicación de Toxina Botulínica y Hilos Tensores",
    ],
    image: PerfilPic,
  },

  // Pasarela & Pago (Mercado Pago)
  payment: {
    title: "Reserva Tu Valoración o Procedimiento",
    subtitle:
      "Asegura tu horario agendando en el calendario y realizando tu anticipo/pago de forma 100% segura mediante Mercado Pago.",
    mpDepositAmount: "$500 MXN",
    depositNote:
      "El costo abonado en línea se descuenta del total de tu procedimiento el día de tu cita.",
    acceptedMethods: [
      "Tarjetas de Crédito/Débito",
      "Transferencia SPEI",
      "Efectivo (OXXO)",
      "Mercado Pago Wallet",
    ],
    directPaymentLink: "https://mpago.la/pos/reserva-general-cosmetologia",
  },

  // Reseñas / Testimonios
  reviews: [
    {
      id: 1,
      name: "Sofía R.",
      rating: 5,
      comment:
        "Los resultados del Botox en la frente quedaron súper naturales. Me daba mucho miedo quedar rígida, pero la Dra. Valeria entendió perfecto lo que buscaba.",
      treatment: "Toxina Botulínica",
    },
    {
      id: 2,
      name: "Mariana G.",
      rating: 5,
      comment:
        "Llevaba tiempo queriendo eliminar el vello y varices en las piernas. Llevo 3 sesiones con el láser y el cambio es brutal. La atención es de diez.",
      treatment: "Láser & Varices",
    },
    {
      id: 3,
      name: "Camila V.",
      rating: 5,
      comment:
        "Súper fácil agendar en la página y pagar con Mercado Pago. Llegué al consultorio y todo estaba listo a mi hora. Los hilos tensores me dejaron la piel increíble.",
      treatment: "Hilos Tensores",
    },
  ],

  // Preguntas Frecuentes (FAQ)
  faq: [
    {
      question: "¿Los procedimientos generan incapacidad?",
      answer:
        "La mayoría de nuestros tratamientos son ambulatorios y de mínima invasión, lo que significa que puedes reincorporarte a tu rutina diaria inmediatamente después de la sesión.",
    },
    {
      question: "¿Cómo funciona el proceso de reserva y pago con Mercado Pago?",
      answer:
        "Puedes seleccionar tu horario disponible en nuestro calendario interactivo de Cal.com y posteriormente completar tu anticipo o pago total con el botón de Mercado Pago. Tu cita quedará confirmada automáticamente.",
    },
    {
      question: "¿Los tratamientos con láser duelan?",
      answer:
        "Utilizamos sistemas de refrigeración integrada de última generación para minimizar las molestias. La sensación es totalmente tolerable para la gran mayoría de los pacientes.",
    },
    {
      question: "¿Puedo cancelar o reagendar mi cita?",
      answer:
        "Sí, puedes reagendar sin costo notificando con al menos 24 horas de anticipación a través del enlace de Cal.com o por WhatsApp.",
    },
  ],

  // Footer
  footer: {
    address: "Av. Universidad 1200, Col. Zapopan Centro, Zapopan, Jal.",
    schedule: "Lun - Vie: 10:00 AM - 7:00 PM | Sáb: 10:00 AM - 3:00 PM",
    phone: "+52 (33) 0000-0000",
    email: "contacto@dravaleriamunguia.com",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      whatsapp: "https://wa.me/523300000000",
    },
    copyright: "© 2026 Dra. Valeria Munguía. Todos los derechos reservados.",
  },
};
