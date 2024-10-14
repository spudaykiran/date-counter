import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(0);
  const date = new Date("september 16 2024");
  date.setDate(date.getDate() + count);
  function handleClick() {
    setCount(0);
  }
  return (
    <>
      <div className="count">
        <input
          type="range"
          min={0}
          max={10}
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
        <span>step : {range}</span>
      </div>
      <div className="count">
        <button onClick={() => setCount(count - range)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + range)}>+</button>
      </div>
      <div className="dateChange">
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
      {count !== 0 || range !== 1 ? (
        <div className="count">
          <button onClick={handleClick}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
