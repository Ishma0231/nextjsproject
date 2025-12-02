"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "@/store/cartSlice";
import { selectCart } from "@/store/store";

export default function Checkout() {
  const { items } = useSelector(selectCart);
  const dispatch = useDispatch();

  // Calculate total price
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="pt-12 p-6 min-h-screen flex flex-col gap-6 bg-white text-black shadow-[7px_15px_20px_2px_rgba(0,0,0,0.3)] ">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <div className="flex justify-center items-center w-full fr-1">
            <img
            src="/Images/check.png"
            alt="empty cart"
            className="w-full h-full object-contaiin"

            />
            
        </div>
      </div>
    );
  }

  return (
    <div className="pt-1 p-6 min-h-screen bg-white text-black shadow-[7px_15px_20px_2px_rgba(0,0,0,0.3)] ">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b pb-4"
          >
            {/* Product Image */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-20 h-20 rounded object-contain"
            />

            {/* Product Info */}
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>

              {/* Quantity Buttons */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span className="font-medium">{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* TOTAL SECTION */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <p className="mt-2 text-lg">
          Total:  
          <span className="font-semibold text-red-600"> ${total.toFixed(2)}</span>
        </p>

        <button
          className="mt-4 w-full py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
