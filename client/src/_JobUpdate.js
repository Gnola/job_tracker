import React, {  } from 'react';
import { IoTrashSharp, IoPencilSharp } from "react-icons/io5";
import axios from 'axios';

export const JobUpdate = ({job, update, jobOpened}) => {

  // Remove update from job
  const deleteUpdate = (id) => {
    let newUpdates = job.updates.filter(update => update.id !== id )
    let editedJob = {
      ...job,
      updates:[...newUpdates]
    }
    axios.put('http://localhost:3001/jobs/' + job.id, editedJob).then(res => console.log(res.data))
  }

  return (
    <tr className={jobOpened ? 'job': null}>
      <td></td>
      <td></td>
      <td></td>
      <td>{update.statusUpdate}</td>
      <td>{update.updateDate}</td>
      <td>{update.updateNotes}</td>
      <td><IoPencilSharp style={{cursor:'pointer'}}/><IoTrashSharp style={{cursor:'pointer', marginLeft:'5px'}} onClick={() => deleteUpdate(update.id)}/></td>
    </tr>
  );
}
