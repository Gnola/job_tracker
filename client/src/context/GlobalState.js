import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';

// Set up initialState with (hardcoded data)
const initialState = {
  jobs: [
    {
      id: "1",
      dateApplied: 28,
      company:'This Company',
      jobTitle:"G",
      status: 'Applied',
      lastContact: 28,
      statusUpdate: 'Applied'
    },
    {
      id:"2",
      dateApplied: 28,
      company:'That Company',
      jobTitle:"M",
      status: 'Phone',
      lastContact: 28,
      statusUpdate: 'Phone'
    },
    {
      dateApplied: 28,
      company:'A Company',
      jobTitle:"K",
      status: 'Rejected',
      lastContact: 28,
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
