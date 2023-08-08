import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { AlignHorizontalCenter, WidthFull } from '@mui/icons-material';

export default function ResourceDetailsTable(){

const [rows, setRows] = useState([]);
const [adminRows, setAdminRows] = useState([]);
const [error, setError] = useState(null);
const [taskCounts, setTaskCounts] = useState({});  
const { id } = useParams();
const history = useNavigate();

    useEffect(() => {
        const fetchTaskCounts = async () => {
          const counts = {};
          for (const row of rows) {
            const count = await fetchNumberOfTasks(row.employeeId);
            counts[row.employeeId] = count;
          }
          setTaskCounts(counts);
        };
      
        fetchTaskCounts();
      }, [rows]);

      useEffect(() =>{
        fetchData();
      }, []);

      const tableHeaderStyle = {
        position: 'sticky',
        top: 0,
        backgroundColor: '#FFFFFF',
        zIndex: 1,
      };

      const fetchNumberOfTasks = async (employeeId) => {
        try {
          const response = await fetch(`http://localhost:8080/generalResource/${id}`);
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

      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/resourceView/tasks/${id}`);
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

      const viewTask = (taskId) => {
        history(`/taskSelected_Admin/${taskId}`);
      };
    
      // editTask is used to go to the Edit Task view matching the taskID
      const editTask = (taskId) => {
        history(`/taskEdit_Admin/${taskId}`);
      };

    const rowHeight = 30; // Height of each row
    const maxRows = 13; // Maximum number of rows to display
    const numRows = Math.max(rows.length, maxRows); // Calculate the maximum number of rows
    const tableHeight = numRows <= maxRows ? numRows * rowHeight : `${maxRows * rowHeight}px`;
  return(
    <main>
      <h1>Assigned Tasks</h1>
            <TableContainer style={{ maxHeight: tableHeight, overflow: 'auto', marginTop: '10px', margin: 0 }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead style={tableHeaderStyle}>
                <TableRow>
                    <TableCell sx={{ color: '#CA3433', fontWeight: 'bold' }}>Task#</TableCell>
                    <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Title</TableCell>
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
                        <TableCell component="th" scope="row">{row.taskNumber}</TableCell>
                        <TableCell align="left">{row.title}</TableCell>
                        <TableCell align="left">{row.category}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                        <TableCell>{row.taskNumber !== undefined && 
                          <Button sx={{ color: 'white', 
                                        background: '#CA3433', ':hover': { background: '#FF0000' } }} 
                                  id={row.taskNumber} 
                                  onClick={() => viewTask(row.taskNumber)}>View</Button>}</TableCell>
                        <TableCell>{row.taskNumber !== undefined &&
                          <Button sx={{ color: 'white', 
                                        background: '#CA3433', ':hover': { background: '#FF0000' } }} 
                                        id={row.taskNumber} 
                                  onClick={() => editTask(row.taskNumber)}>Edit</Button>}</TableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>
            </TableContainer>
            </main>
  )
}  