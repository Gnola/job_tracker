import React, { useState } from 'react';
import Button from '@mui/material/Button';

import './App.css';
import {BasicTable} from './_BasicTable.js';
import {AddJobForm} from './_AddJobForm.js';

function App() {

  const [clicked, setClicked] = useState('all')
  const [jobs, setJobs] = useState([])



  return (
    <div className="App">
      <AddJobForm/>
      <Button variant={clicked === 'all' ? 'contained' : 'outlined'} onClick={()=>setClicked('all')}>All</Button>
      <Button variant={clicked === 'potential' ? 'contained' : 'outlined'} onClick={()=>setClicked('potential')}>Potential</Button>
      <Button variant={clicked === 'active' ? 'contained' : 'outlined'} onClick={()=>setClicked('active')}>Active</Button>
      <Button variant={clicked === 'done' ? 'contained' : 'outlined'} onClick={()=>setClicked('done')}>Done</Button>
      {clicked === 'all' &&(<h1>All</h1>)}
      {clicked === 'potential' &&(<h1>Potential</h1>)}
      {clicked === 'active' &&(<h1>Active</h1>)}
      {clicked === 'done' &&(<h1>Done</h1>)}
      <BasicTable clicked={clicked} jobs={jobs}/>
    </div>
  );
}

export default App;
