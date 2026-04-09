import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Architecture from './components/Architecture';
import ContactForm from './components/ContactForm';

function App() {
  const [isReady, setIsReady] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-background-dark text-slate-100 font-display selection:bg-primary/30 antialiased overflow-hidden">
        {isReady && <Navbar />}
        <div className="flex-1 w-full flex flex-col relative">
          <Routes>
            <Route path="/" element={<Hero onReady={() => setIsReady(true)} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
