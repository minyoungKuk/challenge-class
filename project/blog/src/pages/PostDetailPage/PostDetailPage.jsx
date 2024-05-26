import React from "react";
import { useLoaderData } from "react-router-dom";
function PostDetailPage() {
  const post = useLoaderData();

  return (
    <div>
      <h1>디테일 페이지</h1>

      <div>
        <h2>{post.title}</h2>
        <h2>{post.body}</h2>
      </div>
    </div>
  );
}

export default PostDetailPage;
