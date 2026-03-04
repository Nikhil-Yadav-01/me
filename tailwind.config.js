/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#00f2ff",
                "secondary": "#8A5CF6",
                "accent": "#8b5cf6",
                "background-dark": "#05070A",
                "navy-base": "#050B18",
                "matte-black": "#030105",
                "electric-cyan": "#00F5FF",
                "soft-violet": "#a855f7",
                "fuchsia-500": "#d946ef",
                "trace": "rgba(0, 242, 255, 0.15)",
                "card-bg": "rgba(18, 10, 25, 0.7)",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "mono": ["Fira Code", "monospace"]
            },
            animation: {
                'float-slow': 'float 12s ease-in-out infinite',
                'float-delayed': 'float 18s ease-in-out infinite 2s',
                'drift': 'drift 25s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-30px) rotate(10deg)' },
                },
                drift: {
                    '0%': { transform: 'translateX(-10%) translateY(0)' },
                    '100%': { transform: 'translateX(10%) translateY(-20px)' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
}
