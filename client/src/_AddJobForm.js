import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class AddJobForm extends React.Component {
  state = {
    id: '',
    status:'Potential',
    date:`${new Date().getMonth() +1}/${new Date().getDate()}`,
    company:'',
    jobTitle:'',
    link:'',
    jobBoard:'',
    resume:'',
    location:'',
    category:'',
    connections:'',
    notes: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleAddJob = (e) => {
    e.preventDefault()
    console.log(this.state);
    let newJob = {
      ...this.state,
      id:uuidv4(),
      updates: [
        {
          id: uuidv4(),
          statusUpdate: this.state.status,
          updateDate: this.state.date,
          updateNotes: this.state.notes !== '' ? this.state.notes : ''
        }
      ]
    }
    axios.post('http://localhost:3001/jobs/', newJob).then(res => console.log(res.data))
  }

  render() {
    return (
      <form onSubmit={this.handleAddJob}>
        <div className='form-group'>
          <label htmlFor="status">Status</label>
          <select id='status' className="custom-select" value={this.state.status} onChange={this.handleChange}>
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
      <div className='form-group'>
        <label htmlFor="date">Date</label>
        <input type='text' className="form-control" id='date' minLength="4" maxLength="5" value={this.state.date} onChange={this.handleChange} />
      </div>
        <div className='form-group'>
          <label htmlFor="company">Company Name</label>
          <input type='text' className="form-control" id='company' value={this.state.company} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="jobTitle">Job Title</label>
          <input type='text' className="form-control" id='jobTitle' value={this.state.jobTitle} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="link">Link</label>
          <input type='text' className="form-control" id='link' value={this.state.link} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="jobBoard">Job Board</label>
          <input type='text' className="form-control" id='jobBoard' value={this.state.jobBoard} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="resume">Resume Used</label>
          <input type='text' className="form-control" id='resume' value={this.state.resume} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="location">Location(s)</label>
          <input type='text' className="form-control" id='location' value={this.state.location} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="category">Category</label>
          <input type='text' className="form-control" id='category' value={this.state.category} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="connections">Connection(s)</label>
          <input type='text' className="form-control" id='connections' value={this.state.connections} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="notes">Notes</label>
          <input type='text' className="form-control" id='notes' value={this.state.notes} onChange={this.handleChange} />
        </div>
        <br/>
        <button type='submit' className='btn btn-primary'>Add</button>
      </form>
    )
  }
}

export default AddJobForm;
