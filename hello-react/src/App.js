
import './App.css';

function App() {
  const name="Ahad";
  return <Parent />
}

function Child(props){
  return <h1>Hello {props.name}</h1>;
}

function Parent(){
  const names= ["Ahad","Samad","Chinju"];
  return (
    <div>
      <Child name={(names[0])} />
      <Child name={(names[1])} />
      <Child name={(names[2])} />
    </div>
  );
}

export default App;
