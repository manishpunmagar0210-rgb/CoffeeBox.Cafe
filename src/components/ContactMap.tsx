export function ContactMap() {
  return (
    <section id="contact" className="md:col-span-2 lg:col-span-4 bg-[#1E1E1E] rounded-3xl border border-[#2E2E2E] p-6 lg:p-10 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[300px]">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-white font-black uppercase text-sm tracking-widest drop-shadow-sm">Get in Touch</h3>
        <p className="text-[10px] text-[#B3001B] uppercase font-bold tracking-widest border border-red-900/30 px-3 py-1 rounded-full bg-red-950/20">Opens 7:30 AM Daily</p>
      </div>

      <div className="flex-grow flex flex-col justify-end">
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <input type="text" placeholder="NAME" className="bg-[#0B0B0B]/80 font-bold tracking-widest placeholder:text-white/20 border border-white/5 rounded-2xl px-5 py-4 text-[10px] uppercase flex-grow text-white focus:outline-none focus:border-[#B3001B] transition-colors" />
          <input type="text" placeholder="PHONE" className="bg-[#0B0B0B]/80 font-bold tracking-widest placeholder:text-white/20 border border-white/5 rounded-2xl px-5 py-4 text-[10px] uppercase flex-grow text-white focus:outline-none focus:border-[#B3001B] transition-colors" />
          <button className="bg-[#B3001B] hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-colors shadow-lg">Submit</button>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center sm:items-end border-t border-white/5 pt-4 gap-4">
          <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold text-center sm:text-left">
            © {new Date().getFullYear()} CoffeeBox.Cafe<br className="sm:hidden"/> • BG Mall • Kathmandu 44600
          </p>
          <div className="flex gap-4">
            <span className="text-[9px] font-black text-white/60 hover:text-[#B3001B] transition-colors uppercase tracking-widest cursor-pointer">INSTAGRAM</span>
            <span className="text-[9px] font-black text-white/60 hover:text-[#B3001B] transition-colors uppercase tracking-widest cursor-pointer">FACEBOOK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
