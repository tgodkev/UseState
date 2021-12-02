import React, { useState } from "react";



function App() {

  const now = new Date().toLocaleTimeString('it-IT');

    const [time, setTime] = useState(now)

    const [count, setCount] = useState(0);

    function plus(){
     setCount(count + 1);
    }

    function getTime(){
      const newTime = new Date().toLocaleTimeString('it-IT');
      setTime(newTime);
    }

  return (
    <div className="container">
      <h1>{time}</h1>
      
      <h2>You Have Clicked Get Time {count} times</h2>
      <button onClick={() => {getTime(); plus();}}>Get Time</button>
    </div>
  );
}

export default App;
