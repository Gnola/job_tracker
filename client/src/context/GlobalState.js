import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';

// Set up initialState with (hardcoded data)
const initialState = {
  jobs: [
    {
      id: "1",
      dateApplied: '2/11',
      company:'This Company',
      jobTitle:"G",
      status: 'Applied',
      lastContact: '2/11',
      statusUpdate: 'Applied',
      link:'#'
    },
    {
      id:"2",
      dateApplied: '2/11',
      company:'That Company',
      jobTitle:"M",
      status: 'Phone',
      lastContact: '2/11',
      statusUpdate: 'Phone'
    },
    {
      id:"3",
      dateApplied: '2/11',
      company:'A Company',
      jobTitle:"K",
      status: 'Rejected',
      lastContact: '2/11',
      statusUpdate: 'Rejected'
    }
  ]
}


export const GlobalContext = createContext(initialState) // Create global context with initialState

// Create Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions that make a call to the reducer
  const addJob = (job) => {
    dispatch({
      type: 'ADD_JOB',
      payload: job
    })
  }

  return (
    <GlobalContext.Provider value={{
      jobs:state.jobs,
      addJob
    }}>
      { children }
    </GlobalContext.Provider>
  )
}
