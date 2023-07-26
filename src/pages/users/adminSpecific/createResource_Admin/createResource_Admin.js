import React, { useState } from 'react';

import './createResource_Admin.css'

import PageHeader from'../../../../components/pageHeader'
import PageTitle from '../../../../components/pageTitle';
import CreateResource from '../../../../components/createResource'

/**
 * Create Resource Page (ADMIN)
 *  The page the admin uses to create a new user
 */
function CreateResourceAdminPage() {

    const currPage = "Create New Resource";
    const backButtonLink = `http://localhost:3000/menu_Admin`;

    return (
        <div className="createResourceAdminPage">
            <div className="components">
                <div className='header'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <div className='body'>
                    <CreateResource/> 
                </div>               
            </div>
        </div>
    );

}
  
export default CreateResourceAdminPage;