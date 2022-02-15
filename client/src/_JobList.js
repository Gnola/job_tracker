import React, { useState, useContext } from 'react';
import './App.css';
import { Job } from './_Job.js'
// import { GlobalContext } from './context/GlobalState.js'

export const JobList = ({ jobs }) => {

  // const { jobs } = useContext(GlobalContext);
  const [clicked, setClicked] = useState('all')
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleClick = (text) => {
    switch (text) {
      case 'all':
        setClicked('all')
        setFilteredJobs(jobs)
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
        setFilteredJobs(jobs)
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
            <th scope='col'>Company</th>
            <th scope='col'>Job Title</th>
            <th scope='col'>Status</th>
            <th scope='col'>Last Updated</th>
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
