import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter : {count}</h1>

      <button onClick={() => setCount(count + 1)}>increment</button>

      <button onClick={() =>{if(count>0) {setCount(count - 1)}}}>decrement</button>
      <button onClick={() =>setCount(0)}>Reset</button>
      <br></br>

      <button onClick={()=> {if (count<50){setCount(count+5)}}}>Inc + 5</button>
      <button onClick ={()=>setCount(count-5)}>Dec - 5</button>
    </>
  );
}

export default Counter;
