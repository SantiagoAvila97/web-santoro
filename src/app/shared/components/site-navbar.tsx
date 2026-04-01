/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { redirectToWhatsapp } from "../functions/whatsapp";

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

  const sectionPrefix = isHome ? "" : "/";

  const navDropdowns: NavGroup[] = [
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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {isHome ? (
          <div
            className="text-xl md:text-2xl font-bold tracking-tighter text-black flex items-center cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
          <Link
            className="text-xl md:text-2xl font-bold tracking-tighter text-black flex items-center cursor-pointer select-none"
            href="/"
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
          </Link>
        )}

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navDropdowns.map((group) =>
            group.href ? (
              <Link
                key={group.name}
                href={group.href}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {group.name}
              </Link>
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
          <button
            onClick={() => redirectToWhatsapp("Sin selección", "$0")}
            className="cursor-pointer hidden sm:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-200"
          >
            WhatsApp
          </button>
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            {navDropdowns.map((group) => (
              <div key={group.name} className="border-b border-gray-50 pb-2">
                {group.href ? (
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
