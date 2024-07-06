import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

export type RouteParams = {
  productId: string;
};

export type ProductType = {
  deliveryType: string;
  id: number;
  imgSrc: string;
  name: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
};

function ProductDetailPage() {
  const params = useParams<RouteParams>();
  const productId = params.productId;

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => {
      if (productId) {
        return api.products.getProduct(productId);
      }
    },
    // refetchInterval: 1000,
    // refetchOnWindowFocus: true,
    // queryFn: () => api.products.getProduct(productId as string),
    // enabled: !!params.productId,
  });

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error</div>;

  console.log(product.name);

  return <Page>{product.name}</Page>;
}

export default ProductDetailPage;
