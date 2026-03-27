/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Zap,
  Headphones,
  Watch,
  CheckCircle2,
  Battery,
  Smartphone,
  Code2,
  Heart,
  Rocket,
  Activity,
  Monitor,
  Music,
  Bluetooth,
  Shield,
  Volume2,
  Waves,
  Sparkles,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<
    "airpods" | "relojes" | null
  >(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // --- LÓGICA SEO DINÁMICA ---
    document.title =
      "SANTORO | AirPods Pro 2, Apple Watch y Tecnología Premium Colombia";

    // Meta Description para buscadores
    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "SANTORO: La mejor selección de AirPods Pro 2, AirPods 4 y Apple Watch Series 10 en Bogotá. Calidad 1.1 premium, garantía real y envíos express a toda Colombia.";
    document.head.appendChild(metaDesc);

    // Keywords (Aunque Google ya no las usa tanto, otros buscadores sí)
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "SANTORO, AirPods Pro 2 Bogotá, Apple Watch Series 10 Colombia, AirPods 4, tecnología premium, audífonos bluetooth, smartwatch Colombia";
    document.head.appendChild(metaKeywords);

    // JSON-LD (Datos Estructurados para aparecer con info de producto en Google)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Store",
      name: "SANTORO",
      description: "Tienda premium de AirPods, Watches y accesorios de tecnología.",
      image: "https://tu-sitio.com/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bogotá",
        addressCountry: "CO",
      },
      url: typeof window !== "undefined" ? window.location.href : "",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Catálogo Tecnológico",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: "AirPods Pro 2 Premium" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: "Apple Watch Series 10" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: "AirPods 4" },
          },
        ],
      },
    });
    document.head.appendChild(script);

    // --- MANEJO DE SCROLL ---
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (document.head.contains(metaDesc)) document.head.removeChild(metaDesc);
      if (document.head.contains(metaKeywords))
        document.head.removeChild(metaKeywords);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const navDropdowns = [
    {
      name: "AirPods",
      id: "airpods" as const,
      items: [
        { name: "Serie 4", href: "#airpods-4" },
        { name: "Pro 2", href: "#airpods-pro" },
        { name: "Pro 3", href: "#airpods-pro-3" },
        { name: "Max", href: "#airpods-max" },
      ],
    },
    {
      name: "Relojes",
      id: "relojes" as const,
      items: [{ name: "Watch Series 10", href: "#watch-10" }],
    },
  ];

  const navLinks = [
    { name: "Accesorios", href: "#accesorios" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  const comparisonData = [
    {
      feature: "Cancelación de Ruido",
      airpods4: "No",
      pro2: "Activa (ANC)",
      pro3: "ANC 2.0 Pro",
      max: "Premium ANC",
    },
    {
      feature: "Chip de Audio",
      airpods4: "H2",
      pro2: "H2",
      pro3: "H3 (Nuevo)",
      max: "H1 (Dual)",
    },
    {
      feature: "Autonomía (Caja)",
      airpods4: "30 hrs",
      pro2: "30 hrs",
      pro3: "36 hrs",
      max: "20 hrs",
    },
    {
      feature: "Audio Espacial",
      airpods4: "Personalizado",
      pro2: "Personalizado",
      pro3: "Dinámico 360°",
      max: "Cinematográfico",
    },
    {
      feature: "Resistencia IP",
      airpods4: "IP54",
      pro2: "IP54",
      pro3: "IPX8 (Total)",
      max: "N/A",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-blue-200 overflow-x-hidden">
      {/* Marcado oculto para SEO de alto nivel (H1 prioritario) */}
      <h1 className="sr-only">
        SANTORO - Los mejores AirPods Pro 2, AirPods 4 y Apple Watch en Bogotá,
        Colombia
      </h1>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold tracking-tighter text-black flex items-center">
            <img
              src="/favicon.ico"
              alt="Santoro Logo"
              className="w-8 h-8 md:w-10 md:h-10"
              style={{ display: "inline-block" }}
              draggable="false"
            />
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              SANTORO
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navDropdowns.map((group) => (
              <div
                key={group.name}
                className="relative group"
                tabIndex={0}
                onMouseEnter={(e) => {
                  const dropdown = e.currentTarget.querySelector(".dropdown-menu");
                  if (dropdown) dropdown.classList.add("show");
                }}
                onMouseLeave={(e) => {
                  const dropdown = e.currentTarget.querySelector(".dropdown-menu");
                  if (dropdown) dropdown.classList.remove("show");
                }}
              >
                <button
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer focus:outline-none"
                  style={{ cursor: "pointer" }}
                  tabIndex={-1}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {group.name}
                  <ChevronRight
                    size={14}
                    className="rotate-90 group-hover:translate-y-[1px] transition-transform"
                  />
                </button>
                <div
                  className="dropdown-menu pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 absolute left-0 top-8 w-44 rounded-xl border border-gray-100 bg-white shadow-xl p-2 z-50"
                  style={{ pointerEvents: "auto" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.classList.add("show");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.classList.remove("show");
                  }}
                >
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer"
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden sm:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-200">
              Comprar Ahora
            </button>
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 animate-fade-in">
            <div className="flex flex-col p-6 space-y-4">
              {navDropdowns.map((group) => (
                <div key={group.name} className="border-b border-gray-50 pb-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown((prev) =>
                        prev === group.id ? null : group.id,
                      )
                    }
                    className="w-full flex items-center justify-between text-lg font-medium py-1"
                  >
                    {group.name}
                    <ChevronRight
                      size={18}
                      className={`transition-transform ${
                        openMobileDropdown === group.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === group.id && (
                    <div className="mt-2 pl-3 flex flex-col gap-2">
                      {group.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenMobileDropdown(null);
                          }}
                          className="text-base text-gray-700 py-1"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setOpenMobileDropdown(null);
                  }}
                  className="text-lg font-medium border-b border-gray-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-black text-white w-full py-4 rounded-2xl font-bold">
                Comprar Ahora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Video Home - Full width, loop, responsive */}
      <div className="w-full h-[100dvh] md:h-screen overflow-hidden relative">
        <video
          id="hero-video"
          className="
      absolute top-1/2 left-1/2
      min-w-[100dvh] min-h-[100vw]
      -translate-x-1/2 -translate-y-1/2
      -rotate-90

      md:static md:translate-x-0 md:translate-y-0
      md:rotate-0
      md:w-full md:h-full
      md:min-w-0 md:min-h-0

      object-cover
    "
          src="/0327.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Ajuste de velocidad de reproducción del video */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              var vid = document.getElementById('hero-video');
              if (vid) vid.playbackRate = 1.3;
            });
          `,
          }}
        />
      </div>
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-44 pb-16 md:pb-32 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="z-10 animate-fade-in-up text-center md:text-left">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4">
              SANTORO EXCLUSIVE - TECNOLOGÍA BOGOTÁ
            </h2>
            <div className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Sonido Puro. <br />
              <span className="text-gray-400">Estilo Atemporal.</span>
            </div>
            <p className="text-lg md:text-xl text-gray-500 mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
              Tecnología curada por expertos. Tu tienda de confianza para AirPods Pro
              2, AirPods 4 y Apple Watch en Colombia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 sm:px-0">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:gap-4 transition-all">
                Ver Colección <ChevronRight size={20} />
              </button>
              <button className="border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
                Saber más
              </button>
            </div>
          </div>
          <div className="relative mt-12 md:mt-0">
            <img
              src="/airpods-watch.png"
              alt="AirPods y Watch"
              className="object-contain w-full h-full select-none pointer-events-none"
              draggable="false"
            />

            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-10 scale-125 sm:scale-150 text-gray-400"
            >
              <path
                fill="currentColor"
                d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.6,-0.9C84,14,77.5,27.9,68.9,40.1C60.3,52.3,49.5,62.8,36.9,69.5C24.3,76.2,9.9,79.1,-4,86C-17.9,92.9,-35.8,103.8,-50.2,100.2C-64.6,96.6,-75.5,78.5,-82.7,60.9C-89.9,43.3,-93.4,26.2,-91.1,10.1C-88.8,-6.1,-80.7,-21.3,-71.4,-34.7C-62.1,-48.1,-51.6,-59.7,-39,-67.4C-26.4,-75.1,-11.7,-78.9,2.1,-82.5C15.9,-86.1,29.8,-83.6,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: AirPods Pro 3 (EXCLUSIVOS) */}
      <section
        id="airpods-pro-3"
        className="py-16 md:py-32 bg-black text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="w-full md:flex-1">
            <div className="relative group max-w-sm mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
              <div className="relative bg-gradient-to-b from-neutral-900 to-black p-10 md:p-8 rounded-[3rem] border border-neutral-800 flex items-center justify-center">
                <div className="relative">
                  <div className="order-1 md:order-2 flex justify-center items-center relative">
                    <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100/50 rounded-full blur-[80px] -z-10 animate-pulse"></div>
                    <img
                      src="/airpods-3.png"
                      alt="AirPods y Watch"
                      className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
                      draggable="false"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-blue-600 p-2 rounded-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    <Sparkles size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-1 rounded-full border border-blue-500 text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-6">
              Lanzamiento Exclusivo
            </span>
            <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
              AirPods Pro 3. <br />
              <span className="block text-2xl md:text-4xl font-semibold text-gray-300 mt-2">
                Silencio maestro.
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-neutral-400 mb-10 max-w-lg mx-auto md:mx-0">
              Cancelación de ruido 2.0 y chip H3 para una fidelidad que no habías
              escuchado antes en Colombia.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12 max-w-sm mx-auto md:mx-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <Waves size={20} className="text-blue-500" />
                </div>
                <span className="text-sm font-medium">ANC Inteligente</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <Zap size={20} className="text-yellow-500" />
                </div>
                <span className="text-sm font-medium">Carga Ultra</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <Shield size={20} className="text-green-500" />
                </div>
                <span className="text-sm font-medium">Garantía Apple</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <Volume2 size={20} className="text-purple-500" />
                </div>
                <span className="text-sm font-medium">Lossless Audio</span>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-neutral-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Reservar AirPods Pro 3
            </button>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Diademas Magnético Pro Max */}
      <section
        id="airpods-max"
        className="py-16 md:py-28 bg-gray-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-0">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              La máxima expresión del sonido
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-black uppercase tracking-tighter">
              Magnético Pro Max
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mt-4 font-medium max-w-2xl mx-auto">
              Un diseño circumaural completamente reimaginado. El equilibrio perfecto
              entre sonido de alta fidelidad y la magia de los AirPods.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-0">
            <div className="w-full md:w-[35%] order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl shadow-sm border border-gray-100 transition-hover hover:shadow-md">
                  <div className="bg-black text-white p-4 rounded-2xl">
                    <Music size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">Malla Acústica</h3>
                    <p className="text-gray-600">
                      Tejido de punto diseñado a medida para distribuir el peso y
                      reducir la presión.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl shadow-sm border border-gray-100 transition-hover hover:shadow-md">
                  <div className="bg-blue-600 text-white p-4 rounded-2xl">
                    <Bluetooth size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      Acople Magnético
                    </h3>
                    <p className="text-gray-600">
                      Almohadillas de espuma viscoelástica con diseño acústico que se
                      ajustan por magnetismo.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                      Colores de Temporada
                    </span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Disponibles
                    </span>
                  </div>
                  <div className="flex gap-5">
                    <div className="group flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">
                        Espacial
                      </span>
                    </div>
                    <div className="group flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">
                        Plata
                      </span>
                    </div>
                    <div className="group flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">
                        Cielo
                      </span>
                    </div>
                    <div className="group flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">
                        Menta
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[65%] order-1 md:order-2">
              <div className="relative group">
                {/* Representación visual artística de los auriculares de diadema */}
                <div className="order-1 md:order-2 flex justify-center items-center relative">
                  <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100/50 rounded-full blur-[80px] -z-10 animate-pulse"></div>
                  <img
                    src="/diaema.png"
                    alt="AirPods y Watch"
                    className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
                    draggable="false"
                  />
                </div>
                {/* Badge de Precio o Acción */}
                <div className="absolute -bottom-0 -right-6 bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-100 -rotate-2 flex flex-col items-center">
                  <span className="block text-blue-600 text-[10px] font-black uppercase tracking-tighter mb-1">
                    Oferta Bogotá
                  </span>
                  <span className="text-3xl font-black text-black leading-none">
                    $160.000 COP
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold mt-1">
                    Envío Hoy
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-15 text-center">
            <div className="inline-flex flex-col items-center">
              <button className="bg-black text-white px-20 py-6 rounded-[2rem] font-bold hover:bg-neutral-800 transition-all text-xl shadow-2xl flex items-center gap-4 group">
                Comprar Magnético Pro Max
                <div className="bg-blue-600 rounded-full p-1 group-hover:rotate-12 transition-transform">
                  <Zap size={18} className="fill-white text-white" />
                </div>
              </button>
              <p className="mt-4 text-gray-400 text-sm font-medium italic">
                Disponibilidad inmediata en tienda física y online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Benefits - Responsive Grid */}
      <section
        id="beneficios"
        className="bg-white py-12 md:py-20 border-y border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: <Zap className="text-yellow-500" />,
              title: "Carga Rápida",
              desc: "20W Power Delivery",
            },
            {
              icon: <ShieldCheck className="text-blue-500" />,
              title: "Garantía",
              desc: "Soporte SANTORO",
            },
            {
              icon: <CheckCircle2 className="text-green-500" />,
              title: "1.1 Premium",
              desc: "Calidad inigualable",
            },
            {
              icon: <ShoppingCart className="text-purple-500" />,
              title: "Envío Express",
              desc: "Bogotá hoy / Nacional",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-2 sm:p-4 transition-transform active:scale-95"
            >
              <div className="mb-3 md:mb-4 p-3 bg-gray-50 rounded-2xl scale-90 md:scale-100">
                {item.icon}
              </div>
              <h3 className="font-bold text-sm md:text-lg whitespace-nowrap">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[10px] md:text-sm mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlight: AirPods Pro 2 */}
      <section
        id="airpods-pro"
        className="py-16 md:py-24 bg-[#000] text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:flex-1 order-2 md:order-1">
            <div className="w-full md:flex-1">
              <img
                src="/airpods-2.png"
                alt="AirPods y Watch"
                className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
                draggable="false"
              />
            </div>
          </div>
          <div className="w-full md:flex-1 order-1 md:order-2 text-center md:text-left">
            <span className="text-blue-400 font-semibold text-sm md:text-lg tracking-wider">
              AIRPODS PRO 2 - SANTORO
            </span>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 mt-2 leading-tight">
              Inmersión absoluta.
            </h2>
            <ul className="space-y-4 md:space-y-6 text-left max-w-md mx-auto md:mx-0">
              <li className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg mt-1 shrink-0">
                  <Zap size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl">
                    Cancelación Inteligente
                  </h4>
                  <p className="text-zinc-400 text-sm md:text-base">
                    Silencia el mundo exterior con un toque.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg mt-1 shrink-0">
                  <Battery size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl">
                    Batería de larga duración
                  </h4>
                  <p className="text-zinc-400 text-sm md:text-base">
                    Hasta 30 horas con estuche MagSafe.
                  </p>
                </div>
              </li>
            </ul>
            <button className="mt-8 md:mt-10 w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all active:scale-95">
              Lo quiero ahora
            </button>
          </div>
        </div>
      </section>

      {/* AirPods 4 */}
      <section
        id="airpods-4"
        className="py-16 md:py-24 bg-white overflow-hidden border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="w-full md:flex-1">
            <img
              src="/serie-4.png"
              alt="AirPods y Watch"
              className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
              draggable="false"
            />
          </div>
          <div className="w-full md:flex-1 text-center md:text-left">
            <span className="text-gray-400 font-semibold text-sm md:text-lg tracking-wider uppercase">
              Nuevos AirPods 4 Colombia
            </span>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 mt-2 text-black">
              Ajuste icónico. <br />
              Sonido épico.
            </h2>
            <p className="text-base md:text-xl text-gray-500 mb-8 max-w-md mx-auto md:mx-0">
              Rediseñados para una comodidad inigualable. La nueva referencia de
              AirPods en Bogotá.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold">Audio Espacial</span>
                <span className="text-gray-400 text-[10px] md:text-sm">
                  Personalizado
                </span>
              </div>
              <div className="h-10 w-[1px] bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold">Resistente</span>
                <span className="text-gray-400 text-[10px] md:text-sm">
                  Agua y sudor
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full font-bold hover:opacity-80 transition-all shadow-lg">
              Comprar AirPods 4
            </button>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Beneficios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-gray-50">
              <Shield className="mx-auto mb-4 text-green-500" size={32} />
              <h4 className="font-bold mb-2">Garantía Local</h4>
              <p className="text-sm text-gray-500">
                Soporte directo en Bogotá y principales ciudades.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <Zap className="mx-auto mb-4 text-yellow-500" size={32} />
              <h4 className="font-bold mb-2">Envío Express</h4>
              <p className="text-sm text-gray-500">
                Recibe tus AirPods el mismo día en tu domicilio.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <Sparkles className="mx-auto mb-4 text-blue-500" size={32} />
              <h4 className="font-bold mb-2">Original 100%</h4>
              <p className="text-sm text-gray-500">
                Productos sellados con serial verificable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Cuadro Comparativo */}
      <section className="py-20 bg-white pb-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Compara los modelos
            </h2>
            <p className="text-gray-500">
              Encuentra los AirPods perfectos para tu estilo de vida en Colombia.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Característica
                  </th>
                  <th className="p-6 text-xl font-bold text-blue-600">Pro 3 👑</th>
                  <th className="p-6 text-xl font-bold text-black">Max</th>
                  <th className="p-6 text-xl font-bold text-black">Serie 4</th>
                  <th className="p-6 text-xl font-bold text-black">Pro 2</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 font-bold text-gray-900">{row.feature}</td>
                    <td className="p-6 text-blue-700 font-bold">{row.pro3}</td>
                    <td className="p-6 text-gray-600">{row.airpods4}</td>
                    <td className="p-6 text-gray-600 font-medium">{row.pro2}</td>
                    <td className="p-6 text-gray-600">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section
        id="nosotros"
        className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full mb-6 md:mb-8">
            <Code2 size={16} className="text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              SANTORO: Nuestra esencia
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-8 leading-tight">
            Ingenieros con <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Amor por la Tecnología.
            </span>
          </h2>
          <p className="text-base md:text-xl text-zinc-400 leading-relaxed mb-10 md:mb-12">
            Nacimos como desarrolladores de software con una obsesión: buscar lo
            mejor en AirPods y Apple Watch para Colombia. En SANTORO curamos
            experiencias tecnológicas que nosotros mismos usaríamos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-left">
            {[
              {
                icon: <Heart className="text-red-400" />,
                title: "Pasión Pura",
                desc: "Amamos cada línea de código y cada circuito bien diseñado.",
              },
              {
                icon: <Rocket className="text-blue-400" />,
                title: "Visión 1.1",
                desc: "Solo traemos productos premium que superan nuestros estándares.",
              },
              {
                icon: <ShieldCheck className="text-green-400" />,
                title: "Compromiso Real",
                desc: "Elevando el estilo de vida digital en Colombia.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-6 md:p-8 bg-zinc-800/50 rounded-2xl md:rounded-3xl border border-zinc-700/50 hover:bg-zinc-800 transition-colors"
              >
                <div className="mb-4">{card.icon}</div>
                <h4 className="text-lg md:text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-zinc-500 text-xs md:text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Apple Watch Series 10 */}
      <section
        id="watch-10"
        className="py-16 md:py-24 bg-gradient-to-b from-[#f5f5f7] to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-black font-semibold text-sm md:text-lg tracking-widest uppercase">
              Apple Watch Series 10 - SANTORO Store
            </span>
            <h2 className="text-4xl md:text-7xl font-extrabold mt-4 mb-6 tracking-tight">
              Más delgado. <br />
              <span className="text-gray-400">Y más brillante.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Monitor className="text-blue-500 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-2">Pantalla OLED Ampliada</h3>
                <p className="text-gray-500">
                  Un área de visualización más grande en el diseño más fino jamás
                  creado para un Watch.
                </p>
              </div>
              <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Activity className="text-red-500 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-2">Salud de Vanguardia</h3>
                <p className="text-gray-500">
                  Notificaciones de apnea del sueño y seguimiento avanzado de
                  actividad diaria.
                </p>
              </div>
              <button className="w-full bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-3">
                Explorar Series 10 <ChevronRight size={20} />
              </button>
            </div>

            <div className="order-1 md:order-2 flex justify-center items-center relative">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100/50 rounded-full blur-[80px] -z-10 animate-pulse"></div>
              <img
                src="/watch.png"
                alt="AirPods y Watch"
                className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Essentials (Bento Grid) */}
      <section id="accesorios" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              SANTORO Essentials
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-2">
              Carga MagSafe y protección para iPhone certificada por expertos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="sm:col-span-2 bg-gradient-to-br from-gray-900 to-zinc-800 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="bg-blue-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    Indispensable
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-4">
                    Carga MagSafe Pro
                  </h3>
                  <p className="text-zinc-400 mt-2 max-w-xs text-sm md:text-base">
                    Alineación magnética perfecta para tu iPhone en Bogotá.
                  </p>
                </div>
                <button className="mt-8 bg-white text-black font-bold py-3 px-8 rounded-full w-full sm:w-fit hover:bg-blue-500 hover:text-white transition-all">
                  Comprar
                </button>
              </div>
              <Zap
                size={200}
                className="absolute -right-10 -bottom-10 text-white/5 group-hover:text-blue-500/10 transition-colors duration-700 hidden sm:block"
              />
            </div>

            <div className="bg-zinc-100 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group hover:bg-zinc-200 transition-colors border border-gray-100 shadow-sm">
              <div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Battery
                    size={24}
                    strokeWidth={1.5}
                    className="text-black md:w-8"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  Cargador 20W PD
                </h3>
                <p className="text-zinc-500 mt-2 text-sm">
                  Carga rápida estándar en Colombia. 0 a 50% en 30 min.
                </p>
              </div>
              <button className="text-black font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6 text-sm">
                Lo necesito <ChevronRight size={18} />
              </button>
            </div>

            <div className="sm:col-span-2 md:col-span-3 bg-[#f5f5f7] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-gray-200 flex flex-col md:flex-row items-center gap-8 group">
              <div className="flex-1 text-center md:text-left w-full">
                <span className="text-blue-600 font-bold text-xs uppercase">
                  Protección iPhone Bogotá
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  Silicon Cases Premium
                </h3>
                <p className="text-gray-500 mt-2 text-sm md:text-base">
                  Acabado suave al tacto y protección interna de microfibra.
                </p>
                <div className="mt-6 flex gap-4 justify-center md:justify-start">
                  <div className="w-6 h-6 rounded-full bg-black shadow-inner border border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-blue-900 shadow-inner border border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-zinc-400 shadow-inner border border-white"></div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-gray-100 group-hover:rotate-3 transition-transform">
                <Smartphone size={50} className="text-zinc-300 md:w-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-zinc-100 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter">SANTORO COLOMBIA</div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-black transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-black transition-colors">
              WhatsApp
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Políticas
            </a>
          </div>
          <div className="text-xs md:text-sm text-zinc-400 text-center md:text-right">
            SANTORO: Tienda de AirPods Pro y Apple Watch. Envíos a toda Colombia.
            <br />© 2024 SANTORO. Developed with ❤️ by Engineers.
          </div>
        </div>
      </footer>

      {/* Styles for Custom Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-8deg); }
        }
        @keyframes hero-float {
          0% {
            transform: translateY(0) scale(1) rotate(-10deg);
            box-shadow: 0 10px 40px 0 rgba(0,0,0,0.10);
          }
          20% {
            transform: translateY(-8px) scale(1.03) rotate(-12deg);
            box-shadow: 0 20px 60px 0 rgba(0,0,0,0.13);
          }
          50% {
            transform: translateY(-18px) scale(1.04) rotate(-8deg);
            box-shadow: 0 30px 80px 0 rgba(0,0,0,0.16);
          }
          80% {
            transform: translateY(-8px) scale(1.03) rotate(-12deg);
            box-shadow: 0 20px 60px 0 rgba(0,0,0,0.13);
          }
          100% {
            transform: translateY(0) scale(1) rotate(-10deg);
            box-shadow: 0 10px 40px 0 rgba(0,0,0,0.10);
          }
        }
        .animate-hero-float {
          animation: hero-float 4.5s cubic-bezier(0.4,0.1,0.6,0.9) infinite;
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        @keyframes watch-bounce {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-10px); }
          50% { transform: translateY(-22px); }
          80% { transform: translateY(-10px); }
        }
        .animate-watch-bounce {
          animation: watch-bounce 3.5s cubic-bezier(0.4,0.1,0.6,0.9) infinite;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `,
        }}
      />
    </div>
  );
};

export default App;
