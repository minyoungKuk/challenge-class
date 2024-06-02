import React from "react";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();

  const handleClickButton = () => {
    modal.open({ title: "샘플 모달", contents: "샘플 콘텐츠" });
  };

  return (
    <main>
      <button onClick={handleClickButton}> 모달 띄우기 </button>

      {Array(5000)
        .fill(0)
        .map((_, idx) => (
          <div key={idx}> {idx + 1} </div>
        ))}
    </main>
  );
}

export default App;
