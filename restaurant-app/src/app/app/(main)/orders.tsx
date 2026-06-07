import Image from "next/image";

// Data Mock untuk Menu
const menuItems = [
  {
    id: 1,
    name: "Food Name",
    price: "Rp50.000",
    image: "/burger1.jpg",
    hasQuantity: false,
  },
  {
    id: 2,
    name: "Food Name",
    price: "Rp50.000",
    image: "/spaghetti.jpg",
    hasQuantity: true,
    qty: 1,
  },
  {
    id: 3,
    name: "Food Name",
    price: "Rp50.000",
    image: "/fries.jpg",
    hasQuantity: true,
    qty: 1,
  },
  {
    id: 4,
    name: "Food Name",
    price: "Rp50.000",
    image: "/pizza.jpg",
    hasQuantity: false,
  },
  {
    id: 5,
    name: "Food Name",
    price: "Rp50.000",
    image: "/burger2.jpg",
    hasQuantity: false,
  },
  {
    id: 6,
    name: "Food Name",
    price: "Rp50.000",
    image: "/drink.jpg",
    hasQuantity: false,
  },
  {
    id: 7,
    name: "Food Name",
    price: "Rp50.000",
    image: "/icecream.jpg",
    hasQuantity: false,
  },
  {
    id: 8,
    name: "Food Name",
    price: "Rp50.000",
    image: "/hotdog.jpg",
    hasQuantity: false,
  },
];

// Data Mock untuk Review
const reviews = [
  {
    id: 1,
    name: "Michael Brown",
    date: "25 August 2025, 13:38",
    text: "What a fantastic place! The food was delicious, and the ambiance was delightful. A must-visit for anyone looking for a great time!",
  },
  {
    id: 2,
    name: "Sarah Davis",
    date: "25 August 2025, 13:38",
    text: "I can't say enough good things! The service was exceptional, and the menu had so many great options. Definitely a five-star experience!",
  },
  {
    id: 3,
    name: "David Wilson",
    date: "25 August 2025, 13:38",
    text: "This place exceeded my expectations! The staff were welcoming, and the vibe was just right. I'll be returning soon!",
  },
  {
    id: 4,
    name: "Emily Johnson",
    date: "25 August 2025, 13:38",
    text: "Absolutely loved my visit! The staff were friendly and attentive, making sure everything was just right. Can't wait to come back!",
  },
  {
    id: 5,
    name: "Jessica Taylor",
    date: "25 August 2025, 13:38",
    text: "A wonderful experience overall! The food was exquisite, and the service was impeccable. Highly recommend for a special night out!",
  },
  {
    id: 6,
    name: "Alex Smith",
    date: "25 August 2025, 13:38",
    text: "I had an amazing experience! The service was top-notch, and the atmosphere was perfect for a relaxing evening. Highly recommend!",
  },
];

