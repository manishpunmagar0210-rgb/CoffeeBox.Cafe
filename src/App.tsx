import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { MenuPreview } from './components/MenuPreview';
import { Reviews } from './components/Reviews';
import { ContactMap } from './components/ContactMap';
import { Coffee, PhoneCall } from 'lucide-react';
import { useScroll } from './hooks/use-scroll';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const isScrolled = useScroll(300);

  return (
    <div className="bg-[#0B0B0B] text-[#BDBDBD] font-sans min-h-screen flex flex-col selection:bg-[#B3001B] selection:text-white">
      <Navbar />
      
      <main className="flex-grow p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
        <Hero />
        <MenuPreview />
        <Services />
        <About />
        <Reviews />
        <ContactMap />
      </main>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3"
          >
            {/* Quick Call */}
            <a 
              href="tel:01-5913553"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-full shadow-xl hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center"
              aria-label="Call us"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
            
            {/* Order Now (Desktop Floating / Mobile Bottom) */}
            <a 
              href="#contact"
              className="bg-[#B3001B] hover:bg-[#990017] text-white p-4 rounded-full shadow-lg shadow-[#B3001B]/30 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center group"
              aria-label="Order Now"
            >
              <Coffee className="w-5 h-5" />
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100 font-bold ml-0 group-hover:ml-2 text-[10px] tracking-widest uppercase">
                ORDER NOW
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
