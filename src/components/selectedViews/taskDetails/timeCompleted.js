import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

function CompDetails() {

    /*
    const [taskCreation, setTaskCreation] = useState("tempTaskCreation");

      */


    return(
        <div className="compTimeDiv">
            <table className="compTimeTable">
                <tr>
                    <th>Creation Date:</th>
                    <th>Completion Date:</th>
                </tr>
                <tr>
                    <td id='createTime'>{createTime}</td>
                    <td id="compTime">{compTime}</td>
                </tr>
            </table>
        </div>
    );
}

export default CompDetails;