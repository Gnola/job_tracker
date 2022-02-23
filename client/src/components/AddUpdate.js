import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { IoAddCircleSharp } from "react-icons/io5";

export const AddUpdate = ({ job }) => {

  const [statusUpdate, setStatusUpdate] = useState(job.updates.length >= 1 ? job.updates[0].statusUpdate : job.status)
  const [updateDate, setUpdateDate] = useState('')
  const [updateNotes, setUpdateNotes] = useState('')

  // Add update to job
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
    axios.patch('http://localhost:3001/jobs/' + job.id, editedJob).then(res => console.log(res.data))
  }

  return (
    <tr className='job'>
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
          <option value="Offer">Offer</option>
          <option value="Never Heard Back">Never Heard Back</option>
          <option value="Rejected">Rejected</option>
          <option value="Followed Up">Followed Up</option>
        </select>
      </td>
      <td>
        <input type='text' className="form-control" value={updateDate} onChange={(e) => setUpdateDate(e.target.value)}/>
      </td>
      <td>
        <input type='text' className="form-control" value={updateNotes} onChange={(e) => setUpdateNotes(e.target.value)}/>
      </td>
      <td><button type='button' className='btn btn-primary sm' onClick={() => addUpdate()}><IoAddCircleSharp style={{fontSize:'1.2rem'}} /></button></td>
    </tr>
  );
}
