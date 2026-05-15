import { motion } from "motion/react";
import { Terminal, Layout, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    icon: <Terminal size={20} />,
    skills: ["Kotlin", "Java", "SQL", "TypeScript"]
  },
  {
    category: "Frameworks & UI",
    icon: <Layout size={20} />,
    skills: ["Jetpack Compose", "Android SDK", "KMP", "Material Design 3"]
  },
  {
    category: "Architecture & Backend",
    icon: <Database size={20} />,
    skills: ["MVVM / MVI", "Retrofit", "Dagger Hilt / Koin", "Firebase", "Room DB"]
  },
  {
    category: "Tools & DevOps",
    icon: <Wrench size={20} />,
    skills: ["Android Studio", "Git / GitHub", "CI/CD (Actions)", "Junit / MockK"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            <div className="text-accent text-xs font-bold uppercase tracking-[0.3em] font-mono">02 / TECHNICAL CAPABILITIES</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">PERSENJATAAN <br /> TEKNIS.</h2>
          </div>
          <div className="text-white/40 max-w-sm text-sm leading-relaxed font-mono italic text-right">
            System stack optimized for performance, scalability, and modern android standards.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors group relative"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform origin-left duration-500">
                {group.icon}
              </div>
              <h3 className="text-lg font-bold mb-6 tracking-wide border-b border-white/10 pb-2">{group.category}</h3>
              <ul className="space-y-3">
                {group.skills.map((skill, si) => (
                  <li key={si} className="text-sm text-white/50 font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
