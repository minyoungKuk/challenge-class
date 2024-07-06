import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

export type ProductsType = {
  id: number;
  name: string;
};

export type BrandsType = {
  id: number;
  nameEn: string;
  nameKr: string;
};

const HomePage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.products.getProducts(),
  });

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error</div>;

  return (
    <Page>
      <h1>HomePage</h1>

      <ol>
        {products && products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))
        ) : (
          <li> 리스트가 없습니다 </li>
        )}
      </ol>
    </Page>
  );
};

export default HomePage;
