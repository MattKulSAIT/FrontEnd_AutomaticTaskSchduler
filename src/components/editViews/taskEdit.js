import React, { useState } from 'react';
//import PageHeader from '../../../../components/Layout_Display/pageHeader';
//import PageTitle from '../../../../components/Layout_Display/pageTitle';

const EditTaskResource = () => {

    /*
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    */ 

    /*
    //Gets the data and login in as user, backend thing
    const buttonLogin = async (event) => {
        event.preventDefault();
        const url = "http://localhost:8080/login?employeeId=" + encodeURIComponent(employeeId) + "&password=" + encodeURIComponent(password);
        try{
            const response = await fetch(url, {
                method:'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ employeeId, password }),
            });

            if (response.ok) {
                window.location.href = 'http://localhost:3000/taskGeneral_Resource';
            } else {
                const errorData = await response.json();
                setLoginError(errorData.message || 'Incorrect ID or Password. Please try again.');
            }

        }catch(error){
            setLoginError('Network error occured. Please try again later.');
        }
    };
    */

    //Other Variables
    let editError = "";
    let taskTitle = "0101 - Broken laptop"
    let currStatus = "tempStatus"
    let currType = "tempType"
    let currTime = "tempTime"

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

    function saveEdit() {
        //
    }

    //FrontEnd
    return (
        <div className='editTask'>
            <div className='editTable'>
                <h1>{taskTitle}</h1>
                    <form method='GET' onSubmit={saveEdit}>
                        <div className='mainPage'> 
                            <hr align="left"/>
                            <div className='taskStatus'>
                                <h3>Change Task Status:</h3>
                                <select name="selectTaskStatus" id="taskStatus">
                                    <option value="" disabled selected>- Select Status -</option>
                                    <option value="0">Pending</option>
                                    <option value="1">Assigned</option>
                                    <option value="2">In Progress</option>
                                    <option value="3">Completed</option>
                                </select>
                                <p>Current Status: {currStatus}</p>
                            </div>
                            <div className='taskType'>
                                <h3>Change Task Type:</h3>
                                <select name="selectTaskStatus" id="taskStatus">
                                    <option value="" disabled selected>- Select Status -</option>
                                    <option value="0">Help Desk Support</option>
                                    <option value="1">Database Support</option>
                                    <option value="2">Network Support</option>
                                    <option value="3">Completed Support</option>
                                </select>
                                <p>Current Type: {currType}</p>
                            </div>
                            <div className='ectTime'>
                                <h3>Change Eestimated Time:</h3>
                                <input type='text' placeholder='Ex. 8.0 (hrs)'/>
                                <p>Current Time: {currTime}</p>
                            </div>
                            <div className='editButtons'>
                                <button id='saveChanges' type="submit">Save Changes</button>
                                <button id='exitEdit' type="submit">Exit</button>
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