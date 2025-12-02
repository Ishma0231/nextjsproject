import { BaseService } from "./servicebase";

export class ProductService extends BaseService {
  
  static async getCategories() {
    const url = this.buildURL("/products/categories");
    const res = await fetch(url);
    return res.json();
  }

  static async getAllProducts(limit = 30) {
    const url = this.buildURL(`/products?limit=${limit}`);
    const res = await fetch(url,{ cache: "no-store" });
    return res.json();
  }

  static async getProductsByCategory(category) {
    const url = this.buildURL(`/products/category/${category}`);
    const res = await fetch(url);
    return res.json();
  }

  static async getProduct(id) {
    const url = this.buildURL(`/products/${id}`);
    const res = await fetch(url);
    return res.json();
  }
}
