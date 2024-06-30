import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const endPoint = "https://jsonplaceholder.typicode.com/posts/";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

// useState는 함수 -> 함수의 타입은 나가는거 들어오는거만 체크해주면된다.
// 이때 이 함수의 타입을 보다 자양하게 재사용하기 위해 함수 타입을 제네릭하게 미리 구성할 수 있다
// 함수에만 매개변수가 있는게 아니라 함수타입에도 매개변수가 있다는 뜻!

function Post() {
  // // 이건 올드하대욤
  // // 가져온 데이터를 사용하려면 상태값으로 관리해야해용
  // const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   axios.get<Post[]>(endPoint).then((response) => setPosts(response.data));
  // }, []);

  const { data: posts = [] } = useQuery<AxiosResponse<Post[]>, Error, Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get(endPoint),
    select: (res) => res.data,
  });

  useMutation;

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          {[post.id]} - {post.title}
        </li>
      ))}
    </ol>
  );
}

export default Post;
