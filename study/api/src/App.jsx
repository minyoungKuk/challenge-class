import React, { useEffect } from "react";

const GET_PRODUCT_ENDPOINT =
  "https://api.ballang.yoojinyoung.com/products/9587059";

const GET_BRANDS_ENDPOINT = "https://api.ballang.yoojinyoung.com/brands";

function App() {
  useEffect(() => {
    // fetch(GET_PRODUCT_ENDPOINT).then((response) => console.log(response));
    (asnyn () => {
      fetch await (GET_PRODUCT_ENDPOINT);
    })();
  }, []);

  return <main>Hello world</main>;
}

export default App;
