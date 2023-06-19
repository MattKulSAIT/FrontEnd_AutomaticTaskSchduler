import './taskSelected_Resource.css';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TitleDesc from '../../../../components/selectedViews/taskDetails/titleDesc'
import TaskDetails from '../../../../components/selectedViews/taskDetails/taskDetails'
import RescAssigned from '../../../../components/selectedViews/taskDetails/rescAssigned'
import ECTdetails from '../../../../components/selectedViews/taskDetails/ectDetails'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/pageTitle'

function TaskSelectedAdmin() {

    const history = useNavigate ();
    const { id } = useParams();

    const EditPage = (taskId) =>{
        history(`/taskEdit_Resource/${id}`);
    }

    return (
        <div className="testPage">
            <PageHeader/>
            <PageTitle/>
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