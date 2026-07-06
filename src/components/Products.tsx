import Image from "next/image";

const am = [
  {
    name: "EasyOut",
    tagline: "Split expenses and plan trips.\nNo awkward 'you owe me' texts.",
    icon: <Image src="/easyout-logo.png" alt="EasyOut" width={48} height={48} className="rounded-xl" />,
    href: "#",
  },
  {
    name: "Repilot",
    tagline: "Your workout log and coach.",
    icon: <Image src="/repilot-icon.png" alt="Repilot" width={48} height={48} className="rounded-xl" />,
    href: "https://apps.apple.com/us/app/repilot/id6775357927",
  },
  {
    name: "Dance",
    tagline: "Find dance classes and studios\nnear you.",
    icon: <Image src="/dance-icon.png" alt="Dance" width={48} height={48} className="rounded-xl" />,
    href: "#",
  },
];

const pm = [
  {
    name: "Become: Habit Builder",
    tagline: "Build habits that stick.\nBecome who you want to be.",
    icon: <Image src="/become-icon.png" alt="Become" width={48} height={48} className="rounded-xl" />,
    href: "#",
  },
];

function ProductCard({ name, tagline, icon, href }: { name: string; tagline: string; icon: React.ReactNode; href: string | null }) {
  return (
    <div className="bg-[#13131f] border border-white/5 rounded-2xl p-7 flex flex-col gap-5 hover:border-white/10 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center">
        {icon ?? <div className="w-12 h-12 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center"><div className="w-4 h-4 rounded-full border border-dashed border-white/40" /></div>}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-white/50 leading-relaxed whitespace-pre-line">{tagline}</p>
      </div>
      {href ? (
        <a href={href} className="mt-auto text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1">
          Learn more <span>&#8594;</span>
        </a>
      ) : (
        <span className="mt-auto text-sm text-white/20">Coming soon</span>
      )}
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-28 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Outward</p>
              <h2 className="text-2xl font-bold">AM</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {am.map((p) => <ProductCard key={p.name} {...p} />)}
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Inward</p>
              <h2 className="text-2xl font-bold">PM</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pm.map((p) => <ProductCard key={p.name} {...p} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
