"use client"; // Wajib di Next.js App Router untuk interaksi form

import { Import } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function RestaurantCard() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
      {/* Logo/Image Placeholder */}
      <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-content-center flex-shrink-0 p-2">
        <div className="w-full h-full bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
          BURGER KING
        </div>
      </div>

      {/* Detail Konten */}
      <div className="flex flex-col gap-0.5">
        <h4 className="font-bold text-gray-800 text-sm">Burger King</h4>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span className="text-amber-500">★</span>
          <span className="font-semibold text-gray-700">4.9</span>
        </div>
        <p className="text-xs text-gray-400">Jakarta Selatan · 2.4 km</p>
      </div>
    </div>
  );
}

export default function Home() {
  // Array dummy untuk melakukan looping 12 kartu restoran seperti di gambar
  const dummyRestaurants = Array.from({ length: 12 });

  const categories = [
    { icon: "🍔", label: "All Restaurant" },
    { icon: "📍", label: "Nearby" },
    { icon: "🏷️", label: "Discount" },
    { icon: "🏆", label: "Best Seller" },
    { icon: "🛵", label: "Delivery" },
    { icon: "🍱", label: "Lunch" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* --- HERO SECTION --- */}
      <div className="bg-black relative h-[480px] bg-cover bg-center flex flex-col justify-between p-6 md:px-12 md:py-8">
        {/* Navbar */}
        <div className="flex justify-between items-center w-full">
          <div className="text-white font-black text-2xl tracking-wide flex items-center gap-1">
            <span className="text-yellow-500">☀️</span> Foody
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 text-sm font-semibold text-white border border-white/40 rounded-full hover:bg-white/10 transition">
              Sign In
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-gray-900 bg-amber-100 rounded-full hover:bg-amber-200 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Search & Title */}
        <div className="w-full max-w-2xl mx-auto text-center mb-16 flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Explore Culinary Experiences
          </h1>
          <p className="text-gray-300 text-xs md:text-sm max-w-md">
            Search and refine your choice to discover the perfect restaurant.
          </p>

          {/* Search Bar */}
          <div className="w-full mt-2 relative">
            <input
              type="text"
              placeholder="Search restaurants, food and drink"
              className="w-full py-3.5 px-6 rounded-full bg-white/90 backdrop-blur-sm text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 pl-12 shadow-lg"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              🔍
            </span>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-50 rounded-t-3xl"></div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16 -mt-4 relative z-10">
        {/* --- CATEGORIES SECTION --- */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-xl group-hover:scale-110 transition shadow-sm">
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-gray-600 text-center group-hover:text-orange-600">
                {cat.label}
              </span>
            </div>
          ))}
        </div>

        {/* --- RECOMMENDED SECTION --- */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">Recommended</h3>
          <button className="text-xs font-semibold text-rose-500 hover:underline">
            See All
          </button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dummyRestaurants.map((_, index) => (
            <RestaurantCard key={index} />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-full text-xs font-semibold text-gray-600 shadow-sm transition">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const exploreLinks = [
    { name: "All Food", href: "#" },
    { name: "Nearby", href: "#" },
    { name: "Discount", href: "#" },
    { name: "Best Seller", href: "#" },
    { name: "Delivery", href: "#" },
    { name: "Lunch", href: "#" },
  ];

  const helpLinks = [
    { name: "How to Order", href: "#" },
    { name: "Payment Method", href: "#" },
    { name: "Track My Order", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#12161A] text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {/* Kolom 1: Branding & Deskripsi */}
        <div className="flex flex-col space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Representasi Logo Merah seperti Matahari/Bunga */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-4 border-dashed border-[#E53E3E] animate-spin-slow"></div>
              <div className="w-3 h-3 bg-[#E53E3E] rounded-full"></div>
            </div>
            <span className="text-2xl font-bold tracking-wide">Foody</span>
          </div>

          {/* Deskripsi */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Enjoy homemade flavors & chefs signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </p>

          {/* Sosial Media */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-300">
              Follow on Social Media
            </h4>
            <div className="flex space-x-3">
              {["f", "📸", "in", ""].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1A2026] hover:bg-gray-700 transition-colors text-xs font-bold text-gray-400 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom 2: Explore Links */}
        <div className="flex flex-col space-y-4 md:pl-12">
          <h3 className="text-base font-bold text-white tracking-wide">
            Explore
          </h3>
          <ul className="space-y-3">
            {exploreLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Help Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-base font-bold text-white tracking-wide">Help</h3>
          <ul className="space-y-3">
            {helpLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}