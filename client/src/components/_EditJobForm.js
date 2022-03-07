import React, { Component } from 'react'
import axios from 'axios';
import { IoCloseSharp } from "react-icons/io5";


class EditJobForm extends React.Component {
  state = {
    id:this.props.jobToEdit.id,
    company:this.props.jobToEdit.company,
    jobTitle:this.props.jobToEdit.jobTitle,
    link:this.props.jobToEdit.link,
    jobBoard:this.props.jobToEdit.jobBoard,
    resume:this.props.jobToEdit.resume,
    location:this.props.jobToEdit.location,
		connections:this.props.jobToEdit.connections,
		requirements:this.props.jobToEdit.requirements,
		salary:this.props.jobToEdit.salary,
		interviewer:this.props.jobToEdit.interviewer,
    interviewProcess:this.props.jobToEdit.interviewProcess,
    updates:[...this.props.jobToEdit.updates],
		whoTheyAre:this.props.jobToEdit.whoTheyAre,
		whatTheyDo:this.props.jobToEdit.whatTheyDo,
		mission:this.props.jobToEdit.mission,
		culture:this.props.jobToEdit.culture,
		size:this.props.jobToEdit.size,
		startDate:this.props.jobToEdit.startDate,
		category:this.props.jobToEdit.category,
		stack:this.props.jobToEdit.stack,
		thingsToMention:this.props.jobToEdit.thingsToMention,
		strengths:this.props.jobToEdit.strengths,
		weaknesses:this.props.jobToEdit.weaknesses,
		projects:this.props.jobToEdit.projects,
		experience:this.props.jobToEdit.experience,
		generalQuestions:this.props.jobToEdit.generalQuestions,
		companyQuestions:this.props.jobToEdit.companyQuestions,
		interviewerQuestions:this.props.jobToEdit.interviewerQuestions,
		interviewProcessQuestions:this.props.jobToEdit.interviewProcessQuestions
  }

  // onChange
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // onSubmit
  handleSubmit = (e) => {
		console.log('submiutted');
    e.preventDefault()
    let editedJob = {
      ...this.state
    }
    this.props.setEditingJob(!this.props.editingJob)

    axios.patch('http://localhost:3001/jobs/' + this.state.id, editedJob).then(res => console.log(res.data))
  }

  render() {
		console.log(this.props.jobToEdit);
    return (
      <div className="modal" tabIndex="-1" role="dialog" style={{display:'block'}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Job</h5>
              <IoCloseSharp className='icon' onClick={() => this.props.setEditingJob(!this.props.editingJob)}/>
            </div>
            <div className="modal-body">
              <form id='editjobform' onSubmit={this.handleSubmit}>
								<h3>Job Info</h3>
                <input type='text' id='jobTitle' onChange={this.handleChange} value={this.state.jobTitle} placeholder='Job Title'/>
                <input type='text' id='link' onChange={this.handleChange} value={this.state.link} placeholder='Link'/>
                <input type='text' id='jobBoard' onChange={this.handleChange} value={this.state.jobBoard} placeholder='Job Board'/>
                <input type='text' id='resume' onChange={this.handleChange} value={this.state.resume} placeholder='Resume'/>
                <input type='text' id='location' onChange={this.handleChange} value={this.state.location} placeholder='Location'/>
								<input type='text' id='connections' onChange={this.handleChange} value={this.state.connections} placeholder='Connection(s)'/>
								<textarea type='textarea' id='requirements' onChange={this.handleChange} value={this.state.requirements} placeholder='Requirements'/>
								<input type='text' id='salary' onChange={this.handleChange} value={this.state.salary} placeholder='Salary'/>
								<input type='text' id='interviewer' onChange={this.handleChange} value={this.state.interviewer} placeholder='Interviewer(s)'/>
								<input type='text' id='interviewProcess' onChange={this.handleChange} value={this.state.interviewProcess} placeholder='Interview Process'/>
								<h3>Company Info</h3>
								<input type='text' id='company' onChange={this.handleChange} value={this.state.company} placeholder='Company'/>
								<textarea type='textarea' id='whoTheyAre' onChange={this.handleChange} value={this.state.whoTheyAre} placeholder='Who They Are'/>
								<textarea type='textarea' id='whatTheyDo' onChange={this.handleChange} value={this.state.whatTheyDo} placeholder='What They Do'/>
								<input type='text' id='mission' onChange={this.handleChange} value={this.state.mission} placeholder='Mission'/>
								<input type='text' id='culture' onChange={this.handleChange} value={this.state.culture} placeholder='Culture'/>
								<input type='text' id='size' onChange={this.handleChange} value={this.state.size} placeholder='Size'/>
								<input type='text' id='startDate' onChange={this.handleChange} value={this.state.startDate} placeholder='Start Date'/>
								<input type='text' id='category' onChange={this.handleChange} value={this.state.category} placeholder='Category'/>
                <input type='text' id='stack' onChange={this.handleChange} value={this.state.stack} placeholder='Stack'/>
								<h3>Things To Mention</h3>
								<textarea type='textarea' id='thingsToMention' onChange={this.handleChange} value={this.state.thingsToMention} placeholder='Things To Mention'/>
								<input type='text' id='strengths' onChange={this.handleChange} value={this.state.strengths} placeholder='Strengths'/>
								<input type='text' id='weaknesses' onChange={this.handleChange} value={this.state.weaknesses} placeholder='Weaknesses'/>
								<textarea type='textarea' id='projects' onChange={this.handleChange} value={this.state.projects} placeholder='Projects'/>
								<textarea type='textarea' id='experience' onChange={this.handleChange} value={this.state.experience} placeholder='Experience'/>
								<h3>Questions</h3>
								<textarea type='textarea' id='generalQuestions' onChange={this.handleChange} value={this.state.generalQuestions} placeholder='General Questions'/>
								<textarea type='textarea' id='companyQuestions' onChange={this.handleChange} value={this.state.companyQuestions} placeholder='Company Questions'/>
								<textarea type='textarea' id='interviewerQuestions' onChange={this.handleChange} value={this.state.interviewerQuestions} placeholder='Interviewer Questions'/>
								<textarea type='textarea' id='interviewProcessQuestions' onChange={this.handleChange} value={this.state.interviewProcessQuestions} placeholder='Interview Process Questions'/>
                <div className="modal-footer">
									<button type="submit" className="btn btn-primary">Save changes</button>
                  <button type="button" className="btn btn-secondary" onClick={() => this.props.setEditingJob(!this.props.editingJob)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditJobForm;
