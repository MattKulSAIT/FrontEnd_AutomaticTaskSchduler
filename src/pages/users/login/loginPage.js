import './loginPage.css'

import Login from "../../../components/login"

/**
 * Login Page
 *  The page that a user uses to login
 */
function LoginPage() {

    return (
        <div className="loginPage">
            <div className="components">
                <div className='body'>
                    <Login/>
                </div>             
            </div>
        </div>
    );

}
  
export default LoginPage;