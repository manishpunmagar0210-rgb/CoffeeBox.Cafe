import { motion } from 'motion/react';

export function Services() {
  return (
    <section className="lg:col-span-1 bg-[#B3001B] rounded-3xl p-6 lg:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[250px]">
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex gap-4">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-sm backdrop-blur-sm border border-white/10"
          >
            ☕
          </motion.div>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-sm backdrop-blur-sm border border-white/10"
          >
            🛵
          </motion.div>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-sm backdrop-blur-sm border border-white/10"
          >
            🍰
          </motion.div>
        </div>
        <div className="mt-8">
          <h4 className="text-white font-black text-3xl md:text-4xl uppercase leading-[0.9] tracking-tight">Full<br/>Service</h4>
          <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-3 flex items-center gap-2">
            <span>Dine-In</span> <span className="w-1 h-1 rounded-full bg-white/50"></span> <span>Takeaway</span>
          </p>
        </div>
      </div>
      
      {/* Decorative Text Marks */}
      <div className="absolute -bottom-10 -right-6 text-white/10 text-9xl font-black italic tracking-tighter pointer-events-none origin-bottom-right rotate-[-5deg]">
        CAFE
      </div>
    </section>
  );
}
