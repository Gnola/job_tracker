import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import {JobList} from './_JobList.js';
import {AddJobForm} from './_AddJobForm.js';

import { GlobalProvider } from './context/GlobalState.js'

function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/jobs").then((res) => setJobs([...res.data]))
    // console.log(jobs);
  }, [])

  return (
    <GlobalProvider>
      <div className="App">
        <JobList jobs={jobs}/>
        <br/>
        <AddJobForm setJobs={setJobs}/>
      </div>
    </GlobalProvider>
  );
}

export default App;
