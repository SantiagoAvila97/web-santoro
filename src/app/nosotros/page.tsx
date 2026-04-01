/* eslint-disable @next/next/no-img-element */
"use client";

import { ShieldCheck, Code2, Heart, Rocket } from "lucide-react";
import { SiteNavbar } from "../shared/components/site-navbar";
import { SiteFooter } from "../shared/components/site-footer";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-blue-200 overflow-x-hidden">
      <SiteNavbar />

      <section className="relative pt-28 md:pt-35 pb-16 md:pb-10 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="z-10 animate-fade-in-up text-center md:text-left">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4">
              SANTORO EXCLUSIVE - TECNOLOGÍA BOGOTÁ
            </h2>
            <div className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Sonido Puro <br />
              <span className="text-gray-400">Estilo Atemporal</span>
            </div>
            <p className="text-lg md:text-xl text-gray-500 mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
              Tecnología curada por expertos. Tu tienda de confianza para AirPods,
              Watchs y accesorios en Colombia.
            </p>
          </div>
          <div className="relative mt-12 md:mt-0">
            <div className="relative w-full h-full">
              <img
                src="/firma.png"
                alt="AirPods y Watch"
                className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
                draggable="false"
              />
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

      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden">
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

      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-black text-black">Síguenos</h3>
          <p className="mt-3 text-gray-500">
            Conoce lanzamientos, ofertas y contenido diario de Santoro.
          </p>
          <div className="mt-8 flex items-center justify-center gap-8">
            <a
              href="https://www.instagram.com/santorostore.oficial?igsh=MTRvY2FqN3BiazY4MQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <img src="/instagram.svg" alt="Instagram" className="w-10 h-10" />
            </a>
            <a
              href="https://www.tiktok.com/@santorostore.oficial?_r=1&_t=ZS-953EhWIXaEx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <img src="/tiktok.svg" alt="TikTok" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

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
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
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
      `,
        }}
      />
    </div>
  );
}
