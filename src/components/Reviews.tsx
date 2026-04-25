import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: 'Priya S.',
      text: 'Best café in Kathmandu! Amazing coffee, affordable prices, and excellent atmosphere for chilling.',
      source: 'GOOGLE GUIDE'
    },
    {
      name: 'Ramesh K.',
      text: 'The cold brew is to die for. Fast service and really friendly staff. Highly recommend!',
      source: 'VERIFIED REVIEWER'
    }
  ];

  return (
    <section id="reviews" className="md:col-span-2 lg:col-span-2 bg-[#1E1E1E] rounded-3xl border border-[#2E2E2E] p-6 lg:p-10 flex flex-col justify-center overflow-hidden relative shadow-2xl min-h-[300px]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 h-full w-full">
        <div className="flex-shrink-0 text-center md:text-left flex flex-col justify-center">
          <p className="text-white font-black text-5xl md:text-7xl mb-1 drop-shadow-lg">4.8</p>
          <p className="text-[#B3001B] text-[10px] font-bold tracking-widest uppercase">Verified Reviews</p>
          <div className="flex justify-center md:justify-start mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
        </div>
        
        <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 flex-grow space-y-6 flex flex-col justify-center">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-white flex-grow italic text-sm leading-relaxed mb-2">"{review.text}"</p>
              <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">— {review.name}, {review.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B3001B]/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 translate-x-1/4"></div>
    </section>
  );
}
