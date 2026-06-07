import React from "react";

// ==========================================
// 1. MINI COMPONENTS (Navbar, Sidebar, Card, Footer)
// ==========================================

function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl select-none">
            ✺
          </div>
          <span className="text-xl font-bold text-gray-950 tracking-tight">
            Foody
          </span>
        </div>

        {/* User Profile & Cart */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1,0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0,1-1.12-1.243l1.264-12A1.125 1.125 0 0,1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Zm7.5 0a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Z"
              />
            </svg>
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          <div className="flex items-center gap-2 border-l pl-4 border-gray-200">
            {/* Avatar menggunakan div penampung warna abu-abu (bisa diganti tag <Image> jika ada file-nya) */}
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white font-semibold">
              JD
            </div>
            <span className="text-sm font-medium text-gray-700 hidden sm:block">
              John Doe
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function FilterSidebar() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-6">
      <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">
        Filter
      </h2>

      {/* Distance Section */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-3">Distance</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="accent-red-500 w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
            />
            <span className="font-medium text-gray-900">Nearby</span>
          </label>
          {["Within 1 km", "Within 3 km", "Within 5 km"].map((dist) => (
            <label
              key={dist}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-900"
            >
              <input
                type="checkbox"
                className="accent-red-500 w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
              />
              <span>{dist}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Price Section */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-3">Price</h3>
        <div className="space-y-2">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xs font-semibold text-gray-400">
              Rp
            </span>
            <input
              type="number"
              placeholder="Minimum Price"
              className="w-full pl-9 pr-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            />
          </div>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xs font-semibold text-gray-400">
              Rp
            </span>
            <input
              type="number"
              placeholder="Maximum Price"
              className="w-full pl-9 pr-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Rating Section */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-3">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <label
              key={star}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-gray-900"
            >
              <input
                type="checkbox"
                className="accent-red-500 w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
              />
              <span className="text-amber-400 text-base">★</span>
              <span className="font-medium">{star}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

interface RestaurantProps {
  name: string;
  rating: number;
  location: string;
  distance: string;
}

function RestaurantCard({ name, rating, location, distance }: RestaurantProps) {
  return (
    <div className="bg-white border border-gray-100/70 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition duration-200 cursor-pointer">
      {/* Container Logo Orange ala Burger King Mockup */}
      <div className="w-20 h-20 bg-[#FFF3EB] rounded-2xl flex items-center justify-center p-2 flex-shrink-0 select-none">
        <div className="text-center font-black text-[11px] text-[#D62300] tracking-tighter leading-none">
          BURGER
          <br />
          <span className="text-[13px]">KING</span>
        </div>
      </div>

      {/* Info Details */}
      <div className="flex-grow space-y-1">
        <h3 className="font-bold text-gray-900 text-base leading-tight">
          {name}
        </h3>

        <div className="flex items-center gap-1 text-sm font-semibold text-gray-800">
          <span className="text-amber-400 text-lg leading-none">★</span>
          <span>{rating.toFixed(1)}</span>
        </div>

        <div className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
          <span>{location}</span>
          <span>•</span>
          <span>{distance}</span>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                ✺
              </div>
              <span className="text-lg font-bold tracking-tight">Foody</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400 max-w-xs">
              Enjoy homemade flavors & chef's signature dishes, freshly prepared
              every day. Order online or visit our nearest branch.
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold text-white mb-3">
                Follow on Social Media
              </p>
              <div className="flex gap-2">
                {["fb", "ig", "in", "tk"].map((icon) => (
                  <span
                    key={icon}
                    className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-[10px] font-bold text-white hover:bg-gray-800 cursor-pointer transition uppercase"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                "All Food",
                "Nearby",
                "Discount",
                "Best Seller",
                "Delivery",
                "Lunch",
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-white transition cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Help
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                "How to Order",
                "Payment Methods",
                "Track My Order",
                "FAQ",
                "Contact Us",
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-white transition cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column to match design spacing layout */}
          <div className="hidden md:block"></div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/60 pt-6 text-center text-[11px] text-gray-500">
          &copy; {new Date().getFullYear()} Foody. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// 2. MAIN PAGE LAYOUT
// ==========================================

export default function Home() {
  // Looping data restaurant sebanyak 8 kali seperti pada gambar UI Anda
  const restaurantsData = Array(8).fill({
    name: "Burger King",
    rating: 4.9,
    location: "Jakarta Selatan",
    distance: "2.4 km",
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between font-sans antialiased">
      {/* Bagian Atas / Header */}
      <Navbar />

      {/* Konten Utama */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
          All Restaurant
        </h1>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Sisi Kiri: Sidebar Filter */}
          <aside className="w-full md:w-64 flex-shrink-0 sticky top-24">
            <FilterSidebar />
          </aside>

          {/* Sisi Kanan: Grid Restoran */}
          <section className="w-full flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {restaurantsData.map((restaurant, index) => (
                <RestaurantCard
                  key={index}
                  name={restaurant.name}
                  rating={restaurant.rating}
                  location={restaurant.location}
                  distance={restaurant.distance}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Bagian Bawah / Footer */}
      <Footer />
    </div>
  );
}
