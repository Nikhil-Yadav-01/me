import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="relative w-full min-h-screen bg-navy-base pt-32 pb-12">
            <div className="circuit-bg"></div>
            <div className="circuit-traces"></div>
            {/* Microchip Layer Background */}
            <div className="microchip-layer fixed inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 h10 v10 h-10 z M40 10 h5 v5 h-5 z M70 10 h10 v10 h-10 z M10 40 h5 v5 h-5 z M40 40 h20 v20 h-20 z M10 70 h10 v10 h-10 z M70 70 h5 v5 h-5 z' fill='none' stroke='rgba(0, 242, 255, 0.05)' stroke-width='0.5'/%3E%3C/svg%3E")` }}></div>
            <div className="cube-container absolute w-full h-full pointer-events-none z-[1] overflow-hidden">
                <div className="absolute w-[60px] h-[60px] border border-primary/20 transform-gpu rotate-45 top-[15%] left-[10%] opacity-20" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(45deg) rotateY(45deg)' }}></div>
                <div className="absolute w-[60px] h-[60px] border border-primary/20 transform-gpu rotate-45 top-[60%] right-[15%] scale-150 opacity-10" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(45deg) rotateY(45deg)' }}></div>
                <div className="absolute w-[60px] h-[60px] border border-primary/20 transform-gpu rotate-45 bottom-[10%] left-[20%] scale-75 opacity-15" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(45deg) rotateY(45deg)' }}></div>
            </div>

            <main className="relative z-20 w-full max-w-4xl mx-auto flex flex-col pt-10">
                <section className="px-6 flex flex-col items-center pb-12 text-center relative w-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-[0.25em] uppercase mb-6 border border-primary/20 backdrop-blur-sm">
                        Core Competencies
                    </span>
                    <h2 className="text-5xl font-bold leading-[1.1] mb-6 tracking-tighter">
                        Engineering<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-accent">Precision</span>
                    </h2>
                    <p className="text-slate-400 max-w-[300px] mx-auto text-sm leading-relaxed font-light">
                        Architecting robust digital infrastructures with technical excellence and surgical accuracy.
                    </p>
                </section>

                <section className="px-6 space-y-6 w-full">
                    {/* Card 1 */}
                    <div className="glass-card-3d rounded-2xl p-6 relative overflow-hidden group cursor-default isolate transform-gpu backface-hidden">
                        <div className="glow-highlight"></div>
                        <div className="absolute -right-16 -top-16 size-40 bg-primary/5 blur-3xl rounded-full z-0"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="size-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,242,255,0.15)]">
                                    <span className="material-symbols-outlined text-3xl">android</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">Android Systems</h3>
                                    <p className="text-[9px] text-primary/60 uppercase tracking-[0.2em] font-bold">Native Architecture</p>
                                </div>
                            </div>
                            <ul className="space-y-4 text-slate-300 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_#00f2ff]"></span>
                                    <span className="font-medium">Kotlin & Jetpack Compose Expert</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary/40"></span>
                                    <span>Clean Architecture & MVVM</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary/40"></span>
                                    <span>System-level Optimization</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-card-3d rounded-2xl p-6 relative overflow-hidden group cursor-default isolate transform-gpu backface-hidden">
                        <div className="glow-highlight"></div>
                        <div className="absolute -right-16 -top-16 size-40 bg-accent/5 blur-3xl rounded-full z-0"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="size-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                                    <span className="material-symbols-outlined text-3xl">flutter</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">Flutter Engine</h3>
                                    <p className="text-[9px] text-accent/60 uppercase tracking-[0.2em] font-bold">Multi-Platform</p>
                                </div>
                            </div>
                            <ul className="space-y-4 text-slate-300 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_#8b5cf6]"></span>
                                    <span className="font-medium">60fps Fluid Motion UI</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-accent/40"></span>
                                    <span>Enterprise State Management</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-accent/40"></span>
                                    <span>Unified Codebase Strategy</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-card-3d rounded-2xl p-6 relative overflow-hidden group cursor-default isolate transform-gpu backface-hidden">
                        <div className="glow-highlight"></div>
                        <div className="absolute -left-16 -bottom-16 size-40 bg-primary/5 blur-3xl rounded-full z-0"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="size-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,242,255,0.15)]">
                                    <span className="material-symbols-outlined text-3xl">developer_mode_tv</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">Full Stack Web</h3>
                                    <p className="text-[9px] text-primary/60 uppercase tracking-[0.2em] font-bold">Modern Web Standards</p>
                                </div>
                            </div>
                            <ul className="space-y-4 text-slate-300 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_#00f2ff]"></span>
                                    <span className="font-medium">Next.js & React Ecosystem</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary/40 shadow-[0_0_4px_rgba(0,242,255,0.2)]"></span>
                                    <span>Secure JWT/OAuth Auth Systems</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary/40 shadow-[0_0_4px_rgba(0,242,255,0.2)]"></span>
                                    <span>Cloud-native AWS/GCP Deployment</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary/40"></span>
                                    <span>Microservices & Edge Logic</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Special Card */}
                    <div className="glass-card-3d rounded-2xl p-6 relative overflow-hidden border-primary/40 group cursor-default isolate transform-gpu backface-hidden bg-gradient-to-br from-navy-base/90 to-primary/5">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 z-0"></div>
                        <div className="glow-highlight"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="size-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-navy-base shadow-xl shadow-primary/20">
                                    <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">MVP Launchpad</h3>
                                    <p className="text-[9px] text-primary uppercase tracking-[0.25em] font-black">Fast-Track Development</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-5 px-3 py-1 bg-primary/10 rounded-md border border-primary/20 w-fit">
                                <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                                <span className="text-[10px] text-primary font-bold uppercase">Optimized for Series A</span>
                            </div>
                            <ul className="space-y-4 text-slate-200 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"></span>
                                    <span className="font-semibold">Rapid Prototype to Scale (4-8 Weeks)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.2)]"></span>
                                    <span className="font-semibold">Feature Prioritization Workshops</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.2)]"></span>
                                    <span className="font-semibold">Investor-ready Tech Due Diligence</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-white/40"></span>
                                    <span>Automated CI/CD Pipelines</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 4 - Improve Apps */}
                    <div className="glass-card-3d rounded-2xl p-6 relative overflow-hidden group cursor-default isolate transform-gpu backface-hidden">
                        <div className="glow-highlight"></div>
                        <div className="absolute -right-16 -top-16 size-40 bg-accent/5 blur-3xl rounded-full z-0"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="size-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                                    <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">Improve Existing Apps</h3>
                                    <p className="text-[9px] text-accent/60 uppercase tracking-[0.2em] font-bold">Optimization & Refactoring</p>
                                </div>
                            </div>
                            <ul className="space-y-4 text-slate-300 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_#8b5cf6]"></span>
                                    <span className="font-medium">Performance tuning & optimization</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-accent/40"></span>
                                    <span>Architecture refactoring (MVVM)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-accent/40"></span>
                                    <span>Modern UI refresh & redesign</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 5 - Full-stack Scaling */}
                    <div className="glass-card-3d rounded-2xl p-6 relative overflow-hidden group cursor-default isolate transform-gpu backface-hidden">
                        <div className="glow-highlight"></div>
                        <div className="absolute -left-16 -bottom-16 size-40 bg-primary/5 blur-3xl rounded-full z-0"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="size-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,242,255,0.15)]">
                                    <span className="material-symbols-outlined text-3xl">cloud_sync</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">Full-Stack Scaling</h3>
                                    <p className="text-[9px] text-primary/60 uppercase tracking-[0.2em] font-bold">Enterprise Solutions</p>
                                </div>
                            </div>
                            <ul className="space-y-4 text-slate-300 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_#00f2ff]"></span>
                                    <span className="font-medium">Architecting robust systems</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary/40"></span>
                                    <span>Offline-first capabilities</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-primary/40"></span>
                                    <span>High-demand scalability</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-20 relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
                    <Link to="/contact" className="w-full relative group block transition-transform hover:scale-[1.01] active:scale-[0.98]">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 group-active:opacity-50 transition duration-500"></div>
                        <div className="relative bg-primary text-navy-base font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/30">
                            <span className="uppercase tracking-widest text-sm">Initialize Project Discovery</span>
                            <span className="material-symbols-outlined">terminal</span>
                        </div>
                    </Link>
                    <p className="text-center text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-8 font-medium">Currently Accepting High-Impact Projects</p>
                </section>
            </main>
        </div>
    );
}
