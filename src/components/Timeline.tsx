import { motion, useScroll, useTransform } from 'framer-motion';

export default function Timeline() {
    const { scrollYProgress } = useScroll();
    const pathProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

    const nodes = [
        { step: '01', title: 'Discovery', desc: 'Mapping project trajectory and defining the core mission objectives.', icon: 'explore', align: 'left' as const, border: 'electric-cyan' as const },
        { step: '02', title: 'Architecture', desc: 'Constructing a scalable foundation with advanced tech-stack alignment.', icon: 'hub', align: 'right' as const, border: 'soft-violet' as const },
        { step: '03', title: 'Design', desc: 'Crafting immersive interfaces that resonate with cosmic aesthetics.', icon: 'layers', align: 'left' as const, border: 'electric-cyan' as const },
        { step: '04', title: 'Development', desc: 'Translating logic into high-velocity production code and systems.', icon: 'data_object', align: 'right' as const, border: 'soft-violet' as const },
        { step: '05', title: 'Refinement', desc: 'Optimization and rigorous stress testing for peak orbital performance.', icon: 'speed', align: 'left' as const, border: 'electric-cyan' as const },
        { step: '06', title: 'Launch', desc: 'System deployment and final push to the global production environment.', icon: 'auto_mode', align: 'right' as const, border: 'soft-violet' as const },
    ];

    const borderColor = (border: string) => border === 'electric-cyan' ? 'electric-cyan' : 'soft-violet';
    const glowClass = (border: string) => border === 'electric-cyan' ? 'node-glow-cyan' : 'node-glow-violet';

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden pt-32 pb-12 bg-matte-black starfield-bg starfield-bg-custom">
            <style>{`
                .starfield-bg-custom {
                    background-image:
                        radial-gradient(1px 1px at 20px 30px, rgba(255, 255, 255, 0.8), rgba(0,0,0,0)),
                        radial-gradient(1px 1px at 40px 70px, rgba(0, 242, 255, 0.6), rgba(0,0,0,0)),
                        radial-gradient(1px 1px at 50px 160px, rgba(255, 255, 255, 0.8), rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 90px 40px, rgba(0, 242, 255, 0.6), rgba(0,0,0,0)),
                        radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.8), rgba(0,0,0,0)),
                        radial-gradient(1px 1px at 160px 120px, rgba(0, 242, 255, 0.6), rgba(0,0,0,0));
                    background-size: 200px 200px;
                }
                .velocity-trail {
                    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.15), transparent);
                    height: 1px;
                    width: 100%;
                    position: absolute;
                }
                .nebula-glow {
                    filter: blur(60px);
                    background: radial-gradient(circle, rgba(127, 13, 242, 0.15) 0%, transparent 70%);
                }
                .glass-card {
                    background: rgba(15, 10, 20, 0.7);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
                }
                .node-glow-violet {
                    box-shadow: 0 0 15px rgba(127, 13, 242, 0.5), inset 0 0 8px rgba(127, 13, 242, 0.3);
                }
                .node-glow-cyan {
                    box-shadow: 0 0 15px rgba(0, 242, 255, 0.4), inset 0 0 8px rgba(0, 242, 255, 0.2);
                }
                .path-vector {
                    stroke: url(#lineGradient);
                    stroke-width: 4;
                    fill: none;
                    filter: drop-shadow(0 0 12px rgba(127, 13, 242, 0.4));
                }
            `}</style>
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-full z-0">
                <div className="velocity-trail top-[15%] left-[0%] opacity-40"></div>
                <div className="velocity-trail top-[35%] right-[-20%] opacity-30"></div>
                <div className="velocity-trail top-[60%] left-[-30%] opacity-50"></div>
                <div className="velocity-trail top-[85%] right-[-15%] opacity-25"></div>
                <div className="absolute nebula-glow top-1/4 left-1/4 w-96 h-96 opacity-40"></div>
                <div className="absolute nebula-glow bottom-1/4 right-1/4 w-96 h-96 opacity-30"></div>
            </div>

            <main className="flex-1 px-4 relative z-10 w-full mt-10">
                <motion.div
                    className="max-w-4xl mx-auto w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mb-20 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-violet/20 text-electric-cyan text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-electric-cyan/30">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-cyan"></span>
                            </span>
                            System Process
                        </span>
                        <h2 className="text-white text-4xl font-extrabold leading-tight tracking-tight mb-4">
                            Development <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-soft-violet">Velocity</span>
                        </h2>
                        <p className="text-slate-400 text-sm max-w-[280px] mx-auto font-medium opacity-80">Accelerating complex digital visions into high-performance realities through a streamlined path.</p>
                    </motion.div>

                    <div className="relative w-full">
                        <div className="absolute inset-0 flex justify-center pointer-events-none">
                            <svg className="h-full w-full max-w-[320px]" preserveAspectRatio="none" viewBox="0 0 100 1200">
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                                        <stop offset="0%" stopColor="#00f2ff"></stop>
                                        <stop offset="50%" stopColor="#7f0df2"></stop>
                                        <stop offset="100%" stopColor="#00f2ff"></stop>
                                    </linearGradient>
                                </defs>
                                <motion.path
                                    className="path-vector"
                                    d="M50,0 C90,150 10,300 50,450 C90,600 10,750 50,900 C90,1050 50,1150 50,1200"
                                    style={{ pathLength: pathProgress }}
                                />
                            </svg>
                        </div>

                        <div className="relative flex flex-col gap-32">
                            {nodes.map((node, i) => (
                                <motion.div
                                    key={i}
                                    className={`flex justify-${node.align === 'left' ? 'end' : 'start'} items-center relative w-full group`}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                                >
                                    <div className={`absolute left-1/2 -translate-x-1/2 z-20 size-12 rounded-full bg-matte-black border-2 border-${borderColor(node.border)} ${glowClass(node.border)} flex items-center justify-center text-${borderColor(node.border)}`}>
                                        <motion.span
                                            className="material-symbols-outlined text-xl"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.15 + 0.1, type: 'spring', stiffness: 200 }}
                                        >
                                            {node.icon}
                                        </motion.span>
                                    </div>
                                    <div className={`w-1/2 ${node.align === 'left' ? 'pl-10' : 'pr-10 text-right'} cursor-default`}>
                                        <motion.div
                                            className={`glass-card rounded-2xl p-5 border-${node.align === 'left' ? 'l' : 'r'}-4 border-${node.align === 'left' ? 'l' : 'r'}-${borderColor(node.border)}/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-${node.align === 'left' ? 'l' : 'r'}-${borderColor(node.border)} group-hover:shadow-[0_10px_30px_rgba(${node.border === 'electric-cyan' ? '0,242,255' : '168,85,247'},0.1)]`}
                                            whileHover={{ y: -4 }}
                                        >
                                            <div className={`flex items-center justify-${node.align === 'left' ? 'between' : 'between'} flex-${node.align === 'right' ? 'row' : 'row'}-reverse mb-2 ${node.align === 'right' ? 'flex-row-reverse' : ''}`}>
                                                <h3 className="text-white font-bold text-[13px] uppercase tracking-wider">{node.title}</h3>
                                                <span className={`text-[9px] font-black text-${borderColor(node.border)}/60`}>{node.step}</span>
                                            </div>
                                            <p className="text-slate-400 text-xs leading-relaxed">{node.desc}</p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
