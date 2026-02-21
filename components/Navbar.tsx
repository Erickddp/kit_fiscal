"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <span className="text-black font-black text-xl tracking-tighter">ED</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold tracking-[-0.02em] leading-none">EDDP</span>
                        <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em] leading-none mt-1">Systems</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#contenido" className="text-xs font-bold text-primary-muted hover:text-white uppercase tracking-widest transition-colors">Contenido</Link>
                    <Link href="/sistemas/filosofia-tecnica" className="text-xs font-bold text-primary-muted hover:text-white uppercase tracking-widest transition-colors">Biblioteca</Link>
                    <Link href="#asesoria" className="text-xs font-bold text-primary-muted hover:text-white uppercase tracking-widest transition-colors">Asesoría</Link>
                    <Link href="#faq" className="text-xs font-bold text-primary-muted hover:text-white uppercase tracking-widest transition-colors">FAQ</Link>
                    <a
                        href="#hero"
                        className="px-5 py-2.5 bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-lg hover:shadow-glow active:scale-95 transition-all"
                    >
                        Adquirir KIT
                    </a>
                </div>
            </div>
        </nav>
    );
}
