import React, { useState, useContext } from 'react';
import {IoChevronDownOutline, IoChevronUpOutline, IoAddCircleSharp} from "react-icons/io5";
import { GlobalContext } from './context/GlobalState.js'


export const Job = ({job}) => {
  const { today } = useContext(GlobalContext);

  console.log();

  const [jobOpened, setJobOpened] = useState(false) // Toggle extra job info

  const [statusUpdate, setStatusUpdate] = useState(job.status)
  const [updateDate, setUpdateDate] = useState(today)
  const [updateNotes, setUpdateNotes] = useState('')

  // Need to add to specific job's updates array
  const createUpdate = () => {
    let jobId = job.id
    let newUpdate = {
      statusUpdate,
      updateDate,
      updateNotes
    }
    console.log(jobId, newUpdate);
  }


  return (
    <>
      <tr scope='row' className={jobOpened ? 'job': null}>
        <td onClick={() => setJobOpened(!jobOpened)}> {jobOpened ? <IoChevronDownOutline style={{cursor:'pointer'}} /> : <IoChevronUpOutline style={{cursor:'pointer'}} />}</td>
        <td className={jobOpened ? 'bold' : null}>{job.company}</td>
        <td className={jobOpened ? 'bold' : null}><a href={job.link} target='_blank'>{job.jobTitle}</a></td>
        <td className={jobOpened ? 'bold' : null}>{job.status}</td>
        <td className={jobOpened ? 'bold' : null}>{job.updates[0].updateDate}</td>
        <td className={jobOpened ? 'bold' : null}>{job.updates[0].updateNotes}</td>
      </tr>
      { jobOpened &&
        <>
        { job.updates.length > 1 &&
          job.updates.map((update) => (
            <tr className={jobOpened ? 'job': null}>
              <td></td>
              <td></td>
              <td></td>
              <td>{update.statusUpdate}</td>
              <td>{update.updateDate}</td>
              <td>{update.updateNotes}</td>
              </tr>
          ))
        }
          <tr className={jobOpened ? 'job': null}>
            <td></td>
            <td></td>
            <td><button type='button' className='btn btn-primary sm' onClick={() => createUpdate()}><IoAddCircleSharp style={{fontSize:'1.5rem'}} /></button></td>
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
          </tr>
          <tr className={jobOpened ? 'job': null}>
            <td></td>
            <td><strong>Job Board:</strong> {job.jobBoard}</td>
            <td><strong>Resume:</strong> {job.resume}</td>
            <td><strong>Location(s):</strong> {job.location}</td>
            <td><strong>Category:</strong> {job.category}</td>
            <td><strong>Connection(s):</strong> {job.connections}</td>
          </tr>
        </>
      }
    </>
  )
}
