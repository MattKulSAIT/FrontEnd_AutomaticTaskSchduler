import React from 'react';

import './adminSelected_Admin.css'

import PageHeader from '../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';
import RescBasicDetails from '../../../../components/selectedViews/rescDetails/rescBasicDetails';
import RescHours from '../../../../components/selectedViews/rescDetails/rescHours';
import RescSkillRole from '../../../../components/selectedViews/rescDetails/rescSkillRole';
import ResourceDetailsTable from '../../../../components/selectedViews/rescDetails/rescDetails';

/**
 * Admin Selected Page (ADMIN)
 *  The page that the admin uses to view details of a selected user
 */
function ResourceSelectedAdminPage() {

    const currPage = "Selected Resource";
    const backButtonLink = `http://localhost:3000/resourceGeneral_Admin`;

    return (
        <div className="resourceSelectedAdminPage">
            <div className="components">
                <div className='header'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <div className='body' style={{ display: 'flex' }}>
                    <div style={{width:'60%'}}>
                        <RescBasicDetails/>
                    </div>
                </div>
            </div>
        </div>
    );

}
  
export default ResourceSelectedAdminPage;