import './TestPage.css';
import TitleDesc from './components/Layout_Display/tables/selectedViews/taskDetails/titleDesc'
import TaskDetails from './components/Layout_Display/tables/selectedViews/taskDetails/taskDetails'
import RescAssigned from './components/Layout_Display/tables/selectedViews/taskDetails/rescAssigned'
import ECTdetails from './components/Layout_Display/tables/selectedViews/taskDetails/ectDetails'
import PageHeader from'./components/Layout_Display/pageHeader'
import PageTitle from'./components/Layout_Display/pageTitle'

function TaskSelectedAdmin() {

    function EditPage() {
        //
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