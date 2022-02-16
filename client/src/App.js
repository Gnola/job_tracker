import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { GlobalProvider } from './context/GlobalState.js'
import { AddJobForm } from './_AddJobForm.js';
import { JobList } from './_JobList.js';


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/jobs").then((res) => setJobs([...res.data])) // Set State Initially
  }, [])

  return (
    <GlobalProvider>
      <div className="App">
        <JobList jobs={jobs}/>
        <AddJobForm setJobs={setJobs}/>
      </div>
    </GlobalProvider>
  );
}

export default App;
