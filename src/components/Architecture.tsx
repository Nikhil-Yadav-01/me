import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Architecture() {
    const [activeNode, setActiveNode] = useState<number | null>(null);

    const nodes = [
        {
            id: 1,
            icon: "person",
            title: "User",
            subtitle: "Interface Interaction",
            align: "left",
            detailIcon: "touch_app",
            detailTitle: "User Interaction",
            detailTagline: "System Entry Point",
            detailDesc: "End users securely interacting with the application via distributed client interfaces.",
            tags: ["CLIENT", "BROWSER", "MOBILE"]
        },
        {
            id: 2,
            icon: "devices",
            title: "Mobile/Web App",
            subtitle: "React / Flutter Frontend",
            align: "right",
            detailIcon: "smartphone",
            detailTitle: "Client Applications",
            detailTagline: "Responsive UI",
            detailDesc: "Cross-platform mobile apps and responsive web interfaces built for high performance.",
            tags: ["REACT", "FLUTTER", "VITE"]
        },
        {
            id: 3,
            icon: "api",
            title: "API Layer",
            subtitle: "Detailed View",
            align: "left",
            detailIcon: "security",
            detailTitle: "API Layer Specs",
            detailTagline: "Core Orchestration",
            detailDesc: "Spring Boot REST APIs with JWT authentication, validation, and structured error handling for secure communication.",
            tags: ["JWT", "SPRING", "REST"]
        },
        {
            id: 4,
            icon: "account_tree",
            title: "Business Logic",
            subtitle: "Service Domain Layer",
            align: "right",
            detailIcon: "memory",
            detailTitle: "Service Layer",
            detailTagline: "Domain Logic",
            detailDesc: "Microservices orchestrating complex business rules, transactional integrity, and async events.",
            tags: ["KOTLIN", "JAVA", "SERVICES"]
        },
        {
            id: 5,
            icon: "database",
            title: "Database",
            subtitle: "SQL / NoSQL Storage",
            align: "left",
            detailIcon: "storage",
            detailTitle: "Data Persistence",
            detailTagline: "ACID & NoSQL",
            detailDesc: "Highly available database clusters ensuring data consistency, integrity, and fast read/write ops.",
            tags: ["POSTGRES", "FIREBASE"]
        },
        {
            id: 6,
            icon: "cloud",
            title: "Cloud",
            subtitle: "AWS / Azure Infrastructure",
            align: "right",
            detailIcon: "cloud_done",
            detailTitle: "Cloud Infrastructure",
            detailTagline: "Scalable Hosting",
            detailDesc: "Containerized deployment pipelines with auto-scaling, load balancing, and edge caching.",
            tags: ["AWS", "DOCKER", "CI/CD"]
        }
    ];

    const connectorPaths = [
        "M 25 30 C 25 80, 75 80, 75 140",
        "M 75 140 C 75 200, 25 200, 25 260",
        "M 25 260 C 25 320, 75 320, 75 380",
        "M 75 380 C 75 440, 25 440, 25 500",
        "M 25 500 C 25 560, 75 560, 75 620"
    ];

    return (
        <div className="relative font-display text-slate-100 bg-[#020408] min-h-screen overflow-x-hidden w-full pt-32 pb-10 z-0">
            <style>{`
                .circular-glass-node {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 9999px;
                    background: radial-gradient(circle at 35% 35%, rgba(6, 237, 249, 0.2), rgba(6, 237, 249, 0.05));
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(6, 237, 249, 0.3);
                    box-shadow: 0 0 15px rgba(6, 237, 249, 0.2), inset 0 0 10px rgba(6, 237, 249, 0.05);
                }
                .matte-card {
                    background: rgba(10, 17, 26, 0.7);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(6, 237, 249, 0.1);
                }
                .connector-svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    pointer-events: none;
                }
                .path-glow {
                    stroke: #06edf9;
                    stroke-width: 2;
                    fill: none;
                    stroke-dasharray: 4 6;
                    filter: drop-shadow(0 0 8px rgba(6, 237, 249, 0.6));
                    opacity: 0.6;
                }
                .nebula-cyan {
                    background: radial-gradient(circle at center, rgba(6, 237, 249, 0.1) 0%, transparent 70%);
                    filter: blur(80px);
                }
                .nebula-violet {
                    background: radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
                    filter: blur(80px);
                }
                .constellation-grid {
                    background-image: radial-gradient(circle at 1px 1px, rgba(6, 237, 249, 0.1) 1px, transparent 0);
                    background-size: 32px 32px;
                }
                .active-node {
                    box-shadow: 0 0 25px rgba(6, 237, 249, 0.5), inset 0 0 15px rgba(6, 237, 249, 0.2);
                    border-color: rgba(6, 237, 249, 0.8);
                }
                .constellation-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(rgba(6, 237, 249, 0.02) 0.5px, transparent 0.5px) 0 0 / 60px 60px,
                        linear-gradient(90deg, rgba(6, 237, 249, 0.02) 0.5px, transparent 0.5px) 0 0 / 60px 60px;
                    pointer-events: none;
                    z-index: -5;
                }
            `}</style>

            <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-[#020408]"></div>
                <div className="constellation-overlay"></div>
                <div className="constellation-grid absolute inset-0 opacity-20"></div>
                <div className="nebula-cyan absolute top-[-10%] left-[-10%] w-[80%] h-[60%] opacity-40"></div>
                <div className="nebula-violet absolute bottom-[10%] right-[-10%] w-[70%] h-[50%] opacity-30"></div>
                <div className="nebula-cyan absolute top-[40%] right-[10%] w-[40%] h-[40%] opacity-20"></div>
                <svg className="absolute inset-0 w-full h-full opacity-10">
                    <line stroke="#06edf9" strokeWidth="0.5" x1="10%" x2="40%" y1="15%" y2="25%"></line>
                    <line stroke="#06edf9" strokeWidth="0.5" x1="40%" x2="80%" y1="25%" y2="10%"></line>
                    <line stroke="#06edf9" strokeWidth="0.5" x1="90%" x2="60%" y1="60%" y2="80%"></line>
                </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none hidden xl:block z-0 overflow-hidden max-w-[1400px] mx-auto">
                <motion.div
                    className="absolute top-[20%] left-[5%] w-32 h-40 bg-[rgba(5,11,24,0.4)] border border-electric-cyan/20 backdrop-blur-md rounded-xl flex flex-col p-4 transform -rotate-12 shadow-[0_0_30px_rgba(0,242,255,0.05)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    <span className="material-symbols-outlined text-electric-cyan text-2xl mb-3">android</span>
                    <div className="h-2 w-16 bg-electric-cyan/40 rounded-full mb-2"></div>
                    <div className="h-2 w-20 bg-electric-cyan/20 rounded-full"></div>
                </motion.div>

                <motion.div
                    className="absolute top-[60%] left-[8%] w-28 h-24 bg-[rgba(5,11,24,0.4)] border border-fuchsia-500/20 backdrop-blur-md rounded-xl flex flex-col p-4 transform rotate-6 shadow-[0_0_30px_rgba(217,70,239,0.05)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <span className="material-symbols-outlined text-fuchsia-500 text-xl mb-3">database</span>
                    <div className="flex gap-2 mb-2">
                        <div className="h-1.5 w-1/2 bg-fuchsia-500/40 rounded-full"></div>
                        <div className="h-1.5 w-1/2 bg-fuchsia-500/20 rounded-full"></div>
                    </div>
                    <div className="h-1.5 w-full bg-fuchsia-500/20 rounded-full"></div>
                </motion.div>

                <motion.div
                    className="absolute top-[35%] right-[5%] w-32 h-28 bg-[rgba(5,11,24,0.4)] border border-soft-violet/20 backdrop-blur-md rounded-xl p-4 transform rotate-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="material-symbols-outlined text-soft-violet text-2xl mb-3">flutter_dash</span>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                        <div className="h-6 bg-soft-violet/20 rounded-md"></div>
                        <div className="h-6 bg-soft-violet/10 rounded-md"></div>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute bottom-[20%] right-[8%] w-28 h-32 bg-[rgba(5,11,24,0.4)] border border-white/10 backdrop-blur-md rounded-xl p-4 transform -rotate-12 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <span className="material-symbols-outlined text-slate-300 text-xl mb-3">api</span>
                    <div className="space-y-2 mt-2">
                        <div className="h-1.5 w-full bg-white/20 rounded-full"></div>
                        <div className="h-1.5 w-4/5 bg-white/10 rounded-full"></div>
                        <div className="h-1.5 w-3/5 bg-white/10 rounded-full"></div>
                    </div>
                </motion.div>
            </div>

            <main className="relative px-6 py-8 max-w-md mx-auto z-10 w-full">
                <motion.div
                    className="mb-12 relative z-10 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
                        Technical Portfolio
                    </span>
                    <h2 className="text-slate-100 text-3xl font-bold leading-tight mb-3 tracking-tight">
                        How I Build Scalable Products
                    </h2>
                    <p className="text-slate-400 text-sm font-light leading-relaxed max-w-[280px] mx-auto">
                        A visualization of my architectural approach to building high-performance systems.
                    </p>
                </motion.div>

                <div className="relative min-h-[720px] w-full">
                    <svg className="connector-svg" preserveAspectRatio="none" viewBox="0 0 100 720">
                        {connectorPaths.map((d, i) => (
                            <motion.path
                                key={i}
                                className="path-glow"
                                d={d}
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                            />
                        ))}
                    </svg>

                    {nodes.map((node, i) => (
                        <motion.div
                            key={node.id}
                            className={`relative flex flex-col w-full mb-14 ${node.align === 'left' ? 'items-start' : 'items-end'} ${activeNode === node.id ? 'z-50' : 'z-20'}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, type: 'spring', stiffness: 150 }}
                        >
                            <div className={`flex flex-col ${node.align === 'left' ? 'items-start' : 'items-center'} w-full`}>
                                <motion.button
                                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                                    className={`circular-glass-node size-14 mb-2 cursor-pointer ${node.align === 'left' ? 'ml-[calc(25%-28px)]' : 'ml-[calc(50%)]'} ${activeNode === node.id ? 'active-node scale-110' : ''}`}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="material-symbols-outlined text-primary text-xl">{node.icon}</span>
                                </motion.button>

                                <AnimatePresence>
                                    {activeNode === node.id && (
                                        <motion.div
                                            className={`absolute ${node.align === 'left' ? 'left-8 top-16' : 'right-8 top-16'} z-50 w-[280px] matte-card p-4 rounded-xl border-primary/50 shadow-2xl shadow-primary/20`}
                                            initial={{ opacity: 0, scale: 0.8, y: -10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="size-8 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/30">
                                                    <span className="material-symbols-outlined text-primary text-lg">{node.detailIcon}</span>
                                                </div>
                                                <div>
                                                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">{node.detailTitle}</p>
                                                    <p className="text-[8px] text-primary/80 uppercase tracking-tight font-medium">{node.detailTagline}</p>
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-slate-200 leading-relaxed">
                                                {node.detailDesc}
                                            </p>
                                            <div className="mt-4 pt-3 border-t border-white/10 flex gap-2 flex-wrap">
                                                {node.tags.map(tag => (
                                                    <span key={tag} className="text-[9px] bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/30 font-semibold tracking-wider">{tag}</span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className={`${node.align === 'left' ? 'ml-[calc(25%-20px)]' : 'text-right mr-[calc(25%-20px)] w-full'}`}>
                                    <p className="text-primary font-bold text-[9px] tracking-widest uppercase">{node.title}</p>
                                    <p className={`text-slate-500 text-[8px] flex items-center gap-1 italic ${node.align === 'right' ? 'justify-end' : ''}`}>
                                        {node.align === 'left' && <span className={`size-1 rounded-full ${activeNode === node.id ? 'bg-primary animate-pulse' : 'bg-slate-500'}`}></span>}
                                        {node.subtitle}
                                        {node.align === 'right' && <span className={`size-1 rounded-full ${activeNode === node.id ? 'bg-primary animate-pulse' : 'bg-slate-500'}`}></span>}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-20 pb-16 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h3 className="text-base font-bold mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-xl">analytics</span>
                        System Specs
                    </h3>
                    <div className="grid gap-4 w-full">
                        <motion.div
                            className="matte-card p-5 rounded-xl flex items-center gap-4 border border-primary/20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            whileHover={{ x: 4 }}
                        >
                            <div className="size-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-xl">bolt</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-[10px] text-slate-100 uppercase tracking-widest mb-1">High Availability</h4>
                                <p className="text-[10px] text-slate-400 leading-tight">Load balanced nodes with automatic failover and 99.9% uptime.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="matte-card p-5 rounded-xl flex items-center gap-4 border border-primary/20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            whileHover={{ x: 4 }}
                        >
                            <div className="size-10 rounded-full bg-[rgba(139,92,246,0.05)] flex items-center justify-center shrink-0 border border-[rgba(139,92,246,0.2)]">
                                <span className="material-symbols-outlined text-[#8b5cf6] text-xl">shield_lock</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-[10px] text-slate-100 uppercase tracking-widest mb-1">Zero Trust Security</h4>
                                <p className="text-[10px] text-slate-400 leading-tight">Identity-aware infrastructure with granular access controls.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
