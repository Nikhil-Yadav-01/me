import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const routes = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/timeline', label: 'Process' },
        { path: '/architecture', label: 'Architecture' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 flex items-center justify-center px-6 py-4 z-[100] transition-all duration-300 ${isScrolled ? 'py-3' : 'bg-transparent border-transparent py-6'}`}
            id="main-nav"
        >
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex-wrap justify-center">
                {routes.map((route) => {
                    const isActive = location.pathname === route.path;
                    return (
                        <Link
                            key={route.path}
                            to={route.path}
                            className={`px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${isActive
                                ? 'bg-gradient-to-r from-primary to-cyan-400 text-background-dark shadow-[0_0_20px_rgba(0,242,255,0.4)]'
                                : 'text-slate-400 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {route.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
