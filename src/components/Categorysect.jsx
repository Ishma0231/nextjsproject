"use client";
import Link from "next/link";
export default function Categorysect() {
  return (
   
    <div className="max-w-6xl mx-auto mt-10 px-6 py-10 bg-white rounded-none md:rounded-full shadow-[10px_15px_1px_5px_rgba(0,0,0,0.2)]">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-black mb-8 text-center font-serif italic" >
         <span className=" text-black  ">E</span>xplore Our Categories
      </h2>

      {/* Categories in Circular Layout */}
      <div className="flex flex-wrap justify-center gap-6" >
        {/* MEN */}
        <Link
          href="/men"
          className="flex flex-col items-center w-24"
        >
          <div  className="w-34 h-34 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/men.jpg"
              alt="Men"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg font-semibold text-amber-900 text-center">Men</span>
        </Link>

        {/* WOMEN */}
        <Link
          href="/women"
          className="flex flex-col items-center w-24"
        >
          <div  className="w-34 h-34 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/wi.jpg"
              alt="Women"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg font-semibold text-black text-center">Women</span>
        </Link>

        {/* ELECTRONICS */}
        <Link
          href="/electronics"
          className="flex flex-col items-center w-24"
        >
          <div  className="w-34 h-34 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/head03.jpg"
              alt="Electronics"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg font-semibold text-[#84592B] text-center">Electronics</span>
        </Link>

        {/* BEAUTY */}
        <Link
          href="/categories/beauty"
          className="flex flex-col items-center w-24"
        >
          <div  className="w-34 h-34 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/womanb.jpg"
              alt="Beauty"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg font-semibold text-[#638037] text-center">Beauty</span>
        </Link>

        {/* FRAGRANCES */}
        <Link
          href="/categories/fragrances"
          className="flex flex-col items-center w-24"
        >
          <div  className="w-34 h-34 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 ">
            <img
              src="/Images/perf05.jpg"
              alt="Fragrances"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg font-semibold text-[#4C3D19] text-center">Fragrances</span>
        </Link>
      </div>
    </div>
  );
}

