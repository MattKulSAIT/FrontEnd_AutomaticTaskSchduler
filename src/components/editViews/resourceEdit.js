import React, { useState } from 'react';
import { useParams } from "react-router-dom";

const EditResourceAdmin = () => {

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
        deskSkill: deskSkill,
        dataSkill: dataSkill,
        netSkill: netSkill,
        mobileSkill: mobileSkill,
        role: role,
    };

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

    

    const saveEdit = async (event) => {
        if (fName === "" || lName === "" || phoneNum === "" || password === "" || role === 0) {
            setErrorMsg("All fields must be filled");
        } else {
            event.preventDefault();
            const url = `http://localhost:8080/resourceEdit/${employeeId}?}`;
            try{
                const response = await fetch(url, {
                    method:'PATCH', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ employeeId, editedResource }),
                });

                if (response.ok) {
                    window.location.href = `http://localhost:3000/resourceGeneral_Admin/${employeeId}`;
                } 

            }catch(error){
                setErrorMsg("Failed to save Resource");
            }
        }
    };

    function exitEdit() {
        window.location.href = 'http://localhost:3000/resourceGeneral_Admin';
    }


    //FrontEnd
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
                                <input type='text' placeholder='Ex. John' value={fName} name="rescFirstName" onChange={(e) => setFName(e.target.value)}/>
                            </div>
                            <div className='rescLastNameDiv'>
                                <h3>Change Last Name</h3>
                                <input type='text' placeholder='Ex. Doe' value={lName} name="rescLastName" onChange={(e) => setLName(e.target.value)}/>
                            </div>
                            <div className='rescPhoneDiv'>
                                <h3>Change Phone</h3>
                                <input type='phone' placeholder='Ex. 123-123-1234' value={phoneNum} name="rescPhone" onChange={(e) => setPhoneNum(e.target.value)}/>
                            </div>
                            <div className='rescEmailDiv'>
                                <h3>Change Email</h3>
                                <input type='email' placeholder='Ex. johnd@work.com' value={email} name="rescEmail" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className='passDiv'>
                                <h3>Change Password</h3>
                                <input type='text' placeholder='Ex. ***********' value={password} name="rescPassword" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <hr align="left"/>
                        <div className='taskSkillsDiv'>
                            <table align='left'>
                                <tr>
                                    <td><h3>Skills:</h3></td>
                                </tr>
                                <tr>
                                    <td className='tdButton'><h3><input type='checkbox' id='helpdesk' name='helpdesk' checked={deskChecked} className='skillsButton' onChange={handleCheckboxChange}/>Help Desk Support</h3></td>
                                    <td className='tdButton'><h3><input type='checkbox' id='database' name='database'  checked={dataChecked} className='skillsButton' onChange={handleCheckboxChange}/>Database Support</h3></td>
                                </tr>
                                <tr>
                                    <td className='tdButton'><h3><input type='checkbox' id='network' name='network' checked={netChecked} className='skillsButton' onChange={handleCheckboxChange}/>Network Support</h3></td>
                                    <td className='tdButton'><h3><input type='checkbox' id='telecomm' name='telecomm' checked={mobileChecked} className='skillsButton' onChange={handleCheckboxChange}/>Mobile Support</h3></td>
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

export default EditResourceAdmin;