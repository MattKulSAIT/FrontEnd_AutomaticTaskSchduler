import React from "react";

function TitleDesc() {
    let taskTitle = "tempTitle";
    let taskDesc = "tempDesc";

    return(
        <div className="titleDesc">
            <table>
                <tr>
                    <th>Title</th>
                </tr>
                <tr>
                    <td id="taskTitle">{taskTitle}</td>
                </tr>
                <tr>
                    <th>Description</th>
                </tr>
                <tr>
                    <td id="taskDescription">{taskDesc}</td>
                </tr>
            </table>
        </div>
    );
}

export default TitleDesc;