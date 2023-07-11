import React from "react";

function EditHours() {

    let tempCurrentHours = 8.0;

    return (
        <div className="editHours">
            <table className="editHoursTable" align="left">
                <tr>
                    <th><h3>Current Hours:</h3></th>
                </tr>
                <tr>
                    <td className="displayedHours">{tempCurrentHours} Hours</td>
                </tr>
                <tr>
                    <th><h3>New Hours:</h3></th>
                </tr>
                <tr>
                    <input className='inputHrs' type='text' placeholder='Ex. 8.0 (hrs)' name="estimatedTime"/>
                </tr>
            </table>
        </div>
    )
    
}

export default EditHours;