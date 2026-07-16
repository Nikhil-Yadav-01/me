import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formsubmit.co/ajax/nikhildevr.01@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    message: formData.message,
                    _subject: `New Contact Form Submission from ${formData.name}`,
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="relative z-10 flex flex-col pt-32 pb-10 min-h-screen bg-[#050a0a] mesh-bg font-display w-full overflow-hidden">
            <style>{`
                .mesh-bg {
                    background-color: #050a0a;
                    background-image:
                        radial-gradient(at 0% 0%, hsla(182,100%,10%,1) 0, transparent 50%),
                        radial-gradient(at 100% 0%, hsla(182,100%,5%,1) 0, transparent 50%),
                        radial-gradient(at 100% 100%, hsla(182,100%,10%,1) 0, transparent 50%),
                        radial-gradient(at 0% 100%, hsla(182,100%,5%,1) 0, transparent 50%);
                }
                .glass-panel {
                    background-color: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(24px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
            `}</style>

            <motion.main
                className="relative z-10 w-full max-w-2xl mx-auto px-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-primary/30 text-primary text-[10px] font-bold tracking-[0.2em] mb-8 uppercase">
                        <span className="material-symbols-outlined text-sm">mail</span>
                        Get In Touch
                    </div>
                    <h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                        Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Conversation</span>
                    </h1>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                        Share your project details and I'll get back to you within 24 hours.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 100, damping: 20 }}
                    >
                        <div>
                            <label className="block text-slate-400 text-sm font-medium mb-2">Name *</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl glass-panel text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-400 text-sm font-medium mb-2">Email *</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl glass-panel text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
                    >
                        <div>
                            <label className="block text-slate-400 text-sm font-medium mb-2">Phone</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl glass-panel text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-400 text-sm font-medium mb-2">Company</label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl glass-panel text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="Your company"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
                    >
                        <label className="block text-slate-400 text-sm font-medium mb-2">Message *</label>
                        <textarea
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={6}
                            className="w-full px-4 py-3 rounded-xl glass-panel text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full bg-primary text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {status === 'sending' ? (
                            <>
                                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                <span>Sending...</span>
                            </>
                        ) : status === 'success' ? (
                            <>
                                <span className="material-symbols-outlined">check_circle</span>
                                <span>Message Sent!</span>
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined">send</span>
                                <span>Send Message</span>
                            </>
                        )}
                    </motion.button>

                    <AnimatePresence mode="wait">
                        {status === 'success' && (
                            <motion.p
                                className="text-center text-primary text-sm"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                Thanks! I'll get back to you soon.
                            </motion.p>
                        )}
                        {status === 'error' && (
                            <motion.p
                                className="text-center text-red-400 text-sm"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                Something went wrong. Please try again or email directly.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </form>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 text-sm mb-4">Or reach out directly</p>
                    <a href="mailto:nikhildevr.01@gmail.com" className="text-primary hover:underline">
                        nikhildevr.01@gmail.com
                    </a>
                </div>
            </motion.main>

            <motion.section
                className="relative z-10 w-full max-w-4xl mx-auto px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <footer className="mt-8 mb-8 w-full">
                    <div className="flex justify-center gap-5 mb-12">
                        <motion.a
                            className="size-14 rounded-2xl glass-panel flex items-center justify-center text-primary"
                            href="https://github.com/Nikhil-Yadav-01"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.span
                                className="material-symbols-outlined text-2xl"
                                whileHover={{ scale: 1.2 }}
                            >
                                code
                            </motion.span>
                        </motion.a>
                        <motion.a
                            className="size-14 rounded-2xl glass-panel flex items-center justify-center text-primary"
                            href="https://linkedin.com/in/nikhil-yadav-r01"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.span
                                className="material-symbols-outlined text-2xl"
                                whileHover={{ scale: 1.2 }}
                            >
                                share
                            </motion.span>
                        </motion.a>
                        <motion.a
                            className="size-14 rounded-2xl glass-panel flex items-center justify-center text-primary"
                            href="tel:+919455366424"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.span
                                className="material-symbols-outlined text-2xl"
                                whileHover={{ scale: 1.2 }}
                            >
                                call
                            </motion.span>
                        </motion.a>
                    </div>
                    <div className="text-center space-y-3">
                        <div className="h-[1px] w-12 bg-primary/30 mx-auto mb-6"></div>
                        <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Engineered with precision</p>
                        <p className="text-slate-500 text-[10px] font-medium tracking-wider uppercase">Built for Scale • © 2026 Nikhil Yadav</p>
                    </div>
                </footer>
            </motion.section>
        </div>
    );
}
