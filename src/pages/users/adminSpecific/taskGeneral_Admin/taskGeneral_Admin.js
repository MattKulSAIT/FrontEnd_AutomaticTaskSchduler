import './taskGeneral_Admin.css'

import GeneralTaskTable from'../../../../components/generalViews/taskGeneralTable';
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/generalSearchTitle'

/** Task General Page (ADMIN)
 *   The page that the admin uses to view all the available tasks
 */
function TaskGeneralAdminPage() {

    const currPage = "General Task";
    const backButtonLink = `http://localhost:3000/menu_Admin`;

    return (
        <div className="taskGeneralAdminPage">
            <div className='components'>
                <div className='header'>
                    <PageHeader style={{ marginTop: '0' }} /> 
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <div className='body'>
                    <GeneralTaskTable EditPage={"/taskEdit_Admin/"} ViewPage={"/taskSelected_Admin/"}/>
                </div>
            </div>
        </div>
    );
    
}

export default TaskGeneralAdminPage;