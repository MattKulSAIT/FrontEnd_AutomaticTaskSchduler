import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CompDetails() {

    /*
    const [compTime, setCompTime] = useState("tempECTtime");
    const { id } = useParams();

    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/taskView/${id}`); //it used id because thats what was useing the App.js
          if (response.ok) {
            const data = await response.json();
            setEctTime(data.timeToComplete);
          } else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          console.error(error);
        }
      };

      */

    return(
        <div className="compTimeDiv">
            <table className="compTimeTable">
                <tr>
                    <th>Completion Date:</th>
                </tr>
                <tr>
                    <td id="compTime">{compTime}</td>
                </tr>
            </table>
        </div>
    );
}

export default CompDetails;