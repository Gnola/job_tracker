import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import AddJobForm  from './components/AddJobForm.js'; // Component
import EditJobForm from './components/EditJobForm.js'; // Component
import { JobList } from './_JobList.js'; // Page/Consistent View


function App() {
  const [jobs, setJobs] = useState([]); // Main State

  // Edit Job
  const [editingJob, setEditingJob] = useState(false); // Open EditJobForm Modal
  const [jobToEdit, setJobToEdit] = useState();

  // Set State Initially
  useEffect(() => {
    return axios.get("http://localhost:3001/jobs").then((res) => setJobs([...res.data].sort((a, b) => a.updates[0].updateDate < b.updates[0].updateDate ? 1 : -1))) // Automatically sorts by latest update date
  }, [jobs.length])

  return (
    <div className="App">
      <JobList jobs={jobs} setJobToEdit={setJobToEdit} setEditingJob={setEditingJob} editingJob={editingJob} />
      <AddJobForm setJobs={setJobs} />
      { editingJob && <EditJobForm jobToEdit={jobToEdit} setEditingJob={setEditingJob} editingJob={editingJob} /> }
    </div>
  );
}

export default App;
