export default async function PostDetailPageLoader({ params }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
