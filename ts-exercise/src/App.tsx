import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Post from "./components/Posts/Post";
import PostForm from "./components/Posts/PostForm";
import queryClient from "./react-query/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostForm />
      <hr />
      <Post />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
