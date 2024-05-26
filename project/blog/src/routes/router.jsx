import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import PostDetailPageLoader from "../pages/PostDetailPage/postDetailPage.loader";
import PostListPage from "../pages/PostListPage";
import postListPageLoader from "../pages/PostListPage/PostListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
        loader: postListPageLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: PostDetailPageLoader,
      },
    ],
  },
]);

export default router;
