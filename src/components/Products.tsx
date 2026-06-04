const am = [
  {
    name: "EasyOut",
    tagline: "Split expenses and plan trips.\nNo awkward 'you owe me' texts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H3" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Repilot",
    tagline: "Your workout log and coach.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
    href: "#",
  },
];

const pm = [
  {
    name: "Coming Soon",
    tagline: "Great things\nare on the way.",
    icon: null,
    href: null,
  },
];

function ProductCard({ name, tagline, icon, href }: { name: string; tagline: string; icon: React.ReactNode; href: string | null }) {
  return (
    <div className="bg-[#13131f] border border-white/5 rounded-2xl p-7 flex flex-col gap-5 hover:border-white/10 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-violet-600/80 flex items-center justify-center">
        {icon ?? <div className="w-6 h-6 rounded-full border-2 border-dashed border-white/40" />}
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
