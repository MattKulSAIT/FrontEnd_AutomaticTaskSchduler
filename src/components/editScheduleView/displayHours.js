import React from "react";

function DisplayHours() {

    let tempAvailHrs = 7.5;
    let tempWorkHrs = 0.5;
    let tempTotalHrs = 8.0;
    return (
        <div className="displayHours">
            <div className="availableHrs">
                <h3>Available Hours:</h3>
                <p className="displayedHours">{tempAvailHrs}</p>
            </div>
            <div className="workHrs">
                <h3>Work Hours:</h3>
                <p className="displayedHours">{tempWorkHrs}</p>
            </div>
            <div className="totalHrs">
                <h3>Total Hours:</h3>
                <p className="displayedHours">{tempTotalHrs}</p>
            </div>
        </div>
    )
    
}

export default DisplayHours;