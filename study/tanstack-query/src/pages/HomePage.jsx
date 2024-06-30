import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    // queryKey 배열로 만든다(필!!수!!). 첫번째 요소는 데이터의 모델명을 string으로 넣고 두번째는 데이터를 설명하는 정보를 object로 넣는다.
    queryKey: ["products"],
    queryFn: () => api.products.getProducts(),
  });

  if (isLoading) return <Page> loading.. </Page>;
  if (isError) return <Page> error.. </Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
      <Link to={`/todo`}>TODO PAGE</Link>
    </Page>
  );
}

export default HomePage;
