import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { GlobalProvider } from './context/GlobalState.js'
import { AddJobForm } from './_AddJobForm.js';
import { JobList } from './_JobList.js';
import EditJobForm from './_EditJobForm.js'


function App() {
  const [jobs, setJobs] = useState([]);
  const [editJob, setEditJob] = useState(false);
  const [jobToEdit, setJobToEdit] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/jobs").then((res) => setJobs([...res.data])) // Set State Initially
  }, [])

  return (
    <GlobalProvider>
      <div className="App">
        <JobList jobs={jobs} setJobToEdit={setJobToEdit} setEditJob={setEditJob} editJob={editJob}/>
        <AddJobForm setJobs={setJobs}/>
        {
          editJob && <EditJobForm jobToEdit={jobToEdit} setEditJob={setEditJob} editJob={editJob}/>
        }
      </div>
    </GlobalProvider>
  );
}

export default App;
