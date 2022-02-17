import React, { useState, useContext, useEffect } from 'react';
import {IoChevronDownOutline, IoChevronUpOutline, IoAddCircleSharp, IoTrashSharp, IoPencilSharp} from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { JobUpdate } from './_JobUpdate.js'
import { AddJobUpdate } from './_AddJobUpdate.js'



export const Job = ({job, today, setJobToEdit, editingJob, setEditingJob}) => {

  const [jobOpened, setJobOpened] = useState(false) // Toggle extra job info
  const [statusColor, setStatusColor] = useState('') // Sets status color

  const [editing, setEditing] = useState(false)
  const [editedSection, setEditedSection] = useState('')
  const [editedValue, setEditedValue] = useState('')

  useEffect(() => {
    // Apply conditional coloring for status'
    switch (job.status) {
      case 'Potential':
        setStatusColor('lightgreen')
        break;
      case 'Applied':
        setStatusColor('orange')
        break;
      case 'Phone Screen':
        setStatusColor('green')
        break;
      case 'Rejected':
        setStatusColor('red')
        break;
      default:
        setStatusColor('white')
    }
  })

  // Delete entire job
  const deleteJob = (job) => {
    axios.delete('http://localhost:3001/jobs/' + job.id).then(res => console.log(res.data))
  }

  const handleEdit = (e) => {
    e.preventDefault()
    let editedJob = {}
    switch (editedSection) {
      case 'company':
        editedJob = {
          ...job,
          company:editedValue
        }
        console.log(editedJob);
        break;
      case 'job title':
        editedJob = {
          ...job,
          jobTitle:editedValue
        }
        console.log(editedJob);
        break;
      case 'job board':
        editedJob = {
          ...job,
          jobBoard:editedValue
        }
        console.log(editedJob);
        break;
      case 'resume':
        editedJob = {
          ...job,
          resume:editedValue
        }
        console.log(editedJob);
        break;
      case 'locations':
        editedJob = {
          ...job,
          location:editedValue
        }
        console.log(editedJob);
        break;
      case 'category':
        editedJob = {
          ...job,
          category:editedValue
        }
        console.log(editedJob);
        break;
      case 'connections':
        editedJob = {
          ...job,
          connections:editedValue
        }
        console.log(editedJob);
        break;
    }
    setEditing(!editing)
  }




  return (
    <>
      <tr scope='row' className={jobOpened ? 'job' : null}>
        <td onClick={() => setJobOpened(!jobOpened)}> {jobOpened ? <IoChevronDownOutline style={{cursor:'pointer'}} /> : <IoChevronUpOutline style={{cursor:'pointer', fontWeight:'bold'}} />}</td>
        {
          editing && editedSection == 'company' ? <td><form onSubmit={handleEdit}><input type='text' value={editedValue} onChange={(e) => setEditedValue(e.target.value)} /></form></td> : <td className={jobOpened ? 'bold' : null} onClick={() => {
            setEditing(!editing)
            setEditedSection('company')
            setEditedValue(job.company)
          }}>{job.company}</td>
        }
        {
          editing && editedSection == 'job title' ? <td><form onSubmit={handleEdit}><input type='text' value={editedValue} onChange={(e) => setEditedValue(e.target.value)} /></form></td> : <td className={jobOpened ? 'bold' : null} onClick={() => {
            setEditing(!editing)
            setEditedSection('job title')
            setEditedValue(job.jobTitle)
          }}><a href={job.link} target='_blank'>{job.jobTitle}</a></td>
        }
        <td style={{color:statusColor}} className={jobOpened ? 'bold' : null}>{job.updates.length < 1 ? job.status : job.updates[0]?.statusUpdate}</td>
        <td className={jobOpened ? 'bold' : null}>{job.updates[0]?.updateDate}</td>
        <td className={jobOpened ? 'bold' : null}>{job.updates[0]?.updateNotes}</td>
        {!jobOpened ? <td onClick={() => {
          setEditingJob(!editingJob)
          setJobToEdit(job)
        }}><IoPencilSharp style={{cursor:'pointer'}}/><IoTrashSharp style={{cursor:'pointer', marginLeft:'5px'}} onClick={() => deleteJob(job)}/></td> : <td></td>}
      </tr>
      { jobOpened &&
        <>
        { job.updates.length > 1 &&
          job.updates.map((update, i) => (
            <JobUpdate key={i} job={job} update={update} jobOpened={jobOpened}  />
          )).filter((update, i) => i !== 0)
        }
          <AddJobUpdate jobOpened={jobOpened} job={job} today={today}/>
          <tr className={jobOpened ? 'job': null}>
            <td></td>
            {
              editing && editedSection == 'job board' ? <td><form onSubmit={handleEdit}><input type='text' value={editedValue} onChange={(e) => setEditedValue(e.target.value)} /></form></td> : <td onClick={() => {
                setEditing(!editing)
                setEditedSection('job board')
                setEditedValue(job.jobBoard)
              }}><strong>Job Board:</strong> {job.jobBoard}</td>
            }
            {
              editing && editedSection == 'resume' ? <td><form onSubmit={handleEdit}><input type='text' value={editedValue} onChange={(e) => setEditedValue(e.target.value)} /></form></td> : <td onClick={() => {
                setEditing(!editing)
                setEditedSection('resume')
                setEditedValue(job.resume)
              }}><strong>Resume:</strong> {job.resume}</td>
            }
            {
              editing && editedSection == 'locations' ? <td><form onSubmit={handleEdit}><input type='text' value={editedValue} onChange={(e) => setEditedValue(e.target.value)} /></form></td> : <td onClick={() => {
                setEditing(!editing)
                setEditedSection('locations')
                setEditedValue(job.location)
              }}><strong>Location(s):</strong> {job.location}</td>
            }
            {
              editing && editedSection == 'category' ? <td><form onSubmit={handleEdit}><input type='text' value={editedValue} onChange={(e) => setEditedValue(e.target.value)} /></form></td> : <td onClick={() => {
                setEditing(!editing)
                setEditedSection('category')
                setEditedValue(job.category)
              }}><strong>Category:</strong> {job.category}</td>
            }
            {
              editing && editedSection == 'connections' ? <td><form onSubmit={handleEdit}><input type='text' value={editedValue} onChange={(e) => setEditedValue(e.target.value)} /></form></td> : <td onClick={() => {
                setEditing(!editing)
                setEditedSection('connections')
                setEditedValue(job.connections)
              }}><strong>Connection(s):</strong> {job.connections}</td>
            }
            <td></td>
          </tr>
        </>
      }
    </>
  )
}
