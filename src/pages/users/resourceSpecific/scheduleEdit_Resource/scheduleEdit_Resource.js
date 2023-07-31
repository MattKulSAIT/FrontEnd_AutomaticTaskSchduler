import React, { useState } from 'react';

import './scheduleEdit_Resource.css'

import PageHeader from'../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';
import EditCalendar from '../../../../components/editScheduleView/editCalendar';
import EditHours from '../../../../components/editScheduleView/editHours';
import DisplayHours from '../../../../components/editScheduleView/displayHours';

/**
 * Schedule Edit Page (RESOURCE)
 *  The page that the Resource uses to view the details regarding their hours and change it
 */
function ScheduleEditResourcePage() {

    const currPage = "Change Schedule";
    const backButtonLink = `http://localhost:3000/menu_Resource`;

    //Component Comunication 
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateSelection = (date) => {
        setSelectedDate(date);
    };

    //FrontEnd
    return (
        <div className="scheduleEditResourcePage">
            <div className="components">
                <div className='headers'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <div className='body'>
                    <div className='leftSide'>
                        <EditCalendar onDateSelect={handleDateSelection}/>
                        <EditHours selectedDate={selectedDate}/>
                    </div>
                    <div className='rightSide'>
                        <DisplayHours/>
                    </div> 
                </div>
            </div>
        </div>
    );
}
  
export default ScheduleEditResourcePage;