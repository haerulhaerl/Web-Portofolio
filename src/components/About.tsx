import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-y border-border-subtle overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-6"
        >
          <div className="text-accent text-xs font-bold uppercase tracking-[0.3em] font-mono">01 / ABOUT ME</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">KODE YANG BERBICARA Melalui Performa.</h2>
          
          <div className="space-y-4 text-white/70 leading-relaxed font-light">
            <p>
              Halo! Saya Haerul, seorang Mobile App Developer yang percaya bahwa aplikasi bukan sekadar barisan kode, 
              melainkan solusi yang harus berjalan dengan efisiensi maksimal. Spesialisasi saya ada pada ekosistem 
              Android, di mana saya mengeksplorasi setiap celah Kotlin untuk membangun sistem yang tangguh.
            </p>
            <p>
              Dengan pengalaman dalam mengolah data kompleks dan membangun arsitektur MVVM yang skalabel, saya sangat 
              antusias dalam menciptakan produk yang tidak hanya estetis di mata, tapi juga 'mulus' di bawah kap mesin. 
              Masa depan mobile adalah tentang reaktivitas dan performa, dan itulah yang saya bangun hari ini.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-auto h-full min-h-[400px] bg-accent/10 glass rounded-2xl flex items-center justify-center group overflow-hidden"
        >
          <img 
            src="/profil.png" 
            alt="Foto Profil" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity"
          />

          <div className="absolute inset-0 grid-bg opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative z-10 text-accent font-mono text-8xl md:text-9xl font-bold opacity-30 select-none">
            {/* {`</>`} */}
          </div>
          <div className="absolute bottom-10 left-10 right-10 p-6 glass rounded-lg border border-accent/20">
            <div className="text-xs font-mono text-white mb-2 tracking-widest">{`@android_dev`}</div>
            <div className="text-xl font-bold tracking-tight">Menulis masa depan, baris demi baris.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
