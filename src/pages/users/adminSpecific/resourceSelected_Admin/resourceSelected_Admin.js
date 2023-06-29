import React from 'react';
import './resourceSelected_Admin.css'
//import PageHeader from '../../../../components/Layout_Display/pageHeader';
//import PageTitle from '../../../../components/Layout_Display/pageTitle';
import RescBasicDetails from '../../../../components/selectedViews/rescDetails/rescBasicDetails';
import RescHours from '../../../../components/selectedViews/rescDetails/rescHours';
import RescSkillRole from '../../../../components/selectedViews/rescDetails/rescSkillRole';

function CreateNewResource() {
    return (
        <div className="CreateResource">
            <div className="components">
                <div className='headers'>
                    //PageHeader
                    //PageTitle
                </div>
                <div className='body'>
                    <RescBasicDetails/>
                    <RescHours/>
                    <RescSkillRole/>
                </div>
            </div>
        </div>
    );
}
  
export default CreateNewResource;