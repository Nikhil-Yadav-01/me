import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setActiveSection('');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { id: 'services', label: 'Services' },
        { id: 'projects', label: 'Projects' },
        { id: 'timeline', label: 'Process' },
        { id: 'architecture', label: 'Architecture' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-0 left-0 right-0 flex items-center justify-center px-6 py-4 z-[100] transition-all duration-300 ${isScrolled ? 'py-3' : 'bg-transparent border-transparent py-6'}`}
            id="main-nav"
        >
            <motion.div
                layout
                className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex-wrap justify-center"
            >
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${activeSection === ''
                            ? 'bg-gradient-to-r from-primary to-cyan-400 text-background-dark shadow-[0_0_20px_rgba(0,242,255,0.4)]'
                            : 'text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                >
                    Home
                </button>
                {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${isActive
                                    ? 'bg-gradient-to-r from-primary to-cyan-400 text-background-dark shadow-[0_0_20px_rgba(0,242,255,0.4)]'
                                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {section.label}
                        </button>
                    );
                })}
            </motion.div>
        </motion.nav>
    );
}
