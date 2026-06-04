export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Aurora gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[70%] h-full">
          <div className="absolute inset-0 bg-gradient-to-bl from-violet-600/30 via-indigo-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-0 w-full h-1/2 bg-gradient-to-l from-purple-500/20 via-blue-400/10 to-transparent blur-2xl" />
          {/* Arc line effect */}
          <svg
            className="absolute inset-0 w-full h-full opacity-60"
            viewBox="0 0 800 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                <stop offset="40%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M 800 0 Q 200 400 0 800"
              stroke="url(#arcGrad)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 800 80 Q 250 450 50 800"
              stroke="url(#arcGrad)"
              strokeWidth="0.8"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight max-w-5xl">
          Software For<br /><span className="md:pl-96">Everyday Life</span>
        </h1>
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#products"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
          >
            Explore Products
            <span>&#8594;</span>
          </a>
          <a
            href="#mission"
            className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
