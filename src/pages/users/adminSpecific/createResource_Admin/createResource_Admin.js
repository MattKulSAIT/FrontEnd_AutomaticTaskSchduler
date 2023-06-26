import React, { useState } from 'react';
import './createResource_Admin.css'
//import PageHeader from '../../../../components/Layout_Display/pageHeader';
//import PageTitle from '../../../../components/Layout_Display/pageTitle';
import CreateResource from '../../../../components/createResource'

function CreateNewResource() {
    return (
        <div className="CreateResource">
            <div className="components">
                <CreateResource/>
            </div>
        </div>
    );
}
  
export default CreateNewResource;