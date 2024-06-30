import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { AuthProvider } from "./contexts/auth.context";

function App() {
  return (
    <AuthProvider>
      <main>
        <h1>메인 페이지인데요</h1>
        <Display />
        <Button />
      </main>
    </AuthProvider>
  );
}

export default App;
