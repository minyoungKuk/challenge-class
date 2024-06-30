import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {
  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery({
    queryKey: ["product", { list: true }],
    queryFn: () => api.products.getProducts(),
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: (productId) => api.cart.addItemToCart(productId),
  });

  const handleClickAddItemToCart = (productId) => () => {
    console.log("dddd");
    // 장바구니 추가하는 로직
    addItemToCart(productId, {
      onSuccess: () => {
        console.log("dd");
        const yes = confirm(
          "상품이 장바구에 잘 추가되었습니다. 장바구니로 갈까요?"
        );

        if (yes) navigate("/cart");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <h1> HomePage </h1>

      {isLoading ? (
        "loading.."
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h5> {product.name} </h5>
              <button onClick={handleClickAddItemToCart(product.id)}>
                장바구니에 추가하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
