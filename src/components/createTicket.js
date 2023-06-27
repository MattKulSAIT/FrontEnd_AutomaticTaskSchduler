import React from "react";
import ATlogo from '../assets/AutoTaskerTemp_Final.png';

function CreateNewTicket() {
    
    return (
        <div className="createTicket">
            <div className="mainPage">
                <div className="headerDiv">
                    <img
                       id='ATlogo'
                       src={ATlogo} alt='AutoTask Logo'
                    />
                </div>
                <div className="formDiv">
                    <form method='GET' onSubmit={buttonCreateTask}>
                        <table>
                            <tr>
                                <td id="taskName">
                                    
                                </td>
                            </tr>
                            <tr>
                                <td id="taskDesc">
                                    
                                </td>
                            </tr>
                            <tr>
                                <td id="taskName">

                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default CreateNewTicket;