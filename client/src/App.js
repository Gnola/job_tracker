import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { JobList } from './components/JobList.js'; // View
import AddJobForm  from './components/_AddJobForm.js'; // Component
import EditJobForm from './components/_EditJobForm.js'; // Component


function App() {
  const [jobs, setJobs] = useState([]); // Main State
  const [editingJob, setEditingJob] = useState(false); // Opens EditJobForm Modal
  const [jobToEdit, setJobToEdit] = useState(); // Sets the job to edit

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
