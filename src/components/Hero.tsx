import { motion } from "motion/react";
import { ArrowRight, Smartphone, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-[0.2em]"
        >
          <Smartphone size={14} />
          Android Specialist
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
          MEMBANGUN <br />
          <span className="text-glow text-accent">MASA DEPAN</span> <br />
          MOBILE.
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed mb-10">
          Spesialis Android Developer dengan keahlian mendalam di <span className="text-white font-medium">Kotlin</span>, 
          <span className="text-white font-medium"> Jetpack Compose</span>, dan arsitektur <span className="text-white font-medium">MVVM</span>. 
          Fokus pada performa tinggi dan kode yang bersih untuk pengalaman pengguna yang intuitif.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-accent hover:text-white transition-all"
          >
            Lihat Proyek
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about"
            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:border-white transition-all"
          >
            Tentang Saya
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
