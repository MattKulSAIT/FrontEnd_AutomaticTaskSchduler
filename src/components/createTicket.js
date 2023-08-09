import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

import ATlogo from '../assets/AutoTaskerTemp_Final.png';

/**
 * Create Task Component (CUSTOMER)
 *  This is used to create a new task
 */
function CreateTicket() {

    // BackEnd //

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskFirstName, setTaskFirstName] = useState("");
    const [taskLastName, setTaskLastName] = useState("");
    const [taskPhone, setTaskPhone] = useState("");
    const [taskEmail, setTaskEmail] = useState("");
    const [taskType, setTaskType] = useState("");
    const [timeToComplete, setTimeToComplete] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    // Will verify user inputs and send them to the backend for creation if all is good
    const createTask = async (event) => {
        event.preventDefault();

        //Checking for any of the areas to be null
        if (!taskTitle || !taskDesc || !taskFirstName || !taskLastName || !taskPhone || !taskEmail || !taskType) {
            setErrorMsg("Please fill in all required fields");
            return;
        }
        else{
            debugger;
            /**Setting the Time t ocomplete based on the type of class */
            let timeToComplete;

            if (taskType === "1") {
              timeToComplete = 0.5;
            } else if (taskType === "2") {
              timeToComplete = 1.5;
            } else if (taskType === "3") {
              timeToComplete = 1.0;
            } else if (taskType === "4") {
              timeToComplete = 0.5;
            }

            const newTask = {
              title: taskTitle,
              description: taskDesc,
              name: taskFirstName + " " + taskLastName,
              phoneNumber: taskPhone,
              email: taskEmail,
              category: taskType,
              status: 1,
              timeToComplete: timeToComplete,
              creationDate: new Date().toISOString(),
            };

            //Insert assignment Logic here Will do later when the schedule is good
            //debugger;
            await fetch("http://localhost:8080/newTask", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            })
                .then((response) => response.json(), navigate("/sentTask"))
                .catch((error) => {
                console.error('Error:', error);
                });

        }

        
    }

    // FrontEnd //

    return (
        <div className="createTicket">
            <div className="mainPage">
                <div className="headerDiv" align="center">
                    <img
                       id='ATlogo'
                       className="ATlogo"
                       src={ATlogo} alt='AutoTask Logo'
                    />
                    <h1 id="headerTitle" className="headerTitle">Task Creation</h1>
                </div>
                <div className="formDiv">
                    <form onSubmit={createTask}>
                        <div className="taskInputs">
                            <table className="titleDesc" align="left">
                                <tr>
                                    <td id="taskTitleTD">
                                        <h2>Title <span className="subTitle">(Max 60 characters)</span></h2>
                                        <input
                                            type="text"
                                            className="taskTitle"
                                            placeholder="Ex. Email is not working"
                                            id="taskTitle"
                                            minLength="5"
                                            maxLength="60"
                                            pattern="[A-Za-z ]+"
                                            required
                                            value={taskTitle}
                                            onChange={(e) => setTaskTitle(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td id="taskDescTD">
                                        <h2>Description <span className="subTitle">(Max 2000 characters)</span></h2>
                                        <textarea
                                            className="taskDesc"
                                            placeholder="Ex. Email does not open when I click on the icon"
                                            id="taskDesc"
                                            minLength="10"
                                            maxLength="2000"
                                            pattern="[A-Za-z0-9]+"
                                            required
                                            value={taskDesc}
                                            onChange={(e) => setTaskDesc(e.target.value)}
                                        />
                                    </td>
                                </tr>
                            </table>
                            <table className="customerDetails" align="left">
                                <tr> 
                                    <td id="taskFirstNameTD">
                                        <h2>First Name</h2>
                                        <input
                                            type="text"
                                            placeholder="Ex. Jane"
                                            id="taskFirstName"
                                            maxLength="20"
                                            pattern="[A-Za-z]+"
                                            required
                                            value={taskFirstName}
                                            onChange={(e) => setTaskFirstName(e.target.value)}
                                        />
                                    </td>
                                    <td id="taskLastNameTD">
                                        <h2>Last Name</h2>
                                        <input
                                            type="text"
                                            placeholder="Ex. Doe"
                                            id="taskLastName"
                                            maxLength="20"
                                            pattern="[A-Za-z]+"
                                            required
                                            value={taskLastName}
                                            onChange={(e) => setTaskLastName(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td id="taskPhoneTD">
                                        <h2>Phone</h2>
                                        <input
                                            type="tel"
                                            placeholder="Ex. 123-123-1234"
                                            id="taskPhone"
                                            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                                            required
                                            value={taskPhone}
                                            onChange={(e) => setTaskPhone(e.target.value)}
                                        />
                                    </td>
                                    <td id="taskEmailTD">
                                        <h2>Email</h2>
                                        <input
                                            type="email"
                                            placeholder="Ex. janedoe@work.ca"
                                            id="taskEmail"
                                            required
                                            value={taskEmail}
                                            onChange={(e) => setTaskEmail(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td id="taskWorkTypeTD">
                                        <h2>Work Type</h2>
                                        <select
                                            name="taskType"
                                            id="taskType"
                                            required
                                            value={taskType}
                                            onChange={(e) => setTaskType(e.target.value)}
                                        >
                                            <option value="" disabled selected>- Select Work Type -</option>
                                            <option value="1">Help Desk Support</option>
                                            <option value="2">Database Support</option>
                                            <option value="3">Network Support</option>
                                            <option value="4">Mobile Support</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="taskSubmit">
                            <table align="left">
                                <tr>
                                    <td><button type="submit" className="submitTicket">Submit Ticket</button></td>
                                </tr>
                                <tr><td>{errorMsg}</td></tr>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
}

export default CreateTicket;