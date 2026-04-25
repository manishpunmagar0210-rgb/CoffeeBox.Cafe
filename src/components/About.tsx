import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="lg:col-span-1 bg-[#1E1E1E] rounded-3xl border border-[#2E2E2E] p-6 lg:p-10 flex flex-col justify-between overflow-hidden relative shadow-2xl min-h-[300px]">
      <div className="relative z-10 h-full flex flex-col">
        <h3 className="text-white font-black uppercase text-sm tracking-widest mb-4">Our Roastery</h3>
        
        <div className="flex-grow flex flex-col justify-center">
          <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium">
            Coffee Box is a cozy café-restaurant offering freshly brewed coffee, delicious meals, and quick bites in a warm and welcoming space. With an open kitchen, bar counter, and highway view, we're the perfect spot to relax with friends, enjoy family time, or grab a quick coffee on the go.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-auto">
            <div className="bg-[#0B0B0B] rounded-2xl p-4 border border-white/5">
              <span className="text-[#B3001B] font-black text-2xl md:text-3xl block mb-1">100%</span>
              <span className="text-[9px] text-white/50 font-bold uppercase tracking-widest">Local Beans</span>
            </div>
            <div className="bg-[#0B0B0B] rounded-2xl p-4 border border-white/5">
              <span className="text-white font-black text-2xl md:text-3xl block mb-1">5+</span>
              <span className="text-[9px] text-white/50 font-bold uppercase tracking-widest">Years Craft</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#B3001B]/5 rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
    </section>
  );
}
