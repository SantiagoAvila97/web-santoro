/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronRight,
  Menu,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";
import { redirectToWhatsapp } from "../functions/whatsapp";
import { useCart } from "../cart/context";

type NavItem = {
  name: string;
  href: string;
  target?: string;
};

type NavGroup = {
  name: string;
  id: string;
  href?: string;
  items?: NavItem[];
};

type SiteNavbarProps = {
  isHome?: boolean;
};

function isInternalRoute(href: string): boolean {
  return href.startsWith("/");
}

export function SiteNavbar({ isHome = false }: SiteNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { items, totalItems, subtotalLabel, removeItem, increaseQty, decreaseQty } =
    useCart();

  const sectionPrefix = isHome ? "" : "/";

  const navDropdowns: NavGroup[] = [
    {
      name: "Inicio",
      id: "inicio",
      href: "/",
    },
    {
      name: "AirPods",
      id: "airpods",
      items: [
        { name: "Pro 3", href: `${sectionPrefix}#airpods-pro-3` },
        { name: "Max", href: `${sectionPrefix}#airpods-max` },
        { name: "Serie 4", href: `${sectionPrefix}#airpods-4` },
        { name: "Pro 2", href: `${sectionPrefix}#airpods-pro` },
      ],
    },
    {
      name: "Relojes",
      id: "relojes",
      items: [
        { name: "Watch Series 10", href: `${sectionPrefix}#watch-10` },
        { name: "Accesorios", href: `${sectionPrefix}#accesorios` },
      ],
    },
    {
      name: "Nosotros",
      id: "nosotros",
      href: "/nosotros",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMobileScrollClose = () => {
      if (window.innerWidth >= 768) return;
      if (!isMenuOpen && !isCartOpen) return;

      setIsMenuOpen(false);
      setIsCartOpen(false);
      setOpenMobileDropdown(null);
    };

    window.addEventListener("scroll", handleMobileScrollClose, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleMobileScrollClose);
    };
  }, [isCartOpen, isMenuOpen]);

  const openCartOnWhatsapp = () => {
    const summary = items
      .map(
        (item) =>
          `- ${item.product.whatsappName} x${item.quantity} (${item.product.detailPrice})`,
      )
      .join("\n");

    redirectToWhatsapp(
      "Carrito Santoro",
      subtotalLabel,
      `Hola Santoro Store 🌐, quiero pedir lo siguiente:\n${summary}\n\nSubtotal estimado: ${subtotalLabel}`,
    );
  };

  const goToHomeTop = () => {
    setIsMenuOpen(false);
    setOpenMobileDropdown(null);
    setIsCartOpen(false);

    if (pathname !== "/") {
      router.push("/");
      return;
    }

    if (window.location.hash) {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderNavItem = (item: NavItem, onClick?: () => void) => {
    if (isInternalRoute(item.href) && item.target !== "_blank") {
      return (
        <Link
          key={item.name}
          href={item.href}
          onClick={onClick}
          className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer"
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        onClick={onClick}
        className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer"
        target={item.target || undefined}
        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {item.name}
      </a>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen || isCartOpen ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {isHome ? (
          <div
            className="text-xl md:text-2xl font-bold tracking-tighter text-black flex items-center cursor-pointer select-none"
            onClick={goToHomeTop}
            title="Ir al inicio"
          >
            <img
              src="/favicon.ico"
              alt="Santoro Logo"
              className="w-8 h-8 md:w-10 md:h-10"
              style={{ display: "inline-block" }}
              draggable="false"
            />
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent ml-1">
              SANTORO
            </span>
          </div>
        ) : (
          <button
            type="button"
            className="text-xl md:text-2xl font-bold tracking-tighter text-black flex items-center cursor-pointer select-none"
            onClick={goToHomeTop}
            title="Ir al inicio"
          >
            <img
              src="/favicon.ico"
              alt="Santoro Logo"
              className="w-8 h-8 md:w-10 md:h-10"
              style={{ display: "inline-block" }}
              draggable="false"
            />
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent ml-1">
              SANTORO
            </span>
          </button>
        )}

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navDropdowns.map((group) =>
            group.href ? (
              group.id === "inicio" ? (
                <button
                  key={group.name}
                  type="button"
                  onClick={goToHomeTop}
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {group.name}
                </button>
              ) : (
                <Link
                  key={group.name}
                  href={group.href}
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {group.name}
                </Link>
              )
            ) : (
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
                  {group.items?.map((item) => renderNavItem(item))}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setIsCartOpen((prev) => !prev)}
              className="cursor-pointer relative inline-flex items-center justify-center rounded-full border border-gray-300 bg-white p-2.5 text-gray-900 hover:bg-gray-50"
              aria-label="Abrir carrito"
              aria-expanded={isCartOpen}
            >
              <ShoppingCart size={18} />
              {totalItems > 0 && (
                <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>

            {isCartOpen && (
              <div className="absolute right-0 top-12 w-[360px] rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <p className="text-sm font-extrabold text-black">Tu carrito</p>
                  <p className="text-xs font-bold text-gray-500">
                    {totalItems} items
                  </p>
                </div>

                {items.length === 0 ? (
                  <p className="py-8 text-center text-sm font-medium text-gray-500">
                    Aun no agregas productos.
                  </p>
                ) : (
                  <div className="max-h-[320px] space-y-3 overflow-auto py-3">
                    {items.map((item) => (
                      <div
                        key={item.productId}
                        className="rounded-xl border border-gray-100 p-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-bold text-black">
                              {item.product.name}
                            </p>
                            <p className="text-xs font-semibold text-emerald-700">
                              {item.product.detailPrice}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.productId)}
                            className="cursor-pointer rounded-lg p-1 text-gray-400 hover:bg-red-50 hover:text-red-600"
                            aria-label={`Quitar ${item.product.name}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => decreaseQty(item.productId)}
                            className="cursor-pointer rounded-lg border border-gray-200 p-1.5 hover:bg-gray-50"
                            aria-label={`Disminuir cantidad de ${item.product.name}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-8 text-center text-sm font-bold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => increaseQty(item.productId)}
                            className="cursor-pointer rounded-lg border border-gray-200 p-1.5 hover:bg-gray-50"
                            aria-label={`Aumentar cantidad de ${item.product.name}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-2 border-t border-gray-100 pt-3">
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold">
                    <span>Subtotal</span>
                    <span>{subtotalLabel}</span>
                  </div>
                  <button
                    type="button"
                    onClick={openCartOnWhatsapp}
                    disabled={items.length === 0}
                    className="cursor-pointer w-full rounded-xl bg-black px-4 py-2.5 text-sm font-extrabold text-white disabled:cursor-not-allowed disabled:bg-gray-300  active:scale-[0.99] active:!bg-green-500 active:text-white"
                  >
                    Pedir carrito por WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => redirectToWhatsapp("Sin selección", "$0")}
            className="cursor-pointer hidden sm:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-200"
          >
            WhatsApp
          </button>
          <button
            type="button"
            className="cursor-pointer relative rounded-full border border-gray-300 bg-white p-2 md:hidden"
            onClick={() => {
              setIsMenuOpen(false);
              setIsCartOpen((prev) => !prev);
            }}
            aria-label="Abrir carrito"
            aria-expanded={isCartOpen}
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="p-2 md:hidden"
            onClick={() => {
              setIsCartOpen(false);
              setIsMenuOpen((prev) => !prev);
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isCartOpen && !isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 animate-fade-in">
          <div className="p-4">
            <div className="rounded-2xl border border-gray-100 p-4">
              <div className="flex w-full items-center justify-between">
                <span className="text-base font-bold">Carrito</span>
                <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-black px-2 py-0.5 text-xs font-bold text-white">
                  {totalItems}
                </span>
              </div>

              <div className="mt-3 space-y-3">
                {items.length === 0 ? (
                  <p className="text-sm text-gray-500">Aun no agregas productos.</p>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.productId}
                      className="rounded-xl border border-gray-100 p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-semibold">{item.product.name}</p>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId)}
                          className="rounded p-1 text-gray-500 hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => decreaseQty(item.productId)}
                          className="rounded border border-gray-200 p-1"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => increaseQty(item.productId)}
                          className="rounded border border-gray-200 p-1"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
                <div className="pt-2 text-sm font-semibold text-gray-700">
                  Subtotal: {subtotalLabel}
                </div>
                <button
                  type="button"
                  onClick={openCartOnWhatsapp}
                  disabled={items.length === 0}
                  className="w-full rounded-xl bg-black py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Pedir carrito por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            {navDropdowns.map((group) => (
              <div key={group.name} className="border-b border-gray-50 pb-2">
                {group.href ? (
                  group.id === "inicio" ? (
                    <button
                      type="button"
                      onClick={goToHomeTop}
                      className="w-full flex items-center justify-between text-lg font-medium py-1"
                    >
                      {group.name}
                    </button>
                  ) : (
                    <Link
                      href={group.href}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                      className="w-full flex items-center justify-between text-lg font-medium py-1"
                    >
                      {group.name}
                    </Link>
                  )
                ) : (
                  <>
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
                        className={`transition-transform ${openMobileDropdown === group.id ? "rotate-90" : ""}`}
                      />
                    </button>
                    {openMobileDropdown === group.id && (
                      <div className="mt-2 pl-3 flex flex-col gap-2">
                        {group.items?.map((item) =>
                          renderNavItem(item, () => {
                            setIsMenuOpen(false);
                            setOpenMobileDropdown(null);
                          }),
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <button
              onClick={() => redirectToWhatsapp("Sin selección", "$0")}
              className="bg-black text-white w-full py-4 rounded-2xl font-bold"
            >
              WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
