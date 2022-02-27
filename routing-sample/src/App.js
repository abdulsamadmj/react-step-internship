
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/view1">View 1</Link><br />
      <Link to="/view2">View 2</Link>
    </div>

  );
}

const View1 = () => {
  return (
    <div>
      <h1>View 1</h1>
      <Link to="/">Home</Link>
    </div>

  );
}

const View2 = () => {
  return (
    <div>
      <h1>View 2</h1>
      <Link to="/">Home</Link>
    </div>

  );
}

function App() {
  return (
    <div>
      <h1>Testing Routes</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view1' element={<View1 />} />
        <Route path='/view2' element={<View2 />} />
      </Routes>
    </div>
  );
}

export default App;
