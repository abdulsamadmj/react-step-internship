import { useState } from "react";

const Counter=()=>{

    const [count,setCount]= useState(0);

  const incrementCount=()=>{
    const newCount=count+1;
    setCount(newCount);
    console.log(count);
  }

  const decrementCount=()=>{
    const newCount=count-1;
    setCount(newCount);
    console.log(count);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default Counter;