import './taskSelected_Admin.css';

import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import TitleDesc from '../../../../components/selectedViews/taskDetails/titleDesc';
import TaskDetails from '../../../../components/selectedViews/taskDetails/taskDetails'
import RescAssigned from '../../../../components/selectedViews/taskDetails/rescAssigned'
import ECTdetails from '../../../../components/selectedViews/taskDetails/ectDetails'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/pageTitle'

/** Task Selected Page (ADMIN)
 *   The page that the admin uses to view the details of a selected task
 */
function TaskSelectedAdminPage() {

    const history = useNavigate ();
    const { userid, id } = useParams();
    const currPage = "Selected Task";
    const backButtonLink = `http://localhost:3000/taskGeneral_Admin/` + userid;

    /** EditPage() Method
     *   The method brings the admin to the edit task page of the selected task
     */
    function EditPage() {
        history(`/taskEdit_Admin/${userid}/${id}`);
    }

    return (
        <div className="taskSelectedAdminPage">
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

export default TaskSelectedAdminPage;