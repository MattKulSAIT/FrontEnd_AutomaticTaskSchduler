import * as React from 'react';
import calendar from '../assets/changeSchedule.png'
import taskList from '../assets/manageTasks.png'

const ResourceMenu = () => {

    function changeSchedule() {
        window.location.href = `http://localhost:3000/scheduleEdit`;
    }

    function manageTasks() {
        window.location.href = `http://localhost:3000/taskGeneral_Resource`;
    }

    return (
        <div className='menuOptions'>
            <div className='changeScheduleDiv'>
                <button id='changeSchedButton' className='menuButton' onClick={changeSchedule}>
                    <img
                        src={calendar}
                    />
                </button>
                <br/>
                <label>Change Schedule</label>
            </div>
            <div className='manageTasksDiv'>
                <button id='manTaskButton' className='menuButton' onClick={manageTasks}>
                    <img
                        src={taskList}
                    />
                </button>
                <br/>
                <label>Manage Tasks</label>
            </div>
        </div>
    );
}

export default ResourceMenu;