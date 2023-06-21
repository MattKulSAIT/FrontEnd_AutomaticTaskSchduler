import GeneralTaskTable from'../../../../components/Layout_Display/tables/generalViews/resourceDetails/rescGeneralTable'
import PageHeader from'../../../../components/Layout_Display/pageHeader'
import PageTitle from'../../../../components/Layout_Display/rescGeneralTitle'

//THis page is not tested as i need backend connection
function generalResourceView() {
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
  
export default generalResourceView;