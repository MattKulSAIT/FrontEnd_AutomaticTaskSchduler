import React from 'react';

/**
 * Resource Basic Details Component (ADMIN)
 *  This displays the basic details about the selected Resource
 */
function RescBasicDetails() {

    // BackEnd //

    // Variables
    let rescName = "tempRescName";
    let rescID = "tempRescID";
    let rescPhone = "tempRescPhone";
    let rescEmail = "tempRescEmail";

    // FrontEnd //
    
    return (
        <div className='rescBasicDetails'>
            <table align='left'>
                <tr>
                    <th id='rescTableTitle'>Basic Details:</th>
                </tr>
                <tr>
                    <td id='rescName'>{rescName}</td>
                    <td id='rescID'>{rescID}</td>
                </tr>
                <tr>
                    <td id='rescPhone'>{rescPhone}</td>
                    <td id='rescEmail'>{rescEmail}</td>
                </tr>
            </table>
        </div>
    );

}

export default RescBasicDetails;