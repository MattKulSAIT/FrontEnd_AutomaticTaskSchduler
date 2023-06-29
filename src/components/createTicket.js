import React from "react";
import ATlogo from '../assets/AutoTaskerTemp_Final.png';

function CreateNewTicket() {
    
    return (
        <div className="createTicket">
            <div className="mainPage">
                <div className="headerDiv" align="center">
                    <img
                       id='ATlogo'
                       className="ATlogo"
                       src={ATlogo} alt='AutoTask Logo'
                    />
                    <h1 id="headerTitle" className="headerTitle">Ticket Creation</h1>
                </div>
                <div className="formDiv">
                    <form>
                        <div className="taskInputs">
                            <table className="titleDesc" align="left">
                                <tr>
                                    <td id="taskTitleTD">
                                        <h2>Title <span className="subTitle">(Max 60 characters)</span></h2>
                                        <input type="text" className="taskTitle" placeholder="Ex. Email is not working" id="taskTitle" maxLength="60"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="taskDescTD">
                                        <h2>Description <span className="subTitle">(Max 2000 characters)</span></h2>
                                        <textarea className="taskDesc" placeholder="Ex. Email does not open when I click on the icon" id="taskDesc"/>
                                    </td>
                                </tr>
                            </table>
                            <table className="customerDetails" align="left">
                                <tr>
                                    <td id="taskFirstNameTD">
                                        <h2>First Name</h2>
                                        <input type="text" placeholder="Ex. Jane" id="taskFirstName"/>
                                    </td>
                                    <td id="taskLastNameTD">
                                        <h2>Last Name</h2>
                                        <input type="text" placeholder="Ex. Doe" id="taskLastName"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="taskPhoneTD">
                                        <h2>Phone</h2>
                                        <input type="phone" placeholder="Ex. 123-123-1234" id="taskPhone"/>
                                    </td>
                                    <td id="taskEmailTD">
                                        <h2>Email</h2>
                                        <input type="email" placeholder="Ex. janedoe@work.ca" id="taskEmail"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="taskWorkTypeTD">
                                        <h2>Work Type</h2>
                                        <select name="taskType" id="taskType">
                                            <option value="" disabled selected>- Select Work Type -</option>
                                            <option value="1">Help Desk Support</option>
                                            <option value="2">Database Support</option>
                                            <option value="3">Network Support</option>
                                            <option value="4">Completed Support</option>
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
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default CreateNewTicket;

/*
For the form; method='GET' onSubmit={buttonCreateTask}
*/