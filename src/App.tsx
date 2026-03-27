import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Smooth scroll reveal animation
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="orb orb-purple w-[500px] h-[500px] -top-[200px] -right-[100px] animate-pulse" />
          <div className="orb orb-cyan w-[400px] h-[400px] bottom-[20%] -left-[150px] animation-delay-400" />
          <div className="orb orb-pink w-[350px] h-[350px] top-[50%] right-[20%] animation-delay-600 opacity-20" />
        </div>
        
        <Navigation />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
