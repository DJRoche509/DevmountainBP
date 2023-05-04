import React, {useState} from 'react'
import Child from './Child.jsx'
import './App.css';

function App() {
  //Declare state and setter
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <h1>App Component</h1>
      <Child userInput= {input} />
      <input
        type='text'
        placeholder= " Type Somethin' Cool"
        onChange={(e) => setInput (e.target.value)} />
      <Child />
    </div>
  );
}

export default App;
