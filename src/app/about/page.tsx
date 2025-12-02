import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F1E9] text-[#3B2F2F] px-8 md:px-20 py-24" >

      {/* TOP TITLE */}
      <h2 className="text-sm tracking-widest mb-1 text-[#7A5D3A]">
        ABOUT ELURÉ
      </h2>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight font-serif">
            Elevate Your Everyday With  
            <br />
            <span className="text-[#8C4A2F]">Premium Style & Modern Living</span>
          </h1>

          <p className="mt-6 text-lg text-[#5A4A42] leading-relaxed">
            Eluré brings you refined essentials — from electronics to fragrances — 
            designed to enhance your lifestyle.  
            We believe luxury isn't defined by price, but by intention,
            experience, and the values behind what you choose to bring into your life.
          </p>

          <p className="mt-4 text-[#5A4A42] leading-relaxed">
            Inspired by timeless aesthetics and modern minimalism,  
            Eluré curates products that balance beauty, purpose, and clarity.
            Our mission is simple: help you live better, feel better, and express
            your personal elegance with confidence.
          </p>

          {/* CTA Button */}
         
<Link
  href="/Home"
  className="inline-block mt-8 px-6 py-3 bg-[#8C4A2F] text-white rounded-md hover:bg-[#6F3A25] transition"
>
  Explore Our Collection
</Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-xl bg-white p-4 flex items-center justify-center" >
          <img
            src="/Images/bag01.png" // Replace with your own image
            alt="Eluré Lifestyle"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

      </div>
    </div>
  );
}
