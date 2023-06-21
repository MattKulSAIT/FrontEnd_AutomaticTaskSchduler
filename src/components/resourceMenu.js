import * as React from 'react';
import calendar from '../assets/changeSchedule.png'
import taskList from '../assets/manageTasks.png'

const ResourceMenu = () => {

    function changeSchedule() {
        //window.location.href;
    }

    function manageTasks() {
        //window.location.href;
    }

    return (
        <div className='menuOptions'>
            <div className='changeScheduleDiv'>
                <button id='changeSchedButton' onClick={changeSchedule}>
                    <img
                        src={calendar}
                    />
                </button>
            </div>
            <div className='manageTasksDiv' onClick={manageTasks}>
                <button id='manTaskButton'>
                    <img
                        src={taskList}
                    />
                </button>
            </div>
        </div>
    );
}

export default ResourceMenu;