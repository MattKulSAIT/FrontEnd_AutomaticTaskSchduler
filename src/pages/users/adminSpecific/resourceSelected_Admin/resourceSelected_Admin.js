import React from 'react';
import './resourceSelected_Admin.css'
import PageHeader from '../../../../components/pageHeader';
import PageTitle from '../../../../components/pageTitle';
import RescBasicDetails from '../../../../components/selectedViews/rescDetails/rescBasicDetails';
import RescHours from '../../../../components/selectedViews/rescDetails/rescHours';
import RescSkillRole from '../../../../components/selectedViews/rescDetails/rescSkillRole';
import ResourceDetailsTable from '../../../../components/selectedViews/rescDetails/rescDetails';

function ResourceSelectedAdmin() {

    const currPage = "Selected Resource";
    const whereTheBackButtonsGoes = `http://localhost:3000/resourceGeneral_Admin`;


    return (
        <div className="CreateResource">
            <div className="components">
                <div className='headers'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} whereTheBackButtonsGoes={whereTheBackButtonsGoes}/>
                </div>
                <div className='body' style={{ display: 'flex' }}>
                    <div style={{width:'60%'}}>
                        <RescBasicDetails/>
                        <RescHours/>
                        <RescSkillRole/>
                    </div>
                    <div style={{ flex: 1 }}>
                        <ResourceDetailsTable/>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default ResourceSelectedAdmin;