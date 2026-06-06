"use strict";
"use client"; // Wajib ditambahkan di Next.js App Router jika ada interaksi/state

import React from "react";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Tambahkan logika autentikasi Anda di sini
    console.log("Login diproses");
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex items-center justify-center p-4 w-full">
      {/* Container Utama */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex max-w-5xl w-full min-h-[600px]">
        {/* Sisi Kiri: Gambar (Disembunyikan di HP, muncul mulai ukuran md) */}
        <div className="hidden md:block md:w-1/2 relative bg-black">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
            alt="Delicious Burger"
            class="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Sisi Kanan: Formulir Login */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 sm:px-16 bg-white">
          {/* Logo & Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 text-red-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0-4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 3.5Zm0 14a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm7.42-11.23a.75.75 0 0 1 .07 1.06l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.05-.07Zm-12.72 12.72a.75.75 0 0 1 .07 1.06l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.06-.07ZM20.5 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Zm-14 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Zm11.86 5.36a.75.75 0 0 1 1.06.07l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 .06-1.06Zm-12.72-12.72a.75.75 0 0 1 1.06.07l1.06 1.06a.75.75 0 1 1-1.06 1.06L4.58 5.7a.75.75 0 0 1 .06-1.06Z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800 tracking-wide">
                Foody
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back</h2>
            <p className="text-sm text-gray-500">
              Good to see you again! Let's eat
            </p>
          </div>

          {/* Tab Tombol: Sign In / Sign Up */}
          <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
            <button
              type="button"
              className="w-1/2 py-2 text-sm font-medium text-gray-800 bg-white rounded-lg shadow-sm"
            >
              Sign in
            </button>
            <button
              type="button"
              className="w-1/2 py-2 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              Sign up
            </button>
          </div>

          {/* Formulir */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Input Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:bg-white text-sm transition-all"
              />
            </div>

            {/* Input Password */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:bg-white text-sm transition-all"
              />
              {/* Icon Mata */}
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>

            {/* Checkbox Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 accent-red-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-xs text-gray-500 select-none"
              >
                Remember Me
              </label>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-[#cb202d] text-white py-3 rounded-full font-medium text-sm hover:bg-red-700 active:scale-[0.99] transition-all shadow-md shadow-red-200 mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
