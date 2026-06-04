import { Space_Grotesk, Syne, Outfit, Bebas_Neue } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });
const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["700", "800"] });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const fonts = [
  { label: "Space Grotesk", font: spaceGrotesk },
  { label: "Syne", font: syne },
  { label: "Outfit", font: outfit },
  { label: "Bebas Neue", font: bebasNeue },
];

export default function FontCompare() {
  return (
    <div className="min-h-screen bg-[#08080f] grid grid-cols-2 grid-rows-2 gap-px">
      {fonts.map(({ label, font }) => (
        <div key={label} className="relative flex flex-col justify-center px-12 py-10 overflow-hidden">
          {/* Aurora bg */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 w-[70%] h-full bg-gradient-to-bl from-violet-600/25 via-indigo-500/15 to-transparent blur-3xl" />
          </div>
          <p className="relative text-violet-400 text-xs font-medium mb-4 tracking-widest uppercase">{label}</p>
          <h1
            className={`relative text-4xl font-bold leading-tight tracking-tight text-white ${font.className}`}
          >
            Software For<br />Everyday Life
          </h1>
          <p className="relative mt-4 text-sm text-white/50 max-w-xs leading-relaxed">
            We build applications, websites, and AI-powered products that help people think, organize, create, and live better.
          </p>
        </div>
      ))}
    </div>
  );
}
