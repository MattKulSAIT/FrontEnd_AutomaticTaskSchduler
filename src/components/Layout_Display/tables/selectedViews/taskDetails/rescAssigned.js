import React from "react";

function RescAssigned() {
    let rescName = "tempRescName";
    let availHrs = "tempAvailHrs";
    let rescSkills = "tempRescSkills";

    return(
        <div className="rescAssigned">
            <table className="rescAssigned">
                <tr>
                    <th>Resrouce Assigned:</th>
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