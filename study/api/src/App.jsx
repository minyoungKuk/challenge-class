import React, { useEffect } from "react";
import { getBrand, getBrands } from "./api/api.brand";
import { getProduct, getProducts } from "./api/api.product";

function App() {
  // 데이터를 가져온다 -> 통신을 한다 -> http 프로토콜
  // "요청(클라이언트)"과 "응답(서버)"
  // 클라이언트 : request HTTP를 서버에게 보내고
  // 서버 : response HTTP를 클라이언트에게 보내고

  // 요청할때 필요한 정보 : 1. 서버의 위치, 주소(ip -> domain)
  // HTTP 메서드 : GET, POST, PUT, DELETE, PATCH 등등...
  // 위의 메서드들을 CRUD에 대응하게 끔 API를 구성하는 것, 리소스의 위치 정보를 그대로 url 패스로 구성하는 것 -> RESTful API

  // axios는 js의 내장 기능이 아니다~!!

  // api를 한번만 부르기 위해~~
  useEffect(() => {
    const productId = 9587059;
    const brandId = 115;

    getProducts();
    getProduct(productId);

    getBrands();
    getBrand(brandId);
  }, []);

  return <main> hi </main>;
}

export default App;
