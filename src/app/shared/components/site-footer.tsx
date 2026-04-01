/* eslint-disable @next/next/no-img-element */

const INSTAGRAM_URL =
  "https://www.instagram.com/santorostore.oficial?igsh=MTRvY2FqN3BiazY4MQ%3D%3D&utm_source=qr";
const TIKTOK_URL =
  "https://www.tiktok.com/@santorostore.oficial?_r=1&_t=ZS-953EhWIXaEx";

export function SiteFooter() {
  return (
    <footer className="bg-white py-12 border-t border-zinc-100 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold tracking-tighter">SANTORO COLOMBIA</div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-zinc-500 items-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/tiktok.svg" alt="TikTok" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Políticas
          </a>
        </div>
        <div className="text-xs md:text-sm text-zinc-400 text-center md:text-right">
          SANTORO: Envíos a toda Colombia.
          <br />© 2024 SANTORO. Developed with ❤️ by Engineers.
        </div>
      </div>
    </footer>
  );
}
