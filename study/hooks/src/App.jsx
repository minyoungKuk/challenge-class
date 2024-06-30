import React, { useState } from "react";
import Hooks from "./components/Hooks";

const App = () => {
  const [isHooksMounted, setIsHooksMounted] = useState(false);

  return (
    <main>
      <div>
        <button onClick={() => setIsHooksMounted(true)}>Hooks 마운트</button>
        <button onClick={() => setIsHooksMounted(false)}>Hooks 언마운트</button>
      </div>

      <hr />

      {isHooksMounted && <Hooks />}
    </main>
  );
};

export default App;
