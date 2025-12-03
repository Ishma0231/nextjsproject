"use client";

import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCartQuantity } from "@/store/cartSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const cartQty = useSelector(selectCartQuantity);

  // Function to close the mobile menu
  const closeMobileMenu = () => setOpen(false);

  // Function to toggle the mobile menu (for the hamburger icon)
  const toggleMobileMenu = () => setOpen((prev) => !prev);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md shadow-md shadow-black/30 border-black/20 text-white">
        <div className="max-w-7xl mx-auto px-4 py-1 flex items-center gap-4">

          {/* LOGO */}
          <div className="relative">
            <Link href="/" className="flex items-center p-0">
              <img
                src="/Images/E7.svg"
                alt="Eloré"
                className="h-15 w-auto object-contain"
              />
            </Link>
          </div>

          {/* SEARCH BAR */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-3 py-2 placeholder-white/47 rounded-md bg-white/6 border text-white shadow-black border-black/30 text-sm focus:outline-none"
            />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 items-center text-lg text-[#efe7cb]">
            <Link href="/Home" className="hover:text-amber-200 transition">Home</Link>
            <Link href="/about" className="hover:text-amber-200 transition">About</Link>
            <Link href="/contact" className="hover:text-amber-200 transition">Contact</Link>

            {/* DESKTOP DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <button className="text-[#efe7cb] hover:text-amber-200 transition">
                Categories ▾
              </button>

              {showCategories && (
                <div className="absolute top-full left-0 bg-black/70 text-white px-4 py-3 rounded-md w-48 flex flex-col gap-3">
                  <Link href="/men" className="hover:text-amber-200">Men</Link>
                  <Link href="/women" className="hover:text-amber-200">Women</Link>
                  <Link href="/categories/beauty" className="hover:text-amber-200">Beauty</Link>
                  <Link href="/categories/fragrances" className="hover:text-amber-200">Fragrances</Link>
                  <Link href="/electronics" className="hover:text-amber-200">Electronics</Link>
                </div>
              )}
            </div>
          </div>

          {/* CART ICON WITH BADGE */}
          <Link href="/cart" className="text-2xl px-2 relative">
            <i className="fa-solid fa-basket-shopping"></i>
            <span className="absolute -top-2 -left-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartQty}
            </span>
          </Link>

          {/* HAMBURGER - TOGGLE LOGIC ADDED */}
          <button
            className="text-3xl md:hidden ml-2"
            onClick={toggleMobileMenu} // Changed to toggleMobileMenu
          >
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>
      </nav>

      {/* MOBILE MENU BACKDROP/OVERLAY - NEW ELEMENT */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={closeMobileMenu} // Click on the backdrop closes the menu
        ></div>
      )}

      {/* MOBILE SLIDE-IN LEFT MENU */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-black/90 text-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-out z-40 md:hidden`}
      >
        <div className="p-6 space-y-6 text-lg relative">

          {/* Close Button (already set up correctly) */}
          <button
            className="text-3xl absolute top-4 right-4"
            onClick={closeMobileMenu} // Changed to closeMobileMenu
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Links: Use closeMobileMenu instead of setOpen(false) for consistency */}
          <Link href="/Home" onClick={closeMobileMenu} className="block pt-20">
            Home
          </Link>

          <Link href="/about" onClick={closeMobileMenu} className="block">
            About
          </Link>

          <Link href="/contact" onClick={closeMobileMenu} className="block">
            Contact
          </Link>

          <details>
            <summary className="cursor-pointer">Categories</summary>
            <div className="flex flex-col pl-4 mt-2 gap-2">
              <Link href="/men" onClick={closeMobileMenu}>Men</Link>
              <Link href="/women" onClick={closeMobileMenu}>Women</Link>
              <Link href="/categories/beauty" onClick={closeMobileMenu}>Beauty</Link>
              <Link href="/categories/fragrances" onClick={closeMobileMenu}>Fragrances</Link>
              <Link href="/electronics" onClick={closeMobileMenu}>Electronics</Link>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}