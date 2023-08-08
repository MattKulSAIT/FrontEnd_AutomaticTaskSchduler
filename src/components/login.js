import React, { useState } from 'react';
import ATlogo from '../assets/AutoTaskerTemp_Final.png';

const Login = () => {

    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

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
            if (response.ok) { //We need to add some logic or either send to admin or resource 
                const loginUser = await response.json();
                if (loginUser.role === 1) {
                    window.location.href = 'http://localhost:3000/menu_Admin/' + employeeId;
                } else if (loginUser.role === 2) {
                    window.location.href = 'http://localhost:3000/menu_Resource/' + employeeId;
                }
            } else {
                const errorData = await response.json();
                setLoginError(errorData.message || 'Incorrect ID or Password. Please try again.');
            }

        }catch(error){
            setLoginError('Network error occured. Please try again later.');
        }
    };

    return (
        <div className='login'>
            <div className='ATdisplay'>
                <img
                    id='ATlogo'
                    src={ATlogo} alt='AutoTask Logo'
                />
                <h1>AutoTask</h1>
            </div>
            <div className='loginTable'>
                <form method='GET' onSubmit={buttonLogin}>
                    <table>
                        <tr>
                            <th>Employee Id</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <th>Password</th>
                        </tr>
                        <tr>
                            <td><input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><button type="submit">Login</button></td>
                        </tr>
                    </table>
                </form>
                <div className='errorMessage'>
                    {loginError}
                </div>
            </div>
        </div>
    );
}

export default Login;