import './TestPage.css';
//import TitleDesc from './components/Layout_Display/tables/selectedViews/taskDetails/titleDesc'
//import TaskDetails from './components/Layout_Display/tables/selectedViews/taskDetails/taskDetails'
//import RescAssigned from './components/Layout_Display/tables/selectedViews/taskDetails/rescAssigned'
//import ECTdetails from './components/Layout_Display/tables/selectedViews/taskDetails/ectDetails'

//import GeneralTaskTable from'./components/Layout_Display/tables/generalViews/resourceDetails/rescGeneralTable'
//import PageHeader from'./components/Layout_Display/pageHeader'
//import PageTitle from'./components/Layout_Display/rescGeneralTitle'

import ResourceMenu from './components/resourceMenu';

function TestPage() {
    return (
        <div className="testPage">
            <ResourceMenu/>
        </div>
    );
}
  
export default TestPage;