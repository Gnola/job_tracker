import React, { useState, useContext, useEffect } from 'react';
import {IoChevronDownOutline, IoChevronUpOutline, IoTrashSharp, IoPencilSharp} from "react-icons/io5";
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

  return (
    <>
      <tr scope='row' className={jobOpened ? 'job' : null}>
        <td onClick={() => setJobOpened(!jobOpened)}> {jobOpened ? <IoChevronDownOutline style={{cursor:'pointer'}} /> : <IoChevronUpOutline style={{cursor:'pointer'}} />}</td>
        <td className={jobOpened ? 'bold' : null}>{job.company}</td>
        <td className={jobOpened ? 'bold' : null}><a href={job.link} target='_blank'>{job.jobTitle}</a></td>
        <td className={jobOpened ? 'bold' : null} style={{color:statusColor}} >{job.updates.length < 1 ? job.status : job.updates[0]?.statusUpdate}</td>
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
              <JobUpdate key={i} job={job} update={update}  />
            )).filter((update, i) => i !== 0)
          }
          <AddJobUpdate job={job} />
          <tr className={jobOpened ? 'job': null}>
            <td></td>
            <td><strong>Job Board:</strong> {job.jobBoard}</td>
            <td><strong>Resume:</strong> {job.resume}</td>
            <td><strong>Location(s):</strong> {job.location}</td>
            <td><strong>Category:</strong> {job.category}</td>
            <td><strong>Connection(s):</strong> {job.connections}</td>
            <td></td>
          </tr>
        </>
      }
    </>
  )
}
