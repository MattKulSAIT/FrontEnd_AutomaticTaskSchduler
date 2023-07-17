import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

//Note for future matthew 
//For this I think you will use the page call for viewResource since its the 
//same functionality and you dont need to make a specific link for it
function RescAssigned() {
    const [rescName, setRescName] = useState("tempRescName");
    const [empId, setEmpId] = useState("tempEmpId");
    const [empEmail, setEmpEmail] = useState("tempEmpEmail");
    const { id } = useParams();

    useEffect(() =>{
        fetchData();
        }, []);

    useEffect(() => {
        if (empId) {
            fetchAdditionalData();
        }
    }, [empId]);

        const fetchData = async () => {
            try {
              const response = await fetch(`http://localhost:8080/archiveTask/${id}`); //it used id because thats what was useing the App.js
              if (response.ok) {
                const data = await response.json();
                setEmpId(data.empId);
                //setTaskStatus(data.status);
              } else {
                throw new Error('Failed to fetch data');
              }
            } catch (error) {
              console.error(error);
            }
          };

          const fetchAdditionalData = async () => {
            try {
              const response = await fetch(`http://localhost:8080/resourceView/${empId}`);
              if (response.ok) {
                const data = await response.json();
                // Process the received data as needed
                setRescName(data.name);
                setEmpEmail(data.email);
                // ...
              } else {
                throw new Error('Failed to fetch additional data');
              }
            } catch (error) {
              console.error(error);
            }
          };

    return(
        <div className="rescAssigned">
            <table className="rescAssigned">
                <tr>
                    <th>Resource Assigned:</th>
                </tr>
                <tr>
                    <th>Employee ID</th>
                </tr>
                <tr>
                    <td id="empId">{empId}</td>
                </tr>
            </table>
        </div>
    );
}

export default RescAssigned;