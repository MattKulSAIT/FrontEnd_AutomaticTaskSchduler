import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CreateResource = () => {

    //All the backend codes here are base on the the taskEditJS, just needs to be
    //modified to be adapted to create resource.

    let editError = '';

    //Function to send you back to the general view page 
    function exitEdit(){
        window.location.href = 'http://localhost:3000/menu_Admin';
    }

    const createResource = async (event) => {
        //
    }

    //FrontEnd
    return (
        <div className='createResourceComponent'>
            <div className='newResource'>
                <form method='GET' onSubmit={createResource}>
                    <div className='mainPage'> 
                        <hr align="left"/>
                        <div className='rescDetails'>
                            <div className='rescFirstNameDiv'>
                                <h3>First Name</h3>
                                <input type='text' placeholder='Ex. John' name="rescFirstName"/>
                            </div>
                            <div className='rescLastNameDiv'>
                                <h3>Last Name</h3>
                                <input type='text' placeholder='Ex. Doe' name="rescLastName"/>
                            </div>
                            <div className='rescPhoneDiv'>
                                <h3>Phone</h3>
                                <input type='phone' placeholder='Ex. 123-123-1234' name="rescPhone"/>
                            </div>
                            <div className='rescEmailDiv'>
                                <h3>Email</h3>
                                <input type='email' placeholder='Ex. johnd@work.com' name="rescEmail"/>
                            </div>
                            <div className='passDiv'>
                                <h3>Set Password</h3>
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
                                    <td className='tdButton'><h3><input type='checkbox' id='network' name='network' className='skillsButton'/>Network Supoort</h3></td>
                                    <td className='tdButton'><h3><input type='checkbox' id='telecomm' name='telecomm' className='skillsButton'/>Mobile Support</h3></td>
                                </tr>
                            </table>                    
                        </div>
                        <div className='rescRoleDiv'>
                            <table align='left'>
                                <tr>
                                    <td><h3>Change Task Type:</h3></td>
                                </tr>
                                <tr>
                                    <td>
                                    <select name="selectTaskType" id="taskStatus">
                                        <option value="" disabled selected>- Select Status -</option>
                                        <option value="0">Resource</option>
                                        <option value="1">Admin</option>
                                    </select> 
                                    </td>
                                </tr>
                            </table>                                 
                        </div> 
                        <div className='editButtons'>
                            <button id='createResource' type="submit">Create</button>
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

export default CreateResource;

/*
                            <table align='left'>
                                <tr>
                                    <td><h3>Roles:</h3></td>
                                </tr>
                                <tr>
                                    <td className='tdButton'><input type='radio' id='rescRole' name='roles' className='roleButton' value="0"/></td>
                                    <td className='tdTitle'><h3>Resource</h3></td>
                                </tr>
                                <tr>
                                    <td className='tdButton'><input type='radio' id='adminRole' name='roles' className='roleButton' value="1"/></td>
                                    <td className='tdTitle'><h3>Admin</h3></td>
                                </tr>                          
                            </table>    
*/