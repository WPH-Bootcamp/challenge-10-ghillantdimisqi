"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPlus,
  FaMinus,
  FaShoppingBag,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function CheckoutPage() {
  // State untuk jumlah item (mock data)
  const [item1Qty, setItem1Qty] = useState(1);
  const [item2Qty, setItem2Qty] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("BNI");

  // Perhitungan Harga
  const pricePerItem = 50000;
  const deliveryFee = 10000;
  const serviceFee = 1000;

  const totalPriceItems = (item1Qty + item2Qty) * pricePerItem;
  const grandTotal = totalPriceItems + deliveryFee + serviceFee;

  // Format ke Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    })
      .format(number)
      .replace("Rp", "Rp");
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-800 font-sans flex flex-col justify-between">
      {/* --- NAVBAR --- */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            ✻
          </div>
          <span className="text-2xl font-bold text-gray-900">Foody</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative p-2 bg-gray-100 rounded-full cursor-pointer">
            <FaShoppingBag className="text-gray-600 text-lg" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
              1
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden">
              {/* Ganti src dengan foto profile asli jika ada */}
              <div className="w-full h-full bg-gradient-to-tr from-amber-400 to-red-500"></div>
            </div>
            <span className="text-sm font-medium hidden md:inline">
              John Doe
            </span>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-6xl w-full mx-auto px-4 py-8 md:px-8 flex-grow">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT COLUMN: Address & Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-950 mb-1">
                    Delivery Address
                  </h3>
                  <p className="text-gray-500 text-sm">
                    JL. Sudirman No. 25, Jakarta Pusat, 10220
                  </p>
                  <p className="text-gray-400 text-sm mt-1">0812-3456-7890</p>
                  <button className="text-sm text-gray-500 hover:text-gray-800 font-medium mt-4 underline block">
                    Change
                  </button>
                </div>
              </div>
            </div>

            {/* Restaurant Items Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🍔</span>
                  <h3 className="font-bold text-gray-900">Burger Bang</h3>
                </div>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full font-medium transition">
                  Add item
                </button>
              </div>

              {/* Item List */}
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-none last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center text-3xl shadow-inner">
                      🍔
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Food Name
                      </h4>
                      <p className="text-red-500 font-bold text-sm mt-1">
                        {formatRupiah(pricePerItem)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-full border border-gray-100">
                    <button
                      onClick={() => setItem1Qty(Math.max(0, item1Qty - 1))}
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-500 hover:text-red-500 transition"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="text-sm font-semibold w-4 text-center">
                      {item1Qty}
                    </span>
                    <button
                      onClick={() => setItem1Qty(item1Qty + 1)}
                      className="w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-600 transition"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-none last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center text-3xl shadow-inner">
                      🍔
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Food Name
                      </h4>
                      <p className="text-red-500 font-bold text-sm mt-1">
                        {formatRupiah(pricePerItem)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-1 rounded-full border border-gray-100">
                    <button
                      onClick={() => setItem2Qty(Math.max(0, item2Qty - 1))}
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-500 hover:text-red-500 transition"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="text-sm font-semibold w-4 text-center">
                      {item2Qty}
                    </span>
                    <button
                      onClick={() => setItem2Qty(item2Qty + 1)}
                      className="w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-600 transition"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Payment Method & Summary */}
          <div className="space-y-6">
            {/* Payment Method Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
              <h3 className="font-bold text-gray-900 mb-4 text-sm tracking-wide uppercase">
                Payment Method
              </h3>

              <div className="space-y-3">
                {[
                  { id: "BNI", name: "Bank Negara Indonesia", label: "BNI" },
                  { id: "BRI", name: "Bank Rakyat Indonesia", label: "BRI" },
                  { id: "BCA", name: "Bank Central Asia", label: "BCA" },
                  { id: "Mandiri", name: "Mandiri", label: "Mandiri" },
                ].map((bank) => (
                  <label
                    key={bank.id}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                      selectedPayment === bank.id
                        ? "border-red-500 bg-red-50/10"
                        : "border-gray-100 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-5 bg-gray-100 rounded text-[10px] flex items-center justify-center font-bold text-gray-500 border border-gray-200">
                        {bank.label}
                      </div>
                      <span className="text-xs font-medium text-gray-700">
                        {bank.name}
                      </span>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={selectedPayment === bank.id}
                      onChange={() => setSelectedPayment(bank.id)}
                      className="w-4 h-4 text-red-500 focus:ring-red-500 accent-red-500"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Payment Summary Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
              <h3 className="font-bold text-gray-900 mb-4 text-sm tracking-wide uppercase">
                Payment Summary
              </h3>

              <div className="space-y-3 text-sm text-gray-600 border-b border-gray-100 pb-4">
                <div className="flex justify-between">
                  <span>Price ({item1Qty + item2Qty} items)</span>
                  <span className="font-semibold text-gray-900">
                    {formatRupiah(totalPriceItems)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-gray-900">
                    {formatRupiah(deliveryFee)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span className="font-semibold text-gray-900">
                    {formatRupiah(serviceFee)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center my-4">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-lg font-extrabold text-gray-900">
                  {formatRupiah(grandTotal)}
                </span>
              </div>

              <button className="w-full bg-[#E13239] hover:bg-red-600 text-white font-bold py-3.5 rounded-xl transition shadow-md shadow-red-200 active:scale-[0.99]">
                Buy
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#12161A] text-gray-400 pt-16 pb-12 mt-16 px-6 md:px-12">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✻
              </div>
              <span className="text-2xl font-bold text-white">Foody</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              Enjoy homemade flavors & chef's signature dishes, freshly prepared
              every day. Order online or visit our nearest branch.
            </p>
            <div className="space-y-2 pt-2">
              <h5 className="text-xs font-semibold text-white">
                Follow on Social Media
              </h5>
              <div className="flex gap-3">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok].map(
                  (Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-7 h-7 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full flex items-center justify-center text-xs transition"
                    >
                      <Icon />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-xs">
              {[
                "All Food",
                "Nearby",
                "Discount",
                "Best Seller",
                "Delivery",
                "Lunch",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Help</h4>
            <ul className="space-y-2 text-xs">
              {[
                "How to Order",
                "Payment Methods",
                "Track My Order",
                "FAQ",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column to match spacing or for updates */}
          <div className="hidden md:block"></div>
        </div>
      </footer>
    </div>
  );
}
