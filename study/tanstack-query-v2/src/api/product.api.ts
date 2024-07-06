import { AxiosInstance } from "axios";
import { ProductsType } from "../pages/HomePage";
import { ProductType } from "../pages/ProductDetailPage";

class ProductsAPI {
  #client;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  async getProducts(): Promise<ProductsType[]> {
    try {
      const response = await this.#client.get("/products");
      console.log("Response data:", response.data);
      const data = response.data;
      const result = data.result;

      return result;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async getProduct(productId: string): Promise<ProductType[]> {
    const response = await this.#client.get(`/products/${productId}`);
    const data = response.data;
    const result = data.result;

    return result;
  }

  deleteProduct() {}
}

export default ProductsAPI;
