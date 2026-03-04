export default function Projects() {
    return (
        <div className="relative z-10 flex min-h-screen w-full flex-col font-display bg-[#030105] overflow-hidden pt-32 pb-12">
            {/* Prismatic Background Container */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute filter blur-[120px] opacity-40 rounded-full bg-fuchsia-600 w-[500px] h-[500px] -top-20 -left-20"></div>
                <div className="absolute filter blur-[120px] opacity-40 rounded-full bg-violet-700 w-[600px] h-[600px] top-1/2 -right-40"></div>
                <div className="absolute filter blur-[120px] opacity-20 rounded-full bg-fuchsia-900 w-[400px] h-[400px] bottom-0 left-0"></div>

                {/* Shards */}
                <div className="absolute bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-64 h-96 -rotate-[25deg] top-10 -right-20"></div>
                <div className="absolute bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-80 h-40 rotate-[15deg] bottom-20 -left-10"></div>
                <div className="absolute bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-32 h-64 -rotate-[45deg] top-1/3 left-1/4 opacity-30"></div>

                {/* Streaks */}
                <div className="absolute w-[1px] bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent h-full left-[20%] opacity-20"></div>
                <div className="absolute w-[1px] bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent h-full left-[80%] opacity-10"></div>
            </div>

            <div className="relative z-10 px-6 pt-10 pb-6 max-w-4xl mx-auto w-full">
                <h2 className="text-white text-4xl font-bold leading-tight tracking-tight">
                    Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">Showcase</span>
                </h2>
                <p className="text-slate-400 mt-3 text-sm font-light max-w-[280px]">Crafting high-end digital architecture for the modern tech landscape.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-10 p-6 pb-20 max-w-4xl mx-auto w-full">
                {/* Project 1: School ERP (from user's original index.html but visually matching Stitch) */}
                <div className="tilt-card group relative flex flex-col items-stretch justify-start rounded-2xl bg-card-bg border border-white/10 shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.15)]">
                    <div className="absolute top-0 right-0 p-4 z-10">
                        <span className="bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/20">EdTech</span>
                    </div>
                    <div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover opacity-90 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBk_T7A7HVmyUriDd4znusWv0g0aFIjtDh0L_WiiYaLyF3CenhLJcXszbOCMPHzjzjIM0YcrJD2UBZ2UV-MCt8vXAbTNXqVejfOn8gxue6v5IDn2xv1mHh0K2DlnZn9553vBUQ40jeBwWqmLbH6Gq8TFTOjyLHGxu3L3FujSca0HNNf8EdDBGEYT6-wClt35CntEpjXXUurxriqUoq9o_S3z2NFIQexo0fv8ulIUijnzaa_xSdvFHr9pwsYcP1OL4tux6dhTXdk-ZAg")` }}>
                    </div>
                    <div className="flex w-full flex-col gap-4 p-6 bg-gradient-to-b from-transparent to-black/40">
                        <div>
                            <h3 className="text-white text-xl font-bold tracking-tight">School ERP System</h3>
                            <p className="text-slate-400 text-sm mt-1">Multi-role prototype (Admin/Teacher/Student) for academics & inventory tracking.</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-medium rounded-full border border-white/5">Kotlin</span>
                            <span className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-medium rounded-full border border-white/5">Jetpack Compose</span>
                            <span className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-medium rounded-full border border-white/5">Firebase</span>
                            <span className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-medium rounded-full border border-white/5">Room</span>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-matte-black bg-fuchsia-500/20 flex items-center justify-center backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-xs text-fuchsia-400">bolt</span>
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-matte-black bg-violet-500/20 flex items-center justify-center backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-xs text-violet-400">security</span>
                                </div>
                            </div>
                            <a href="https://github.com/Nikhil-Dev-R" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest active:scale-95 transition-all hover:bg-fuchsia-100 cursor-pointer">
                                View Code
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2: Secret Chat */}
                <div className="tilt-card group relative flex flex-col items-stretch justify-start rounded-2xl bg-card-bg border border-white/10 shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.15)]">
                    <div className="absolute top-0 right-0 p-4 z-10">
                        <span className="bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/20">Privacy</span>
                    </div>
                    <div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover opacity-90 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbVNONpVhDrkZROZq4pzn2sZXOS1X-qa-jYU-slPkRDtogPORSf3WLxYgZlROYWU6aLdg7CQdEgiofje48M7qz1eFM3CA8QSfNGbDS6IJ9DbTAXDJGIJVFKbLWG2AyeKzheIFqtZEb1apJ9bQnGbZx4R1NCjedjkHCri3t_OaLtdv49hGQRnbfWnFPRlxibT6a__7cNQIVWo02LU7nI3HINXJVATlcLaQTmYyeKCSGJuPgh0xa50ZXnKELHK42_jM3vetvnxyiOphY")` }}>
                    </div>
                    <div className="flex w-full flex-col gap-4 p-6 bg-gradient-to-b from-transparent to-black/40">
                        <div>
                            <h3 className="text-white text-xl font-bold tracking-tight">Secret Chat</h3>
                            <p className="text-slate-400 text-sm mt-1">End-to-end encrypted messaging with Ktor WebSockets and offline-first Room storage.</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-medium rounded-full border border-white/5">Kotlin</span>
                            <span className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-medium rounded-full border border-white/5">Ktor</span>
                            <span className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-medium rounded-full border border-white/5">Firebase</span>
                            <span className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-medium rounded-full border border-white/5">Coroutines</span>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-matte-black bg-fuchsia-500/20 flex items-center justify-center backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-xs text-fuchsia-400">lock</span>
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-matte-black bg-violet-500/20 flex items-center justify-center backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-xs text-violet-400">visibility_off</span>
                                </div>
                            </div>
                            <a href="https://github.com/Nikhil-Dev-R" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest active:scale-95 transition-all hover:bg-fuchsia-100 cursor-pointer">
                                View Code
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
