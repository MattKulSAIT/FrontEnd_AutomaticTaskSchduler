import React from 'react';

import './scheduleEdit_Resource.css'

import PageHeader from'../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';

function ScheduleEditResource() {

    const currPage = "Change Schedule";
    const backButtonLink = `http://localhost:3000/menu_Resource`;


    return (
        <div className="scheduleEditResource">
            <div className="components">
                <div className='headers'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
            </div>
        </div>
    );
}
  
export default ScheduleEditResource;