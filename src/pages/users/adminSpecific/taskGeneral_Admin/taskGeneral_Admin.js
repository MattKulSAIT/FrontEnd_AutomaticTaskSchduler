import GeneralTaskTable from'../../../../components/Layout_Display/tables/generalViews/taskGeneral/taskGeneralTable'
import PageHeader from'../../../../components/Layout_Display/pageHeader'
import PageTitle from'../../../../components/Layout_Display/pageTitle'
import './taskGeneral_Admin.css'

function TaskGeneralAdmin() {
    return (
        <div className="TaskGeneralAdmin">
            <header className="PageHeader">
                    <PageHeader style={{ marginTop: '0' }} />   
            </header>
            <div>
                <PageTitle/>
            </div>
            <main>
                <GeneralTaskTable/>
            </main>
        </div>
    );
}

export default TaskGeneralAdmin;