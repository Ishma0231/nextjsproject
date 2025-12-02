"use client";

import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "@/store/store";
import { addToCart, decreaseQty, removeFromCart } from "@/store/cartSlice";
import CheckoutSummary from "@/components/checkout.jsx"; 
import EmptyCart from "@/components/EmptyCart.jsx"
export default function CartPage() {
  const { items } = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-white px-6 pt-12 pb-10">
      <h1 className="text-4xl font-semibold mb-8 text-black font-serif italic first-letter:text-lime-600">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* LEFT (cart items list) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-md border border-black/10">

          {items.length === 0 && (
            <EmptyCart/>
          )}

          {items.map((item:any) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-6 px-2 border-b border-gray-200 shadow-[2px_2px_25px_1px_rgba(0,0,0,0.2)]  "
            >
              {/* Image */}
              <div className="w-20 h-20 mb-0 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src={item.thumbnail} className="object-contain w-full h-full" />
              </div>

              {/* Details */}
              <div className="flex-1 py-1">
                <h2 className="text-lg font-semibold text-black">{item.title}</h2>

                {/* Quantity controls */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    className="px-3 py-1 bg-gray-200 text-amber-600 text-lg rounded"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    -
                  </button>

                  <span className="font-semibold text-black">{item.quantity}</span>

                  <button
                    className="px-3 py-1 bg-gray-200 rounded  text-amber-600 text-lg"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <p className="text-lg font-semibold text-amber-500">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              {/* Delete */}
              <button
                className="text-red-500 text-xl ml-4"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                🗑
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT: Your already-made checkout component */}
        <CheckoutSummary />
      </div>
    </div>
  );
}
