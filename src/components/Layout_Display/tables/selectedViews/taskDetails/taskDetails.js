import React from "react";

function TaskDetails() {
    let cusName = "tempCusName";
    let cusPhone = "tempCusPhone";
    let cusEmail = "tempCusEmail";
    let taskCreation = "tempTaskCreation";
    let taskStatus = "tempTaskStatus";
    let taskType = "tempTaskType";

    return(
        <div className="taskDetails">
            <table className="taskDetails">
                <tr>
                    <th>Task Details:</th>
                </tr>
                <tr>
                    <td id="cusName">{cusName}</td>
                    <td id="taskStatus">Task Status: {taskStatus}</td>
                </tr>
                <tr>
                    <td id="cusPhone">{cusPhone}</td>
                    <td id="taskType">Task Type: {taskType}</td>
                </tr>
                <tr>
                    <td id="cusEmail">{cusEmail}</td>
                </tr>
                <tr>
                    <td id="taskCreation">{taskCreation}</td>
                </tr>
            </table>
        </div>
    );
}

export default TaskDetails;