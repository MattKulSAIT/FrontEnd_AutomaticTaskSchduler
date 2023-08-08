import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

/**
 * taskEdit Component (ADMIN)
 *  This is used to edit task details on the selected task 
 */
const TaskEditAdmin = () =>{

  // BackEnd //

  // Variable
  const [editError, setEditError] = useState("");
  const [taskId, setTaskId] = useState("0000")
  const [taskTitle, setTaskTitle] = useState("0101 - Broken laptop");
  const [currStatus, setCurrStatus] = useState("tempStatus");
  const [currType, setCurrType] = useState("tempType");
  const [currTime, setCurrTime] = useState("tempTime");
  const [assignedEmpId, setAssignedEmpId] = useState(null);
  const { userid, id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  /**const to get the info specific to the selected Task  */
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/taskView/${id}`); //it used id because thats what was useing the App.js
      if (response.ok) {
        const data = await response.json();
        setTaskId(id)
        setTaskTitle(data.title);
        setCurrStatus(data.status);
        setCurrType(data.category);
        setCurrTime(data.timeToComplete)
        setAssignedEmpId(data.empId)
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Table Variables
  const [rows, setRows] = useState([]);
  const [adminRows, setAdminRows] = useState([]);
  const [error, setError] = useState(null);
  const [taskCounts, setTaskCounts] = useState({});
  const tableHeaderStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  };
  const rowHeight = 30; // Height of each row
  const maxRows = 13; // Maximum number of rows to display
  const numRows = Math.max(rows.length, maxRows);
  const tableHeight = numRows <= maxRows ? numRows * rowHeight : `${maxRows * rowHeight}px`;

  useEffect(() => {
    fetchCapableResources();
  }, [currType]);
 
  //Method to get all resources that have the skills to complete the task 
  const fetchCapableResources = async () => {
    try {
      const response = await fetch(`http://localhost:8080/taskEdit/getCapableResource/${currType}`);
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

  //Fetch the number of task of the assigned employee has from the selected task
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

  // saveEdit gathers the data and changes overrides the data of the selected task
  const saveEdit = async (event) => {
    event.preventDefault();
  
    // Get the selected values from the form
    const selectedStatus = event.target.selectTaskStatus.value;
    const selectedType = event.target.selectTaskType.value;
    const estimatedTime = event.target.estimatedTime.value;
  
    // If any of the dropdowns are empty, use the current state values
    const finalStatus = selectedStatus || currStatus;
    const finalType = selectedType || currType;
    const finalTime = estimatedTime || currTime;
  
    const newAssignedResource = assignedEmpId;
  
    const url = `http://localhost:8080/taskEdit/admin/${id}?status=${encodeURIComponent(finalStatus)}
                                                &type=${encodeURIComponent(finalType)}
                                                &time=${encodeURIComponent(finalTime)}
                                                &empId=${encodeURIComponent(newAssignedResource)}`;
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedStatus: finalStatus, selectedType: finalType, estimatedTime: finalTime }),
      });
  
      if (response.ok) {
        if(finalStatus === "4"){
          window.location.href = `http://localhost:3000/taskGeneral_Admin/${userid}`;
        }
        else{
          window.location.href = `http://localhost:3000/taskSelected_Admin/${userid}/${id}`;
        }
      } else {
        // Handle error response
        setEditError('Failed to save changes.');
      }
    } catch (error) {
      // Handle fetch error
      setEditError('Failed to save changes.');
    }
  };

  //Function to send you back to the general view page 
  function exitEdit(){
    window.location.href = 'http://localhost:3000/taskGeneral_Admin/' + userid;
  }

  // FrontEnd //

  return(
    <div className='taskEditAdmin'>
      <form method='GET' onSubmit={saveEdit}>
        <div className='mainPage'> 
          <div className='titleHeader'>
            <h1>{taskId} - {taskTitle}</h1>
          </div>
          <hr width='1000000px'/>
          <div className='taskStatusDiv'>
              <h3>Change Task Status:</h3>
              <select name="selectTaskStatus" id="taskStatus">
                  <option value="" disabled selected>- Select Status -</option>
                  <option value="1">Pending</option>
                  <option value="2">Assigned</option>
                  <option value="3">In Progress</option>
                  <option value="4">Completed</option>
              </select>
              <p>Current Status: {currStatus === 1 ? "Pending" : currStatus === 2 ? "Assigned" : currStatus === 3 ? "In Progress" : currStatus === 4 ? "Complete" : "Unknown Status"}</p>
          </div>
          <div className='taskTypeDiv'>
              <h3>Change Task Type:</h3>
              <select name="selectTaskType" id="taskStatus">
                  <option value="" disabled selected>- Select Type -</option>
                  <option value="1">Help Desk Support</option>
                  <option value="2">Database Support</option>
                  <option value="3">Network Support</option>
                  <option value="4">Mobile Support</option>
              </select>
              <p>Current Type: {currType === 1 ? "Desk Side" : currType === 2 ? "Database" : currType === 3 ? "Network" : currType === 4 ? "Mobile Telephone" : "Unknown Type"}</p>
          </div>
          <div className='ectTimeDiv'>
              <h3>Change Estimated Time:</h3>
                <input 
                  type='number' 
                  placeholder='Ex. 8.0 (hrs)'
                  min="0"
                  max="8" 
                  step="0.1" //This allows decimal values
                  name="estimatedTime"
                />
              <p>Current Time: {currTime} hrs</p>
          </div>
          <div className='AssignedResourceTable'>
            <h3 style={{width: '200px'}}>Resource</h3>
            <TableContainer style={{ maxHeight: tableHeight, overflow: 'auto', marginTop: '10px', margin: 0 }}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead style={tableHeaderStyle}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell sx={{ color: '#CA3433', fontWeight: 'bold' }}>EmployeeID</TableCell>
                    <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Name</TableCell>
                    <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}>Available Hours</TableCell>
                    <TableCell align="left" sx={{ color: '#CA3433', fontWeight: 'bold' }}># of Current Tasks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ backgroundColor: '#F5F5F5' }}>
                  {Array.from({ length: numRows }).map((_, index) => {
                    const row = rows[index] || {}; // Get the row if it exists or an empty object
                    const isSelected = assignedEmpId === Number(row.employeeId); // Check if it matches the assignedEmpId

                    return (
                      <TableRow
                        key={index}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          height: `${rowHeight}px`,
                        }}
                      >
                        <TableCell>
                          {taskCounts[row.employeeId] !== undefined && (
                            <input
                            type="radio"
                            name="AssignedResource"
                            checked={isSelected}
                            onChange={() => setAssignedEmpId(row.employeeId)}
                          />
                          )}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.employeeId}
                        </TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.availableHours}</TableCell>
                        <TableCell align="left">{taskCounts[row.employeeId] !== undefined ? taskCounts[row.employeeId] : ''}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className='editButtons'>
              <button id='saveChanges' type="submit">Save Changes</button>
              <button id='exitEdit' type="button" onClick={exitEdit}>Exit</button>
          </div>           
        </div>
      </form>
      <div className='errorMessage'>
          {editError}
      </div>
    </div>
  );

}

export default TaskEditAdmin;