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
    const { job, view, requirements, salary } = this.state
    const { companyOpened, setCompanyOpened, editingJob, setEditingJob, setJobToEdit } = this.props
    console.log(view);
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
                  <h3>Job Info</h3>
                  <p><strong>Job Title:</strong> {job.jobTitle}</p>
                  <p><strong>Job Board:</strong> {job.jobBoard}</p>
                  <p><strong>Resume:</strong> {job.resume}</p>
									<p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Connection(s):</strong> {job.connections}</p>
                  <p><strong>Requirements/Qualifications:</strong> {job.requirements}</p>
									<p><strong>Salary: {job.salary}</strong></p>
									<p><strong>Interviewer: {job.interviewer}</strong></p>
                  <p><strong>Interview Process: {job.interviewProcess}</strong></p>
                </div>
                <div id='company-info' className='modal-body-part'>
                  <h3>Company Info</h3>
									<p><strong>Who They Are:</strong> {job.companyInfo.whoTheyAre}</p>
									<p><strong>What They Do:</strong> {job.companyInfo.whatTheyDo}</p>
                  <p><strong>Mission/Values:</strong> {job.companyInfo.mission}</p>
                  <p><strong>Culture:</strong> {job.companyInfo.culture}</p>
                  <p><strong>Size:</strong> {job.companyInfo.size}</p>
                  <p><strong>Start Date:</strong> {job.companyInfo.startDate}</p>
									<p><strong>Category:</strong> {job.companyInfo.category}</p>
                  <p><strong>Stack:</strong> {job.companyInfo.stack}</p>
                </div>
              </div>
              :
              <div className='modal-resources'>
                <div id='things-to-mention' className='modal-body-part'>
                  <h3>Things to Mention / Brag List</h3>
									<p>{job.interviewingResources.thingsToMention}</p>
                  <p><strong>Strengths:</strong> {job.interviewingResources.strengths}</p>
                  <p><strong>Weaknesses:</strong> {job.interviewingResources.weaknesses}</p>
                  <p><strong>Projects:</strong> {job.interviewingResources.projects}</p>
                  <p><strong>Experience:</strong> {job.interviewingResources.experience}</p>
                </div>
                <div id='questions' className='modal-body-part'>
                  <h3>Questions</h3>
									<p>{job.interviewingResources.generalQuestions}</p>
                  <p><strong>About the Company:</strong>{job.interviewingResources.companyQuestions}</p>
                  <p><strong>About the Job/Role:</strong> {job.interviewingResources.jobQuestions}</p>
									<p><strong>About the Interviewer:</strong> {job.interviewingResources.interviewerQuestions}</p>
                  <p><strong>About the Process:</strong> {job.interviewingResources.interviewProcessQuestions}</p>
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
