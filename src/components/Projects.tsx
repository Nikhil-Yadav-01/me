import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  category: 'mobile' | 'fullstack';
  description: string;
  tech: string[];
  imagePath?: string;
  gradient: string;
  glowColor: string;
  githubUrl: string;
  details: {
    challenge: string;
    solution: string;
    metrics: { label: string; value: string }[];
  };
}

const PROJECTS: Project[] = [
  {
    id: 'grovea',
    title: 'Grovea Ecosystem',
    subtitle: '4-App Flutter Ecosystem & 20+ Microservices Backend',
    tag: 'Full Stack & Microservices',
    category: 'fullstack',
    description: 'Designed and built a 4-app Flutter ecosystem (Customer, Seller, Delivery Partner, Warehouse) backed by a Spring Boot microservices architecture of 20+ independently deployable services.',
    tech: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Eureka', 'Spring Cloud Gateway'],
    gradient: 'from-emerald-500/20 to-teal-900/30',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    githubUrl: 'https://github.com/Nikhil-Yadav-01',
    details: {
      challenge: 'Developing a unified grocery commerce platform that orchestrates real-time checkout, delivery routing, inventory updates, and seller panels without concurrency lag.',
      solution: 'Built an event-driven architecture using Kafka for high-throughput messaging, Eureka for service discovery, and polyglot databases (PostgreSQL for transactions, MongoDB for products, Redis for session cache). Centralized control via Spring Cloud Gateway.',
      metrics: [
        { label: 'Connected Apps', value: '4 Flutter Apps' },
        { label: 'Backend Services', value: '20+ Microservices' },
        { label: 'Latency Optimization', value: 'Polyglot Persistence' }
      ]
    }
  },
  {
    id: 'ems',
    title: 'Employee Management System',
    subtitle: 'Government Staff Tracking & Face Biometrics',
    tag: 'Production Flutter App',
    category: 'mobile',
    description: 'Built and shipped cross-platform Flutter applications for government and educational clients, including Jhansi Nagar Nigam, featuring face-recognition attendance and tracking.',
    tech: ['Flutter', 'Dart', 'ML Kit', 'SQLite', 'Hive', 'Google Maps', 'Firebase'],
    gradient: 'from-blue-500/20 to-indigo-900/30',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    githubUrl: 'https://github.com/Nikhil-Yadav-01',
    details: {
      challenge: 'Ensuring reliable, offline-first attendance validation and task tracking for field employees with geo-fencing, preventing verification tampering.',
      solution: 'Integrated local biometric checking via Google ML Kit Face Detection, cached entries securely in SQLite/Hive for offline scenarios, and synced to ASP.NET Core APIs once connected. Geo-fencing is managed via Google Maps API.',
      metrics: [
        { label: 'Performance Gain', value: '60% API Latency Cut' },
        { label: 'Client Deployment', value: 'Jhansi Nagar Nigam' },
        { label: 'Off-grid Sync', value: '100% Offline-First' }
      ]
    }
  },
  {
    id: 'investwise',
    title: 'InvestWise India',
    subtitle: 'FinTech App & Investment Awareness Dashboard',
    tag: 'Android FinTech App',
    category: 'mobile',
    description: 'Placed in the Top 25 of 400+ teams at the National QUBITX Hackathon. A real-time data-driven FinTech application simplifying investment awareness for modern users.',
    tech: ['Kotlin', 'Jetpack Compose', 'Clean Architecture', 'Coroutines', 'Firestore'],
    gradient: 'from-cyan-500/20 to-sky-900/30',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    githubUrl: 'https://github.com/Nikhil-Yadav-01',
    details: {
      challenge: 'Creating a highly responsive, educational investment awareness interface that fetches and visualizes complex market indicators under high volumes of parallel users.',
      solution: 'Engineered a modular Android application using Clean Architecture (Data, Domain, Presentation). Designed UI using Jetpack Compose and managed asynchronous streams with Kotlin Coroutines and Firestore real-time snapshots.',
      metrics: [
        { label: 'National Rank', value: 'Top 25 Finalist' },
        { label: 'Total Competitors', value: '400+ Teams' },
        { label: 'UI Architecture', value: 'Declarative Compose' }
      ]
    }
  },
  {
    id: 'erp',
    title: 'Modular Android ERP System',
    subtitle: 'Enterprise Academics & Inventory Manager',
    tag: 'Enterprise Android MVP',
    category: 'mobile',
    description: 'Prototyped a modular Android ERP app covering 4 core functional modules (Academics, Attendance, Exams, and Inventory) delivered within a tight 6-week MVP timeline.',
    tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room DB', 'Firebase Realtime DB'],
    gradient: 'from-amber-500/20 to-orange-950/30',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    githubUrl: 'https://github.com/Nikhil-Yadav-01',
    details: {
      challenge: 'Delivering multiple distinct modules (inventory, student records, exams) with complex state management within a strict 6-week prototype sprint.',
      solution: 'Used Hilt Dependency Injection to decouple modules. Implemented reactive state tracking using ViewModels and livedata, caching academic data locally in Room DB and syncing remotely with Firebase.',
      metrics: [
        { label: 'Core Modules', value: '4 ERP Modules' },
        { label: 'Timeline', value: '6-Week Rapid MVP' },
        { label: 'Local Caching', value: 'Room DB Offline' }
      ]
    }
  },
  {
    id: 'secret',
    title: 'Secret Chat App',
    subtitle: 'Secure Encrypted Instant Messenger',
    tag: 'Real-time & Security',
    category: 'mobile',
    description: 'End-to-end encrypted messaging application. Uses Ktor WebSockets for low-latency streaming and offline-first Room database storage.',
    tech: ['Kotlin', 'Ktor WebSockets', 'Room DB', 'Coroutines', 'Flow', 'Security API'],
    gradient: 'from-fuchsia-500/20 to-violet-950/30',
    glowColor: 'rgba(217, 70, 239, 0.4)',
    githubUrl: 'https://github.com/Nikhil-Yadav-01',
    details: {
      challenge: 'Securing real-time stream data on mobile, maintaining message sequencing, and preventing storage leakage on rooted devices.',
      solution: 'Implemented client-side cryptography for local storage in Room DB and over-the-wire encryption. Built stream pipelines using Ktor WebSockets, handling backpressure using Kotlin Flows and Coroutines.',
      metrics: [
        { label: 'Real-time Transport', value: 'Ktor WebSockets' },
        { label: 'Offline Storage', value: 'Encrypted Room DB' },
        { label: 'Sync Pipeline', value: 'Kotlin Flow / Coroutine' }
      ]
    }
  }
];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-8, 8]);
  
  const glareX = useTransform(mouseXSpring, [0, 1], ['-20%', '120%']);
  const glareY = useTransform(mouseYSpring, [0, 1], ['-20%', '120%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative flex flex-col items-stretch justify-start rounded-2xl bg-card-bg/60 border border-white/10 shadow-2xl overflow-hidden cursor-pointer h-full backdrop-blur-md"
      whileHover={{ 
        y: -5,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px ${project.glowColor}`
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glare effect */}
      <motion.div
        style={{
          left: glareX,
          top: glareY,
          x: '-50%',
          y: '-50%',
        }}
        className="absolute w-72 h-72 rounded-full bg-white/[0.06] blur-2xl pointer-events-none z-20"
      />

      {/* Project Category Tag */}
      <div className="absolute top-0 right-0 p-4 z-10">
        <span className="bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/25">
          {project.tag}
        </span>
      </div>

      {/* Image Area with fallback gradient */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950 border-b border-white/5">
        {project.imagePath && (
          <motion.img
            src={project.imagePath}
            alt={project.title}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* Abstract Glowing Grid Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6 z-0`}>
          <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
          <div className="absolute w-32 h-32 rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ backgroundColor: project.glowColor }} />

          <div className="relative z-10 flex flex-col items-center select-none text-center">
            <span className="material-symbols-outlined text-4xl text-slate-100/40 group-hover:text-slate-100/70 group-hover:scale-110 transition-all duration-300">
              {project.category === 'fullstack' ? 'hub' : 'smartphone'}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400/80 mt-2 block">
              {project.category === 'fullstack' ? 'Backend & Web Microservices' : 'Android & Flutter Mobile'}
            </span>
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="flex flex-col gap-4 p-6 bg-gradient-to-b from-transparent to-black/30 flex-grow justify-between">
        <div>
          <h3 className="text-white text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs font-light mt-1.5 line-clamp-2">
            {project.subtitle}
          </p>
        </div>

        {/* Tech chips */}
        <div className="flex gap-1.5 flex-wrap">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2.5 py-0.5 bg-white/5 text-slate-300 text-[9px] font-medium rounded-full border border-white/5">
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-0.5 bg-white/10 text-slate-300 text-[9px] font-medium rounded-full border border-white/10">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Learn more trigger */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <span className="text-[10px] text-primary group-hover:text-white uppercase tracking-widest font-bold flex items-center gap-1 transition-all">
            Explore System
            <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </span>
          <div className="flex -space-x-1.5">
            {project.tech.slice(0, 3).map((_, idx) => (
              <div 
                key={idx} 
                className="w-5 h-5 rounded-full border border-slate-900 bg-white/5 flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-[8px] font-mono text-slate-400">
                  {idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col font-display bg-[#030105] overflow-hidden pt-32 pb-12">
      {/* Visual background layers */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute filter blur-[120px] opacity-40 rounded-full bg-fuchsia-600 w-[500px] h-[500px] -top-20 -left-20"></div>
        <div className="absolute filter blur-[120px] opacity-40 rounded-full bg-violet-700 w-[600px] h-[600px] top-1/2 -right-40"></div>
        <div className="absolute filter blur-[120px] opacity-20 rounded-full bg-fuchsia-900 w-[400px] h-[400px] bottom-0 left-0"></div>

        <div className="absolute bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-64 h-96 -rotate-[25deg] top-10 -right-20"></div>
        <div className="absolute bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-80 h-40 rotate-[15deg] bottom-20 -left-10"></div>

        <div className="absolute w-[1px] bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent h-full left-[20%] opacity-20"></div>
        <div className="absolute w-[1px] bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent h-full left-[80%] opacity-10"></div>
      </div>

      {/* Header section */}
      <motion.div
        className="relative z-10 px-6 pt-10 pb-6 max-w-4xl mx-auto w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-4xl font-bold leading-tight tracking-tight">
          Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">Showcase</span>
        </h2>
        <p className="text-slate-400 mt-3 text-sm font-light max-w-lg mx-auto">
          A collection of production applications, enterprise mobile portals, and full-stack system architectures.
        </p>
      </motion.div>

      {/* Category filter bar */}
      <div className="flex justify-center mb-12 relative z-20">
        <div className="flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
          {(['all', 'mobile', 'fullstack'] as const).map((cat) => {
            const label = cat === 'all' ? 'All Systems' : cat === 'mobile' ? 'Mobile Apps' : 'Full Stack & Web';
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-background-dark' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Card Grid */}
      <motion.div 
        layout 
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full px-6"
      >
        {filteredProjects.map((project) => {
          const isMarquee = project.id === 'grovea' && filter === 'all';
          return (
            <motion.div
              key={project.id}
              layout
              className={isMarquee ? 'md:col-span-2' : ''}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-2xl bg-slate-950/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow backdrop inside the modal */}
              <div 
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full filter blur-[100px] opacity-25 pointer-events-none"
                style={{ backgroundColor: selectedProject.glowColor }}
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>

              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
                    {selectedProject.tag}
                  </span>
                  <h3 className="text-white text-3xl font-bold tracking-tight mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 font-light">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-white/5 py-4">
                  {selectedProject.details.metrics.map((m) => (
                    <div key={m.label} className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                      <span className="text-[9px] text-slate-400 uppercase tracking-wider font-mono">{m.label}</span>
                      <span className="text-white text-xs font-bold mt-1 tracking-tight">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Challenges & solutions */}
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-slate-200 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-xs text-fuchsia-400">gavel</span>
                      The Challenge
                    </h4>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">
                      {selectedProject.details.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-slate-200 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-xs text-primary">settings_system_daydream</span>
                      The Solution & Architecture
                    </h4>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">
                      {selectedProject.details.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-slate-200 text-[10px] font-bold uppercase tracking-widest mb-1.5">
                      Tech Stack Implemented
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-[10px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer links */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-slate-500">
                    *Real screenshots can be set via imagePath in Projects.tsx.
                  </span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-slate-200 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all cursor-pointer shadow-lg active:scale-95"
                    >
                      View Repository
                      <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
