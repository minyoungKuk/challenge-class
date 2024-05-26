import React from "react";
import { useLoaderData } from "react-router-dom";

function PostListPage() {
  const posts = useLoaderData();
  return (
    <div>
      <h1>목록 페이지</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default PostListPage;
