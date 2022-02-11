import React, { useState, useContext } from 'react';
import {IoChevronDownOutline, IoChevronUpOutline} from "react-icons/io5";

export const Job = ({job}) => {
  const [jobOpened, setJobOpened] = useState(false)

  return (
    <>
      <tr scope='row'>
        <td onClick={() => setJobOpened(!jobOpened)}> {jobOpened ? <IoChevronDownOutline /> : <IoChevronUpOutline/>}</td>
        <td>{job.dateApplied}</td>
        <td>{job.status}</td>
        <td>{job.company}</td>
        <td><a href={job.link} target='_blank'>{job.jobTitle}</a></td>
        <td>{job.lastContact}</td>
        <td>{job.statusUpdate}</td>
      </tr>
      <tr className={jobOpened ? null: 'hide'}>
        <td></td>
        <td>Category: {job.category}</td>
        <td>Location(s): {job.location}</td>
        <td>Connection(s): {job.connections}</td>
        <td>Job Board: {job.jobBoard}</td>
        <td>Resume Used: {job.resume}</td>
        <td>Notes: {job.notes}</td>
      </tr>
    </>
  )
}
