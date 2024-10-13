import React, { useState } from 'react';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const pushToStack = () => {
    if (inputValue) {
      setStack([...stack, inputValue]);
      setInputValue('');
    }
  };

  const popFromStack = () => {
    setStack(stack.slice(0, -1));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Stack Representation</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={pushToStack}>Push</button>
        <button onClick={popFromStack}>Pop</button>
      </div>
      <h3>Stack Contents:</h3>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
        {stack.length === 0 ? (
          <p>The stack is empty</p>
        ) : (
          <ul>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Stack;
