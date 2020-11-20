import React, { useState } from 'react';
import './App.css';
import Message from './Message.js';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  
  return (
    <div className={`box ${isMorning ? 'daylight' : ''}`}>
      <h1>Have A Good {isMorning ? 'Morning' : 'Night'}</h1>
      <br/>
     <Message counter={count}/>
     <br/>
     <button onClick={
       ()=> setCount(count + 1) 
       //use setCount instead of alert('Button Pressed') above
       }>Update counter
       </button>
      <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
