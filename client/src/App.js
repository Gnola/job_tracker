import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import { AddJobForm } from './_AddJobForm.js';
import EditJobForm from './_EditJobForm.js'

import { JobList } from './_JobList.js';

import { GlobalProvider } from './context/GlobalState.js'


function App() {
  const [jobs, setJobs] = useState([]); // Main State
  // Edit Job
  const [editingJob, setEditingJob] = useState(false); // Open EditJobForm Modal
  const [jobToEdit, setJobToEdit] = useState();

  // Set Initial State
  useEffect(() => {
    axios.get("http://localhost:3001/jobs").then((res) => setJobs([...res.data])) // Set State Initially
  }, [])

  return (
    <GlobalProvider>
      <div className="App">
        <JobList jobs={jobs} setJobToEdit={setJobToEdit} setEditingJob={setEditingJob} editingJob={editingJob} />
        <AddJobForm setJobs={setJobs} />
        { editingJob && <EditJobForm jobToEdit={jobToEdit} setEditingJob={setEditingJob} editingJob={editingJob} /> }
      </div>
    </GlobalProvider>
  );
}

export default App;
