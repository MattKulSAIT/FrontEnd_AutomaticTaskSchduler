import GeneralTaskTable from'../../../../components/generalViews/taskGeneralTable'
import PageHeader from'../../../../components/pageHeader'
import PageTitleSearch from'../../../../components/generalSearchTitle'
import './taskGeneral_Resource.css'

function TaskGeneralResource() {

    const currPage = "General Task";
    const whereTheBackButtonsGoes = `http://localhost:3000/menu_Resource`;

    return (
        <div className="TaskGeneralResource">
            <header className="PageHeader">
                    <PageHeader style={{ marginTop: '0' }} />   
            </header>
            <div>
                <PageTitleSearch currPage={currPage} whereTheBackButtonsGoes={whereTheBackButtonsGoes}/>
            </div>
            <main>
                <GeneralTaskTable EditPage={"/taskEdit_Resource/"} ViewPage={"/taskSelected_Resource/"}/>
            </main>
        </div>
    );
}

export default TaskGeneralResource;