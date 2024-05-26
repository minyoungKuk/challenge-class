import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <Link to="/">홈페이지</Link> <br />
      <Link to="/posts">포스트 목록 페이지</Link> <br />
      <Link to="/posts/123">포스트 디테일 페이지</Link>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
