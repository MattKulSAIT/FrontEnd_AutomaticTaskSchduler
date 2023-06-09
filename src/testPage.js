import './TestPage.css';
//import PageHeader from "./components/Layout_Display/pageHeader";
import Login from "./components/Layout_Display/login";
//import ECTdetails from "./components/Layout_Display/tables/selectedViews/taskDetails/ectDetails";

function TestPage() {
    return (
        <div className="testPage">
            <h1 className='title'>Hello</h1>
            <h2 className='subTitle'>This page is to test components</h2>
            <div className="testComponent">
                <Login/>
            </div>
        </div>
    );
}
  
export default TestPage;