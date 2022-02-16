import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {IoChevronDownOutline, IoChevronUpOutline, IoAddCircleSharp, IoTrashSharp, IoPencilSharp} from "react-icons/io5";

import { GlobalContext } from './context/GlobalState.js'

export const Job = ({job}) => {

  const { today } = useContext(GlobalContext); // From GlobalState
  const [jobOpened, setJobOpened] = useState(false) // Toggle extra job info
  const [statusColor, setStatusColor] = useState('') // Sets status color

  // Update variables
  const [statusUpdate, setStatusUpdate] = useState(job.updates.length >= 1 ? job.updates[0].statusUpdate: job.status)
  const [updateDate, setUpdateDate] = useState(today)
  const [updateNotes, setUpdateNotes] = useState('')

  useEffect(() => {
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


  const addUpdate = () => {
    let update = {
      id: uuidv4(),
      statusUpdate,
      updateDate,
      updateNotes: updateNotes ? updateNotes : '-'
    }
    let editedJob = {
      ...job,
      status: statusUpdate,
      updates:[update, ...job.updates]
    }
    axios.patch('http://localhost:3001/jobs/' + job.id, editedJob).then(res => console.log(res.data)) // Add update to job
  }


  const deleteUpdate = (id) => {
    let newUpdates = job.updates.filter(update => update.id !== id )
    let editedJob = {
      ...job,
      updates:[...newUpdates]
    }
    axios.put('http://localhost:3001/jobs/' + job.id, editedJob).then(res => console.log(res.data)) // Remove update from job
  }


  const deleteJob = (job) => {
    axios.delete('http://localhost:3001/jobs/' + job.id).then(res => console.log(res.data)) // Delete entire job
  }




  return (
    <>
      <tr scope='row' className={jobOpened ? 'job' : null}>
        <td onClick={() => setJobOpened(!jobOpened)}> {jobOpened ? <IoChevronDownOutline style={{cursor:'pointer'}} /> : <IoChevronUpOutline style={{cursor:'pointer', fontWeight:'bold'}} />}</td>
        <td className={jobOpened ? 'bold' : null}>{job.company}</td>
        <td className={jobOpened ? 'bold' : null}><a href={job.link} target='_blank'>{job.jobTitle}</a></td>
        <td style={{color:statusColor}} className={jobOpened ? 'bold' : null}>{job.updates.length < 1 ? job.status : job.updates[0]?.statusUpdate}</td>
        <td className={jobOpened ? 'bold' : null}>{job.updates[0]?.updateDate}</td>
        <td className={jobOpened ? 'bold' : null}>{job.updates[0]?.updateNotes}</td>
        {!jobOpened ? <td><IoPencilSharp style={{cursor:'pointer'}}/><IoTrashSharp style={{cursor:'pointer', marginLeft:'5px'}} onClick={() => deleteJob(job)}/></td> : <td></td>}
      </tr>
      { jobOpened &&
        <>
        { job.updates.length > 1 &&
          job.updates.map((update, i) => (
            <tr key={i} className={jobOpened ? 'job': null}>
              <td></td>
              <td></td>
              <td></td>
              <td>{update.statusUpdate}</td>
              <td>{update.updateDate}</td>
              <td>{update.updateNotes}</td>
              <td><IoPencilSharp style={{cursor:'pointer'}}/><IoTrashSharp style={{cursor:'pointer', marginLeft:'5px'}} onClick={() => deleteUpdate(update.id)}/></td>
            </tr>
          )).filter((update, i) => i !== 0)
        }
          <tr className={jobOpened ? 'job': null}>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <select className="form-select" value={statusUpdate} onChange={(e) => setStatusUpdate(e.target.value)}>
                <option value="Potential">Potential</option>
                <option value="Applied">Applied</option>
                <option value="Phone Screen">Phone Screen</option>
                <option value="Technical Interview">Technical Interview</option>
                <option value="Behavioral Interview">Behavioral Interview</option>
                <option value="Rejected">Rejected</option>
                <option value="Never Heard Back">Never Heard Back</option>
                <option value="Offer">Offer</option>
              </select>
            </td>
            <td>
              <input type='text' className="form-control" value={updateDate} onChange={(e) => setUpdateDate(e.target.value)}/>
            </td>
            <td>
              <input type='text' className="form-control" value={updateNotes} onChange={(e) => setUpdateNotes(e.target.value)}/>
            </td>
            <td><button type='button' className='btn btn-primary sm' onClick={() => addUpdate()}><IoAddCircleSharp style={{fontSize:'1.5rem'}} /></button></td>
          </tr>
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
