import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { GlobalContext } from './context/GlobalState.js'

export const AddJobForm = () => {
  const { addJob, today } = useContext(GlobalContext);

  console.log(today);

  const [id, setId] = useState('') // only used for key

  const [date, setDate] = useState(today)
  const [company, setCompany] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [link, setLink] = useState('')
  const [status, setStatus] = useState('Potential')

  const [jobBoard, setJobBoard] = useState('')
  const [resume, setResume] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [connections, setConnections] = useState('')
  const [notes, setNotes] = useState('')

  const [updateDate, setUpdateDate] = useState('')
  const [updateNotes, setUpdateNotes] = useState('')


  const handleAddJob = (e) => {
    e.preventDefault()

    const newJob = {
      id: uuidv4(),
      date,
      company,
      jobTitle,
      link,
      status,
      jobBoard,
      resume,
      location,
      category,
      connections,
      notes,
      updates: [
        {
          id: uuidv4(),
          statusUpdate: status,
          updateDate: date,
          updateNotes: !notes ? '-' : notes
        }
      ]
    }

    console.log(newJob);
    // addJob(newJob);
    axios.post('http://localhost:3001/jobs/', newJob).then(res => console.log(res.data))


    setStatus('Potential')
    setCompany('')
    setJobTitle('')
    setLink('')
    setJobBoard('')
    setResume('')
    setCategory('')
    setLocation('')
    setConnections('')
    setNotes('')
  }


  return (
    <form onSubmit={handleAddJob}>
    <div className='form-group'>
      <label htmlFor="status">Status</label>
      <select id='status' className="custom-select" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Potential">Potential</option>
        <option value="Applied">Applied</option>
        <option value="Phone Screen">Phone Screen</option>
        <option value="Technical Interview">Technical Interview</option>
        <option value="Behavioral Interview">Behavioral Interview</option>
        <option value="Rejected">Rejected</option>
        <option value="Never Heard Back">Never Heard Back</option>
        <option value="Offer">Offer</option>
      </select>
    </div>
    <div className='form-group'>
      <label htmlFor="date">Date</label>
      <input type='text' className="form-control" id='date' value={date} onChange={(e) => setDate(e.target.value)} />
    </div>
      <div className='form-group'>
        <label htmlFor="company">Company Name</label>
        <input type='text' className="form-control" id='company' value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor="jobTitle">Job Title</label>
        <input type='text' className="form-control" id='jobTitle' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label htmlFor="link">Link</label>
        <input type='text' className="form-control" id='link' value={link} onChange={(e) => setLink(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor="jobBoard">Job Board</label>
        <input type='text' className="form-control" id='jobBoard' value={jobBoard} onChange={(e) => setJobBoard(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor="resume">Resume Used</label>
        <input type='text' className="form-control" id='resume' value={resume} onChange={(e) => setResume(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor="location">Location(s)</label>
        <input type='text' className="form-control" id='location' value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor="category">Category</label>
        <input type='text' className="form-control" id='category' value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor="connections">Connection(s)</label>
        <input type='text' className="form-control" id='connections' value={connections} onChange={(e) => setConnections(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor="notes">Notes</label>
        <input type='text' className="form-control" id='notes' value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
      <br/>
      <button type='submit' className='btn btn-primary'>Add</button>
    </form>
  )
}
