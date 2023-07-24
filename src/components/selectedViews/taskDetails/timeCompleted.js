import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CompDetails() {

    
    const [taskCreation, setTaskCreation] = useState("tempTaskCreation");
    const [taskCompletion, setTaskCompletion] = useState("tempTaskCompletion");
    const { id } = useParams();
    
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/archiveTask/${id}`); //it used id because thats what was useing the App.js
          if (response.ok) {
            const data = await response.json();
            setTaskCreation(data.creationDate);
            setTaskCompletion(data.completionDate);
          } else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <div className="compTimeDiv">
            <table className="compTimeTable">
                <tr>
                    <th>Creation Date:</th>
                    <th>Completion Date:</th>
                </tr>
                <tr>
                    <td id='createTime'>{taskCreation}</td>
                    <td id="compTime">{taskCompletion}</td>
                </tr>
            </table>
        </div>
    );
}

export default CompDetails;