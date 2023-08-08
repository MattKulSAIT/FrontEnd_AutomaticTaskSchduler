import './taskSelected_Resource.css';

import { useNavigate, useParams } from 'react-router-dom';

import TitleDesc from '../../../../components/selectedViews/taskDetails/titleDesc'
import TaskDetails from '../../../../components/selectedViews/taskDetails/taskDetails'
import RescAssigned from '../../../../components/selectedViews/taskDetails/rescAssigned'
import ECTdetails from '../../../../components/selectedViews/taskDetails/ectDetails'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/pageTitle'

/**
 * This funcation takes all the componets neede for the taskSelectedResource page 
 * and combinds them to one component
 * @returns TaskSelectedAdmin componet to be displayed on the page
 */

/**
 * Task Selected Page (RESOURCE)
 *  The page that the Resource uses to view the details of a selected task
 */
function TaskSelectedResourcePage() {

    const history = useNavigate ();
    const { id, userid } = useParams();
    const currPage = "Selected Task";
    const backButtonLink = `http://localhost:3000/taskGeneral_Resource/` + userid;

    const EditPage = (taskId) =>{
        history(`/taskEdit_Resource/${userid}/${id}`);
    }

    return (
        <div className="taskSelectedResourcePage">
            <div className='components'>
                <div className='header'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <div className='body'>
                    <div className='leftSide'>
                        <TitleDesc/>
                    </div>
                    <div className='rightSide'>
                        <TaskDetails/> 
                        <hr/>
                        <RescAssigned/>
                        <hr/>
                        <ECTdetails/>
                        <div className='buttonPos'><button onClick={EditPage}>Edit</button></div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TaskSelectedResourcePage;