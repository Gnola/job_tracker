import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class AddJobForm extends React.Component {
  state = {
    status:'Potential',
    date:`${new Date().getMonth() +1}/${new Date().getDate()}`,
		company:'',
    jobTitle:'',
    link:'',
    jobBoard:'',
    resume:'',
    notes: '',
  }

  // onChange
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  // onSubmit
  handleAddJob = (e) => {
    e.preventDefault()
    let newJob = {
      ...this.state,
			// adding empty content not on form
      id:uuidv4(), // add a random id
			location:'',
			connections:'',
			interviewProcess: '',
			requirements: '',
			salary:'',
			interviewer:'',
			updates: [ // add array of updates with inital update from what was inputted into the form
				{
					id: uuidv4(),
					statusUpdate: this.state.status,
					updateDate: this.state.date,
					updateNotes: this.state.notes
				}
			],
			companyInfo: {
				category:'',
				whoTheyAre:'',
				whatTheyDo:'',
				mission:'',
				culture:'',
				size:'',
				startDate:'',
				stack:'',
			},
			interviewingResources: {
				thingsToMention:'',
				strengths:'',
				weaknesses:'',
				projects:'',
				experience:'',
				generalQuestions:'',
				companyQuestions:'',
				jobQuestions:'',
				interviewerQuestions:'',
				interviewProcessQuestions:''
			}
    }
		console.log(newJob);
    axios.post('http://localhost:3001/jobs/', newJob).then(res => console.log(res.data))

    this.setState({
      status:'Potential',
      date:`${new Date().getMonth() +1}/${new Date().getDate()}`,
      company:'',
      jobTitle:'',
      link:'',
      jobBoard:'',
      resume:'',
      notes: '',
    })
  }

  render() {
    return (
      <form id='addjobform' onSubmit={this.handleAddJob}>
        <h2>Add Job</h2>
        <div className='row mb-2'>
          <div className='col'>
            <label htmlFor="status">Status</label>
            <br/>
            <select id='status' className="form-select" value={this.state.status} onChange={this.handleChange}>
              <option value="Potential">Potential</option>
              <option value="Applied">Applied</option>
              <option value="Phone Screen">Phone Screen</option>
              <option value="Technical Interview">Technical Interview</option>
              <option value="Behavioral Interview">Behavioral Interview</option>
              <option value="Rejected">Rejected</option>
              <option value="Never Heard Back">Never Heard Back</option>
              <option value="Offer">Offer</option>
            </select>
          </div>
          <div className='col'>
            <label htmlFor="date">Date</label>
            <input type='text' className="form-control" id='date' minLength="4" maxLength="5" value={this.state.date} onChange={this.handleChange} />
          </div>
          <div className='col'>
            <label htmlFor="company">Company Name</label>
            <input type='text' className="form-control" id='company' value={this.state.company} onChange={this.handleChange} />
          </div>
          <div className='col'>
            <label htmlFor="jobTitle">Job Title</label>
            <input type='text' className="form-control" id='jobTitle' value={this.state.jobTitle} onChange={this.handleChange} />
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <label htmlFor="link">Link</label>
            <input type='text' className="form-control" id='link' value={this.state.link} onChange={this.handleChange} />
          </div>
          <div className='col'>
            <label htmlFor="jobBoard">Job Board</label>
            <input type='text' className="form-control" id='jobBoard' value={this.state.jobBoard} onChange={this.handleChange} />
          </div>
          <div className='col'>
            <label htmlFor="resume">Resume Used</label>
            <input type='text' className="form-control" id='resume' value={this.state.resume} onChange={this.handleChange} />
          </div>
          <div className='col'>
            <label htmlFor="notes">Notes</label>
            <input type='text' className="form-control" id='notes' value={this.state.notes} onChange={this.handleChange} />
          </div>
				</div>
        <button type='submit' className='btn btn-primary'>Add Job</button>
      </form>
    )
  }
}

export default AddJobForm;
