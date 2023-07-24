import * as React from 'react';

import calendar from '../assets/changeSchedule.png'
import taskList from '../assets/manageTasks.png'

/** ResourceMenu Component (RESOURCE)
 *   This displays the pages/options the Resource can use after logging in 
 */
const ResourceMenu = () => {

    // BackEnd //

    /** changeScedule() Method
     *  Takes the user to the scheduleEdit Page for the Resource
     */
    function changeSchedule() {
        window.location.href = `http://localhost:3000/scheduleEdit_Resource`;
    }

    /** manageTasks() Method
     *    Takes the user to the taskGeneral Page for the Resource
     */
    function manageTasks() {
        window.location.href = `http://localhost:3000/taskGeneral_Resource`;
    }
    
    // FrontEnd //

    return (
        <div className='resourceMenu'>
            <div className='menuOptions'>
                <div className='changeScheduleDiv'>
                    <button id='changeSchedButton' className='menuButton' onClick={changeSchedule}>
                        <img
                            src={calendar} 
                            alt='Calendar'
                            id='calendarPNG'
                        />
                    </button>
                    <br/>
                    <label className='menuLabel'>Change Schedule</label>
                </div>
                <div className='manageTasksDiv'>
                    <button id='manTaskButton' className='menuButton' onClick={manageTasks}>
                        <img
                            src={taskList}
                            alt='Task List'
                            id='taskListPNG'
                        />
                    </button>
                    <br/>
                    <label className='menuLabel'>Manage Tasks</label>
                </div>
            </div>
        </div>
    );
    
}

export default ResourceMenu;