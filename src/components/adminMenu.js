import * as React from 'react';
import taskList from '../assets/manageTasks.png'
import historyList from '../assets/history.png'
import resourceList from '../assets/manageResources.png'
import newResource from '../assets/createResource.png'


const AdminMenu = () => {

    function manageTasks() {
        window.location.href = `http://localhost:3000/taskGeneral_Admin`;
    }

    function viewHistory() {
        window.location.href = `http://localhost:3000/historyGeneral_Admin`;
    }

    function manageResource() {
        window.location.href = `http://localhost:3000/historyGeneral_Admin`;
    }

    function createResource() {
        window.location.href = `http://localhost:3000/newResource_Admin`;
    }
    

    return (
        <div className='menuOptions'>
            <div className='manageTasksDiv'>
                <button id='changeSchedButton' onClick={manageTasks}>
                    <img
                        src={taskList}
                    />
                </button>
                <br/>
                <label>Manage Tasks</label>
            </div>
            <div className='viewHistoryDiv'>
                <button id='changeSchedButton' onClick={viewHistory}>
                    <img
                        src={historyList}
                    />
                </button>
                <br/>
                <label>View History</label>
            </div>
            <div className='manageResourcesDiv'>
                <button id='changeSchedButton' onClick={manageResource}>
                    <img
                        src={resourceList}
                    />
                </button>
                <br/>
                <label>Manage Resource</label>
            </div>
            <div className='createResourceDiv'>
                <button id='changeSchedButton' onClick={createResource}>
                    <img
                        src={newResource}
                    />
                </button>
                <br/>
                <label>Create Resource</label>
            </div>
        </div>
    );
}

export default AdminMenu;