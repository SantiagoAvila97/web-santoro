"use client";
import React, { useState, useEffect } from "react";
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
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "AirPods Pro 2", href: "#airpods-pro" },
    { name: "AirPods 4", href: "#airpods-4" },
    { name: "Watch Series 10", href: "#watch-10" },
    { name: "Accesorios", href: "#accesorios" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-blue-200 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold tracking-tighter text-black flex items-center gap-2">
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              SANTORO
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
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
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
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

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-44 pb-16 md:pb-32 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="z-10 animate-fade-in-up text-center md:text-left">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4">
              SANTORO EXCLUSIVE
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Sonido Puro. <br />
              <span className="text-gray-400">Estilo Atemporal.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
              Tecnología curada por expertos. La combinación perfecta entre
              rendimiento y lujo para tus dispositivos.
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
            <div className="animate-float relative z-10 flex justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-b from-white to-gray-200 rounded-[2rem] sm:rounded-3xl shadow-2xl flex items-center justify-center transform -rotate-12 border border-white">
                <Headphones
                  size={100}
                  strokeWidth={1}
                  className="text-gray-400 sm:w-[120px]"
                />
                <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center rotate-12 border border-gray-100">
                  <Watch
                    size={60}
                    strokeWidth={1}
                    className="text-gray-400 sm:w-[80px]"
                  />
                </div>
              </div>
            </div>
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
            <div className="relative group max-w-sm mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-blue-500/20 blur-[60px] md:blur-[100px] rounded-full"></div>
              <div className="relative bg-gradient-to-br from-zinc-800 to-black p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-700/50 shadow-2xl">
                <Headphones
                  size={150}
                  strokeWidth={0.5}
                  className="mx-auto text-zinc-400 md:w-[200px]"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-[10px] font-bold px-3 py-1 rounded-full">
                  PRO
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:flex-1 order-1 md:order-2 text-center md:text-left">
            <span className="text-blue-400 font-semibold text-sm md:text-lg tracking-wider">
              AIRPODS PRO 2
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
            <div className="relative group animate-float max-w-sm mx-auto md:max-w-none">
              <div className="bg-gradient-to-tr from-gray-50 to-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-gray-100">
                <Headphones
                  size={130}
                  strokeWidth={0.8}
                  className="mx-auto text-gray-300 md:w-[180px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:flex-1 text-center md:text-left">
            <span className="text-gray-400 font-semibold text-sm md:text-lg tracking-wider uppercase">
              Nuevos AirPods 4
            </span>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 mt-2 text-black">
              Ajuste icónico. <br />
              Sonido épico.
            </h2>
            <p className="text-base md:text-xl text-gray-500 mb-8 max-w-md mx-auto md:mx-0">
              Rediseñados para una comodidad inigualable. La nueva referencia del
              audio estándar.
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

      {/* NEW SECTION: Apple Watch Series 10 */}
      <section
        id="watch-10"
        className="py-16 md:py-24 bg-gradient-to-b from-[#f5f5f7] to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-black font-semibold text-sm md:text-lg tracking-widest uppercase">
              Apple Watch Series 10
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
              <div className="relative animate-float-delayed">
                {/* Placeholder for Watch Image */}
                <div className="w-[280px] h-[340px] md:w-[350px] md:h-[420px] bg-zinc-900 rounded-[3.5rem] border-[8px] border-zinc-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex items-center justify-center p-2 relative overflow-hidden">
                  <div className="w-full h-full rounded-[2.8rem] bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center text-white p-6">
                    <span className="text-xs font-bold mb-2 text-white/50">
                      SANTORO 10:09
                    </span>
                    <Watch size={100} strokeWidth={1} className="text-white/80" />
                    <div className="mt-4 flex gap-2">
                      <div className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-blue-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              Nuestra esencia
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
            mejor que la vida puede ofrecer a través de la tecnología. En SANTORO
            curamos experiencias tecnológicas que nosotros mismos usaríamos.
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
                desc: "Estamos aquí para elevar tu estilo de vida digital.",
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

      {/* Essentials (Bento Grid) */}
      <section id="accesorios" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              SANTORO Essentials
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-2">
              Carga y protección certificada por ingenieros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* MagSafe Card */}
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
                    Alineación magnética perfecta para tu iPhone.
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

            {/* Power Delivery Card */}
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
                  Cubo de carga rápida estándar. 0 a 50% en 30 min.
                </p>
              </div>
              <button className="text-black font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6 text-sm">
                Lo necesito <ChevronRight size={18} />
              </button>
            </div>

            {/* Cases Card */}
            <div className="sm:col-span-2 md:col-span-3 bg-[#f5f5f7] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-gray-200 flex flex-col md:flex-row items-center gap-8 group">
              <div className="flex-1 text-center md:text-left w-full">
                <span className="text-blue-600 font-bold text-xs uppercase">
                  Protección
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
          <div className="text-2xl font-bold tracking-tighter">SANTORO</div>
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
            Enviamos a toda Colombia. Entregas hoy mismo en Bogotá.
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
      `,
        }}
      />
    </div>
  );
};

export default App;
