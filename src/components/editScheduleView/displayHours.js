import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * Display Hours component (RESOURCE)
 *  This shows a visible calendar
 */
function DisplayHours() {

    // Variables
    const [tempAvailHrs, setTempAvailHrs] = useState('NA');
    const [tempWorkHrs, setTempWorkHrs] = useState('NA');
    const [tempTotalHrs, setTempTotalHrs] = useState('NA');
    //const id need to be gotten from the session

    // BackEnd //
    const fetchAvaliableHours = async (id) => {
        try {
          const response = await fetch(`http://localhost:8080/schedule/available/${id}`);
          if (response.ok) {
            const data = await response.json();
            setTempAvailHrs(data); // Data is a number, no need to destructure
          } else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          //setError(error.message);
        }
      };
    
      const fetchWorkHours = async (id) => {
        try {
          const response = await fetch(`http://localhost:8080/schedule/working/${id}`);
          if (response.ok) {
            const data = await response.json();
            setTempWorkHrs(data); // Data is a number, no need to destructure
          } else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          //setError(error.message);
        }
      };
    
      const fetchTotalHours = async (id) => {
        try {
          const response = await fetch(`http://localhost:8080/schedule/total/${id}`);
          if (response.ok) {
            const data = await response.json();
            setTempTotalHrs(data); // Data is a number, no need to destructure
          } else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          //setError(error.message);
        }
      };

      useEffect(() => {
        fetchAvaliableHours();
        fetchWorkHours();
        fetchTotalHours();
      }, []);

    // FrontEnd //

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
    );
    
}

export default DisplayHours;