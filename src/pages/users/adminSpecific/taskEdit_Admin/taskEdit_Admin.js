import React, { useState } from 'react';

import './taskEdit_Admin.css'

import PageHeader from '../../../../components/pageHeader';
import TaskEditAdmin from '../../../../components/editViews/taskEditAdmin'

/** 
 * Task Edit Resource Page (ADMIN)
 *  The page that the admin uses to edit task details
 */
function TaskEditAdminPage() {

    return (
        <div className="taskEditAdminPage">
            <div className="components">
                <div className='header'>
                    <PageHeader/>
                </div>
                <div className='body'>
                    <TaskEditAdmin/>
                </div>    
            </div>
        </div>
    );

}
  
export default TaskEditAdminPage;