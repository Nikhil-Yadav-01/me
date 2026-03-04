import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Architecture from './components/Architecture';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background-dark text-slate-100 font-display selection:bg-primary/30 antialiased overflow-hidden">
        <Navbar />
        <div className="flex-1 w-full flex flex-col relative">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
