import React from 'react';

function RescSkillRole() {

    let rescHelpdeskCheck = "tempYes";
    let rescDatabaseCheck = "tempYes";
    let rescNetworkCheck = "tempNo";
    let rescTelecommCheck = "tempYes";
    let rescRole = "tempAdmin";

    return (
        <div className='rescSkillRole'>
            <table align='left' className='tableComp'>
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