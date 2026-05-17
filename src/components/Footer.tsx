import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-border-subtle bg-[#050505]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-2xl font-bold tracking-tighter text-glow">
            HAERUL.<span className="text-accent">DEV</span>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Menyatukan estetika modern dengan performa android yang tak kompromi.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <motion.a whileHover={{ scale: 1.2, color: "#3B82F6" }} href="https://github.com/haerulhaerl" className="text-white/60">
            <Github size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, color: "#3B82F6" }} href="https://www.linkedin.com/in/haeruddin-hasrat-774a002a1/" className="text-white/60">
            <Linkedin size={20} />
          </motion.a>
          {/* <motion.a whileHover={{ scale: 1.2, color: "#3B82F6" }} href="#" className="text-white/60">
            <Twitter size={20} />
          </motion.a> */}
          <motion.a whileHover={{ scale: 1.2, color: "#3B82F6" }} href="mailto:haeruddinhasrat@gmail.com" className="text-white/60">
            <Mail size={20} />
          </motion.a>
        </div>

        <div className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">
          &copy; {currentYear} PORTFOLIO // ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
