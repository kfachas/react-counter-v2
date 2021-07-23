import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
function App() {
  const [counters, setCounters] = useState([0]);
  return (
    <div>
      <button
        onClick={() => {
          if (counters.length < 3) {
            const newCounter = [...counters];
            newCounter.push(0);
            setCounters(newCounter);
          }
        }}
      >
        Add Counter
      </button>
      {counters.map((elem, index) => {
        return (
          <Counter
            key={index}
            value={elem}
            counters={counters}
            setCounters={setCounters}
          />
        );
      })}
    </div>
  );
}

export default App;
