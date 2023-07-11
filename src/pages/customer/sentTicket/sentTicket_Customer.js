import React from "react";
import './sentTicket_Customer.css'
import ATlogo from '../../../assets/AutoTaskerTemp_Final.png'

function SentTicket() {
    return (
        <div className="sentTicket">
            <div className="components">
                <div className="body">
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

export default SentTicket;