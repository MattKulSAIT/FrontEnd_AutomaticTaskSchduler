import * as React from 'react';

import taskList from '../assets/manageTasks.png'
import historyList from '../assets/history.png'
import resourceList from '../assets/manageResources.png'
import newResource from '../assets/createResource.png'

/** AdminMenu Component (ADMIN)
 *   This displays the pages/options the Admin can use after logging in 
 */
const AdminMenu = () => {

    // BackEnd //

    /** manageTasks() Method
     *   Takes the user to the taskGeneral Page for the Admin
     */
    function manageTasks() {
        window.location.href = `http://localhost:3000/taskGeneral_Admin`;
    }

    /** viewHistory() Method
     *   Takes the user to the historyGeneral Page for the Admin
     */
    function viewHistory() {
        window.location.href = `http://localhost:3000/historyGeneral_Admin`;
    }

    /** manageResource() Method
     *   Takes the user to the resourceGeneral Page for the Admin
     */
    function manageResource() {
        window.location.href = `http://localhost:3000/resourceGeneral_Admin`;
    }

    /** createResource() Method
     *   Takes the user to the scheduleEdit Page for the Admin
     */
    function createResource() {
        window.location.href = `http://localhost:3000/newResource_Admin`;
    }
    
    // FrontEnd //

    return (
        <div className='adminMenu'>
            <div className='menuOptions'>
                <div className='manageTasksDiv'>
                    <button id='changeSchedButton' className='menuButton' onClick={manageTasks}>
                        <img
                            src={taskList}
                            alt='Task List'
                            id='taskListPNG'
                        />
                    </button>
                    <br/>
                    <label>Manage Tasks</label>
                </div>
                <div className='viewHistoryDiv'>
                    <button id='changeSchedButton' className='menuButton' onClick={viewHistory}>
                        <img
                            src={historyList}
                            alt='Task History'
                            id='historyListPNG'
                        />
                    </button>
                    <br/>
                    <label>View History</label>
                </div>
                <div className='manageResourcesDiv'>
                    <button id='changeSchedButton' className='menuButton' onClick={manageResource}>
                        <img
                            src={resourceList}
                            alt='Resource List'
                            id='resourceListPNG'
                        />
                    </button>
                    <br/>
                    <label>Manage Resource</label>
                </div>
                <div className='createResourceDiv'>
                    <button id='changeSchedButton' className='menuButton' onClick={createResource}>
                        <img
                            src={newResource}
                            alt='Create Resource'
                            id='createResourcePNG'
                        />
                    </button>
                    <br/>
                    <label>Create Resource</label>
                </div>
            </div>
        </div>
    );
    
}

export default AdminMenu;