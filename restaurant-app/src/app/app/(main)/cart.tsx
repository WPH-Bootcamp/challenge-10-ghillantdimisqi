import React from 'react';
import { cartGroups } from '@/components/shared/cartdata'; 
import { 
  FaShoppingBag, FaChevronRight, FaMinus, FaPlus, 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok 
} from 'react-icons/fa';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-gray-800 font-sans flex flex-col justify-between">
      
      {/* --- NAVBAR --- */}
      <header className="bg-white px-6 md:px-16 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-2">
          {/* Logo Matahari Red */}
          <div className="w-6 h-6 bg-red-600 rounded-full relative animate-pulse flex items-center justify-center">
            <span className="text-white text-[10px]">☀️</span>
          </div>
          <span className="text-xl font-bold tracking-wide">Foody</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <FaShoppingBag className="text-xl text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              1
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium hidden md:inline">John Doe</span>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-4xl w-full mx-auto px-4 py-10 flex-grow">
        <h1 className="text-2xl font-bold mb-8 text-left text-gray-900">My Cart</h1>

        <div className="space-y-6">
          {cartGroups.map((group) => {
            // Hitung total harga per restoran
            const totalGroupPrice = group.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            return (
              <div key={group.id} className="bg-[#FAF8F5] rounded-2xl p-6 shadow-sm border border-gray-100">
                
                {/* Header Restoran */}
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4 cursor-pointer hover:text-red-600 transition-colors">
                  <span>📦</span>
                  <span>{group.restaurantName}</span>
                  <FaChevronRight className="text-xs text-gray-400" />
                </div>

                {/* List Item Makanan */}
                <div className="divide-y divide-gray-100">
                  {group.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-4">
                      <div className="flex items-center gap-4">
                        {/* Placeholder gambar burger seperti di mock-up */}
                        <div className="w-16 h-16 bg-amber-950 rounded-xl overflow-hidden relative border border-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80" 
                            alt={item.name} 
                            className="w-full h-full object-cover opacity-90"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-medium">{item.name}</p>
                          <p className="text-sm font-bold mt-1">Rp{item.price.toLocaleString('id-ID')}.000</p>
                        </div>
                      </div>

                      {/* Tombol Kuantitas */}
                      <div className="flex items-center gap-3 bg-transparent">
                        <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600">
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button className="w-6 h-6 rounded-full bg-[#D32F2F] text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm">
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Per Restoran (Total & Checkout) */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/60 mt-2">
                  <div>
                    <p className="text-[11px] text-gray-400">Total</p>
                    <p className="text-base font-extrabold text-gray-900">Rp{totalGroupPrice.toLocaleString('id-ID')}.000</p>
                  </div>
                  <button className="bg-[#E53935] text-white text-xs font-semibold px-10 py-2.5 rounded-full hover:bg-red-700 transition-colors shadow-sm">
                    Checkout
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1A1A1A] text-gray-400 text-xs px-6 md:px-20 py-12 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Kolom 1: Info Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-[8px]">☀️</span>
              </div>
              <span className="text-lg font-bold tracking-wide">Foody</span>
            </div>
            <p className="leading-relaxed text-gray-400 pr-4">
              Enjoy homemade flavors & chef's signature dishes, freshly prepared every day. Order online or visit our nearest branch.
            </p>
            <div className="pt-2">
              <p className="font-semibold text-white mb-3">Follow on Social Media</p>
              <div className="flex gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white"><FaFacebookF /></a>
                <a href="#" className="hover:text-white"><FaInstagram /></a>
                <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
                <a href="#" className="hover:text-white"><FaTiktok /></a>
              </div>
            </div>
          </div>

          {/* Kolom 2: Explore */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">All Food</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nearby</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discount</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Seller</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lunch</a></li>
            </ul>
          </div>

          {/* Kolom 3: Help */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Help</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">How to Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment Methods</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track My Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Kolom 4: Spacer/Aksesoris Tambahan (Opsional) */}
          <div className="hidden md:block"></div>

        </div>
      </footer>

    </div>
  );
}