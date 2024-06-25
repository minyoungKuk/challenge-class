import { cookies } from "next/headers";

function HomePage() {
  const accessToken = cookies().get("accessToken")?.value;
  console.log(cookies().getAll());

  const isAccessTokenVaild = !!accessToken;

  return (
    <div>
      {isAccessTokenVaild ? <div>비밀</div> : <div>안비밀</div>}
      HomePage
      {accessToken}
    </div>
  );
}

export default HomePage;
