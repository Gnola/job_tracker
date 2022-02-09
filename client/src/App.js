import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState('all')
  return (
    <div className="App">
      <button onClick={()=>setClicked('all')}>All</button>
      <button onClick={()=>setClicked('potential')}>Potential</button>
      <button onClick={()=>setClicked('active')}>Active</button>
      <button onClick={()=>setClicked('done')}>Done</button>
      {clicked === 'all' &&(<h1>All</h1>)}
      {clicked === 'potential' &&(<h1>Potential</h1>)}
      {clicked === 'active' &&(<h1>Active</h1>)}
      {clicked === 'done' &&(<h1>Done</h1>)}
    </div>
  );
}

export default App;
