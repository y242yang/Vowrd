import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeatureIconBadge from "@/components/FeatureIcon";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1 pt-40 pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/#products" className="text-sm text-white/40 hover:text-white/70 transition-colors">
            &#8592; Back to products
          </Link>

          <div className="flex items-center gap-5 mt-8 mb-6">
            <Image src={product.icon} alt={product.name} width={64} height={64} className="rounded-2xl" />
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              {product.status === "coming-soon" && (
                <span className="text-sm text-white/30">Coming soon</span>
              )}
            </div>
          </div>

          <p className="text-white/60 text-lg leading-relaxed whitespace-pre-line">{product.description}</p>

          {product.features && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {product.features.map((f) => (
                <div key={f.title} className="bg-[#13131f] border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
                  <FeatureIconBadge icon={f.icon} />
                  <div>
                    <h3 className="text-sm font-semibold mb-1">{f.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10">
            {product.status === "live" && product.storeUrl ? (
              <a
                href={product.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-medium rounded-full px-6 py-3 transition-colors"
              >
                Get {product.name} <span>&#8594;</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 border border-white/10 text-white/40 text-sm font-medium rounded-full px-6 py-3">
                Coming soon
              </span>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
