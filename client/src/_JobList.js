import React, { useState, useContext } from 'react';
// import './App.css';
import { Job } from './_Job.js'

export const JobList = ({ jobs }) => {

  const [clicked, setClicked] = useState('all') // Controls Filtered Jobs
  const [filteredJobs, setFilteredJobs] = useState(jobs)
  const [sortedJobs, setSortedJobs] = useState([])
  const [sorted, setSorted] = useState(false)

  // Filter jobs on button click
  const handleClick = (text) => {
    switch (text) {
      case 'all':
        setClicked('all')
        setFilteredJobs(jobs) // Set filteredJobs as default data
        break;
      case 'potential':
        setClicked('potential')
        setFilteredJobs(jobs.filter(job => job.status === 'Potential'))
        break;
      case 'active':
        setClicked('active')
        setFilteredJobs(jobs.filter(job => job.status !== 'Rejected'))
        break;
      case 'done':
        setClicked('done')
        setFilteredJobs(jobs.filter(job => job.status == 'Rejected'))
        break;
      default:
        setFilteredJobs(jobs) // Set filteredJobs as default data
    }
  }

  const handleSort = (text) => {
    console.log(text);
    if (filteredJobs.length > 0) {
      switch (text) {
        case 'company':
          setSorted(!sorted)
          !sorted ? setSortedJobs(filteredJobs.sort((a, b) => a.company > b.company ? 1 : -1)) : setSortedJobs(filteredJobs.sort((a, b) => a.company < b.company ? 1 : -1))
          break;
        case 'status':
          setSorted(!sorted)
          !sorted ? setSortedJobs(filteredJobs.sort((a, b) => a.status > b.status ? 1 : -1)) : setSortedJobs(filteredJobs.sort((a, b) => a.status < b.status ? 1 : -1))
          break;
        case 'updateDate':
          setSorted(!sorted)
          !sorted ? setSortedJobs(filteredJobs.sort((a, b) => a.updates[0].updateDate > b.updates[0].updateDate ? 1 : -1)) : setSortedJobs(filteredJobs.sort((a, b) => a.updates[0].updateDate < b.updates[0].updateDate ? 1 : -1))
          break;
        default:
      }
    } else {
      switch (text) {
        case 'company':
          setSorted(!sorted)
          !sorted ? setSortedJobs(jobs.sort((a, b) => a.company > b.company ? 1 : -1)) : setSortedJobs(jobs.sort((a, b) => a.company < b.company ? 1 : -1))
          break;
        case 'status':
          setSorted(!sorted)
          !sorted ? setSortedJobs(jobs.sort((a, b) => a.status > b.status ? 1 : -1)) : setSortedJobs(jobs.sort((a, b) => a.status < b.status ? 1 : -1))
          break;
        case 'updateDate':
          setSorted(!sorted)
          !sorted ? setSortedJobs(jobs.sort((a, b) => a.updates[0].updateDate > b.updates[0].updateDate ? 1 : -1)) : setSortedJobs(jobs.sort((a, b) => a.updates[0].updateDate < b.updates[0].updateDate ? 1 : -1))
          break;
        default:
      }
    }
  }

  return (
    <>
      <button type='button' className={clicked === 'all' ? 'btn btn-primary' : '"btn btn-light"'} onClick={()=>handleClick('all')}>All</button>
      <button type='button' className={clicked === 'potential' ? 'btn btn-primary' : '"btn btn-light"'} onClick={()=>handleClick('potential')}>Potential</button>
      <button type='button' className={clicked === 'active' ? 'btn btn-primary' : '"btn btn-light"'} onClick={()=>handleClick('active')}>Active</button>
      <button type='button' className={clicked === 'done' ? 'btn btn-primary' : '"btn btn-light"'} onClick={()=>handleClick('done')}>Done</button>
      {clicked === 'all' &&(<h1>All</h1>)}
      {clicked === 'potential' &&(<h1>Potential</h1>)}
      {clicked === 'active' &&(<h1>Active</h1>)}
      {clicked === 'done' &&(<h1>Done</h1>)}
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col' onClick={() => handleSort('company')}>Company</th>
            <th scope='col'>Job Title</th>
            <th scope='col' onClick={() => handleSort('status')}>Status</th>
            <th scope='col' onClick={() => handleSort('updateDate')}>Last Updated</th>
            <th scope='col'>Latest Update</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredJobs.length === 0 ?
            jobs.map((job) => (<Job key={job.id} job={job}/>))
            :
            filteredJobs.map((job) => (<Job key={job.id} job={job}/>))
          }
        </tbody>
      </table>
    </>
  );
}
