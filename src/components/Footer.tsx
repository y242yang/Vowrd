import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#08080f] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/vowrd-logo.png" alt="Vowrd" width={24} height={24} className="rounded-sm" />
            <span className="font-semibold text-white">Vowrd</span>
          </div>
          <span className="text-white/30 text-sm">&copy; 2026 Vowrd LLC. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          <a href="#contact" className="hover:text-white/70 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
