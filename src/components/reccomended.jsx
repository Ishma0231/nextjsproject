"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/Productcard";
import { ProductService } from "@/services/productservice";

export default function RecommendedProducts({ exclude }) {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    async function loadRecommendations() {
      const allowed = [
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-dresses",
        "womens-shoes",
        "womens-bags",
        "fragrances",
        "beauty",
      ];

      const all = await ProductService.getAllProducts();

      const normalizedExclude = exclude
        .toLowerCase()
        .replace(/-/g, " ")
        .trim();

      const filtered = all.products.filter((p) => {
        const category = p.category.toLowerCase().replace(/ /g, "-");
        return allowed.includes(category) && category !== exclude;
      });

      const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 4);
      setRecommended(random);
    }

    loadRecommendations();
  }, [exclude]);

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold mb-6 font-serif italic">
        Recommended for You
      </h2>

      {/* ⭐ MOBILE: Horizontal Scroll */}
      <div className="sm:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {recommended.map((item) => (
            <div key={item.id} className="min-w-[70%]">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* ⭐ DESKTOP: Grid */}
      <div className="hidden sm:grid grid-cols-3 lg:grid-cols-4 gap-6">
        {recommended.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
