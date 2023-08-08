import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

/**
 * History Details Component (ADMIN)
 *  This is used to see the task details in the history view
 */
function HistoryDetails() {

  // BackEnd //

  // Variables
  const [cusName, setcustName] = useState("tempCusName");
  const [cusPhone, setCusPhone] = useState("tempCusPhone");
  const [cusEmail, setCusEmail] = useState("tempCusEmail");
  const [taskStatus, setTaskStatus] = useState("tempTaskStatus");
  const [taskType, setTaskType] = useState("tempTaskType");
  const { id } = useParams();

  useEffect(() =>{
    fetchData();
  }, []);

  //Gathers the data of the task using taskID
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/archiveTask/${id}`); //it used id because thats what was useing the App.js
      if (response.ok) {
        const data = await response.json();
        setcustName(data.name);
        setCusPhone(data.phoneNumber);
        setCusEmail(data.email);
        //setTaskStatus(data.status);
        if(data.status === 1){
            setTaskStatus("Pending");
        }
        else if(data.status === 2){
            setTaskStatus("Assigned");
        }
        else if(data.status === 3){
            setTaskStatus("In Progress");
        }
        else if(data.status === 4){
            setTaskStatus("Complete");
        }
        if (data.category === 1) {
            setTaskType("Desk Side");
          } else if (data.category === 2) {
            setTaskType("Database");
          } else if (data.category === 3) {
            setTaskType("Network");
          } else if (data.category === 4) {
            setTaskType("Mobile Telephone");
          }
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // FrontEnd //

  return(
    <div className="historyDetails">
      <table>
        <tr>
          <th>Task Details:</th>
        </tr>
        <tr>
          <td id="taskStatus">Task Status: {taskStatus}</td>
        </tr>
        <tr>
          <td id="taskType">Task Type: {taskType}</td>
        </tr>
        <tr>
          <td id="cusEmail">{cusEmail}</td>
        </tr>
      </table>
    </div>
  );
  
}

export default HistoryDetails;