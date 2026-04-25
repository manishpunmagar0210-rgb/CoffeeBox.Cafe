import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Coffee, UtensilsCrossed, Pizza, Sun, ChevronRight, Menu as MenuIcon } from 'lucide-react';
import { menuData } from '../data/menu';

interface FullMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullMenu({ isOpen, onClose }: FullMenuProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const categoryIcons = [
    <Coffee className="w-5 h-5" />,
    <Sun className="w-5 h-5" />,
    <UtensilsCrossed className="w-5 h-5" />,
    <Pizza className="w-5 h-5" />
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#121212] w-full h-full md:rounded-3xl border border-[#2E2E2E] shadow-2xl relative z-10 flex flex-col overflow-hidden max-w-7xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#2E2E2E] bg-[#1E1E1E]">
              <div className="flex items-center gap-3">
                <div className="bg-[#B3001B] p-2 rounded-xl">
                  <MenuIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">Coffee Box Menu</h2>
                  <p className="text-[#B3001B] text-xs font-bold uppercase tracking-widest mt-0.5">Full Selection</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-[#2E2E2E] hover:bg-[#3E3E3E] text-white p-3 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
              
              {/* Category Sidebar */}
              <div className="md:w-72 bg-[#1A1A1A] border-r border-[#2E2E2E] flex-shrink-0 overflow-x-auto md:overflow-y-auto hide-scrollbar">
                <div className="flex md:flex-col p-4 gap-2">
                  {menuData.map((category, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(idx)}
                      className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-left whitespace-nowrap transition-all duration-300 font-bold tracking-wider text-sm uppercase ${
                        activeCategory === idx 
                          ? 'bg-[#B3001B] text-white shadow-lg shadow-red-900/20' 
                          : 'text-gray-400 hover:bg-[#2E2E2E] hover:text-white'
                      }`}
                    >
                      {categoryIcons[idx]}
                      <span className="flex-grow">{category.category}</span>
                      {activeCategory === idx && <ChevronRight className="w-5 h-5 hidden md:block" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Items List */}
              <div className="flex-grow overflow-y-auto p-6 md:p-10 relative scroll-smooth bg-[#121212]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-4xl mx-auto space-y-12 pb-20"
                  >
                    {menuData[activeCategory].subcategories.map((sub, subIdx) => (
                      <div key={subIdx}>
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-8 pb-4 border-b border-[#2E2E2E] flex items-center gap-4">
                          <span className="w-8 h-1 bg-[#B3001B] rounded-full"></span>
                          {sub.name}
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                          {sub.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="group relative">
                              <div className="flex justify-between items-baseline gap-4">
                                <h4 className="text-white font-bold text-base tracking-wide uppercase group-hover:text-[#B3001B] transition-colors">{item.name}</h4>
                                <div className="flex-grow border-b-2 border-dotted border-[#2E2E2E] opacity-50 relative top-[-6px]"></div>
                                <span className="text-white font-black whitespace-nowrap text-lg">Rs {item.price}</span>
                              </div>
                              {item.desc && (
                                <p className="text-white/40 text-xs mt-2 uppercase tracking-widest leading-relaxed pr-12 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                  {item.desc}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
