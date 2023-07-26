import React from "react";

import './resourceEdit_Admin.css'

import PageHeader from '../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';
import RescEditAdmin from '../../../../components/editViews/resourceEdit';

/**
 * This funcation takes in all components for the resourceEditAdmin page and
 * combinds them into one component
 * @returns ResourceEditAdmin component to be displayed on the page
 */

/**
 * Resource Edit Page (ADMIN)
 *  The page that the admin uses to edit Resource details
 */
function ResourceEditAdminPage() {
    const currPage = "Edit Resource";
    const backButtonLink = `http://localhost:3000/resourceGeneral_Admin`;

    return (
        <div className="resourceEditAdminPage">
            <div className="components">
                <div className="headers">
                    <PageHeader/>

                </div>
                <div className="body">
                    <RescEditAdmin/>
                </div>
            </div>
        </div>
    );

}

export default ResourceEditAdminPage;