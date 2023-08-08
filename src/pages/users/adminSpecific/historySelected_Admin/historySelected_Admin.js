import './historySelected_Admin.css';

//import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import TitleDesc from '../../../../components/selectedViews/taskDetails/historyTitleDesc'
import HistoryDetails from '../../../../components/selectedViews/taskDetails/historyDetails'
import RescAssigned from '../../../../components/selectedViews/taskDetails/historyRescAssigned'
import TimeCompleted from '../../../../components/selectedViews/taskDetails/timeCompleted'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/pageTitle'

/**
 * History Selected Page (ADMIN)
 *  The page that the admin uses to view details of a selected archive task
 */
function HistorySelectedAdminPage() {

    /*
    const history = useNavigate ();
    const { id } = useParams();
    const currPage = "Selected Task";

    const EditPage = (taskId) =>{
        history(`/taskEdit_Resource/${id}`);
    }
    */

    const { userid } = useParams();
    const currPage = "History Task";
    const whereTheBackButtonsGoes = `http://localhost:3000/historyGeneral_Admin/` + userid;

    return (
        <div className="historySelectedAdminPage">
            <div className='components'>
                <div className='header'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} backButtonLink={whereTheBackButtonsGoes}/>
                </div>
                <div className='body'>
                    <div className='leftSide'>
                        <TitleDesc/>
                    </div>
                    <div className='rightSide'>
                        <HistoryDetails/> 
                        <hr/>
                        <RescAssigned/>
                        <hr/>
                        <TimeCompleted/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HistorySelectedAdminPage;