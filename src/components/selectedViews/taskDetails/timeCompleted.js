import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

/**
 * taskEdit Component (ADMIN)
 *  This is used to edit task details on the selected task 
 */
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

    // Formats date string
    const formatDate = (dateString) => {
    if (!dateString) {
      return ''; // Return empty string for undefined or empty dates
    }
  
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };
    return(
        <div className="compTimeDiv">
            <table className="compTimeTable">
                <tr>
                    <th>Creation Date:</th>
                    <th>Completion Date:</th>
                </tr>
                <tr>
                    <td id='createTime'>{formatDate(taskCreation)}</td>
                    <td id="compTime">{formatDate(taskCompletion)}</td>
                </tr>
            </table>
        </div>
    );
}

export default CompDetails;