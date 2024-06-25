export const GET = async () => {
  return new Response("", {
    headers: {
      "Set-Cookie":
        "accessToken=blabla; Domain=localhost; path=/; Max-Age=2000 ",
    },
  });
};
