import React from "react";

import './adminEdit_Admin.css'

import PageHeader from '../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';
import AdminEditAdmin from '../../../../components/editViews/adminEdit';

/**
 * This funcation takes in all components for the resourceEditAdmin page and
 * combinds them into one component
 * @returns ResourceEditAdmin component to be displayed on the page
 */

/**
 * Admin Edit Page (ADMIN)
 *  The page that the admin uses to edit Admin details
 */
function AdminEditAdminPage() {
    const currPage = "Edit Admin";
    const backButtonLink = `http://localhost:3000/resourceGeneral_Admin`;

    return (
        <div className="adminEditAdminPage">
            <div className="components">
                <div className="headers">
                    <PageHeader/>
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <div className="body">
                    <AdminEditAdmin/>
                </div>
            </div>
        </div>
    );

}

export default AdminEditAdminPage;