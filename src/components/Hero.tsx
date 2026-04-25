import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden bg-[#1E1E1E] border border-[#2E2E2E] group min-h-[500px] md:min-h-[600px] shadow-2xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0B0B0B]">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
          alt="Coffee being poured" 
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms] group-hover:opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        {/* Aesthetic Background Mesh */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B3001B]/20 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-20 flex flex-col justify-end h-full p-8 md:p-10 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1.5 rounded-full text-[10px] font-bold border border-yellow-500/20 uppercase tracking-widest flex items-center gap-1.5">
              <Star className="w-3 h-3 fill-current" /> 4.8 RATING
            </span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">BG MALL, KATHMANDU</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight uppercase mb-6 drop-shadow-2xl">
            Fresh Coffee.<br/>
            <span className="text-[#B3001B] relative inline-block">
              Bold Taste.
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#B3001B]/30 blur-sm rounded-full"></span>
            </span><br/>
            Every Day.
          </h1>
          
          <p className="text-white/70 max-w-md text-sm md:text-base mb-10 leading-relaxed font-medium">
            Experience the premium café culture at the heart of Kathmandu. From artisanal beans to artisan moments, we brew perfection in every cup.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap sm:flex-nowrap gap-4"
        >
          <button className="bg-[#B3001B] hover:bg-red-700 text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(179,0,27,0.3)] whitespace-nowrap">
            Grab Your Cup
          </button>
          <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest border border-white/10 transition-all hover:border-white/30 whitespace-nowrap backdrop-blur-sm">
            Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
