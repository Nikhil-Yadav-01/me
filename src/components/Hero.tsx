import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, RoundedBox, Environment, DragControls } from '@react-three/drei';

function CubeCluster() {
    const cubes = useMemo(() => {
        const temp = [];
        const count = 75; // More small cubes
        for (let i = 0; i < count; i++) {
            // Cluster around center [0, 0, 0] on small screens, [3, 0, 0] on large screens
            const r = Math.random() * 2.5;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            const scale = 0.15 + Math.random() * 0.35; // Variety of smaller cubes

            temp.push({ position: [x, y, z] as [number, number, number], scale });
        }
        return temp;
    }, []);

    return (
        <group position={[window.innerWidth >= 1024 ? 3 : 0, 0, 0]}>
            {/* Center Core Light for the cluster */}
            <pointLight position={[0, 0, 0]} intensity={2} color="#00f2ff" distance={8} />

            {cubes.map((props, i) => (
                <Float key={i} speed={1.5 + Math.random() * 2} rotationIntensity={1.5} floatIntensity={1.5}>
                    {/* DragControls allows user to pull cubes away from the cluster */}
                    <DragControls>
                        <RoundedBox
                            args={[1, 1, 1]}
                            radius={0.15}
                            smoothness={4}
                            position={props.position}
                            scale={[props.scale, props.scale, props.scale]}
                        >
                            <meshPhysicalMaterial
                                color="#00ffff"
                                emissive="#0044ff"
                                emissiveIntensity={0.2}
                                roughness={0.1}
                                metalness={0.8}
                                clearcoat={1}
                                clearcoatRoughness={0.1}
                                transmission={0.9}
                                thickness={0.5}
                                ior={1.5}
                            />
                        </RoundedBox>
                    </DragControls>
                </Float>
            ))}
        </group>
    );
}

export default function Hero() {
    return (
        <div className="relative flex flex-col lg:flex-row justify-end lg:justify-center items-center overflow-hidden bg-background-dark pt-24 lg:pt-0 pb-6 lg:pb-0 h-screen">
            {/* Interactive 3D Canvas */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f2ff" />
                    <pointLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />

                    <CubeCluster />

                    <OrbitControls makeDefault enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                    <Environment preset="city" />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={2} />
                </Canvas>
            </div>

            {/* Subtle ambient glows for atmosphere (pointer-events-none) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-40 animate-drift"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] opacity-30"></div>
                <div className="absolute inset-0 cinematic-vignette"></div>
            </div>

            {/* Foreground Content */}
            <main className="relative z-10 px-6 lg:px-24 w-full max-w-[1600px] mx-auto lg:pointer-events-none">
                <div className="text-left space-y-8 w-full lg:w-1/2 max-w-xl lg:pointer-events-auto select-none">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
                            Android, Flutter & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                                Full-Stack Engineer
                            </span>
                        </h1>
                        <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
                            Crafting high-performance digital experiences with a focus on seamless mobile ecosystems and scalable modern architecture.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                        <Link to="/contact" className="glass-primary h-14 rounded-full transition-all flex items-center justify-center gap-3 px-8 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] active:scale-[0.97]">
                            <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">Start Your Project</span>
                            <span className="material-symbols-outlined text-primary text-xl">rocket_launch</span>
                        </Link>
                        <Link to="/projects" className="glass-secondary h-14 rounded-full transition-all flex items-center justify-center gap-3 px-8 hover:scale-[1.02] hover:bg-white/10 active:scale-[0.97]">
                            <span className="text-white/90 font-medium text-xs uppercase tracking-[0.2em]">View My Work</span>
                            <span className="material-symbols-outlined text-secondary text-xl">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
