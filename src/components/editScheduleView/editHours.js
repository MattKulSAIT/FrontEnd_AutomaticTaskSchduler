import React from "react";

/**
 * Edit Hours component (RESOURCE)
 *  This allow Resource to change their work hours
 */
function EditHours() {

    // BackEnd //

    // Variables
    let tempCurrentHours = 8.0;

    // FrontEnd //

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
                    <input 
                        className='inputHrs' 
                        type='number' 
                        id="inputHrs"
                        min="0"
                        max="8"
                        placeholder='Ex. 8.0 (hrs)' 
                        name="estimatedTime"
                    />
                </tr>
            </table>
        </div>
    );
    
}

export default EditHours;