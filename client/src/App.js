import React, { useState } from 'react';

import './App.css';
import {JobList} from './_JobList.js';
import {AddJobForm} from './_AddJobForm.js';

import { GlobalProvider } from './context/GlobalState.js'

function App() {

  return (
    <GlobalProvider>
      <div className="App">
        <JobList />
        <br/>
        <AddJobForm/>
      </div>
    </GlobalProvider>
  );
}

export default App;
