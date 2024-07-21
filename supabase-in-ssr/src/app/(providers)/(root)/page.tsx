"use client";

import { useAuth } from "@/contexts/auth.context/auth.context";
import { useState } from "react";

export default function HomePage() {
  const { me, logIn, logOut, signUp } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClickLogin = async () => logIn(email, password);
  const handleClickLogOut = async () => logOut();
  const handleClickSignUp = async () => signUp(email, password);

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1>현재 로그인한 유저는</h1>
      {me ? me.email + "입니다" : "없습니다"}

      <hr className="border-black my-10 w-full" />

      <input
        className="input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="아이디 입력해주세요"
      />
      <input
        className="input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호 입력해주세요"
      />

      <button className="button mt-3" onClick={handleClickLogin}>
        로그인하기
      </button>

      <hr className="border-black my-10 w-full" />

      <button className="button" onClick={handleClickLogOut}>
        로그아웃하기
      </button>

      <hr className="border-black my-10 w-full" />

      <input
        className="input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="아이디 입력해주세요"
      />
      <input
        className="input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호 입력해주세요"
      />

      <button className="button mt-6" onClick={handleClickSignUp}>
        회원가입하기
      </button>
    </main>
  );
}
