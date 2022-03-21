import React, { Component } from 'react';
import { IoCloseSharp, IoSettingsOutline } from "react-icons/io5";

 class Company extends React.Component {

	state = {
		job:this.props.job,
		view: 'info',
		requirements:'',
		salary:'',
	}

  changeView = (view) => {
  	this.setState({
    	view:view
  	})
  }


  render() {
    const { job, view, requirements, salary } = this.state;
    const { companyOpened, setCompanyOpened, editingJob, setEditingJob, setJobToEdit } = this.props;
		console.log(job);

    return (
      <div id='company-modal' className="modal" tabIndex="-1" role="dialog" style={{display:'block'}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{job.company}</h2>
							<IoSettingsOutline className='icon' onClick={() => {
		              setEditingJob(!editingJob)
		              setJobToEdit(job)
									setCompanyOpened(!companyOpened)
		          }}/>
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
                  <h3>Job / Interview Info</h3>
                  <p><strong>Job Title:</strong> {job.jobTitle}</p>
                  <p><strong>Job Board:</strong> {job.jobBoard}</p>
                  <p><strong>Resume:</strong> {job.resume}</p>
                  <p><strong>Requirements/Qualifications:</strong> <br/>{job.requirements}</p>
									<p><strong>Salary: </strong>{job.salary}</p>
									<p><strong>Interviewer(s): </strong>{job.interviewer}</p>
                  <p><strong>Interview Process: </strong>{job.interviewProcess}</p>
                </div>
                <div id='company-info' className='modal-body-part'>
                  <h3>Company Info</h3>
									<p><strong>Who They Are:</strong> <br/>{job.whoTheyAre}</p>
									<p><strong>What They Do:</strong> <br/>{job.whatTheyDo}</p>
                  <p><strong>Mission/Values:</strong> {job.mission}</p>
                  <p><strong>Culture:</strong> {job.culture}</p>
									<p><strong>Location:</strong> {job.location}</p>
									<p><strong>Connection(s):</strong> {job.connections}</p>
                  <p><strong>Size:</strong> {job.size}</p>
                  <p><strong>Start Date:</strong> {job.startDate}</p>
									<p><strong>Category:</strong> {job.category}</p>
                  <p><strong>Stack:</strong> {job.stack}</p>
                </div>
              </div>
              :
              <div className='modal-resources'>
                <div id='things-to-mention' className='modal-body-part'>
                  <h3>Things to Mention / Brag List</h3>
									<p>{job.thingsToMention}</p>
                  <p><strong>Strengths:</strong> {job.strengths}</p>
                  <p><strong>Weaknesses:</strong> {job.weaknesses}</p>
                  <p><strong>Projects:</strong> <br/>{job.projects}</p>
                  <p><strong>Experience:</strong> <br/>{job.experience}</p>
                </div>
                <div id='questions' className='modal-body-part'>
                  <h3>Questions</h3>
									<p>{job.generalQuestions}</p>
                  <p><strong>About the Company:</strong><br/>{job.companyQuestions}</p>
                  <p><strong>About the Job/Role:</strong> <br/>{job.jobQuestions}</p>
									<p><strong>About the Interviewer:</strong> <br/>{job.interviewerQuestions}</p>
                  <p><strong>About the Process:</strong> <br/>{job.interviewProcessQuestions}</p>
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
