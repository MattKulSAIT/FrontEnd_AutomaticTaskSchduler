import GeneralHistoryTable from'../../../../components/generalViews/historyGeneralTable';
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/pageTitle'

/**
 * History General Page (ADMIN)
 *  The page that the admin uses to view all the archived tasks
 */
function HistoryGeneralAdminPage() {

    const currPage = "General History";
    const backButtonLink = `http://localhost:3000/menu_Admin`;

    //The Buttons on this page need to be sent to the right Admin location, but theres not landing page yet so I guess
    //Im done 

    return (
        <div className="historyGeneralAdminPage">
            <div className='components'>
                <div className='header'>
                    <PageHeader style={{ marginTop: '0' }} />
                    <PageTitle currPage={currPage} backButtonLink={backButtonLink}/>
                </div>
                <div className='body'>
                    <h1>Completed Tasks</h1>
                    <GeneralHistoryTable/>
                </div>
            </div>
        </div>
    );
    
}

export default HistoryGeneralAdminPage;