import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", { id: productId }],
    queryFn: () => api.products.getProduct(productId),
    // refetchOnReconnect: true, // 포커스가 되시 될때마다 다시 불러와짐
    // refetchInterval: 1000, // 1초마다 다시 불러오게 하기
  });

  if (isLoading) return <Page> loading.. </Page>;
  if (isError) return <Page> error.. </Page>;

  return (
    <Page>
      <h1>{product.name}</h1>
    </Page>
  );
}

export default ProductDetailPage;
