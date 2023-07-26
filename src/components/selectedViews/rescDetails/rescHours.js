import React from 'react';

function RescHours() {

    let rescAvailHrs = "35.5";
    let rescEstWorkHrs = "0.5";
    let rescTotalHrs = "40.0";
    let rescNumCurrTasks = "34";

    return (
        <div className='rescHours'>
            <table align='left' className='tableComp'>
                <tr>
                    <th id='rescTableTitle'>Overall Hours:</th>
                </tr>
                <tr>
                    <td id='rescAvailHrs'>Available Hours: {rescAvailHrs}</td>
                    <td id='rescEstWorkHrs'>Estimated Work Hours: {rescEstWorkHrs}</td>
                </tr>
                <tr>
                    <td id='rescTotalHrs'>Total Hours (Curr. Week): {rescTotalHrs}</td>
                    <td id='rescNumCurrTasks'># of Current Tasks: {rescNumCurrTasks}</td>
                </tr>
            </table>
        </div>
    );
}

export default RescHours;