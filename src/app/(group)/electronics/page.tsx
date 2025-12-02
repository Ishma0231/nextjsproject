import { ProductService } from "@/services/productservice.js";
import ProductCard from "@/components/Productcard";


export default async function Electronics() {
  const phones = await ProductService.getProductsByCategory("smartphones");
  const laptops = await ProductService.getProductsByCategory("laptops");
  const tablets = await ProductService.getProductsByCategory("tablets");

  const allProducts = [
    ...phones.products,
    ...laptops.products,
    ...tablets.products,
  ];

  return (
    <div className="p-6 text-black bg-white pt-22 pb-10">

      {/* Product Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
     
      >
        {allProducts.map((item) => (
          
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      
    </div>
  );
}
