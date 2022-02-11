import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

export const BasicTable = ({clicked, jobs}) => {

  return (
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
  );
}
