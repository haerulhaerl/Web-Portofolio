import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Tracer study berbasis mobile",
    challenge: "Proyek rancang bangun tracer strudy untuk membantu sekolah mengumpulkan data alumni secara efisien dan akurat,dengan fokus pada pengalaman pengguna yang intuitif dan perfoemayang optimal.",
    stack: ["Kotlin", "Jetpack Compose", "Room DB", "WorkManager"],
    github: "https://github.com/haerulhaerl/tracer-study.git"
  },
  // {
  //   title: "Zenith Banking Core",
  //   challenge: "Membangun sistem autentikasi biometrik multi-layer dan enkripsi data end-to-end yang memenuhi standar keamanan perbankan internasional.",
  //   stack: ["Kotlin", "MVVM", "Retrofit", "Biometric API", "Dagger Hilt"],
  //   github: "https://github.com/haerul/zenith-bank"
  // },
  // {
  //   title: "Streamify App",
  //   challenge: "Optimasi pemrosesan frame video secara reaktif untuk meminimalisir penggunaan memori pada perangkat low-end.",
  //   stack: ["Kotlin", "Media3", "ExoPlayer", "Coroutines", "Glide"],
  //   github: "https://github.com/haerul/streamify"
  // }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-b border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="text-accent text-xs font-bold uppercase tracking-[0.3em] font-mono">03 / SELECTED PROJECTS</div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">KARYA PILIHAN.</h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid md:grid-cols-5 gap-8 items-center p-8 glass rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 font-bold text-9xl -z-10 select-none group-hover:text-accent/10 transition-colors">
                0{index + 1}
              </div>
              
              <div className="md:col-span-3 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="text-accent text-[10px] font-bold uppercase tracking-widest font-mono">Technical Challenge</div>
                  <p className="text-white/70 text-lg font-light leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.stack.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono uppercase rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 flex flex-col items-end gap-4">
                 <motion.a
                  whileHover={{ scale: 1.05, x: 5 }}
                  href={project.github}
                  className="flex items-center gap-4 text-white hover:text-accent transition-colors group/link"
                 >
                    <span className="text-sm font-bold uppercase tracking-widest">Explore Repo</span>
                    <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover/link:bg-accent group-hover/link:text-white transition-all">
                      <Github size={24} />
                    </div>
                 </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
