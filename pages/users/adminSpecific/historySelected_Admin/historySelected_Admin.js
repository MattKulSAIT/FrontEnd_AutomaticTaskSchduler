import './historySelected_Admin.css';
//import { useNavigate  } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import TitleDesc from '../../../../components/selectedViews/taskDetails/historyTitleDesc'
import HistoryDetails from '../../../../components/selectedViews/taskDetails/historyDetails'
import RescAssigned from '../../../../components/selectedViews/taskDetails/historyRescAssigned'
import TimeCompleted from '../../../../components/selectedViews/taskDetails/timeCompleted'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/pageTitle'

function HistorySelectedResource() {

    const currPage = "History Task";
    const whereTheBackButtonsGoes = `http://localhost:3000/historyGeneral_Admin`;

    return (
        <div className="historySelectedResource">
            <div className='mainPage'>
                <div className='headers'>
                    <PageHeader/>
                    <PageTitle currPage={currPage} whereTheBackButtonsGoes={whereTheBackButtonsGoes}/>
                </div>
                <div className='body'>
                    <div>
                        <div className='leftSide'>
                        <TitleDesc/>
                        </div>
                        <div className='rightSide'>
                            <HistoryDetails/> 
                            <hr/>
                            <RescAssigned/>
                            <hr/>
                            <TimeCompleted/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistorySelectedResource;

/*
<PageHeader/>
<PageTitle currPage={currPage}/>

onClick={EditPage}
*/