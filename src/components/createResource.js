import React, { useState } from 'react';

/**
 * Create Resource Component (ADMIN)
 *  This is used to create a new Resource
 */
const NewResource = () => {

    // BackEnd //

    //All the variables for the page 
    const [fName, setFirstName] = useState("")
    const [lName, setLastName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [deskChecked, setDeskChecked] = useState(false);
    const [dataChecked, setDataChecked] = useState(false);
    const [netChecked, setNetChecked] = useState(false);
    const [mobileChecked, setMobileChecked] = useState(false);
    const [role, setRole] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    
    
    const handleCheckboxChange = (event) => {
        const checkboxValue = event.target.checked;
        const checkboxName = event.target.name;

    // Convert checkbox value to 0 or 1 based on its checked state
    const checkboxState = checkboxValue ? 1 : 0;

    // Update the corresponding state based on the checkbox name
    switch (checkboxName) {
        case 'helpdesk':
            setDeskChecked(checkboxState);
            break;
        case 'database':
            setDataChecked(checkboxState);
            break;
        case 'network':
            setNetChecked(checkboxState);
            break;
        case 'telecomm':
            setMobileChecked(checkboxState);
            break;
        default:
            break;
        }
    };

    const newResource = {
        name: fName + " " + lName,
        phoneNum: phoneNum,
        email: email,
        password: password,
        deskSkill: deskChecked ? 1 : 0,
        dataSkill: dataChecked ? 1 : 0,
        netSkill: netChecked ? 1 : 0,
        mobileSkill: mobileChecked ? 1 : 0,
        role: role,
    };

    //The constant to send the contents to the backend
    const createResource = async (event) => {
        event.preventDefault();
        if (fName === "" || lName === "" || phoneNum === "" || password === "" || role === 0) {
            setErrorMsg("All fields must be filled");
        } else {
            await fetch("http://localhost:8080/newResource", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newResource),
            })
                .then((response) => response.json())
                .catch((error) => {
                console.error('Error:', error);
                });
      
            // Reset the form fields
            setFirstName('');
            setLastName('');
            setPhoneNum('');
            setEmail('');
            setPassword('');
            setRole('');
            setDeskChecked(false);
            setDataChecked(false);
            setNetChecked(false);
            setMobileChecked(false);
            setErrorMsg("Resource Created Successfully");
        }
    };

    // FrontEnd //

    return (
        <div className='createResourceComponent'>
            <div className='newResource'>
                <form method='POST' onSubmit={createResource}>
                    <div className='mainPage'> 
                        <hr align="left"/>
                        <div className='rescFirstNameDiv'>
                            <h3>First Name:</h3>
                            <input 
                                type='text' 
                                placeholder='Ex. John' 
                                name="rescFirstName" 
                                value={fName} 
                                maxLength="20"
                                pattern='[A-Za-z]'
                                required
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='rescLastNameDiv'>
                            <h3>Last Name:</h3>
                            <input 
                                type='text' 
                                placeholder='Ex. Doe' 
                                name="rescLastName" 
                                value={lName} 
                                maxLength="20" 
                                pattern='[A-Za-z]'
                                required
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className='rescPhoneDiv'>
                            <h3>Phone Number:</h3>
                            <input 
                                type='phone' 
                                placeholder='Ex. 123-123-1234' 
                                name="rescPhone" 
                                value={phoneNum} 
                                required
                                onChange={(e) => setPhoneNum(e.target.value)}
                            />
                        </div>
                        <div className='rescEmailDiv'>
                            <h3>Email Address:</h3>
                            <input 
                                type='email' 
                                placeholder='Ex. johnd@work.com' 
                                name="rescEmail" 
                                value={email} 
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='rescPasswordDiv'>
                            <h3>Password:</h3>
                            <input 
                                type='text' 
                                placeholder='Ex. password' 
                                name="rescPassword" 
                                value={password} 
                                minLength="8" 
                                maxLength="20"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='resourceSkillsDiv'>
                            <table align='left'>
                                <tr>
                                    <td><h3>Skills:</h3></td>
                                </tr>
                                <tr>
                                    <td className='tdButton'>
                                        <input 
                                            type='checkbox' 
                                            id='helpdesk' 
                                            name='helpdesk' 
                                            checked={deskChecked} 
                                            className='skillsButton' 
                                            onChange={handleCheckboxChange}
                                        />
                                        <h3>Help Desk Support</h3>
                                    </td>
                                    <td className='tdButton'>
                                        <input 
                                            type='checkbox' 
                                            id='database' 
                                            name='database' 
                                            checked={dataChecked} 
                                            className='skillsButton' 
                                            onChange={handleCheckboxChange}
                                        />
                                        <h3>Database Support</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='tdButton'>
                                        <input 
                                            type='checkbox' 
                                            id='network' 
                                            name='network' 
                                            checked={netChecked} 
                                            className='skillsButton' 
                                            onChange={handleCheckboxChange}
                                            />
                                        <h3>Network Supoort</h3>
                                    </td>
                                    <td className='tdButton'>
                                        <input 
                                            type='checkbox' 
                                            id='telecomm' 
                                            name='telecomm' 
                                            checked={mobileChecked} 
                                            className='skillsButton' 
                                            onChange={handleCheckboxChange}
                                        />
                                        <h3>Mobile Support</h3>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className='rescRoleDiv'>
                            <table align='left'>
                                <tr>
                                    <td><h3>Role:</h3></td>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="role" value={role} id="rescRole" required onChange={(e) => setRole(e.target.value)}>
                                            <option value="" disabled selected>- Select Role -</option>
                                            <option value="2">Resource</option>
                                            <option value="1">Admin</option>
                                        </select> 
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className='createButton'>
                            <button id='createResource' type="submit">Create</button>
                        </div>           
                    </div>
                </form>
                <div className='errorMessage'>
                    {errorMsg}
                </div>
            </div>
        </div>
    );

}

export default NewResource;