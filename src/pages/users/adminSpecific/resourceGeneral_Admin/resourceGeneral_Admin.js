import GeneralResourceTable from'../../../../components/generalViews/rescGeneralTable'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/generalSearchTitle'

//THis page is not tested as i need backend connection
function generalResourceView() {

    const currPage = "General Resource";
    const whereTheBackButtonsGoes = `http://localhost:3000/menu_Admin`;

    return (
        <div className="generalResourcePage">
            <header className="GeneralResourcePageHeader">
                    <PageHeader style={{ marginTop: '0' }} />   
            </header>
            <div>
                <PageTitle currPage={currPage} whereTheBackButtonsGoes={whereTheBackButtonsGoes}/>
            </div>
            <main>
                <GeneralResourceTable/>
            </main>
        </div>
    );
}
  
export default generalResourceView;