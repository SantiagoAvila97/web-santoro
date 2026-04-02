/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  ChevronRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Battery,
  Smartphone,
  Activity,
  Monitor,
  Music,
  Shield,
  Volume2,
  Waves,
  Sparkles,
  MagnetIcon,
} from "lucide-react";
import { BenefitHotspot } from "./shared/functions/benefit";
import { redirectToWhatsapp } from "./shared/functions/whatsapp";
import { SiteNavbar } from "./shared/components/site-navbar";
import { SiteFooter } from "./shared/components/site-footer";
import { useCart } from "./shared/cart/context";
import { PRODUCTS, type ProductCatalogItem } from "./shared/data/products";

const App = () => {
  const [catalogPage, setCatalogPage] = useState(0);
  const [isMobileCatalog, setIsMobileCatalog] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastAnimKey, setToastAnimKey] = useState(0);
  const toastTimeoutRef = useRef<number | null>(null);
  const { addItem } = useCart();

  const CATALOG_PAGE_SIZE = isMobileCatalog ? 1 : 3;
  const catalogPages: ProductCatalogItem[][] = [];
  for (let index = 0; index < PRODUCTS.length; index += CATALOG_PAGE_SIZE) {
    catalogPages.push(PRODUCTS.slice(index, index + CATALOG_PAGE_SIZE));
  }
  const totalCatalogPages = catalogPages.length;
  const safeCatalogPage = Math.min(catalogPage, Math.max(totalCatalogPages - 1, 0));

  const isCatalogSlider = PRODUCTS.length > CATALOG_PAGE_SIZE;
  const pro3Product = PRODUCTS.find(
    (product) => product.anchorId === "airpods-pro-3",
  );
  const maxProduct = PRODUCTS.find((product) => product.anchorId === "airpods-max");
  const pro2Product = PRODUCTS.find((product) => product.anchorId === "airpods-pro");
  const airpods4Product = PRODUCTS.find(
    (product) => product.anchorId === "airpods-4",
  );
  const watchProduct = PRODUCTS.find((product) => product.anchorId === "watch-10");
  const accessoriesProduct = PRODUCTS.find(
    (product) => product.anchorId === "accesorios",
  );

  const goToCatalogPage = (index: number) => {
    if (totalCatalogPages === 0) return;
    setCatalogPage(
      ((index % totalCatalogPages) + totalCatalogPages) % totalCatalogPages,
    );
  };

  const handleAddToCart = (productId: string) => {
    addItem(productId);
    const product = PRODUCTS.find((item) => item.id === productId);
    setToastMessage(product?.name ?? "Producto");
    setToastAnimKey((current) => current + 1);
    setToastVisible(true);

    if (toastTimeoutRef.current !== null) {
      window.clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = window.setTimeout(() => {
      setToastVisible(false);
    }, 1800);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current !== null) {
        window.clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleCatalogViewport = () => {
      setIsMobileCatalog(mediaQuery.matches);
    };

    handleCatalogViewport();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleCatalogViewport);
    } else {
      mediaQuery.addListener(handleCatalogViewport);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleCatalogViewport);
      } else {
        mediaQuery.removeListener(handleCatalogViewport);
      }
    };
  }, []);

  useEffect(() => {
    document.title = "SANTORO";

    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "SANTORO: La mejor selección de AirPods Pro 2, AirPods 4 y Apple Watch Series 10 en Bogotá. Calidad 1.1 premium, garantía real y envíos express a toda Colombia.";
    document.head.appendChild(metaDesc);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "SANTORO, AirPods Pro 2 Bogotá, Apple Watch Series 10 Colombia, AirPods 4, tecnología premium, audífonos bluetooth, smartwatch Colombia";
    document.head.appendChild(metaKeywords);

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

    return () => {
      if (document.head.contains(metaDesc)) document.head.removeChild(metaDesc);
      if (document.head.contains(metaKeywords))
        document.head.removeChild(metaKeywords);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-blue-200 overflow-x-hidden">
      {/* Marcado oculto para SEO de alto nivel (H1 prioritario) */}
      <h1 className="sr-only">
        SANTORO - Los mejores AirPods, Apple Watch y accesorios en Colombia
      </h1>

      {/* Navigation */}
      <SiteNavbar isHome />

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

      <section className="relative py-14 md:py-20 px-4 bg-gradient-to-b from-[#f5f5f7] to-white md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-xs md:text-sm font-bold tracking-wider uppercase">
              Catálogo Santoro
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-[#101010]">
              Elige hoy, recibe hoy
            </h2>
            <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Selecciona tu favorito y pide por WhatsApp en segundos. Todos con
              entrega inmediata y pago contra entrega.
            </p>
          </div>

          {isCatalogSlider ? (
            <div className="max-w-7xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${safeCatalogPage * 100}%)` }}
                >
                  {catalogPages.map((catalogPageItems, pageIndex) => (
                    <div
                      key={`catalog-page-${pageIndex}`}
                      className="w-full shrink-0 px-1"
                    >
                      <div className="flex flex-col md:flex-row md:flex-wrap md:items-stretch md:justify-center gap-5 md:gap-6">
                        {catalogPageItems.map((product, productIndex) => (
                          <article
                            key={`${product.id}-${pageIndex}-${productIndex}`}
                            className="h-full min-h-[630px] md:min-h-[750px] w-full md:flex-none md:w-[calc((100%-3rem)/3)] rounded-3xl border border-gray-200 bg-white p-12  transition-shadow flex flex-col justify-between"
                          >
                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-extrabold leading-tight text-black">
                                {product.name}
                              </h3>

                              <p className="mt-4 text-2xl font-black text-emerald-700">
                                {product.price}
                              </p>
                              <p className="mt-2 text-sm font-semibold text-gray-600">
                                {product.delivery}
                              </p>

                              <ul className="mt-5 space-y-2.5 text-sm text-gray-800">
                                {product.benefits.map((benefit) => (
                                  <li
                                    key={benefit}
                                    className="flex items-start gap-2 leading-relaxed"
                                  >
                                    <CheckCircle2
                                      size={16}
                                      className="mt-0.5 text-emerald-600 shrink-0"
                                    />
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>

                              <p className="mt-5 text-sm text-gray-700 font-medium">
                                {product.pitch}
                              </p>
                            </div>

                            <div className="mt-6">
                              <a
                                href={`#${product.anchorId}`}
                                className="flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white py-3 px-4 text-sm font-extrabold text-gray-800 hover:bg-gray-100 transition-colors"
                              >
                                Ver más detalles
                              </a>

                              <button
                                type="button"
                                onClick={() => handleAddToCart(product.id)}
                                className="cursor-pointer mt-3 w-full rounded-2xl border border-black bg-white py-3 px-4 text-sm font-extrabold tracking-wide text-black hover:bg-gray-50 active:scale-[0.99] transition-all"
                              >
                                Agregar al carrito
                              </button>

                              <button
                                onClick={() =>
                                  redirectToWhatsapp(
                                    product.whatsappName,
                                    product.detailPrice,
                                  )
                                }
                                className="cursor-pointer mt-3 w-full rounded-2xl bg-black text-white py-3.5 px-4 text-sm font-extrabold tracking-wide hover:bg-neutral-800 active:scale-[0.99] active:!bg-green-500 active:text-white transition-all"
                              >
                                {product.ctaLabel}
                              </button>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => goToCatalogPage(safeCatalogPage - 1)}
                  className="cursor-pointer rounded-full border border-gray-300 bg-white p-2.5 text-gray-700 hover:bg-gray-100"
                  aria-label="Página anterior"
                >
                  <ChevronRight size={16} className="rotate-180" />
                </button>
                {catalogPages.map((_, index) => (
                  <button
                    key={`catalog-page-dot-${index}`}
                    type="button"
                    aria-label={`Ir a la página ${index + 1}`}
                    onClick={() => goToCatalogPage(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      index === safeCatalogPage ? "bg-black w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => goToCatalogPage(safeCatalogPage + 1)}
                  className="cursor-pointer rounded-full border border-gray-300 bg-white p-2.5 text-gray-700 hover:bg-gray-100"
                  aria-label="Página siguiente"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
              {PRODUCTS.map((product) => (
                <article
                  key={product.id}
                  className="h-full min-h-[560px] md:min-h-[620px] rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_15px_45px_-30px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_55px_-30px_rgba(0,0,0,0.55)] transition-shadow flex flex-col justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-extrabold leading-tight text-black">
                      {product.name}
                    </h3>

                    <p className="mt-4 text-2xl font-black text-emerald-700">
                      {product.price}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-gray-600">
                      {product.delivery}
                    </p>

                    <ul className="mt-5 space-y-2.5 text-sm text-gray-800">
                      {product.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 leading-relaxed"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 text-emerald-600 shrink-0"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 text-sm text-gray-700 font-medium">
                      {product.pitch}
                    </p>
                  </div>

                  <div className="mt-6">
                    <a
                      href={`#${product.anchorId}`}
                      className="flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white py-3 px-4 text-sm font-extrabold text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      Ver más detalles
                    </a>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product.id)}
                      className="cursor-pointer mt-3 w-full rounded-2xl border border-black bg-white py-3 px-4 text-sm font-extrabold tracking-wide text-black hover:bg-gray-50 active:scale-[0.99] transition-all"
                    >
                      Agregar al carrito
                    </button>

                    <button
                      onClick={() =>
                        redirectToWhatsapp(product.whatsappName, product.detailPrice)
                      }
                      className="cursor-pointer mt-3 w-full rounded-2xl bg-black text-white py-3.5 px-4 text-sm font-extrabold tracking-wide hover:bg-neutral-800 active:scale-[0.99] active:!bg-green-500 active:text-white transition-all"
                    >
                      {product.ctaLabel}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NUEVA SECCIÓN: AirPods Pro 3 (EXCLUSIVOS) */}
      <section
        id="airpods-pro-3"
        className="py-12 md:py-20 bg-black text-white overflow-hidden md:px-10"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-14">
          <div className="w-full md:flex-1">
            <div className="relative group max-w-sm mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
              <div className="relative bg-gradient-to-b from-neutral-900 to-black p-10 md:p-8 rounded-[3rem] border border-neutral-800 flex items-center justify-center">
                <div className="relative">
                  <div className="order-1 md:order-2 flex justify-center items-center relative">
                    <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100/50 rounded-full blur-[80px] -z-10 animate-pulse"></div>
                    <div className="relative w-full h-full">
                      <img
                        src="/airpods-3.png"
                        alt="AirPods y Watch"
                        className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
                        draggable="false"
                      />
                      {/* Hotspots */}
                      <BenefitHotspot
                        style={{ top: "30%", left: "25%" }}
                        text="Cancelación de ruido 2.0 🎶"
                      />
                      <BenefitHotspot
                        style={{ top: "55%", left: "61%" }}
                        text="Chip H3 de última generación 🌎"
                      />
                      <BenefitHotspot
                        style={{ top: "35%", left: "80%" }}
                        text="Audio Lossless Pro 🔇"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-blue-600 p-2 rounded-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    <Sparkles size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-1 rounded-full border border-blue-500 text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
              Lanzamiento Exclusivo
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-2 text-white leading-tight">
              AIRPODS PRO 3
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-lg mx-auto md:mx-0">
              Cancelación de ruido 2.0 para una experiencia que no habías escuchado
              antes.
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
                <span className="text-sm font-medium">Carga rápida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <Shield size={20} className="text-green-500" />
                </div>
                <span className="text-sm font-medium">Garantía 3 meses</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <Volume2 size={20} className="text-purple-500" />
                </div>
                <span className="text-sm font-medium">Sonido VIP</span>
              </div>
            </div>

            <button
              onClick={() => {
                redirectToWhatsapp(
                  pro3Product?.whatsappName ?? "AirPods Pro 3",
                  pro3Product?.detailPrice ?? "$140.000 COP",
                );
              }}
              className="cursor-pointer w-full sm:w-auto bg-white text-black px-10 py-3 rounded-2xl border font-black text-lg hover:bg-neutral-200 active:bg-green-500 active:text-white transition-all transform hover:scale-96 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              {pro3Product?.ctaLabel ?? "Comprar AirPods Pro 3"}
            </button>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Diademas Magnético Pro Max */}
      <section
        id="airpods-max"
        className="py-12 md:py-20 bg-gray-50 overflow-hidden md:px-10"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="text-center mb-0">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              La máxima expresión del sonido
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-black uppercase tracking-tighter">
              AirPods Max
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mt-4 font-medium max-w-2xl mx-auto">
              Un diseño acústico completamente reimaginado. El equilibrio perfecto
              entre sonido de alta fidelidad y la magia de los AirPods.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-0">
            <div className="w-full md:w-[40%] order-2 md:order-1">
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
                    <MagnetIcon size={28} />
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

            <div className="w-full md:w-[60%] order-1 md:order-2">
              <div className="relative group">
                {/* Representación visual artística de los auriculares de diadema */}
                <div className="order-1 md:order-2 flex justify-center items-center relative">
                  <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100/50 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                  <div className="relative w-full h-full">
                    <img
                      src="/diaema.png"
                      alt="AirPods y Watch"
                      className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
                      draggable="false"
                    />
                    {/* Hotspots */}
                    <BenefitHotspot
                      style={{ top: "50%", left: "25%" }}
                      text="Sonido envolvente 360° 🔥"
                    />
                    <BenefitHotspot
                      style={{ top: "65%", left: "61%" }}
                      text="Batería de larga duración 🔋"
                    />
                    <BenefitHotspot
                      style={{ top: "15%", left: "50%" }}
                      text="Diseño premium y cómodo 🎶"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-3 text-center">
            <div className="inline-flex flex-col items-center">
              <button
                onClick={() => {
                  redirectToWhatsapp(
                    maxProduct?.whatsappName ?? "AirPods Max",
                    maxProduct?.detailPrice ?? "$150.000 COP",
                  );
                }}
                className="cursor-pointer w-full sm:w-auto bg-black text-white px-12 py-4 rounded-full font-bold hover:bg-neutral-800 active:bg-green-500 active:text-white transition-all text-lg shadow-2xl flex items-center gap-3 group transform hover:scale-96 rounded-xl"
              >
                {maxProduct?.ctaLabel ?? "Comprar AirPods Max"}
                <div className="bg-blue-600 rounded-full p-1 group-hover:rotate-12 transition-transform">
                  <Zap size={18} className="fill-white text-white" />
                </div>
              </button>
              <p className="mt-4 text-gray-400 text-sm font-medium italic">
                Disponibilidad inmediata en tienda online.
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
              desc: "Para todo el día",
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
        className="py-10 md:py-15 bg-[#000] text-white overflow-hidden md:px-10"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:flex-1 order-2 md:order-1">
            <div className="w-full md:flex-1">
              <div className="relative w-full h-full">
                <img
                  src="/airpods-2.png"
                  alt="AirPods y Watch"
                  className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
                  draggable="false"
                />
                {/* Hotspots */}
                <BenefitHotspot
                  style={{ top: "50%", left: "25%" }}
                  text="Cancelación de ruido inteligente 🔇"
                />
                <BenefitHotspot
                  style={{ top: "55%", left: "61%" }}
                  text="Modo transparencia adaptativo 🌎"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:flex-1 order-1 md:order-2 text-center md:text-left">
            <span className="inline-block px-4 py-1 rounded-full border border-blue-500 text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
              Inmersión absoluta
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
              AIRPODS PRO 2
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-lg mx-auto md:mx-0">
              Cancelación de ruido y nitidez premium para tu rutina diaria.
            </p>
            <ul className="space-y-4 md:space-y-6 text-left max-w-md mx-auto md:mx-0">
              <li className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg shrink-0">
                  <Zap size={20} className="text-yellow-400" />
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
                  <Battery size={20} className="text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl">
                    Batería de larga duración
                  </h4>
                  <p className="text-zinc-400 text-sm md:text-base">
                    Hasta 30 horas con estuche.
                  </p>
                </div>
              </li>
            </ul>

            <button
              onClick={() => {
                redirectToWhatsapp(
                  pro2Product?.whatsappName ?? "AirPods Pro 2",
                  pro2Product?.detailPrice ?? "$100.000 COP",
                );
              }}
              className="cursor-pointer mt-6 w-full sm:w-auto bg-white text-black px-10 py-3 rounded-2xl border font-black text-lg hover:bg-neutral-200 active:bg-green-500 active:text-white transition-all transform hover:scale-96 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              {pro2Product?.ctaLabel ?? "Comprar AirPods Pro 2"}
            </button>
          </div>
        </div>
      </section>

      {/* AirPods 4 */}
      <section
        id="airpods-4"
        className="py-12 md:py-20 md:px-10 bg-white overflow-hidden border-b border-gray-100"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="w-full md:flex-1">
            <div className="relative w-full h-full">
              <img
                src="/serie-4.png"
                alt="AirPods y Watch"
                className="object-contain w-[80%] h-[8  0%] mx-auto select-none pointer-events-none animate-watch-bounce"
                draggable="false"
              />
              {/* Hotspots */}
              <BenefitHotspot
                style={{ top: "15%", left: "47%" }}
                text="Audio espacial mejorado 🔇"
              />
              <BenefitHotspot
                style={{ top: "70%", left: "47%" }}
                text="Conexión rápida y estable ⚡"
              />
            </div>
          </div>
          <div className="w-full md:flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-1 rounded-full border border-blue-500 text-blue-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
              Ajuste icónico - Sonido épico
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-2 text-black leading-tight">
              AIRPODS GEN 4
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
              Rediseñados para una comodidad inigualable. La referencia preferido por
              los Colombianos.
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

            <button
              onClick={() => {
                redirectToWhatsapp(
                  airpods4Product?.whatsappName ?? "AirPods Serie 4",
                  airpods4Product?.detailPrice ?? "$90.000 COP",
                );
              }}
              className="cursor-pointer mt-6 w-full sm:w-auto bg-black text-white px-10 py-3 rounded-2xl border border-black font-black text-lg hover:bg-neutral-800 transition-all shadow-lg transform hover:scale-96 active:bg-green-500 active:text-white"
            >
              {airpods4Product?.ctaLabel ?? "Comprar AirPods Serie 4"}
            </button>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Beneficios */}
      <section className="py-14 md:py-16 bg-white pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mt-1 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
              <h4 className="font-bold mb-2">Calidad 1.1</h4>
              <p className="text-sm text-gray-500">
                Productos sellados con garantía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Cuadro Comparativo */}
      {/* <section className="py-20 bg-white pb-30">
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
      </section> */}

      {/* NEW SECTION: Apple Watch Series 10 */}
      <section
        id="watch-10"
        className="py-12 md:py-0 bg-gradient-to-b from-[#f5f5f7] to-white overflow-hiddenpd-200 mt-20 md:px-10"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="text-center mb-5 md:mb-6">
            <span className="inline-block px-4 py-1 rounded-full border border-blue-500 text-blue-600 font-bold text-xs md:text-sm tracking-widest uppercase">
              Más delgado <span className="text-gray-400">Y más brillante</span>
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-2 tracking-tight">
              WATCH SERIE 10
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Diseño premium, métricas de salud avanzadas y batería para acompañarte
              todo el día.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="order-2 md:order-1 space-y-5">
              <div className="p-6 md:p-7 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold">Pantalla OLED Ampliada</h3>
                  <Monitor className="text-blue-500 shrink-0" size={32} />
                </div>
                <p className="text-gray-500">
                  Un área de visualización más grande en el diseño más fino jamás
                  creado para un Watch.
                </p>
              </div>
              <div className="p-6 md:p-7 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold">Salud de Vanguardia</h3>
                  <Activity className="text-red-500 shrink-0" size={32} />
                </div>
                <p className="text-gray-500">
                  Notificaciones de apnea del sueño y seguimiento avanzado de
                  actividad diaria.
                </p>
              </div>

              <button
                onClick={() => {
                  redirectToWhatsapp(
                    watchProduct?.whatsappName ?? "Apple Watch Serie 10",
                    watchProduct?.detailPrice ?? "$165.000 COP",
                  );
                }}
                className="cursor-pointer mt-15 w-full bg-black text-white px-10 py-3 rounded-2xl border border-black font-black text-lg hover:bg-neutral-800 transition-all flex items-center justify-center transform hover:scale-96 active:bg-green-500 active:text-white"
              >
                {watchProduct?.ctaLabel ?? "Comprar Watch Serie 10"}
              </button>
            </div>

            <div className="order-1 md:order-2 flex justify-center items-center relative">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100/50 rounded-full blur-[80px] -z-10 animate-pulse"></div>

              <div className="relative w-full h-full">
                <img
                  src="/watch.png"
                  alt="AirPods y Watch"
                  className="object-contain w-full h-full select-none pointer-events-none animate-watch-bounce"
                  draggable="false"
                />
                {/* Hotspots */}
                <BenefitHotspot
                  style={{ top: "10%", left: "47%" }}
                  text="Monitoreo avanzado de salud ❤️"
                />
                <BenefitHotspot
                  style={{ top: "30%", left: "75%" }}
                  text="Pantalla más grande y brillante 🔋"
                />
                <BenefitHotspot
                  style={{ top: "70%", left: "47%" }}
                  text="Notificaciones en tiempo real 📲"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essentials (Bento Grid) */}
      <section id="accesorios" className="py-12 md:py-20 bg-white md:px-10">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <span className="inline-block px-4 py-1 rounded-full border border-blue-500 text-blue-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
              Línea Premium
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              SANTORO Accesorios
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mt-2 max-w-3xl mx-auto md:mx-0">
              Accesorios de calidad para complementar tu experiencia tecnológica.
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
                <button
                  onClick={() => {
                    redirectToWhatsapp(
                      accessoriesProduct?.whatsappName ?? "Accesorios Premium",
                      accessoriesProduct?.detailPrice ?? "Precio según referencia",
                    );
                  }}
                  className="cursor-pointer mt-8 w-full sm:w-auto bg-white text-black px-10 py-3 rounded-2xl border font-black text-lg hover:bg-neutral-200 active:bg-green-500 active:text-white transition-all transform hover:scale-96 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  {accessoriesProduct?.ctaLabel ?? "Cotizar Accesorios"}
                </button>
              </div>
              <Zap
                size={200}
                className="absolute -right-10 -bottom-10 text-white/5 group-hover:text-blue-500/10 transition-colors duration-700 hidden sm:block"
              />
            </div>

            <div className="bg-zinc-100 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group transition-colors border border-gray-100 shadow-sm">
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
              {/* <button className="text-black font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6 text-sm">
                Lo necesito <ChevronRight size={18} />
              </button> */}
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

      <SiteFooter />

      <div
        className={`pointer-events-none fixed bottom-4 right-4 z-[70] transition-all duration-300 md:bottom-6 md:right-6 ${toastVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
        aria-live="polite"
      >
        <div
          key={toastAnimKey}
          className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-white shadow-2xl"
        >
          <p className="text-sm font-extrabold">Agregado al carrito</p>
          <p className="text-xs text-gray-300">{toastMessage ?? " "}</p>
        </div>
      </div>

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
