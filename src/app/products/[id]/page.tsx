import { ProductService } from "@/services/productservice";

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = await params;

  const product = await ProductService.getProduct(id);

  // ⭐ Create filled and empty stars
  const filledStars = Math.floor(product.rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="px-6 bg-white text-black pb-2 pt-20 min-h-screen ">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xl shadow-black/40 p-2">

        {/* IMAGE */}
        <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-contain w-full h-full"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          {/* ⭐ RATING */}
          <div className="flex items-center gap-1 mt-2 text-yellow-400">
            {"★".repeat(filledStars)}
            {"☆".repeat(emptyStars)}
            <span className="text-sm text-black/60 ml-2">
              ({product.rating})
            </span>
          </div>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <p className="text-2xl font-semibold mt-4 text-red-700">
            ${product.price}
          </p>

          <button className="mt-6 bg-black text-white py-3 rounded-full hover:bg-amber-500 hover:text-black hover:shadow-xl shadow-black/50">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}
