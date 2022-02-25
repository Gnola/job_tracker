import React, { Component } from 'react';
import { IoCloseSharp } from "react-icons/io5";

 class Company extends React.Component {

   state = {
     job:this.props.job,
     editing:false,
     view: 'info'
   }

   changeView = (view) => {
    this.setState({
      view:view
    })
   }



   render() {
     const { job, editing, view } = this.state
     const { companyOpened, setCompanyOpened } = this.props

     return (
       <div id='company-modal' className="modal" tabIndex="-1" role="dialog" style={{display:'block'}}>
         <div className="modal-dialog" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h2 className="modal-title">{job.company}</h2>
               <IoCloseSharp className='icon' onClick={()=>setCompanyOpened(!companyOpened)}/>
             </div>
             <div className='company-buttons'>
              <button className={view === 'info' ? 'btn btn-primary': 'btn btn-secondary'} onClick={() => this.changeView('info')}>Info</button>
              <button className={view === 'resources' ? 'btn btn-primary': 'btn btn-secondary'} onClick={() => this.changeView('resources')}>Resources</button>
             </div>
             <div className="modal-body">
             {
               view === 'info' ?
               <div className='modal-info'>
                 <div id='job-info' className='modal-body-part'>
                   <h3>Job Info</h3>
                   <p><strong>Job Title:</strong> {job.jobTitle}</p>
                   <p><strong>Job Board:</strong> {job.jobBoard}</p>
                   <p><strong>Resume:</strong> {job.resume}</p>
                   <p><strong>Connection(s):</strong> {job.connections}</p>
                   <p><strong>Requirements/Qualifications:</strong></p>
                   <p><strong>Salary:</strong></p>
                 </div>
                  <div id='company-info' className='modal-body-part'>
                    <h3>Company Info</h3>
                    <p><strong>Mission/Values:</strong></p>
                    <p><strong>Team/Environment:</strong></p>
                    <p><strong>Size:</strong></p>
                    <p><strong>Years in Business:</strong></p>
                    <p><strong>Category:</strong> {job.category}</p>
                    <p><strong>Location(s):</strong> {job.location}</p>
                  </div>
                  <div id='interviewing-info' className='modal-body-part'>
                    <h3>Interviewing Info</h3>
                    <p><strong>Interviewer(s):</strong></p>
                    <p><strong>Process:</strong></p>
                  </div>
               </div>
               :
               <div className='modal-resources'>
                  <div id='things-to-mention' className='modal-body-part'>
                    <h3>Things to Mention / Brag List</h3>
                    <p><strong>Strengths:</strong></p>
                    <p><strong>Weaknesses:</strong></p>
                    <p><strong>Projects:</strong></p>
                    <p><strong>Experience:</strong></p>
                  </div>
                  <div id='questions' className='modal-body-part'>
                    <h3>Questions</h3>
                    <p><strong>About the Company:</strong></p>
                    <p><strong>About the Job/Role:</strong></p>
                    <p><strong>About Me:</strong></p>
                    <p><strong>About the Process:</strong></p>
                  </div>
              </div>
             }
             </div>
           </div>
         </div>
       </div>
     );
   }
 }


export default Company;
