
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black antialiased">
      <Navbar />
      <main className="relative">
        <Hero />
        {/* Next sections have higher z-index to slide over the receding hero */}
        <div className="relative z-20 bg-black">
          <About />
          <Portfolio />
          <Services />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
