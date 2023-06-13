import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const tableHeaderStyle = {
  position: 'sticky',
  top: 0,
  backgroundColor: '#FFFFFF',
  zIndex: 1,
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('0001', 'Email not working', '4:20pm, 4/20/2020', 'Help Desk', 'In-progress'),
  createData('0003', 'Email not working', '4:20pm, 4/20/2020', 'Help Desk', 'In-progress'),
  
  
  // Add more rows as needed
];

export default function GeneralTaskTable() {
  const rowHeight = 30; // Height of each row
  const maxRows = 20; // Maximum number of rows to display

  const numRows = Math.max(rows.length, maxRows); // Calculate the maximum number of rows
  const tableHeight = numRows <= maxRows ? numRows * rowHeight : `${maxRows * rowHeight}px`;

  return (
    
      <TableContainer style={{ maxHeight: tableHeight, overflow: 'auto', marginTop:'10px',margin: 0 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead style={tableHeaderStyle}>
            <TableRow>
              <TableCell sx={{ color: '#CA3433', fontWeight: "bold" }}>Task #</TableCell>
              <TableCell align="left" sx={{ color: '#CA3433', fontWeight: "bold" }}>Title</TableCell>
              <TableCell align="left" sx={{ color: '#CA3433', fontWeight: "bold" }}>Date Created</TableCell>
              <TableCell align="left" sx={{ color: '#CA3433', fontWeight: "bold" }}>Type</TableCell>
              <TableCell align="left" sx={{ color: '#CA3433', fontWeight: "bold" }}>Status</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: '#F5F5F5' }}>
            {Array.from({ length: numRows }).map((_, index) => {
              const row = rows[index] || {}; // Get the row if it exists or an empty object
              return (
                <TableRow
                  key={index}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    height: `${rowHeight}px`,
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>
                  <TableCell> {row.fat !== undefined && (
                    <Button sx={{ color: 'white', background: '#CA3433', ':hover': { background: '#FF0000' }}}>
                      View
                    </Button>)}
                  </TableCell>
                  <TableCell> {row.fat !== undefined && (
                    <Button sx={{ color: 'white', background: '#CA3433', ':hover': { background: '#FF0000' }}}>
                      Edit
                    </Button>)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    
  );
}