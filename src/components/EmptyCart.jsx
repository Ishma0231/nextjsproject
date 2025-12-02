"use client";

import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex justify-center items-center w-[300px] h-[300px] mb-6">
      <img
        src="/Images/eCART.jpg"
        alt="Empty Cart"
        className="w-full h-full opacity-80 object-contain "
      />
      </div>

      <h2 className="text-2xl font-semibold text-black">Your cart is empty</h2>
      <p className="text-gray-600 mt-2">Looks like you haven't added anything yet.</p>

      <Link href="/Home">
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-amber-500 hover:shadow-black/30 shadow-lg transition">
          Start Shopping
        </button>
      </Link>
    </div>
  );
}
