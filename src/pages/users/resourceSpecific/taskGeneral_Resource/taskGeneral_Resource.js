import GeneralTaskTable from'../../../../components/generalViews/taskGeneralTable'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/pageTitle'
import './taskGeneral_Resource.css'

function TaskGeneralResource() {
    return (
        <div className="TaskGeneralResource">
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

export default TaskGeneralResource;