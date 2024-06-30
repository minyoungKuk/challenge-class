import "./App.css";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();

  const handleClickButton = () => {
    modal.open({ title: "안녕?", content: "그래 안녕!" });
  };
  return (
    <main>
      <h1>context api로 모달 만들기</h1>
      <button onClick={handleClickButton}>모달 띄우기</button>
    </main>
  );
}

export default App;
