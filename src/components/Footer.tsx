import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 group mb-6">
              <Coffee className="w-8 h-8 text-[#B3001B]" />
              <span className="text-2xl font-bold font-['Poppins'] tracking-tight text-white">
                CoffeeBox<span className="text-[#B3001B]">.Cafe</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Premium café experience in the heart of Kathmandu. Serving perfectly brewed coffee and delicious bites every day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#B3001B] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#B3001B] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#B3001B] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-['Poppins']">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-[#B3001B] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#B3001B] transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-[#B3001B] transition-colors">Our Menu</a></li>
              <li><a href="#reviews" className="hover:text-[#B3001B] transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#B3001B] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-['Poppins']">Visit Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>BG Mall</li>
              <li>Kathmandu 44600</li>
              <li>Nepal</li>
              <li className="pt-4 text-white font-medium">01-5913553</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CoffeeBox.Cafe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
