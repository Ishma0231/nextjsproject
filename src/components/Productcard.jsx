"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();

  const filledStars = Math.floor(item.rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="bg-white/10 p-4 shadow-lg text-black shadow-black/30 rounded-xl backdrop-blur-md h-full hover:scale-105 transition border border-black/30 flex flex-col">

      {/* CLICKABLE AREA */}
      <Link href={`/products/${item.id}`} className="flex flex-col flex-1 cursor-pointer">

        {/* IMAGE */}
        <div className="w-full aspect-square sm:aspect-auto sm:h-40 rounded-md overflow-hidden">
          <img
            src={item.thumbnail}
            className="w-full h-full object-contain"
            alt={item.title}
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1">
          <h2 className="mt-3 font-semibold">{item.title}</h2>

          <p className="text-sm opacity-70 mt-1 line-clamp-2">{item.description}</p>

          <div className="flex items-center gap-1 mt-2 text-yellow-400">
            {"★".repeat(filledStars)}
            {"☆".repeat(emptyStars)}
            <span className="text-xs text-black/90 ml-1">({item.rating})</span>
          </div>

          <p className="text-md font-semibold mt-2 pb-3">
            <span className="text-red-700 text-lg">$</span>
            {item.price}
          </p>
        </div>
      </Link>

      {/* BUTTON */}
      <button
        onClick={() => dispatch(addToCart(item))}
        className="mt-3 w-full py-2 text-black font-semibold border-black shadow-md shadow-black rounded-full bg-yellow-400 hover:text-white transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
