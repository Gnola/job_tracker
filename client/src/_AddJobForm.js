import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const AddJobForm = () => {

  let date = new Date()
  let today = `${date.getMonth() + 1}/${date.getDate()}`

  // Primary Info
  const [id, setId] = useState(Math.random() * 100)
  const [dateApplied, setDateApplied] = useState(`${today}`)
  const [company, setCompany] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [status, setStatus] = useState('Potential')
  const [lastContact, setLastContact] = useState(`${today}`)
  const [statusUpdate, setStatusUpdate] = useState('')

  // Secondary Info
  const [link, setLink] = useState('')

  const handleAddJob = (e) => {
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

    console.log(newJob); // Set Jobs

    setDateApplied(`${today}`)
    setCompany('')
    setJobTitle('')
    setStatus('Potential')
    setLastContact(`${today}`)
    setStatusUpdate('')
  }


  return (
    <form onSubmit={handleAddJob}>
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
  )
}
