import axios, { AxiosInstance } from "axios";
import BrandsAPI from "./brands.api";
import ProductsAPI from "./product.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com";

class API {
  #baseURL = BASE_URL;
  #client: AxiosInstance;

  products: ProductsAPI;
  brands: BrandsAPI;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
    this.products = new ProductsAPI(this.#client);
    this.brands = new BrandsAPI(this.#client);
  }
}

const api = new API();

export default api;
