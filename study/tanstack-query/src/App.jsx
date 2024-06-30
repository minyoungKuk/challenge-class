import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

// useQuery : 데이터 읽기 R , const _____ = useQuery(option)
// useMutation : 데이터 조작 CUD , const _____ = useMutation(option)

// Devtools : npm i @tanstack/react-query-devtools
