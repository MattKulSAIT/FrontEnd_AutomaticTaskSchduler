import React from 'react';
import ATlogo from '../../assets/AutoTaskerTemp_Final.png';

function Login() {

    //Gets the data and login in as user, backend thing
    function buttonLogin() {
        //let username = "";
        //let password = "";
    }

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
                <form>
                    <table>
                        <tr>
                            <th>Username</th>
                        </tr>
                        <tr>
                            <td><input type='text' id='username'/></td>
                        </tr>
                        <tr>
                            <th>Password</th>
                        </tr>
                        <tr>
                            <td><input type='text' id='password'/></td>
                        </tr>
                        <tr>
                            <td><button onClick={buttonLogin}>Login</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Login;