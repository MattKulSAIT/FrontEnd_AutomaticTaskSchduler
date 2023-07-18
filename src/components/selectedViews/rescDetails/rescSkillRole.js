import React from 'react';

/**
 * Resource Skills and Role Component
 *  This displays the skills and role of the selected Resource
 */
function RescSkillRole() {

    // BackEnd //

    //Variables
    let rescHelpdeskCheck = "tempYes";
    let rescDatabaseCheck = "tempYes";
    let rescNetworkCheck = "tempNo";
    let rescTelecommCheck = "tempYes";
    let rescRole = "tempAdmin";

    // FrontEnd //

    return (
        <div className='rescSkillRole'>
            <table align='left'>
                <tr>
                    <th id='rescTableTitle'>Skills and Role:</th>
                </tr>
                <tr>
                    <td id='rescHelpdeskCheck'>Help Desk: {rescHelpdeskCheck}</td>
                    <td id='rescDatabaseCheck'>Database: {rescDatabaseCheck}</td>
                </tr>
                <tr>
                    <td id='rescNetworkCheck'>Network: {rescNetworkCheck}</td>
                    <td id='rescTelecommCheck'>Mobile: {rescTelecommCheck}</td>
                </tr>
                <tr>
                    <td id='rescRole'>Role: {rescRole}</td>
                </tr>
            </table>
        </div>
    );

}

export default RescSkillRole;