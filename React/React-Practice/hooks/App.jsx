import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");


  return (
    <>
    <input 
    type="text"
    onChange={(e) => setText(e.target.value)}
    /> 
    <button onClick={() => setText("")}>Clear</button>
    <p>{text}</p>
    </>
  );
}

export default Counter;
