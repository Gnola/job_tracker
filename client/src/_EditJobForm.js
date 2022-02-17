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
    category:this.props.jobToEdit.category,
    connections:this.props.jobToEdit.connections,
    updates:[...this.props.jobToEdit.updates]
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let editedJob = {
      ...this.state
    }
    console.log(editedJob);
    this.props.setEditingJob(!this.props.editingJob)

    axios.patch('http://localhost:3001/jobs/' + this.state.id, editedJob).then(res => console.log(res.data))
  }

  render() {
    console.log(this.state);
    return (
      <div className="modal" tabIndex="-1" role="dialog" style={{display:'block'}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Job</h5>
              <IoCloseSharp style={{cursor:'pointer'}} onClick={() => this.props.setEditingJob(!this.props.editingJob)}/>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <input type='text' id='company' onChange={this.handleChange} value={this.state.company} placeholder='Company'/>
                <input type='text' id='jobTitle' onChange={this.handleChange} value={this.state.jobTitle} placeholder='Job Title'/>
                <input type='text' id='link' onChange={this.handleChange} value={this.state.link} placeholder='Link'/>
                <input type='text' id='jobBoard' onChange={this.handleChange} value={this.state.jobBoard} placeholder='Job Board'/>
                <input type='text' id='resume' onChange={this.handleChange} value={this.state.resume} placeholder='Resume'/>
                <input type='text' id='location' onChange={this.handleChange} value={this.state.location} placeholder='Location(s)'/>
                <input type='text' id='category' onChange={this.handleChange} value={this.state.category} placeholder='Category'/>
                <input type='text' id='connections' onChange={this.handleChange} value={this.state.connections} placeholder='Connection(s)'/>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Save changes</button>
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
