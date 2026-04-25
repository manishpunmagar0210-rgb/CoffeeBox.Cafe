import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FullMenu } from './FullMenu';

export function MenuPreview() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  const menuItems = [
    {
      name: 'Iced Vanilla Latte',
      desc: 'Double Shot • Creamy',
      price: 'Rs 300',
      icon: '☕'
    },
    {
      name: 'Classic Espresso',
      desc: 'Strong • Pure • Roasted',
      price: 'Rs 150',
      icon: '☕'
    },
    {
      name: 'Chocolate Fudge Cake',
      desc: 'Indulgent • Moist',
      price: 'Rs 350',
      icon: '🍰'
    },
    {
      name: 'Spicy Club Sandwich',
      desc: 'Toasted • Savory',
      price: 'Rs 450',
      icon: '🥪'
    },
    {
      name: 'Matcha Frappuccino',
      desc: 'Blended • Sweet',
      price: 'Rs 380',
      icon: '🥤'
    },
    {
      name: 'Caramel Macchiato',
      desc: 'Vanilla • Caramel Drizzle',
      price: 'Rs 320',
      icon: '☕'
    }
  ];

  return (
    <section id="menu" className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#1E1E1E] rounded-3xl border border-[#2E2E2E] p-6 lg:p-10 flex flex-col relative overflow-hidden shadow-2xl">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5 relative z-10">
        <h3 className="text-white font-black uppercase text-sm tracking-widest drop-shadow-sm">Signature Menu</h3>
        <span className="text-[10px] text-[#B3001B] font-bold tracking-widest uppercase bg-red-950/30 px-3 py-1 rounded-full border border-red-900/30">From Rs 150</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-grow relative z-10">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-center gap-4 group p-3 hover:bg-[#0B0B0B]/50 rounded-2xl transition-all border border-transparent hover:border-white/5 cursor-pointer backdrop-blur-sm"
          >
            <div className="w-14 h-14 bg-[#0B0B0B] rounded-xl border border-white/5 flex items-center justify-center text-xl font-bold text-white/40 group-hover:text-white/80 group-hover:scale-110 transition-all shadow-inner">
              <span className="group-hover:-rotate-6 transition-transform block">{item.icon}</span>
            </div>
            <div className="flex-grow">
              <p className="text-white font-bold text-sm tracking-wide group-hover:text-[#B3001B] transition-colors">{item.name}</p>
              <p className="text-[10px] text-white/40 uppercase mt-0.5 tracking-wider">{item.desc}</p>
            </div>
            <div className="text-right flex-shrink-0 relative top-0.5">
              <p className="text-[10px] text-[#B3001B] font-black uppercase tracking-wider">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <button 
        onClick={() => setIsFullMenuOpen(true)}
        className="w-full mt-6 py-4 border-t border-white/5 text-[11px] font-black uppercase tracking-widest text-[#B3001B] hover:text-red-400 transition-colors flex items-center justify-center gap-2 group z-10 relative bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"
      >
        Browse Full Catalog 
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#B3001B]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <FullMenu isOpen={isFullMenuOpen} onClose={() => setIsFullMenuOpen(false)} />
    </section>
  );
}
