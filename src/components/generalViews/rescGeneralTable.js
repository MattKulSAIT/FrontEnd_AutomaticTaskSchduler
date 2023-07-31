import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { AlignHorizontalCenter } from '@mui/icons-material';
import { useCalendarState } from '@mui/x-date-pickers/internals';

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
 * General Resource Table Components (ADMIN)
 *  This component displays the general view of available resources
 */
function RescTable() {

  // BackEnd //

  // Variables
  const [rows, setRows] = useState([]);
  const [adminRows, setAdminRows] = useState([]);
  const [error, setError] = useState(null);
  const [taskCounts, setTaskCounts] = useState({});
  const [avaiableHours, setAvaiableHours] = useState({});
  const [totalHours, setTotalHours] = useState({});
  const history = useNavigate();

  useEffect(() => {
    fetchData();
    fetchAdminData();
  }, []);

  //Gathers the available resources from the database
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/generalResource/R');
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

  //Gathers the number of tasks for each resource matching employeeID
  const fetchNumberOfTasks = async (employeeId) => {
    try {
      const response = await fetch(`http://localhost:8080/generalResource/${employeeId}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  //Gathers the total number of hours that that a resouce can work for this week 
  const fetchTotalHours = async (employeeId) => {
    try {
      if (employeeId === null || employeeId === undefined) {
        return {}; // Return an empty object if employeeId is null
      }
      
      const response = await fetch(`http://localhost:8080/schedule/total/${employeeId}`);
      if (response.ok) {
        const data = await response.json();
        return data; // Return just the total hours value
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  //Gathers the avaiable hours a resouce can still be assigned this week
  const fetchAvaliable = async (employeeId) => {
    try {
      if (employeeId === null || employeeId === undefined) {
        return {}; // Return an empty object if employeeId is null
      }

      const response = await fetch(`http://localhost:8080/schedule/available/${employeeId}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  //Gathers the available resources from the database who are an Admin
  const fetchAdminData = async () => {
    try {
      const response = await fetch('http://localhost:8080/generalResource/A');
      if (response.ok) {
        const data = await response.json();
        setAdminRows(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  //Use effect for all row specific calles
  useEffect(() => {
    const fetchTaskCounts = async () => {
      const counts = {};
      const someonesTotalHours = {}
      const someonesAvaiableHours = {}
      for (const row of rows) {
        const count = await fetchNumberOfTasks(row.employeeId);
        const totalH = await fetchTotalHours(row.employeeId);
        const avaiableH = await fetchAvaliable(row.employeeId);
        counts[row.employeeId] = count;
        someonesTotalHours[row.employeeId] = totalH;
        someonesAvaiableHours[row.employeeId] = avaiableH;
      }
      setTaskCounts(counts);
      setTotalHours(someonesTotalHours);
      setAvaiableHours(someonesAvaiableHours);
    };

    fetchTaskCounts();
    fetchTotalHours();
    fetchAvaliable();
  }, [rows]);

  if (error) {
    return <div>Error: {error}</div>;
  }


  



  // viewResource is used to go to the Selected Resource view matching the employeeID
  const viewResource = (employeeId) => {
    history(`/resourceSelected_Admin/${employeeId}`);
  };

  // editResource is used to go to the Edit Resource view matching the employeeID
  const editResource = (employeeId) => {
    history(`/resourceEdit_Admin/${employeeId}`);
  };

  // editAdmin is used to go to the Edit Resource view matching the employeeID
  const editAdmin = (employeeId) => {
    history(`/adminEdit_Admin/${employeeId}`);
  };

  // Table Variables
  const rowHeight = 30; // Height of each row
  const maxRows = 13; // Maximum number of rows to display

  const numRows = Math.max(rows.length, maxRows); // Calculate the maximum number of rows
  const tableHeight = numRows <= maxRows ? numRows * rowHeight : `${maxRows * rowHeight}px`;

  // FrontEnd //

  return (
    <div className='rescTable'>
      <div className='resources'>
        <main>
          
          <TableContainer style={{ maxHeight: tableHeight, overflow: 'auto', marginTop: '10px', margin: 0 }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead style={tableHeaderStyle}>
                <TableRow>
                  <TableCell sx={{ color: '#CA3433', fontWeight: 'bold' }}>EmployeeID</TableCell>
                  <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Avalilable Hours</TableCell>
                  <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Total Hours</TableCell>
                  <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}># of Current Tasks</TableCell>
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
                        {row.employeeId}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{avaiableHours[row.employeeId] !== undefined ? avaiableHours[row.employeeId] : ''}</TableCell>
                      <TableCell align="left">{totalHours[row.employeeId] !== undefined ? totalHours[row.employeeId] : ''}</TableCell>
                      <TableCell align="left">{taskCounts[row.employeeId] !== undefined ? taskCounts[row.employeeId] : ''}</TableCell>
                      <TableCell>{row.employeeId !== undefined && 
                        <Button sx={{ color: 'white', background: '#CA3433', ':hover': { background: '#FF0000' } }} 
                        id={row.employeeId} 
                        onClick={() => viewResource(row.employeeId)}>View</Button>}
                      </TableCell>
                      <TableCell>{row.employeeId !== undefined &&
                        <Button sx={{ color: 'white', background: '#CA3433', ':hover': { background: '#FF0000' } }} 
                        id={row.employeeId} 
                        onClick={() => editResource(row.employeeId)}>Edit</Button>}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </main>
      </div>
      <div className='admins'>
        <h1>Admins</h1>
        <TableContainer style={{ maxHeight: tableHeight, overflow: 'auto', marginTop: '10px', margin: 0 }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead style={tableHeaderStyle}>
              <TableRow>
                <TableCell sx={{ color: '#CA3433', fontWeight: 'bold' }}>EmployeeID</TableCell>
                <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Name</TableCell>
                <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Email</TableCell>
                <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Phone Number</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: '#F5F5F5' }}>
              {Array.from({ length: numRows }).map((_, index) => {
                const AdminRow = adminRows[index] || {}; // Get the row if it exists or an empty object
                return (
                  <TableRow
                    key={index}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      height: `${rowHeight}px`,
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {AdminRow.employeeId}
                    </TableCell>
                    <TableCell align="left">{AdminRow.name}</TableCell>
                    <TableCell align="left">{AdminRow.email}</TableCell>
                    <TableCell align="left">{AdminRow.phoneNum}</TableCell>
                    <TableCell>{AdminRow.employeeId !== undefined &&
                    <Button sx={{ color: 'white', background: '#CA3433', ':hover': { background: '#FF0000' } }} 
                    id={AdminRow.employeeId}
                    onClick={() => editAdmin(AdminRow.employeeId)}>Edit</Button>}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
  
}

export default RescTable;