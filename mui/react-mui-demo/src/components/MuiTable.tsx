import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Firest name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {tableData.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0}}}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
  )
}
const tableData = [
    {
        id: 1,
        first_name: 'Harshil',
        last_name: 'vaja',
        email: 'harshil@gamil.com'
    },
    {
        id: 2,
        first_name: 'Vikash',
        last_name: 'Panchal',
        email: 'viaksh@gamil.com'
    },
    {
        id: 3,
        first_name: 'Het',
        last_name: 'Patel',
        email: 'het@gamil.com'
    },
    {
        id: 4,
        first_name: 'nick',
        last_name: 'john',
        email: 'nick@gamil.com'
    },
    {
        id: 5,
        first_name: 'jay',
        last_name: 'tadvi',
        email: 'jay@gamil.com'
    },
    {
        id: 6,
        first_name: 'john',
        last_name: 'nick',
        email: 'john@gamil.com'
    },
    {
        id: 7,
        first_name: 'hir',
        last_name: 'parmar',
        email: 'hir@gamil.com'
    },
    {
        id: 8,
        first_name: 'vicky',
        last_name: 'vaja',
        email: 'vicky@gamil.com'
    },
    {
        id: 9,
        first_name: 'reem',
        last_name: 'patel',
        email: 'reem@gamil.com'
    },
    {
        id: 10,
        first_name: 'Harshil',
        last_name: 'vaja',
        email: 'harshil@gamil.com'
    },
    
]

export default MuiTable
