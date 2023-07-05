import React from "react";
import "./ticketCreation_Customer.css"
import PageHeader from "../../../components/pageHeader";
import PageTitle from "../../../components/pageTitle";
import CreateTicket from "../../../components/createTicket";


function CreateTicketView() {
    return (
        <div className="createTicketView">
            <div className="components">
                <CreateTicket/>
            </div>
        </div>
    );
}

export default CreateTicket;