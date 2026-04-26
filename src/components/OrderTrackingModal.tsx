import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, CheckCircle2, Coffee, Package } from 'lucide-react';
import { Order, OrderStatus } from '../hooks/use-orders';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
}

const statusSteps: { id: OrderStatus; label: string; icon: any }[] = [
  { id: 'pending', label: 'Order Received', icon: Clock },
  { id: 'preparing', label: 'Preparing', icon: Coffee },
  { id: 'ready', label: 'Ready for Pickup', icon: Package },
  { id: 'completed', label: 'Completed', icon: CheckCircle2 },
];

export function OrderTrackingModal({ isOpen, onClose, orders }: OrderTrackingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#1E1E1E] w-full max-w-2xl rounded-3xl border border-[#2E2E2E] shadow-2xl relative z-10 flex flex-col max-h-[85vh] overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-[#2E2E2E] bg-[#1a1a1a]">
          <div>
            <h2 className="text-xl font-black text-white uppercase tracking-widest">Order Tracking</h2>
            <p className="text-gray-400 text-xs mt-1">View your recent orders</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white bg-[#2E2E2E] p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow bg-[#121212]">
          {orders.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-[#2E2E2E] mx-auto mb-4" />
              <p className="text-gray-400 text-sm font-medium">No orders found.</p>
              <p className="text-gray-500 text-xs mt-2">Submit an order to start tracking.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => {
                const currentStatusIndex = statusSteps.findIndex(s => s.id === order.status);
                
                return (
                  <div key={order.id} className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#2E2E2E]">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-xs text-[#B3001B] font-bold tracking-widest mb-1">
                          ORDER #{order.id}
                        </div>
                        <h4 className="text-white font-bold">{order.details}</h4>
                        <p className="text-gray-400 text-xs mt-1">
                          {new Date(order.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-[#2E2E2E] text-white text-xs font-bold rounded-full uppercase">
                          {order.status}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative pt-4">
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-[#2E2E2E] -translate-y-1/2 rounded-full" />
                      <div 
                        className="absolute top-1/2 left-0 h-1 bg-[#B3001B] -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out"
                        style={{ width: `${(Math.max(0, currentStatusIndex) / (statusSteps.length - 1)) * 100}%` }}
                      />
                      
                      <div className="relative flex justify-between">
                        {statusSteps.map((step, idx) => {
                          const isCompleted = idx <= currentStatusIndex;
                          const isActive = idx === currentStatusIndex;
                          const Icon = step.icon;
                          
                          return (
                            <div key={step.id} className="flex flex-col items-center">
                              <div 
                                className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 transition-colors duration-300 ${
                                  isCompleted 
                                    ? 'bg-[#B3001B] text-white shadow-[0_0_15px_rgba(179,0,27,0.5)]' 
                                    : 'bg-[#2E2E2E] text-gray-500'
                                }`}
                              >
                                <Icon className={`w-4 h-4 ${isActive ? 'animate-pulse' : ''}`} />
                              </div>
                              <span className={`text-[10px] font-bold uppercase tracking-widest mt-2 hidden sm:block ${
                                isCompleted ? 'text-white' : 'text-gray-500'
                              }`}>
                                {step.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
