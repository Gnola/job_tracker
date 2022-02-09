import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

export default function BasicTable({clicked, rows}) {

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
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">{row.dateApplied}</TableCell>
              <TableCell align="center">{row.company}</TableCell>
              <TableCell align="center"><a href={row.link}>{row.jobTitle}</a></TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.lastContact}</TableCell>
              <TableCell align="center">{row.statusUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
