export default function Mission() {
  return (
    <section id="mission" className="py-28 bg-[#08080f]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div id="about">
          <p className="text-violet-400 text-sm font-medium mb-4">Our Belief</p>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Own your life.<br />Not be owned by it.
          </h2>
          <p className="text-white/50 leading-relaxed">
            Less managing. More living.
          </p>
        </div>
        <div id="contact" className="flex flex-col items-start md:items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-violet-500/50 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-violet-400" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">Let&apos;s build something great.</h3>
          <a
            href="mailto:contactus@vowrd.com"
            className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2 text-sm"
          >
            contactus@vowrd.com <span>&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
