import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

function ProductCard({ slug, name, tagline, icon }: { slug: string; name: string; tagline: string; icon: string }) {
  return (
    <div className="bg-[#13131f] border border-white/5 rounded-2xl p-7 flex flex-col gap-5 hover:border-white/10 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center">
        <Image src={icon} alt={name} width={48} height={48} className="rounded-xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-white/50 leading-relaxed whitespace-pre-line">{tagline}</p>
      </div>
      <Link href={`/products/${slug}`} className="mt-auto text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1">
        Learn more <span>&#8594;</span>
      </Link>
    </div>
  );
}

export default function Products() {
  const am = products.filter((p) => p.group === "am");
  const pm = products.filter((p) => p.group === "pm");

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
            {am.map((p) => <ProductCard key={p.slug} {...p} />)}
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
            {pm.map((p) => <ProductCard key={p.slug} {...p} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
