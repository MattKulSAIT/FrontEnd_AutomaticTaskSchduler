import React from "react";

import './sentTicket_Customer.css'

import ATlogo from '../../../assets/AutoTaskerTemp_Final.png'

/* Sent Ticket Page
    The page that confirms the task has been sent
*/
function SentTicketPage() {

    return (
        <div className="sentTicketPage">
            <div className="components">
                <div className="bodystuff" >
                    <div className="ATlogo">
                        <img
                            src={ATlogo}
                        />
                    </div>
                    <div className="mainMessage">
                        <h1>Your ticket has been sent</h1>
                    </div>
                    <div className="subMessage">
                        <p>You will receive an email when your issue has been solved</p>
                    </div>
                </div>
            </div>
        </div>
    ) ;

}

export default SentTicketPage;