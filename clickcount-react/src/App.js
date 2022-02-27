import logo from './logo.svg';
import './App.css';
import {useState}from "react";

function App() {

  //setCount
  const [count,setCount] = useState(0);

  function incrementCount(){
    const newCount=count+1;
    setCount(newCount);
  }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Click</button>
    </div>
  );
}

export default App;
