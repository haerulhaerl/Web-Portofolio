import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border-subtle glass"
    >
      <div className="text-xl font-bold tracking-tighter text-glow">
        HAERUL.<span className="text-accent">DEV</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase opacity-70">
        <a href="#about" className="hover:text-accent hover:opacity-100 transition-all cursor-pointer">Tentang</a>
        <a href="#projects" className="hover:text-accent hover:opacity-100 transition-all cursor-pointer">Proyek</a>
        <a href="#skills" className="hover:text-accent hover:opacity-100 transition-all cursor-pointer">Skill</a>
      </div>
      <a 
        href="https://wa.me/62822938766568"
        className="px-4 py-2 text-xs font-bold uppercase tracking-widest border border-accent text-accent hover:bg-accent hover:text-white transition-all rounded-sm"
        target="_blank"
        rel="noreferrer noopener"
      >
        Mulai Diskusi
      </a>
    </motion.nav>
  );
}
