import React from 'react';

function RescBasicDetails() {

    let rescName = "tempRescName";
    let rescID = "tempRescID";
    let rescPhone = "tempRescPhone";
    let rescEmail = "tempRescEmail";

    return (
        <div className='rescBasicDetails'>
            <table align='left' className='tableComp'>
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