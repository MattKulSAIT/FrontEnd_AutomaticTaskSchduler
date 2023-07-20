import GeneralResourceTable from'../../../../components/generalViews/rescGeneralTable'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/generalSearchTitle'

//THis page is not tested as i need backend connection

/**
 * General Resource Page (ADMIN)
 *  The page that the Admin uses to see all the available users
 */
function GeneralResourceAdminPage() {

    const currPage = "General Resource";
    const backButtonLink = `http://localhost:3000/menu_Admin`;

    return (
        <div className="generalResourceAdminPage">
            <div className='components'>
                <div className='header'>
                    <PageHeader style={{ marginTop: '0' }} />
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <div className='body'>
                    <GeneralResourceTable/>
                </div>
            </div>
        </div>
    );

}
  
export default GeneralResourceAdminPage;