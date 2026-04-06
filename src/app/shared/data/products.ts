export type ProductCatalogItem = {
  id: string;
  anchorId: string;
  name: string;
  price: string;
  detailPrice: string;
  whatsappName: string;
  delivery: string;
  benefits: string[];
  pitch: string;
  ctaLabel: string;
};

export const PRODUCTS: ProductCatalogItem[] = [
  {
    id: "catalog-airpods-pro-3",
    anchorId: "airpods-pro-3",
    name: "✨ AirPods Pro 3",
    price: "💰 $155.000",
    detailPrice: "$155.000 COP",
    whatsappName: "AirPods Pro 3",
    delivery: "📍 Entrega hoy mismo en Bogotá y pago contra entrega",
    benefits: [
      "Cancelación de ruido 2.0",
      "Chip H3 de última generación",
      "Audio Lossless Pro",
      "Carga rápida para todo el día",
      "Garantía directa Santoro 🔒",
    ],
    pitch:
      "La opción premium para quienes quieren sonar diferente desde el primer uso.",
    ctaLabel: "Comprar AirPods Pro 3",
  },
  {
    id: "catalog-airpods-max",
    anchorId: "airpods-max",
    name: "🎵 AirPods Max",
    price: "💰 $165.000",
    detailPrice: "$165.000 COP",
    whatsappName: "AirPods Max",
    delivery: "📍 Entrega inmediata y pago contra entrega",
    benefits: [
      "Sonido envolvente 360°",
      "Diseño premium tipo diadema",
      "Almohadillas cómodas por horas",
      "Batería de larga duración",
      "Acople magnético profesional",
    ],
    pitch: "Ideales para trabajar, producir o disfrutar música con estilo total.",
    ctaLabel: "Comprar AirPods Max",
  },
  {
    id: "catalog-airpods-4-a",
    anchorId: "airpods-4",
    name: "🚀 AirPods Serie 4",
    price: "💰 $110.000",
    detailPrice: "$110.000 COP",
    whatsappName: "AirPods Serie 4",
    delivery: "📍 Envío express y pago contra entrega",
    benefits: [
      "Sonido claro y potente",
      "Diseño ligero y cómodo",
      "Conexión rápida con iPhone y Android",
      "Excelente opción calidad/precio",
      "Perfectos para uso diario",
    ],
    pitch: "Un best seller para regalar o renovar tus audífonos sin gastar de más.",
    ctaLabel: "Comprar AirPods Serie 4",
  },
  {
    id: "catalog-airpods-pro-2",
    anchorId: "airpods-pro",
    name: "🎧 AirPods Pro 2",
    price: "💰 $100.000",
    detailPrice: "$100.000 COP",
    whatsappName: "AirPods Pro 2",
    delivery: "📍 Entrega inmediata y pago contra entrega",
    benefits: [
      "Cancelación de ruido activa 🔇",
      "Modo ambiente 🌎",
      "Excelente calidad de sonido 🎶",
      "Ajuste cómodo con almohadillas",
      "Buena duración de batería 🔋",
    ],
    pitch: "Perfectos para concentrarte, viajar o usarlos en el gym 👌",
    ctaLabel: "Comprar AirPods Pro 2",
  },
  {
    id: "catalog-watch-serie-10",
    anchorId: "watch-10",
    name: "⌚ Apple Watch Serie 10",
    price: "💰 $165.000",
    detailPrice: "$165.000 COP",
    whatsappName: "Apple Watch Serie 10",
    delivery: "📍 Entrega inmediata y pago contra entrega",
    benefits: [
      "Pantalla OLED amplia y brillante",
      "Monitoreo avanzado de salud",
      "Diseño premium ultraligero",
      "Ideal para deporte y productividad",
      "Garantía directa Santoro",
    ],
    pitch:
      "El smartwatch ideal para quien busca estilo, rendimiento y salud en una sola pieza.",
    ctaLabel: "Comprar Watch Serie 10",
  },
  {
    id: "catalog-accesorios-premium",
    anchorId: "accesorios",
    name: "🔌 Accesorios Premium",
    price: "💬 Precio variable",
    detailPrice: "Precio según referencia",
    whatsappName: "Accesorios Premium",
    delivery: "📍 Entrega inmediata y pago contra entrega",
    benefits: [
      "Cargadores y cables de alta calidad",
      "Cases premium para iPhone",
      "Compatibles con ecosistema Apple",
      "Asesoría para elegir el accesorio ideal",
    ],
    pitch: "Cotiza el accesorio y recibe recomendación personalizada.",
    ctaLabel: "Cotizar Accesorios",
  },
];
