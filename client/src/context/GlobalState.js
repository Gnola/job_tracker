import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';

// Set up initialState with (hardcoded data)
const initialState = {
  jobs: [
    {
      id: "1",
      status: 'Applied',
      company:'This Company',
      jobTitle:"G",
    },
    {
      id:"2",
      status: 'Phone',
      company:'That Company',
      jobTitle:"M",
    },
    {
      id:"3",
      status: 'Rejected',
      company:'A Company',
      jobTitle:"K",
    }
  ],
  today: `${new Date().getMonth() + 1}/${new Date().getDate()}`
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
      addJob,
      today:state.today
    }}>
      { children }
    </GlobalContext.Provider>
  )
}
