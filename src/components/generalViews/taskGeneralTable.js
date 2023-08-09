import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

//Table cell styling
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

//Table row styling
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

//Table header styling
const tableHeaderStyle = {
  position: 'sticky',
  top: 0,
  backgroundColor: '#FFFFFF',
  zIndex: 1,
};

/**
 * General Task Table Component
 *  This component displays the general view of available tasks
 */
function TaskTable({EditPage, ViewPage}) {

  // BackEnd //

  // Variables
  const { userid } = useParams();
  const [rows, setRows] = React.useState([]);
  const [error, setError] = React.useState(null);
  const history = useNavigate();

  React.useEffect(() => {
    fetchData();
  }, []);

  //Gathers the available non-completed tasks from the database
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/generalTask');
      if (response.ok) {
        const data = await response.json();
        setRows(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  // viewTask is used to go to the Selected Task view matching the taskID
  const viewTask = (taskId) => {
    history(`${ViewPage}${userid}/${taskId}`);
  };

  // editTask is used to go to the Edit Task view matching the taskID
  const editTask = (taskId) => {
    history(`${EditPage}${userid}/${taskId}`);
  };

  // Table Variables
  const rowHeight = 30; // Height of each row
  const maxRows = 13; // Maximum number of rows to display

  const numRows = Math.max(rows.length, maxRows); // Calculate the maximum number of rows
  const tableHeight = numRows <= maxRows ? numRows * rowHeight : `${maxRows * rowHeight}px`;

  // Formats date String
  const formatDate = (dateString) => {
    if (!dateString) {
      return ''; // Return empty string for undefined or empty dates
    }
  
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  // FrontEnd //

  return (
    <div className='taskTable'>
      <TableContainer style={{ maxHeight: tableHeight, overflow: 'auto', marginTop: '10px'}}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead style={tableHeaderStyle}>
            <TableRow>
              <TableCell sx={{ color: '#CA3433', fontWeight: 'bold' }}>Task #</TableCell>
              <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Title</TableCell>
              <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Date Created</TableCell>
              <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Type</TableCell>
              <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Status</TableCell>
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
                    {row.taskNumber}
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{formatDate(row.creationDate)}</TableCell>
                  <TableCell align="left">
                    {row.category === 1
                      ? 'Desk Side'
                      : row.category === 2
                      ? 'Database'
                      : row.category === 3
                      ? 'Network'
                      : row.category === 4
                      ? 'Mobile Telephone'
                      : row.category}
                  </TableCell>
                  <TableCell align="left">
                    {row.status === 1
                      ? 'Pending'
                      : row.status === 2
                      ? 'Assigned'
                      : row.status === 3
                      ? 'In Progress'
                      : row.status === 4
                      ? 'Complete'
                      : row.status}
                  </TableCell>
                  <TableCell>
                    {row.title !== undefined && (
                      <Button
                        sx={{ color: 'white', background: '#CA3433', ':hover': { background: '#FF0000' } }}
                        id={row.taskNumber}
                        onClick={() => viewTask(row.taskNumber)}
                      >
                        View
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.title !== undefined && (
                      <Button sx={{ color: 'white', background: '#CA3433', ':hover': { background: '#FF0000' } }} id={row.taskNumber} onClick={() => editTask(row.taskNumber)}>
                        Edit
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}

export default TaskTable;