import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return <RouterProvider router={router}>Hello world</RouterProvider>;
}

export default App;
