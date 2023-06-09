import GeneralTaskTable from'../../../../components/generalViews/taskGeneralTable';
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/generalSearchTitle'
import './taskGeneral_Admin.css'

function TaskGeneralAdmin() {

    const currPage = "General Task";
    const whereTheBackButtonsGoes = `http://localhost:3000/menu_Admin`;

    //The Buttons on this page need to be sent to the right Admin location, but theres not landing page yet so I guess
    //Im done 
    return (
        <div className="TaskGeneralAdmin">
            <header className="PageHeader">
                    <PageHeader style={{ marginTop: '0' }} />   
            </header>
            <div>
                <PageTitle currPage={currPage} whereTheBackButtonsGoes={whereTheBackButtonsGoes}/>
            </div>
            <main>
                <GeneralTaskTable EditPage={"/taskEdit_Admin/"} ViewPage={"/taskSelected_Admin/"}/>
            </main>
        </div>
    );
}

export default TaskGeneralAdmin;