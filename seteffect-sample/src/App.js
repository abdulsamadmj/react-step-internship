import './App.css';

import { useState,useEffect } from 'react';
import UserInput from './UserInput';

function App() {
  const [count, setCount] = useState(0);
  const [c2, setC2] = useState(0);

  useEffect(()=>{
    document.title=`Clicked ${count}, ${c2} times`; 
  }, [count]);
  //    ^    passing empty array only run once.

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log(count);
  }

  const incrementC2=()=>{
    const newCount=c2+1;
    setC2(newCount);
    
  }

  // const decrementCount = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  //   console.log(count);
  // }

  return (<div>
    <h1>{count} {c2}</h1>
    <button onClick={incrementCount}>1</button>
    <button onClick={incrementC2}>2</button>

    <div>
      <UserInput />
    </div>
  </div>
  );
}

export default App;