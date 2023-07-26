import React, { useState } from 'react';

import './taskEdit_Resource.css'

import PageHeader from '../../../../components/pageHeader';
import TaskEdit from '../../../../components/editViews/taskEdit'

/**
 * Task Edit Page (RESOURCE)
 *  The page that the Resource uses to edit details of the selected task
 */
function TaskEditResourcePage() {

    return (
        <div className="taskEditResourcePage">
            <div className='components'>
                <div className='header'>
                    <PageHeader/>
                </div>
                <div className='body'>
                    <TaskEdit/>
                </div>
            </div>
        </div>
    ); 

}
  
export default TaskEditResourcePage;