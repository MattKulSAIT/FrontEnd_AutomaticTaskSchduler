import React from "react";
import './historySelected_Admin.css';
//import { useNavigate  } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import TitleDesc from '../../../../components/selectedViews/taskDetails/titleDesc'
import TaskDetails from '../../../../components/selectedViews/taskDetails/taskDetails'
import RescAssigned from '../../../../components/selectedViews/taskDetails/rescAssigned'
import TimeCompleted from '../../../../components/selectedViews/taskDetails/timeCompleted'
import PageHeader from'../../../../components/pageHeader'
import PageTitle from'../../../../components/pageTitle'

function HistorySelectedAdmin() {

    /*
    const history = useNavigate ();
    const { id } = useParams();
    const currPage = "Selected Task";

    const EditPage = (taskId) =>{
        history(`/taskEdit_Resource/${id}`);
    }

    */
    return (
        <div className="historySelectedAdmin">
            <div className='mainPage'>
                <div className='headers'>
                    <PageHeader/>
                    <PageTitle/>
                </div>
                <div className='body'>
                    <div>
                        <div className='leftSide'>
                        <TitleDesc/>
                        </div>
                        <div className='rightSide'>
                            <TaskDetails/> 
                            <hr/>
                            <RescAssigned/>
                            <hr/>
                            <TimeCompleted/>
                            <div className='buttonPos'><button>Edit</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistorySelectedAdmin;

/*
<PageHeader/>
<PageTitle currPage={currPage}/>

onClick={EditPage}
*/