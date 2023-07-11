import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditResourceAdmin = () => {


  /*  

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

    */

    let rescID = '000123123'
    let rescName = 'John Doe'
    let editError = ''

    const saveEdit = async () => {

    }

    function exitEdit() {
        window.location.href = 'http://localhost:3000/resourceGeneral_Admin ';
    }

    //FrontEnd
    return (
        <div className='editResc'>
            <div className='editTable'>
                <form method='GET' onSubmit={saveEdit}>
                    <div className='mainPage'> 
                        <div className='titleHeader'>
                        <h1>{rescID} - {rescName}</h1>
                        </div>
                        <hr align="left"/>
                        <div className='rescDetails'>
                            <div className='rescFirstNameDiv'>
                                <h3>Change First Name</h3>
                                <input type='text' placeholder='Ex. John' name="rescFirstName"/>
                            </div>
                            <div className='rescLastNameDiv'>
                                <h3>Change Last Name</h3>
                                <input type='text' placeholder='Ex. Doe' name="rescLastName"/>
                            </div>
                            <div className='rescPhoneDiv'>
                                <h3>Change Phone</h3>
                                <input type='phone' placeholder='Ex. 123-123-1234' name="rescPhone"/>
                            </div>
                            <div className='rescEmailDiv'>
                                <h3>Change Email</h3>
                                <input type='email' placeholder='Ex. johnd@work.com' name="rescEmail"/>
                            </div>
                            <div className='passDiv'>
                                <h3>Change Password</h3>
                                <input type='text' placeholder='Ex. ***********' name="rescPassword"/>
                            </div>
                        </div>
                        <hr align="left"/>
                        <div className='taskSkillsDiv'>
                            <table align='left'>
                                <tr>
                                    <td><h3>Skills:</h3></td>
                                </tr>
                                <tr>
                                    <td className='tdButton'><h3><input type='checkbox' id='helpdesk' name='helpdesk' className='skillsButton'/>Help Desk Support</h3></td>
                                    <td className='tdButton'><h3><input type='checkbox' id='database' name='database' className='skillsButton'/>Database Support</h3></td>
                                </tr>
                                <tr>
                                    <td className='tdButton'><h3><input type='checkbox' id='network' name='network' className='skillsButton'/>Network Support</h3></td>
                                    <td className='tdButton'><h3><input type='checkbox' id='telecomm' name='telecomm' className='skillsButton'/>Mobile Support</h3></td>
                                </tr>
                            </table>                    
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

export default EditResourceAdmin;

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