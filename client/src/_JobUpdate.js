import React, { Component } from 'react';
import { IoTrashSharp, IoPencilSharp } from "react-icons/io5";
import axios from 'axios';

 class JobUpdate extends React.Component {
   state = {
     editing: false,
     job: this.props.job,
     update: this.props.update,
     statusUpdate:this.props.update.statusUpdate,
     updateDate:this.props.update.updateDate,
     updateNotes:this.props.update.updateNotes,
   }

   // Delete update from job
   deleteUpdate = (id) => {
     let newUpdates = this.state.job.updates.filter(update => update.id !== id )
     let editedJob = {
       ...this.state.job,
       updates:[...newUpdates]
     }
     // console.log(editedJob);
     axios.put('http://localhost:3001/jobs/' + this.state.job.id, editedJob).then(res => console.log(res.data))
   }

   editUpdate = (id) => {
     this.setState({
       editing:!this.state.editing
     })
   }

   handleChange = (e) => {
     this.setState({
       [e.target.id] : e.target.value
     })
   }

   handlleSubmit = (e) => {
     e.preventDefault()

     let newUpdate = {
       id: this.state.update.id,
       statusUpdate:this.state.statusUpdate,
       updateDate:this.state.updateDate,
       updateNotes:this.state.updateNotes
     }

     let newUpdates = []
     this.state.job.updates.forEach((update) => {
       if (update.id === newUpdate.id) {
         newUpdates.push(newUpdate)
       } else {
         newUpdates.push(update)
       }
     })

     console.log(this.state.job);

     let editedJob = {
       ...this.state.job,
       updates:[...newUpdates]
     }
     console.log(editedJob);

     axios.put('http://localhost:3001/jobs/' + editedJob.id, editedJob).then(res => console.log(res.data))

     this.setState({
       editing:!this.state.editing
     })
   }

   render() {
     return (
       <tr className='job'>
         <td></td>
         <td></td>
         <td></td>
         { this.state.editing ?
           <td>
              <form onSubmit={this.handlleSubmit}>
                <select id='statusUpdate' className="custom-select" value={this.state.statusUpdate} onChange={this.handleChange}>
                  <option value="Potential">Potential</option>
                  <option value="Applied">Applied</option>
                  <option value="Phone Screen">Phone Screen</option>
                  <option value="Technical Interview">Technical Interview</option>
                  <option value="Behavioral Interview">Behavioral Interview</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Never Heard Back">Never Heard Back</option>
                  <option value="Offer">Offer</option>
                </select>
              </form>
            </td>
           :
           <td>{this.state.update.statusUpdate}</td>
         }
         { this.state.editing ?
           <td><form onSubmit={this.handlleSubmit}><input type='text' id='updateDate' value={this.state.updateDate} onChange={this.handleChange} /></form></td>
           :
           <td>{this.state.update.updateDate}</td>
         }
         { this.state.editing ?
           <td><form onSubmit={this.handlleSubmit}><input type='text' id='updateNotes' value={this.state.updateNotes} onChange={this.handleChange} /></form></td>
           :
           <td>{this.state.update.updateNotes}</td>
         }
         <td><IoPencilSharp style={{cursor:'pointer'}} onClick={() => this.editUpdate(this.state.update.id)}/><IoTrashSharp style={{cursor:'pointer', marginLeft:'5px'}} onClick={() => this.deleteUpdate(this.state.update.id)}/></td>
       </tr>
     );
   }
 }


export default JobUpdate;
