import './taskSelected_Resource.css';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
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
function TaskSelectedAdmin() {

    const history = useNavigate ();
    const { id } = useParams();
    const currPage = "Selected Task";
    const whereTheBackButtonsGoes = `http://localhost:3000/taskGeneral_Resource`;

    const EditPage = (taskId) =>{
        history(`/taskEdit_Resource/${id}`);
    }

    return (
        <div className="testPage">
            <PageHeader/>
            <PageTitle currPage={currPage} whereTheBackButtonsGoes={whereTheBackButtonsGoes}/>
            <div className='mainPage'>
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
    );
}

export default TaskSelectedAdmin;