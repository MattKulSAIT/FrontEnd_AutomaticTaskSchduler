import React, { useState } from 'react';
import './createResource_Admin.css'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from '../../../../components/pageTitle';
import CreateResource from '../../../../components/createResource'

function CreateNewResource() {

    const currPage = "Create New Resource";
    const backButtonLink = `http://localhost:3000/menu_Admin`;


    return (
        <div className="CreateResource">
            <div className="components">
                <div className='headers'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <CreateResource/> 
            </div>
        </div>
    );
}
  
export default CreateNewResource;