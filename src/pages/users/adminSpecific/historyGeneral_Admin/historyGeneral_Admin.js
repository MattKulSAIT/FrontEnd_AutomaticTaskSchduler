import GeneralTaskTable from'../../../../components/Layout_Display/tables/generalViews/resourceDetails/rescGeneralTable'
import PageHeader from'../../../../components/Layout_Display/pageHeader'
import PageTitle from'../../../../components/Layout_Display/historyGeneralTitle'

//THis page is not DONE table still needs to be updated and stuff
function generalHistoryView() {
    return (
        <div className="generalResourcePage">
            <header className="GeneralResourcePageHeader">
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
  
export default generalHistoryView;