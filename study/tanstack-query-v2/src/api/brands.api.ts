import { AxiosInstance } from "axios";
import { BrandsType } from "../pages/HomePage";

class BrandsAPI {
  #client;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  async getBrands(): Promise<BrandsType[]> {
    try {
      const response = await this.#client.get("/brands");
      const data = response.data;
      const result = data.result;

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default BrandsAPI;
