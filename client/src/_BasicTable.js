import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

import { GlobalContext } from './context/GlobalState.js'

export const BasicTable = () => {

  const { jobs } = useContext(GlobalContext);

  const [clicked, setClicked] = useState('all')

  return (
    <>
    <Button variant={clicked === 'all' ? 'contained' : 'outlined'} onClick={()=>setClicked('all')}>All</Button>
    <Button variant={clicked === 'potential' ? 'contained' : 'outlined'} onClick={()=>setClicked('potential')}>Potential</Button>
    <Button variant={clicked === 'active' ? 'contained' : 'outlined'} onClick={()=>setClicked('active')}>Active</Button>
    <Button variant={clicked === 'done' ? 'contained' : 'outlined'} onClick={()=>setClicked('done')}>Done</Button>
    {clicked === 'all' &&(<h1>All</h1>)}
    {clicked === 'potential' &&(<h1>Potential</h1>)}
    {clicked === 'active' &&(<h1>Active</h1>)}
    {clicked === 'done' &&(<h1>Done</h1>)}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date Applied</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Job Title</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Last Contacted</TableCell>
            <TableCell align="center">Last Status Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{job.dateApplied}</TableCell>
              <TableCell align="center">{job.company}</TableCell>
              <TableCell align="center"><a href={job.link}>{job.jobTitle}</a></TableCell>
              <TableCell align="center">{job.status}</TableCell>
              <TableCell align="center">{job.lastContact}</TableCell>
              <TableCell align="center">{job.statusUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
