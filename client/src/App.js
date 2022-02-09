import React, { useState } from 'react';
import './App.css';
import BasicTable from './BasicTable.js';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

function App() {

  let date = new Date()
  let month = date.getMonth() + 1;
  let day = date.getDate();

  const [clicked, setClicked] = useState('all')
  const [rows, setRows] = useState([])

  // Primary Info
  const [id, setId] = useState(Math.random() * 100)
  const [dateApplied, setDateApplied] = useState(`${month}/${day}`)
  const [company, setCompany] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [status, setStatus] = useState('Potential')
  const [lastContact, setLastContact] = useState(`${month}/${day}`)
  const [statusUpdate, setStatusUpdate] = useState('')

  // Secondary Info
  const [link, setLink] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newJob = {
      id,
      dateApplied,
      company,
      jobTitle,
      status,
      lastContact,
      statusUpdate
    }

    setRows([...rows, {...newJob}])

    setDateApplied(`${month}/${day}`)
    setCompany('')
    setJobTitle('')
    setStatus('Potential')
    setLastContact(`${month}/${day}`)
    setStatusUpdate('')
  }

  return (
    <div className="App">
      <Button variant={clicked === 'all' ? 'contained' : 'outlined'} onClick={()=>setClicked('all')}>All</Button>
      <Button variant={clicked === 'potential' ? 'contained' : 'outlined'} onClick={()=>setClicked('potential')}>Potential</Button>
      <Button variant={clicked === 'active' ? 'contained' : 'outlined'} onClick={()=>setClicked('active')}>Active</Button>
      <Button variant={clicked === 'done' ? 'contained' : 'outlined'} onClick={()=>setClicked('done')}>Done</Button>
      {clicked === 'all' &&(<h1>All</h1>)}
      {clicked === 'potential' &&(<h1>Potential</h1>)}
      {clicked === 'active' &&(<h1>Active</h1>)}
      {clicked === 'done' &&(<h1>Done</h1>)}
      <BasicTable clicked={clicked} rows={rows}/>
      <form onSubmit={handleSubmit}>
        <TextField id='textfield' type='text' variant='outlined' value={dateApplied} onChange={(e) => setDateApplied(e.target.value)} />
        <TextField id='textfield' type='text' variant='outlined' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Company Name'/>
        <TextField id='textfield' type='text' variant='outlined' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder='Job Title'/>
        <TextField id='textfield' type='text' variant='outlined' value={status} onChange={(e) => setStatus(e.target.value)} />
        <TextField id='textfield' type='text' variant='outlined' value={lastContact} onChange={(e) => setLastContact(e.target.value)} />
        <TextField id='textfield' type='text' variant='outlined' value={statusUpdate} onChange={(e) => setStatusUpdate(e.target.value)} placeholder='Last Status Update'/>
        <br/>
        <TextField id='textfield' type='text' variant='outlined' value={link} onChange={(e) => setLink(e.target.value)} placeholder='Link'/>
        <br/>
        <Button type='submit' variant='contained'>Add</Button>
      </form>
    </div>
  );
}

export default App;
