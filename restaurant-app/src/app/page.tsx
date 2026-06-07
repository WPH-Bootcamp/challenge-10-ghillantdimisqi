import Login from "@/app/app/(auth)/login/page";
import Register from "@/app/app/(auth)/register/page";

import Homes from "@/app/app/(main)/page";
import Resto from "@/app/app/(main)/resto";
import Cart from "@/app/app/(main)/cart";
import Order from "@/app/app/(main)/orders";
import Chechout from "@/app/app/(main)/chechout";


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Login />

      <Homes />
      <Resto />
      <Cart />
      <Order />
      <Chechout />
  
      <Register />
    </main>
  );
}
