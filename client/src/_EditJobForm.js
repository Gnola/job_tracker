import React, { Component } from 'react'
import axios from 'axios';

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
      [e.target.name]: e.target.value
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
    return (
      <div className="modal" tabIndex="-1" role="dialog" style={{display:'block'}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Job</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" onClick={() => this.props.setEditingJob(!this.props.editingJob)}>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <input type='text' name='company' onChange={this.handleChange} value={this.state.company} placeholder='Company'/>
                <input type='text' name='jobTitle' onChange={this.handleChange} value={this.state.jobTitle} placeholder='Job Title'/>
                <input type='text' name='link' onChange={this.handleChange} value={this.state.link} placeholder='Link'/>
                <input type='text' name='jobBoard' onChange={this.handleChange} value={this.state.jobBoard} placeholder='Job Board'/>
                <input type='text' name='resume' onChange={this.handleChange} value={this.state.resume} placeholder='Resume'/>
                <input type='text' name='location' onChange={this.handleChange} value={this.state.location} placeholder='Location(s)'/>
                <input type='text' name='category' onChange={this.handleChange} value={this.state.category} placeholder='Category'/>
                <input type='text' name='connections' onChange={this.handleChange} value={this.state.connections} placeholder='Connection(s)'/>
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
