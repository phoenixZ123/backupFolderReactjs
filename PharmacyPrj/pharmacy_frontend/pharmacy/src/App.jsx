import { useState } from "react";

function App() {
  let [count, setCount] = useState(Number);

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

export default App;
