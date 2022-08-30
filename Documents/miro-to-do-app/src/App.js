import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>You clicked {count} times!</h1>
      <button onClick={() =>
        setCount(count + 1)
      }>Click me!</button>
    </div>
  );
}

export default App;
