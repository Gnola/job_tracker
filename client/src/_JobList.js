import React, { useState, useContext } from 'react';
import { Job } from './_Job.js'; // Page/Consistent View

export const JobList = ({ jobs, setJobToEdit,  editingJob, setEditingJob }) => {

  const [clicked, setClicked] = useState('all') // Controls Filtered Jobs
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const [sorted, setSorted] = useState(false)
  const [sortedJobs, setSortedJobs] = useState([])

  // Filter jobs
  const handleFilter = (text) => {
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
        setFilteredJobs(jobs.filter(job => job.status !== 'Rejected' && job.status !== 'Potential'))
        break;
      case 'done':
        setClicked('done')
        setFilteredJobs(jobs.filter(job => job.status == 'Rejected'))
        break;
      default:
        setFilteredJobs(jobs) // Set filteredJobs as default data
    }
  }

  // Sort jobs
  const handleSort = (text) => {
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
      }
    }
  }

  return (
    <>
      <div className='sorting-btns'>
        <button type='button' className={clicked === 'all' ? 'btn btn-primary' : "btn btn-light"} onClick={()=>handleFilter('all')}>All</button>
        <button type='button' className={clicked === 'potential' ? 'btn btn-primary' : "btn btn-light"} onClick={()=>handleFilter('potential')}>Potential</button>
        <button type='button' className={clicked === 'active' ? 'btn btn-primary' : "btn btn-light"} onClick={()=>handleFilter('active')}>Active</button>
        <button type='button' className={clicked === 'done' ? 'btn btn-primary' : "btn btn-light"} onClick={()=>handleFilter('done')}>Done</button>
      </div>
      <span style={{textAlign:'center', marginTop: '50px'}}>
      {
        clicked === 'all' ? <h2>All</h2> : clicked === 'potential' ? <h2>Potential</h2> : clicked === 'active' ? <h2>Active</h2> : clicked === 'done' ? <h2>Done</h2> : null
      }
      </span>
      <table className='table'>
        {/* Row of Headers */}
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col' onClick={() => handleSort('company')} style={{cursor:'pointer'}}>Company</th>
            <th scope='col'>Job Title</th>
            <th scope='col' onClick={() => handleSort('status')} style={{cursor:'pointer'}}>Status</th>
            <th scope='col' onClick={() => handleSort('updateDate')} style={{cursor:'pointer'}}>Last Updated</th>
            <th scope='col'>Latest Update</th>
          </tr>
        </thead>
        {/* Rows of Jobs */}
        <tbody>
          {
            filteredJobs.length === 0 ?
            jobs.map((job) => (<Job key={job.id} job={job} setJobToEdit={setJobToEdit} setEditingJob={setEditingJob} editingJob={editingJob}/>))
            :
            filteredJobs.map((job) => (<Job key={job.id} job={job} setJobToEdit={setJobToEdit} setEditingJob={setEditingJob} editingJob={editingJob}/>))
          }
        </tbody>
      </table>
    </>
  );
}
