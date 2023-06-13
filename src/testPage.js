import './TestPage.css';
import TitleDesc from './components/Layout_Display/tables/selectedViews/taskDetails/titleDesc'
import TaskDetails from './components/Layout_Display/tables/selectedViews/taskDetails/taskDetails'
import RescAssigned from './components/Layout_Display/tables/selectedViews/taskDetails/rescAssigned'
import ECTdetails from './components/Layout_Display/tables/selectedViews/taskDetails/ectDetails'

import GeneralTaskTable from'./components/Layout_Display/tables/generalViews/taskGeneral/taskGeneralTable'
import PageHeader from'./components/Layout_Display/pageHeader'
import PageTitle from'./components/Layout_Display/pageTitle'

/*
function TestPage() {
    return (
        <div className="testPage">
            <h1 className='title'>Hello</h1>
            <h2 className='subTitle'>This page is to test components</h2>
            <div className='splitter'></div>
            <div className='secondSplitter'></div>
            <div className="testComponent">
                <div className='leftSide'>
                    <TitleDesc/>
                </div>
                <div className='rightSide'></div>
                    <TaskDetails/>
                    <RescAssigned/>
                    <ECTdetails/>
            </div>
        </div>
    );
}
  
export default TestPage;
*/

function TestPage() {
    return (
        <div className="testPage">
            <header className="testPageHeader">
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
  
export default TestPage;