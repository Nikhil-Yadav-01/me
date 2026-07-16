import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Architecture from './components/Architecture';
import ContactForm from './components/ContactForm';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-display selection:bg-primary/30 antialiased overflow-x-hidden">
      <ScrollProgress />
      {isReady && <Navbar />}
      <Hero onReady={() => setIsReady(true)} />
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="timeline"><Timeline /></section>
      <section id="architecture"><Architecture /></section>
      <section id="contact"><ContactForm /></section>
    </div>
  );
}

export default App;
