"use client";
import Link from "next/link";

export default function WomenCategoryPage() {
  const womensCategories = [
    {
      slug: "womens-dresses",
      title: "Women's Dresses",
      mediaType: "video",
      mediaSrc: "/Images/wdv.mp4", // add a dress video
      description: "Elegant and modern dresses perfect for every occasion.",
    },
    {
      slug: "womens-shoes",
      title: "Women's Shoes",
      mediaType: "video",
      mediaSrc: "/Images/heelsv.mp4",
      description: "Discover our stunning range of footwear crafted for comfort and style.",
    },
    {
      slug: "womens-bags",
      title: "Women's Bags",
      mediaType: "video",
      mediaSrc: "/Images/wvgb.mp4",
      description: "A curated selection of bags designed to elevate your everyday look.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-white px-6 relative  pb-10">

      {/* Header */}
      <div className="pt-8 pb-0 text-center">
        <h1 className="text-4xl font-bold mb-4 text-black font-serif">~Women's<span className="italic text-amber-800"> Fashion~</span></h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-10 ">
        {womensCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="group rounded-xl overflow-hidden  shadow-[7px_15px_20px_2px_rgba(0,0,0,0.5)]  border border-white/10 bg-white/10 backdrop-blur-lg transition-transform transform hover:scale-105 duration-300"
          >
            {/* Media */}
            <div className="w-full h-64 relative">
              <video
                src={cat.mediaSrc}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col justify-center bg-black bg-opacity-50 backdrop-blur-lg">
              <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>
              <p className="mb-4 text-sm">{cat.description}</p>

              <div className="mt-auto">
                <div
                  className="text-white py-2 px-4 rounded text-center inline-block hover:bg-blue-700"
                  style={{ backgroundColor: "#785d32" }}
                >
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
