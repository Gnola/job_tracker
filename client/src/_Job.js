import React, { useState, useContext } from 'react';
import {IoChevronDownOutline, IoChevronUpOutline} from "react-icons/io5";

export const Job = ({job}) => {
  const [jobOpened, setJobOpened] = useState(false)

  return (
    <>
      <tr scope='row'>
        <td onClick={() => setJobOpened(!jobOpened)}> {jobOpened ? <IoChevronDownOutline style={{cursor:'pointer'}} /> : <IoChevronUpOutline style={{cursor:'pointer'}} />}</td>
        <td>{job.status}</td>
        <td>{job.company}</td>
        <td><a href={job.link} target='_blank'>{job.jobTitle}</a></td>
        <td>{job.updatedDate}</td>
        <td>{job.latestUpdate}</td>
      </tr>
      <tr className={jobOpened ? null: 'hide'}>
        <td></td>
        <td>Job Board: <strong>{job.jobBoard}</strong></td>
        <td>Resume: <strong>{job.resume}</strong></td>
        <td>Location(s): <strong>{job.location}</strong></td>
        <td>Category: <strong>{job.category}</strong></td>
        <td>Connection(s): {job.connections}</td>
      </tr>
    </>
  )
}
