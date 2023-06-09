import React from 'react';
import ATlogo from '../../assets/AutoTaskerTemp_Final.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Login() {

    //Gets the data and login in as user, backend thing
    function buttonLogin() {
        //Banan
    }
    const username = "";
    const password = "";

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
                <table>
                    <tr>
                        <th>Username</th>
                    </tr>
                    <tr>
                        <td><input type='text' value={username}/></td>
                    </tr>
                    <tr>
                        <th>Password</th>
                    </tr>
                    <tr>
                        <td><input type='text' value={password}/></td>
                    </tr>
                    <tr>
                        <td><button onClick={buttonLogin}>Login</button></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Login;

/*import * as React from 'react';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
*/