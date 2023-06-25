import GeneralHistoryTable from'../../../../components/generalViews/historyGeneralTable';
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/generalSearchTitle'

function HistoryGeneralAdmin() {

    const currPage = "History View";
    const whereTheBackButtonsGoes = `http://localhost:3000`;

    //The Buttons on this page need to be sent to the right Admin location, but theres not landing page yet so I guess
    //Im done 
    return (
        <div className="TaskHistoryAdmin">
            <header className="PageHeader">
                    <PageHeader style={{ marginTop: '0' }} />   
            </header>
            <div>
                <PageTitle currPage={currPage} whereTheBackButtonsGoes={whereTheBackButtonsGoes}/>
            </div>
            <main>
                <GeneralHistoryTable/>
            </main>
        </div>
    );
}

export default HistoryGeneralAdmin;