export default function FoodyDetails() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. NAVBAR */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-red-500 font-bold text-xl">
            <span className="w-6 h-6 bg-red-500 rounded-full inline-block"></span>
            Foody
          </div>
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <span className="text-xl">🛒</span>
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                1
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-slate-400"></div>{" "}
                {/* Placeholder Avatar */}
              </div>
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                John Doe
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* 2. HERO GALLERY */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2 relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gray-100">
            {/* Ganti src dengan gambar asli Anda */}
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900 to-stone-900 flex items-center justify-center text-white">
              Main Banner Placeholder
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div className="relative h-32 md:h-44 rounded-2xl overflow-hidden bg-amber-800 flex items-center justify-center text-white">
              Sub Banner 1
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-28 md:h-[11rem] rounded-2xl overflow-hidden bg-orange-900 flex items-center justify-center text-white text-xs">
                Sub 2
              </div>
              <div className="relative h-28 md:h-[11rem] rounded-2xl overflow-hidden bg-yellow-900 flex items-center justify-center text-white text-xs">
                Sub 3
              </div>
            </div>
          </div>
        </section>

        {/* 3. STORE INFO */}
        <section className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-6 mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center p-2 font-bold text-orange-500 text-center text-xs shadow-sm">
              BURGER KING
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Burger King</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <span className="text-yellow-400">★</span>
                <span className="font-semibold text-gray-800">4.9</span>
                <span>•</span>
                <span>Jakarta Selatan</span>
                <span>•</span>
                <span>2.4 km</span>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition self-start sm:self-center">
            <span>↩</span> Share
          </button>
        </section>

        {/* 4. MENU SECTION */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Menu</h2>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-6">
            <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-red-50 text-red-500 border border-red-200">
              All Menu
            </button>
            <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100">
              Food
            </button>
            <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100">
              Drink
            </button>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-100 rounded-2xl p-3 flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-square w-full rounded-xl bg-neutral-900 mb-3 relative flex items-center justify-center text-white text-xs">
                  {/* Image Placeholder */}
                  Food Image
                </div>
                <div>
                  <h3 className="text-xs text-gray-400 mb-1">{item.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold text-gray-900">
                      {item.price}
                    </span>

                    {item.hasQuantity ? (
                      <div className="flex items-center border border-gray-200 rounded-full px-1 py-0.5 bg-gray-50">
                        <button className="w-5 h-5 flex items-center justify-center text-gray-500 text-xs font-bold">
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold text-gray-800">
                          {item.qty}
                        </span>
                        <button className="w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
                          +
                        </button>
                      </div>
                    ) : (
                      <button className="bg-red-500 text-white text-xs font-semibold px-4 py-1 rounded-full hover:bg-red-600 transition">
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="border border-gray-200 px-6 py-2 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-50 transition">
              Show More
            </button>
          </div>
        </section>

        {/* 5. REVIEW SECTION */}
        <section className="mb-12 border-t border-gray-100 pt-8">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Review</h2>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-yellow-400">★</span>
              <span className="font-bold text-gray-800">4.9</span>
              <span className="text-gray-400">(24 Ulasan)</span>
            </div>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-slate-300"></div>{" "}
                  {/* Avatar */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-gray-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2 text-xs text-yellow-400">
                  ★★★★★
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="border border-gray-200 px-6 py-2 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-50 transition">
              Show More
            </button>
          </div>
        </section>
      </main>

      {/* 6. FOOTER */}
      <footer className="bg-[#0b0f19] text-gray-400 text-xs py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <span className="w-5 h-5 bg-red-500 rounded-full inline-block"></span>{" "}
              Foody
            </div>
            <p className="leading-relaxed mb-4 text-gray-400">
              Enjoy homemade flavors & chef's signature dishes, freshly prepared
              every day. Order online or visit our nearest branch.
            </p>
            <div className="flex gap-3 mt-2">
              {/* Social Icons Placeholder */}
              <span className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-[10px] text-white cursor-pointer">
                f
              </span>
              <span className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-[10px] text-white cursor-pointer">
                ig
              </span>
              <span className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-[10px] text-white cursor-pointer">
                in
              </span>
              <span className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-[10px] text-white cursor-pointer">
                tk
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Explore</h4>
            <ul className="space-y-2.5">
              <li className="hover:text-white cursor-pointer">All Food</li>
              <li className="hover:text-white cursor-pointer">Nearby</li>
              <li className="hover:text-white cursor-pointer">Discount</li>
              <li className="hover:text-white cursor-pointer">Best Seller</li>
              <li className="hover:text-white cursor-pointer">Delivery</li>
              <li className="hover:text-white cursor-pointer">Lunch</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Help</h4>
            <ul className="space-y-2.5">
              <li className="hover:text-white cursor-pointer">How to Order</li>
              <li className="hover:text-white cursor-pointer">
                Payment Methods
              </li>
              <li className="hover:text-white cursor-pointer">
                Track My Order
              </li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div className="hidden md:block">
            {/* Kolom kosong atau tambahan informasi sesuai kebutuhan */}
          </div>
        </div>
      </footer>
    </div>
  );
}
