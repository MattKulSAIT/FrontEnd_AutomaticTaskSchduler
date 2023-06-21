import React, { useState } from 'react';
import './taskEdit_Resource.css'
//import PageHeader from '../../../../components/Layout_Display/pageHeader';
//import PageTitle from '../../../../components/Layout_Display/pageTitle';
import TaskEdit from '../../../../components/editViews/taskEdit'

function TaskEditResource() {
    return (
        <div className="TaskEditResource">
            <div className="components">
                <TaskEdit/>
            </div>
        </div>
    );
}
  
export default TaskEditResource;