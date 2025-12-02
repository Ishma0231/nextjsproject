import { ProductService } from "@/services/productservice";
import ProductCard from "@/components/Productcard";
import Recommended from "@/components/reccomended";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const data = await ProductService.getProductsByCategory(slug);

  return (
    <div className="p-4 sm:p-6 bg-white text-black pb-10 min-h-screen">

      {/* HEADING */}
      <h1 className="
        text-2xl sm:text-4xl font-bold font-serif italic capitalize text-center mb-4 first-letter:text-[#7f1f0e] first-letter:font-bold">
        {slug.replace("-", " ")}
      </h1>

      {/* PRODUCT GRID */}
      <div
        className="grid grid-cols-2 gap-[2px] sm:gap-6 md:gap-6 sm:grid-cols-3 lg:grid-cols-4"
      >
        {data.products.map((item: any) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <Recommended exclude={slug} />
    </div>
  );
}
