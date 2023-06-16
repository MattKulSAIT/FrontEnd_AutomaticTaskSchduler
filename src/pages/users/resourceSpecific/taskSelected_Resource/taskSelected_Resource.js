import './taskSelected_Resource.css';
import TitleDesc from '../../../../components/selectedViews/taskDetails/titleDesc'
import TaskDetails from '../../../../components/selectedViews/taskDetails/taskDetails'
import RescAssigned from '../../../../components/selectedViews/taskDetails/rescAssigned'
import ECTdetails from '../../../../components/selectedViews/taskDetails/ectDetails'
//import PageHeader from '../../../../components/pageHeader'
//import PageTitle from '../../../../components/pageTitle'

function TaskSelectedResource() {

    function EditPage() {
        //
    }

    return (
        <div className="testPage">
            <div className='mainPage'>
                <div className='headers'>

                </div>
                <div className='leftSide' align="left">
                    <TitleDesc/>
                </div>
                <div className='rightSide' left="0">
                    <TaskDetails/>
                    <hr/>
                    <RescAssigned/>
                    <hr/>
                    <ECTdetails/>
                    <div className='buttonPos'><button onClick={EditPage}>Edit</button></div>
                </div>
                
            </div>
        </div>
    );
}

export default TaskSelectedResource;