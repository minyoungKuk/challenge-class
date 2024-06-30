import React, { useLayoutEffect, useMemo, useState } from "react";
import Age from "./Age";
import Student from "./Student";

function Hooks() {
  const [count, setCount] = useState(0);

  const student = useMemo(
    () => ({
      name: "민용",
      age: 20,
      gender: "man",
    }),
    []
  );
  // const countRef = useRef(null);

  // const increment = useCallback(
  //   () => setCount((prevCount) => prevCount + 1),
  //   []
  // );

  // const memoizedStudent = useMemo(() => {
  //   return {
  //     name: "유진영",
  //     age: 20,
  //     gender: "male",
  //   };
  // }, []);

  /// useMemo와 useCallback을 사용하는 이유?
  // 1. "정말로" 컴포넌트의 생애주기 또는 데이터 값의 변화에 따라 어떤 값을 업데이트 하고 싶을 때
  // 2. 리렌더링 될 때마다 새롭게 값을 계산하거나 새롭게 함수를 정의하는 것이 문제가 될 때
  // 2-1. 새로운 값의 계산이나 새로운 함수의 정의가 무거운 작업일 떄
  // 2-2. 값 또는 함수의 참조값을 유지하는 것이 중요할 때

  // 컴포넌트 혹은 데이터의 생애주기에 따라 특정 값을 업데이트 하고 싶을 때.
  // 의존성 배열이 빈칸일땐 컴포넌트의 생애주기를 따름
  // const memoizedValue = useMemo(() => {
  //   return count > 5 ? "over five" : "under or equal to five";
  // }, [count]);

  // // 컴포넌트 또는 데이터의 생의 주기에 따라 함수를 새로 정의 하고 싶을 때
  // // 리렌더링이 되더라도 someFunction의 함수의 참조값(주소)은 유지
  // const someFunction = useCallback(() => {
  //   return count + 5;
  // });

  // console.log(countRef.current);

  // useEffect(() => {
  //   console.log("컴포넌트 마운트 된 뒤, 최초 렌더링 1회 완료 후, useEffect");

  //   return () => {
  //     console.log(
  //       "컴포넌트 언마운트 된 뒤, useEffect",
  //       document.getElementById("hooks")
  //     );
  //   };
  // });

  useLayoutEffect(() => {
    console.log("컴포넌트 마운트 된 뒤, 최초 렌더링 1회 완료 후, useEffect");

    return () => {
      console.log(
        "컴포넌트 언마운트 된 뒤, useEffect",
        document.getElementById("hooks")
      );
    };
  });

  return (
    <div id="hooks">
      {/* <h2 ref={countRef}>[ {count} ]</h2> */}
      <div> {count} </div>

      <br />

      <div>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>

      <Age age={20} />
      <Student student={student} />

      {/* <IncrementButton increment={increment} />
      <Age age={20} />
      <MemoizedStudent student={memoizedStudent} /> */}
    </div>
  );
}

export default Hooks;
