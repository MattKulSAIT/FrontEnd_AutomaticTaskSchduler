import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from "react-router-dom";

/**
 * taskEdit Component (ADMIN)
 *  This is used to edit task details on the selected Resource 
 */
const ResourceEditAdmin = () => {

    // BackEnd //

    //Variables
    const [employeeId, setEmployeeId] = useState(0);
    const [name, setName] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [deskSkill, setDesk] = useState(0);
    const [dataSkill, setData] = useState(0);
    const [netSkill, setNet] = useState(0);
    const [mobileSkill, setMobile] = useState(0);
    const [deskChecked, setDeskChecked] = useState(false);
    const [dataChecked, setDataChecked] = useState(false);
    const [netChecked, setNetChecked] = useState(false);
    const [mobileChecked, setMobileChecked] = useState(false);
    const [role, setRole] = useState(2);
    const [errorMsg, setErrorMsg] = useState("");
    const { id } = useParams();
    const editedResource = {
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

    useEffect(() => {
        fetchData();
    }, []);

    const handleCheckboxChange = (event) => {
        const checkboxValue = event.target.checked;
        const checkboxName = event.target.name;

        const checkboxState = checkboxValue ? 1 : 0;

        switch (checkboxName) {
            case 'helpdesk':
                setDeskChecked(checkboxState);
                setDesk(checkboxState);
                break;
            case 'database':
                setDataChecked(checkboxState);
                setData(checkboxState);
                break;
            case 'network':
                setNetChecked(checkboxState);
                setNet(checkboxState);
                break;
            case 'telecomm':
                setMobileChecked(checkboxState);
                setMobile(checkboxState);
                break;
            default:
                break;
        }
    }

    const handleCheckboxSetting = (checkbox) => {
        if (checkbox === 0) {
            return false;
        } else if (checkbox === 1) {
            return true;
        }
    } 

    // Gathers the current data of the Resource
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/resourceEdit/${id}`); //it used id because thats what was using the App.js
            if (response.ok) {
                const data = await response.json();
                setEmployeeId(id);
                setName(data.name);
                setFName(data.name.substring(0, data.name.indexOf(" ")));
                setLName(data.name.substring(data.name.indexOf(" ") + 1));
                setPhoneNum(data.phoneNum);
                setEmail(data.email);
                setPassword(data.password);
                setDesk(data.deskSkill);
                setData(data.dataSkill);
                setNet(data.netSkill);
                setMobile(data.mobileSkill);
                setRole(data.role);
                setDeskChecked(handleCheckboxSetting(data.deskSkill));
                setDataChecked(handleCheckboxSetting(data.dataSkill));
                setNetChecked(handleCheckboxSetting(data.netSkill));
                setMobileChecked(handleCheckboxSetting(data.mobileSkill));
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const navigate = useNavigate();

    // Saves the current changes of the Resource
    const saveEdit = async (event) => {
        if (fName === "" || lName === "" || phoneNum === "" || password === "" || role === 0) {
            setErrorMsg("All fields must be filled");
        } else {
            event.preventDefault();
            const url = `http://localhost:8080/resourceEdit/${employeeId}`;
            try{
                const response = await fetch(url, {
                    method:'PATCH', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ employeeId, ...editedResource }),
                });

                if (response.ok) {
                    navigate(`/resourceGeneral_Admin`);
                } 

            }catch(error){
                setErrorMsg("Failed to save Resource");
            }
        }
    };

    // Exits the edit resource change
    function exitEdit() {
        window.location.href = 'http://localhost:3000/resourceGeneral_Admin';
    }

    // FrontEnd //

    return (
        <div className='editResc'>
            <div className='editTable'>
                <form method='GET' action={fetchData} onSubmit={saveEdit}>
                    <div className='mainPage'> 
                        <div className='titleHeader'>
                        <h1>{employeeId} - {name}</h1>
                        </div>
                        <hr align="left"/>
                        <div className='rescDetails'>
                            <div className='rescFirstNameDiv'>
                                <h3>Change First Name</h3>
                                <input 
                                    type='text' 
                                    placeholder='Ex. John' 
                                    value={fName} 
                                    maxLength="20"
                                    pattern="[A-Za-z]+"
                                    name="rescFirstName" 
                                    onChange={(e) => setFName(e.target.value)}
                                />
                            </div>
                            <div className='rescLastNameDiv'>
                                <h3>Change Last Name</h3>
                                <input 
                                    type='text' 
                                    placeholder='Ex. Doe' 
                                    value={lName} 
                                    maxLength="20"
                                    pattern="[A-Za-z]+"
                                    name="rescLastName" 
                                    onChange={(e) => setLName(e.target.value)}
                                />
                            </div>
                            <div className='rescPhoneDiv'>
                                <h3>Change Phone</h3>
                                <input 
                                    type='tel' 
                                    placeholder='Ex. 123-123-1234' 
                                    value={phoneNum} 
                                    pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                                    name="rescPhone" 
                                    onChange={(e) => setPhoneNum(e.target.value)}
                                />
                            </div>
                            <div className='rescEmailDiv'>
                                <h3>Change Email</h3>
                                <input 
                                    type='email' 
                                    placeholder='Ex. johnd@work.com' 
                                    value={email} 
                                    name="rescEmail" 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='passDiv'>
                                <h3>Change Password <span>(One UpperCase, One lowerCase, One number)</span></h3>
                                <input 
                                type='password' 
                                placeholder='Ex. Password1' 
                                name="rescPassword"  
                                value={password} 
                                minLength="8" 
                                maxLength="20"
                                pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                        </div>
                        <hr align="left"/>
                        <div className='taskSkillsDiv'>
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
                                        <h3>Network Support</h3>
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
                                    <select name="role" value={role} id="rescRole" onChange={(e) => setRole(e.target.value)}>
                                        <option value="" disabled selected>- Select Role -</option>
                                        <option value="2">Resource</option>
                                        <option value="1">Admin</option>
                                    </select> 
                                    </td>
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
                    {errorMsg}
                </div>
            </div>
        </div>
    );
    
}

export default ResourceEditAdmin;