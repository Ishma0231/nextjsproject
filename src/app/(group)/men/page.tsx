"use client";
import Link from "next/link";

export default function MenCategoryPage() {
  const mensCategories = [
    {
      slug: "mens-shirts",
      title: "Men's Shirts",
      mediaType: "video",
      mediaSrc: "/Images/shirt5v.mp4",
      description: "Explore our stylish collection of men's shirts suitable for all occasions.",
    },
    {
      slug: "mens-shoes",
      title: "Men's Shoes",
      mediaType: "video",
      mediaSrc: "/Images/shoevv.mp4",
      description: "Discover comfortable and trendy shoes for men, from sneakers to formal footwear.",
    },
    {
      slug: "mens-watches",
      title: "Men's Watches",
      mediaType: "video",
      mediaSrc: "/Images/wv.mp4", // Change this to a video source if needed
      description: "Browse our selection of men's watches to complement your style and keep time elegantly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-white  px-6 relative  pb-10" >
      {/* Left side text */}
      <div className="pt-8 pb-0 text-center" >
        <h1 className="text-4xl font-bold mb-4 text-black font-serif">~Men's<span className="italic text-[#7F1F0E]"> Fashion~</span></h1>
      </div>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-10 " >
        {mensCategories.map((cat, index) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="group rounded-xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-lg transition-transform transform hover:scale-105 duration-300 shadow-[7px_15px_20px_2px_rgba(0,0,0,0.5)]"
          >
            {/* Media (video) */}
            <div className="w-full h-64 relative" >
              <video
                src={cat.mediaSrc}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            {/* Content */}
            <div className="p-4 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-lg">
              <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>
              <p className="mb-4 text-sm">{cat.description}</p>
              <div className="mt-auto">
                <div className=" text-white py-2 px-4 rounded hover:bg-blue-700 text-center inline-block" style={{backgroundColor:"#785d32"}}>
                  Shop Now
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}