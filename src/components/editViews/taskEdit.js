import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditTaskResource = () => {


    

    //Other Variables
  const [editError, setEditError] = useState("");
  const [taskId, setTaskId] = useState("0000")
  const [taskTitle, setTaskTitle] = useState("0101 - Broken laptop");
  const [currStatus, setCurrStatus] = useState("tempStatus");
  const [currType, setCurrType] = useState("tempType");
  const [currTime, setCurrTime] = useState("tempTime");
  const { id } = useParams();


  useEffect(() => {
    fetchData();
  }, []);

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
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };
    /*
    //TaskStatus
    let pending = "0";
    let assigned = "1";
    let inProgress = "2";
    let completed = "3";

    //TaskType
    let helpDesk = "0";
    let database = "1";
    let network = "2";
    let teleComm = "3";
    */

    const saveEdit = async (event) => {

        event.preventDefault();
        // Get the selected values
        const selectedStatus = event.target.selectTaskStatus.value;
        const selectedType = event.target.selectTaskType.value;
        const estimatedTime = event.target.estimatedTime.value;

        event.preventDefault();
        const url = `http://localhost:8080/taskEdit/${id}?status=${encodeURIComponent(selectedStatus)}
                                                        &type=${encodeURIComponent(selectedType)}
                                                        &time=${encodeURIComponent(estimatedTime)}`;
        try{
            const response = await fetch(url, {
                method:'PATCH', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ selectedStatus, selectedType, estimatedTime }),
            });

            if (response.ok) {
                window.location.href = `http://localhost:3000/taskSelected_Resource/${id}`;
            } 

        }catch(error){
            
        }
    };
    
    //Function to send you back to the general view page 
    function exitEdit(){
        window.location.href = 'http://localhost:3000/taskGeneral_Resource';
    }

    //FrontEnd
    return (
        <div className='editTask'>
            <div className='editTable'>
                <form method='GET' onSubmit={saveEdit}>
                    <div className='mainPage'> 
                        <div className='titleHeader'>
                        <h1>{taskId} - {taskTitle}</h1>
                        </div>
                        <hr align="left"/>
                        <div className='taskStatus'>
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
                        <div className='taskType'>
                            <h3>Change Task Type:</h3>
                            <select name="selectTaskType" id="taskStatus">
                                <option value="" disabled selected>- Select Status -</option>
                                <option value="1">Help Desk Support</option>
                                <option value="2">Database Support</option>
                                <option value="3">Network Support</option>
                                <option value="4">Completed Support</option>
                            </select>
                            <p>Current Type: {currType === 1 ? "Desk Side" : currType === 2 ? "Database" : currType === 3 ? "Network" : currType === 4 ? "Mobile Telephone" : "Unknown Type"}</p>
                        </div>
                        <div className='ectTime'>
                            <h3>Change Eestimated Time:</h3>
                            <input type='text' placeholder='Ex. 8.0 (hrs)' name="estimatedTime"/>
                            <p>Current Time: {currTime} hrs</p>
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
        </div>
    );
}

export default EditTaskResource;

/*import * as React from 'react';

<input type='text' value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}/>

<td><input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/></td>

<table>
    <tr>
        <th>Change Task Status:</th>
        <th>Change Task Type:</th>
        <th>Change Estimated Time:</th>
    </tr>
    <tr>
        <td>
            <select name="selectTaskStatus" id="taskStatus">
                <option value={pending}>Pending</option>
                <option value={assigned}>Assigned</option>
                <option value={inProgress}>In Progress</option>
                <option value={completed}>Completed</option>
            </select>
        </td>
        <td><input type='text' placeholder='- Select Type -'/></td>
        <td></td>
    </tr>
</table>

const url = "http://localhost:8080/login?employeeId=${encodeURIComponent(employeeId)}&password=${encodeURIComponent(password)}"
*/