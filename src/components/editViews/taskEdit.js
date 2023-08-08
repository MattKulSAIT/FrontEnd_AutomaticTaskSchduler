import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

/**
 * taskEdit Component (RESOURCE)
 *  This is used to edit task details on the selected task
 */
const TaskEdit = () => {

    // Variables
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

  // Gathers the data from the selected task matching the task id
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

    // saveEdit saves the new data to the selected
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
      
        const url = `http://localhost:8080/taskEdit/${id}?status=${encodeURIComponent(finalStatus)}
                                                        &type=${encodeURIComponent(finalType)}
                                                        &time=${encodeURIComponent(finalTime)}`;
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
                window.location.href = `http://localhost:3000/taskGeneral_Resource`;
              }
              else{
                window.location.href = `http://localhost:3000/taskSelected_Resource/${id}`;
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
        window.location.href = 'http://localhost:3000/taskGeneral_Resource';
    }

    // FrontEnd //

    return (
        <div className='taskEdit'>
            <form method='GET' onSubmit={saveEdit}>
                <div className='mainPage'> 
                    <div className='titleHeader'>
                        <h1>{taskId} - {taskTitle}</h1>
                    </div>
                    <hr/>
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
                        <select name="selectTaskType" id="taskType">
                            <option value="" disabled selected>- Select Type -</option>
                            <option value="1">Help Desk Support</option>
                            <option value="2">Database Support</option>
                            <option value="3">Network Support</option>
                            <option value="4">Mobile Support</option>
                        </select>
                        <p>Current Type: {currType === 1 ? "Desk Side" : currType === 2 ? "Database" : currType === 3 ? "Network" : currType === 4 ? "Mobile Telephone" : "Unknown Type"}</p>
                    </div>
                    <div className='ectTimeDiv'>
                        <h3>Change Eestimated Time:</h3>
                        <input 
                            type='text' 
                            id='ectTime' 
                            placeholder='Ex. 8.0 (hrs)' 
                            min="0"
                            max="8"
                            step="0.1" //This allows decimal values
                            name="estimatedTime"
                        />
                        <p>Current Time: {currTime} hrs</p>
                    </div>
                    <div className='editButtonsDiv'>
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

export default TaskEdit;