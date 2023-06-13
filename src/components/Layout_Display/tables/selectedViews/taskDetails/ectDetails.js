import React from "react";

function ECTdetails() {
    let ectTime = "tempECTtime";

    return(
        <div className="ectTime">
            <table className="ectTime">
                <tr>
                    <th>Resrouce Assigned:</th>
                </tr>
                <tr>
                    <td id="ectTime">{ectTime}</td>
                </tr>
            </table>
        </div>
    );
}

export default ECTdetails;