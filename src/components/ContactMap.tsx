import { useState } from 'react';
import { useOrders } from '../hooks/use-orders';
import { OrderTrackingModal } from './OrderTrackingModal';
import { PackageSearch } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export function ContactMap() {
  const { orders, addOrder } = useOrders();
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.details) return;

    setIsSubmitting(true);
    // Simulate network delay
    setTimeout(() => {
      addOrder(formData);
      setFormData({ name: '', phone: '', details: '' });
      setIsSubmitting(false);
      setSuccessMsg('Order submitted successfully!');
      setTimeout(() => setSuccessMsg(''), 3000);
      setIsTrackingOpen(true);
    }, 800);
  };

  return (
    <section id="contact" className="md:col-span-2 lg:col-span-4 bg-[#1E1E1E] rounded-3xl border border-[#2E2E2E] p-6 lg:p-10 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[300px]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-white font-black uppercase text-sm tracking-widest drop-shadow-sm">Submit an Order</h3>
          <p className="text-gray-400 text-xs mt-1">Want to grab something to go? Let us know.</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-[10px] text-[#B3001B] uppercase font-bold tracking-widest border border-red-900/30 px-3 py-1 rounded-full bg-red-950/20">Opens 7:30 AM Daily</p>
          <button 
            onClick={() => setIsTrackingOpen(true)}
            className="flex items-center gap-2 text-[10px] text-white hover:text-[#B3001B] uppercase font-bold tracking-widest transition-colors bg-[#2E2E2E] hover:bg-[#3E3E3E] px-3 py-1.5 rounded-full"
          >
            <PackageSearch className="w-3 h-3" />
            Track Orders
          </button>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-end">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              placeholder="NAME" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="bg-[#0B0B0B]/80 font-bold tracking-widest placeholder:text-white/20 border border-white/5 rounded-2xl px-5 py-4 text-[10px] uppercase flex-grow text-white focus:outline-none focus:border-[#B3001B] transition-colors" 
            />
            <input 
              type="text" 
              placeholder="PHONE" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              className="bg-[#0B0B0B]/80 font-bold tracking-widest placeholder:text-white/20 border border-white/5 rounded-2xl px-5 py-4 text-[10px] uppercase flex-grow text-white focus:outline-none focus:border-[#B3001B] transition-colors" 
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              placeholder="YOUR ORDER DETAILS (e.g. 2 Iced Lattes)" 
              value={formData.details}
              onChange={(e) => setFormData({...formData, details: e.target.value})}
              required
              className="bg-[#0B0B0B]/80 font-bold tracking-widest placeholder:text-white/20 border border-white/5 rounded-2xl px-5 py-4 text-[10px] uppercase flex-grow text-white focus:outline-none focus:border-[#B3001B] transition-colors" 
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[#B3001B] shrink-0 disabled:opacity-50 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-colors shadow-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Order'}
            </button>
          </div>
          {successMsg && <p className="text-sm text-green-500 font-medium">{successMsg}</p>}
        </form>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center sm:items-end border-t border-white/5 pt-4 gap-4">
          <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold text-center sm:text-left">
            © {new Date().getFullYear()} CoffeeBox.Cafe<br className="sm:hidden"/> • BG Mall • Kathmandu 44600
          </p>
          <div className="flex gap-4">
            <span className="text-[9px] font-black text-white/60 hover:text-[#B3001B] transition-colors uppercase tracking-widest cursor-pointer">INSTAGRAM</span>
            <span className="text-[9px] font-black text-white/60 hover:text-[#B3001B] transition-colors uppercase tracking-widest cursor-pointer">FACEBOOK</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isTrackingOpen && (
          <OrderTrackingModal 
            isOpen={isTrackingOpen} 
            onClose={() => setIsTrackingOpen(false)} 
            orders={orders} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
