import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
function App() {
  const [value, setValue] = useState([0, 1]);
  return (
    <div>
      <Counter value={value} setValue={setValue} />
    </div>
  );
}

export default App;
