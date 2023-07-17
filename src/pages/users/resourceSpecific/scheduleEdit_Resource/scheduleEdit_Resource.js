import React from 'react';

import './scheduleEdit_Resource.css'

import PageHeader from'../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';
import EditCalendar from '../../../../components/editScheduleView/editCalendar';
import EditHours from '../../../../components/editScheduleView/editHours';
import DisplayHours from '../../../../components/editScheduleView/displayHours';

function ScheduleEditResource() {

    const currPage = "Change Schedule";
    const backButtonLink = `http://localhost:3000/menu_Resource`;


    return (
        <div className="scheduleEditResource">
            <div className="components">
                <div className='headers'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} whereTheBackButtonsGoes={backButtonLink}/>
                </div>
                <div className='body'>
                    <div className='leftSide'>
                        <EditCalendar />
                        <EditHours/>
                    </div>
                    <div className='rightSide'>
                        <DisplayHours/>
                    </div> 
                </div>
            </div>
        </div>
    );
}
  
export default ScheduleEditResource;