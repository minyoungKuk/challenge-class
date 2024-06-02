import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import AuthProvider from "./contexts/auth.context";

function App() {
  console.log("app 리렌더링");

  return (
    <AuthProvider>
      <Display />
      <Button />
    </AuthProvider>
  );
}

export default App;
