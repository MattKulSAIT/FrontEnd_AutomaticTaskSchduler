import React from "react";

import "./ticketCreation_Customer.css"

import CreateTicket from "../../../components/createTicket";

/* Create Ticket Page
    The page where customers can create and send tickets
*/
function CreateTicketPage() {

    return (
        <div className="createTicketPage">
            <div className="components">
                <div className="body">
                    <CreateTicket/>
                </div>
            </div>
        </div>
    );
    
}

export default CreateTicketPage;