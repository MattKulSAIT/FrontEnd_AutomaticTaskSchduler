import React from "react";

//Note for future matthew 
//For this I think you will use the page call for viewResource since its the 
//same functionality and you dont need to make a specific link for it
function RescAssigned() {
    let rescName = "tempRescName";
    let availHrs = "tempAvailHrs";
    let rescSkills = "tempRescSkills";

    return(
        <div className="rescAssigned">
            <table className="rescAssigned">
                <tr>
                    <th>Resource Assigned:</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Available Hours</th>
                    <th>Skills</th>
                </tr>
                <tr>
                    <td id="rescName">{rescName}</td>
                    <td id="availHrs">{availHrs}</td>
                    <td id="rescSkills">{rescSkills}</td>
                </tr>
            </table>
        </div>
    );
}

export default RescAssigned;