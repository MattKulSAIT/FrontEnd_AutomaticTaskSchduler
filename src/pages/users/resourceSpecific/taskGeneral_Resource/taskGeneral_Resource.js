import './taskGeneral_Resource.css'

import GeneralTaskTable from'../../../../components/generalViews/taskGeneralTable'
import PageHeader from'../../../../components/pageHeader'
import PageTitleSearch from'../../../../components/generalSearchTitle'

/**
 * Task Edit Page (RESOURCE)
 *  The page that the Resource uses to view all the available task assigned to them
 */
function TaskGeneralResourcePage() {

    const currPage = "General Task";
    const backButtonLink = `http://localhost:3000/menu_Resource`;

    return (
        <div className="taskGeneralResourcePage">
            <div className='components'>
                <div className='header'>
                    <PageHeader style={{ marginTop: '0' }} />
                    <PageTitleSearch currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <div className='body'>
                    <GeneralTaskTable EditPage={"/taskEdit_Resource/"} ViewPage={"/taskSelected_Resource/"}/>
                </div>
            </div>
        </div>
    );

}

export default TaskGeneralResourcePage;