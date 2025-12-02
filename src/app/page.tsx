"use client";
import Link from "next/link";
import LandingSlider from "@/components/LandingSlider";

export default function MainPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col pb-10 pt-20">

      <section
        className="relative w-full  bg-cover bg-center flex items-center justify-center">
    
        <div className="absolute inset-0 bg-black/20"></div>

        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Shop curated collections across fashion, beauty & tech.
          </p>

         
        </div>
      </section>

     
      <section className="w-full max-w-6xl mx-auto mt-16 ">
        <LandingSlider />
      </section>

      
      <div className="flex justify-center mt-10">
        <Link href="/Home" className="inline-block mt-6">
            <button className="px-10 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-200">
              Shop Now
            </button>
          </Link>
      </div>

      
      
    </div>
  );
}
