import { useState } from "react";

type BenefitHotspotProps = {
  style: React.CSSProperties;
  text: string;
};

export const BenefitHotspot = ({ style, text }: BenefitHotspotProps) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="absolute z-20"
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 border-dotted border-green-500 bg-white/70 flex items-center justify-center cursor-pointer transition-all duration-200 ${hover ? "scale-110 shadow-lg" : ""}`}
      >
        <span className="w-3 h-3 bg-green-500 rounded-full block"></span>
      </div>
      {hover && (
        <div
          className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-white text-green-700 font-bold px-5 py-3 rounded-2xl shadow-2xl border-2 border-green-400 border-dotted text-base whitespace-nowrap animate-fade-in-up"
          style={{ minWidth: 180 }}
        >
          {text}
        </div>
      )}
    </div>
  );
};
