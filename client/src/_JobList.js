import React, { useState, useContext } from 'react';
import './App.css';
import { Job } from './_Job.js'
// import { GlobalContext } from './context/GlobalState.js'

export const JobList = ({ jobs }) => {

  // const { jobs } = useContext(GlobalContext);
  const [clicked, setClicked] = useState('all')

  return (
    <>
      <button type='button' className={clicked === 'all' ? 'btn btn-primary' : '"btn btn-light"'} onClick={()=>setClicked('all')}>All</button>
      <button type='button' className={clicked === 'potential' ? 'btn btn-primary' : '"btn btn-light"'} onClick={()=>setClicked('potential')}>Potential</button>
      <button type='button' className={clicked === 'active' ? 'btn btn-primary' : '"btn btn-light"'} onClick={()=>setClicked('active')}>Active</button>
      <button type='button' className={clicked === 'done' ? 'btn btn-primary' : '"btn btn-light"'} onClick={()=>setClicked('done')}>Done</button>
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
          {jobs.map((job) => (
              <Job key={job.id} job={job}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
