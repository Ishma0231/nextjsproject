import { ProductService } from "@/services/productservice";
import ProductCard from "@/components/Productcard";

export default async function TopRated() {

  const allowedCategories = [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-dresses",
    "womens-shoes",
    "womens-bags",
    "fragrances",
    "beauty"
  ];

  const all = await ProductService.getAllProducts(100);

  let filtered = all.products.filter((p) =>
    allowedCategories.includes(p.category.toLowerCase().replace(" ", "-"))
  );

  const MINIMUM_RATING = 4.0;
  filtered = filtered.filter((p) => p.rating >= MINIMUM_RATING);

  const recommended = filtered
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="px-6 pt-16 pb-10 shadow-[7px_15px_20px_2px_rgba(0,0,0,0.3)] ">
      <h2 className="text-4xl font-bold mb-6 text-black font-serif italic ">
        <span className="text-[#91612e] text-4xl">T</span>op picks
      </h2>

      {/* MOBILE HORIZONTAL ROW */}
      <div className="sm:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {recommended.map((item) => (
            <div key={item.id} className="min-w-[70%]">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid grid-cols-3 lg:grid-cols-4 gap-6">
        {recommended.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
