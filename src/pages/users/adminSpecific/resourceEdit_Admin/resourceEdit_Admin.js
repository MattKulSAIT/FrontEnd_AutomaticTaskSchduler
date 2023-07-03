import React from "react";
import './resourceEdit_Admin.css'
import PageHeader from '../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';
import RescEditAdmin from '../../../../components/editViews/resourceEdit';

function ResourceEditAdmin() {
    const currPage = "Edit Resource";
    const whereTheBackButtonsGoes = `http://localhost:3000/resourceGeneral_Admin`;

    return (
        <div className="ResourceEditAdmin">
            <div className="components">
                <div className="headers">
                <PageHeader/>
                <PageTitle currPage={currPage} whereTheBackButtonsGoes={whereTheBackButtonsGoes}/>
                </div>
                <div className="body">
                    <RescEditAdmin/>
                </div>
            </div>
        </div>
    );
}

export default ResourceEditAdmin;