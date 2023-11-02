import React, { useState } from "react";

export default function Counter() {
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(0);

  const handleOnSetval = () => {
    setCount(amount);
  };

  const handleCount = () => {
    setCount(count + 1);
  };
  const hanldeOnChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <>
      <div>Increament</div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Increament</button>
      <input
        type="number"
        name={amount}
        value={amount}
        onChange={hanldeOnChange}
      />
      <button onClick={handleOnSetval}>Set</button>
    </>
  );
}
