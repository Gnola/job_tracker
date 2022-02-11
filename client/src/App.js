import React, { useState } from 'react';

import './App.css';
import {BasicTable} from './_BasicTable.js';
import {AddJobForm} from './_AddJobForm.js';

function App() {

  const [jobs, setJobs] = useState([
    {
      dateApplied: 28,
      company:'This Company',
      jobTitle:"G",
      status: 'Applied',
      lastContact: 28,
      statusUpdate: 'Applied'
    },
    {
      dateApplied: 28,
      company:'That Company',
      jobTitle:"M",
      status: 'Phone',
      lastContact: 28,
      statusUpdate: 'Phone'
    },
    {
      dateApplied: 28,
      company:'A Company',
      jobTitle:"K",
      status: 'Rejected',
      lastContact: 28,
      statusUpdate: 'Rejected'
    },
  ])



  return (
    <div className="App">
      <AddJobForm/>
      <BasicTable jobs={jobs}/>
    </div>
  );
}

export default App;
