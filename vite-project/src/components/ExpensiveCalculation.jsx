import React, { useState, useMemo } from 'react';

export default function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // An example of an expensive computation
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
    return count * 2; // Simulating an expensive calculation
  }, [count]); // Recompute only when `count` changes

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}
