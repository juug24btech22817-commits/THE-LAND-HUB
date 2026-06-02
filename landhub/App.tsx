import React, { useEffect, useState, Suspense, Component } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout & Sections
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { FeaturedPlots } from './components/sections/FeaturedPlots';
import { SiteHighlights } from './components/sections/SiteHighlights';
import { TrustSection } from './components/sections/TrustSection';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

// UI Components
import { Preloader } from './components/ui/Preloader';
import { BookingModal } from './components/ui/BookingModal';
import { ImageGalleryModal } from './components/ui/ImageGalleryModal';
import { PlotDetailsModal } from './components/ui/PlotDetailsModal';
import { FloatingActionButton, MobileStickyBar } from './components/ui/ActionButtons';
import { Antigravity } from './components/Antigravity';

// Types & Data
import { Plot } from './types';

/**
 * Error Boundary Component for robust error handling
 */
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleScheduleVisit = (plot?: Plot) => {
    if (plot) setSelectedPlot(plot);
    setIsBookingModalOpen(true);
  };

  const handleViewImage = (plot: Plot) => {
    setSelectedPlot(plot);
    setIsGalleryModalOpen(true);
  };

  const handleViewDetails = (plot: Plot) => {
    setSelectedPlot(plot);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="relative antialiased selection:bg-[#c5a059] selection:text-white bg-[#fdfdfd] noise-bg">
      {/* Antigravity Background Layer */}
      <div className="fixed inset-0 z-[-10] pointer-events-none opacity-30">
        <Antigravity
          count={300}
          magnetRadius={10}
          ringRadius={10}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={2}
          lerpSpeed={0.1}
          color="#29d4ff"
          autoAnimate={false}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Navbar onScheduleVisit={() => handleScheduleVisit()} />

      <main>
        <Hero />
        <FeaturedPlots 
          onBookVisit={handleScheduleVisit} 
          onViewImage={handleViewImage}
          onViewDetails={handleViewDetails}
        />
        <SiteHighlights />
        <TrustSection />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Global Action Buttons */}
      <FloatingActionButton onScheduleVisit={() => handleScheduleVisit()} />
      <MobileStickyBar onScheduleVisit={() => handleScheduleVisit()} />

      {/* Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        selectedPlot={selectedPlot}
      />
      <ImageGalleryModal 
        isOpen={isGalleryModalOpen} 
        onClose={() => setIsGalleryModalOpen(false)} 
        selectedPlot={selectedPlot}
      />
      <PlotDetailsModal 
        isOpen={isDetailsModalOpen} 
        onClose={() => setIsDetailsModalOpen(false)} 
        selectedPlot={selectedPlot}
        onBookVisit={handleScheduleVisit}
      />
    </div>
  );
};

export default App;
