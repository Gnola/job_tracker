import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {IoChevronDownOutline, IoChevronUpOutline, IoTrashSharp, IoSettingsOutline} from "react-icons/io5";

import Update  from './_Update.js' // View
import { AddUpdate } from './AddUpdate.js' // Component
import Company from './_Company.js' // View


export const Job = ({job, today, setJobToEdit, editingJob, setEditingJob}) => {

  const [jobOpened, setJobOpened] = useState(false) // Toggle extra job info
  const [statusColor, setStatusColor] = useState('') // Sets status color
  const [companyOpened, setCompanyOpened] = useState(false) // Toggle extra job info

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
      case 'Technical Interview':
        setStatusColor('green')
        break;
      case 'Behavioral Interview':
        setStatusColor('green')
        break;
      case 'Never Heard Back':
        setStatusColor('#ba1e4a')
        break;
      case 'Rejected':
        setStatusColor('red')
        break;
      case 'Followed Up':
        setStatusColor('orange')
        break;
      default:
        setStatusColor('black')
    }
  })

  // Delete entire job
  const deleteJob = (job) => {
    axios.delete('http://localhost:3001/jobs/' + job.id).then(res => console.log(res.data))
  }

  return (
    <>
      { companyOpened && <Company job={job} companyOpened={companyOpened} setCompanyOpened={setCompanyOpened} setJobToEdit={setJobToEdit} setEditingJob={setEditingJob} editingJob={editingJob} />}
      <tr scope='row' className={jobOpened ? 'job' : null}>
        <td onClick={() => setJobOpened(!jobOpened)}> {jobOpened ? <IoChevronDownOutline className='icon' /> : <IoChevronUpOutline className='icon' />}</td>
        <td onClick={() => setCompanyOpened(!companyOpened)} className={jobOpened ? 'bold' : null} style={{cursor:'pointer'}}>{job.company}</td>
        <td className={jobOpened ? 'bold' : null}><a href={job.link} target='_blank'>{job.jobTitle}</a></td>
				<td className={jobOpened ? 'bold' : null} style={{color:statusColor}} >{job.updates.length < 1 ? job.status : job.updates[0]?.statusUpdate}</td>
				<td className={jobOpened ? 'bold' : null}>{job.updates[0]?.updateDate}</td>
				<td className={jobOpened ? 'bold' : null}>{job.updates[0]?.updateNotes}</td>
        <td>
          <IoSettingsOutline className='icon' onClick={() => {
              setEditingJob(!editingJob)
              setJobToEdit(job)
          }}/>
          <IoTrashSharp className='icon' style={{marginLeft:'10px'}} onClick={() => deleteJob(job)}/>
        </td>
      </tr>
      {
        jobOpened &&
        <>
          { job.updates.length > 0 &&
            job.updates.map((update, i) => (
              <Update key={i} job={job} update={update} />
            ))
          }
          <AddUpdate job={job} />
        </>
      }
    </>
  )
}
