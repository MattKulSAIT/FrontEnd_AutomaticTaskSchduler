import React from 'react';

function Login() {
    let username;
    let password;

    return (
        <div className='login'>
            <div className='ATdisplay'>
                <img
                    id='ATlogo'
                    src={ATlogo} alt='AutoTask Logo'
                />
            </div>
            <div className='loginTable'>
                <table>
                    <tr>
                        <th>Username</th>
                    </tr>
                    <tr>
                        //Text field here (MaterialUI)
                    </tr>
                    <tr>
                        <th>Password</th>
                    </tr>
                    <tr>
                        //Text field here (MaterialUI)
                    </tr>
                    <tr>
                        //Button to login here (MaterialUI)
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Login;