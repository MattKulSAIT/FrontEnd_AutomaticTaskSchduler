import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

/**
 * History Title and Description Component (ADMIN)
 *  This is used to see the title and description details in the history view
 */
function HistoryTitleDesc() {

  // BackEnd //

  // Variables
  const [taskTitle, setTaskTitle] = useState("tempTitle");
  const [taskDesc, setTaskDesc] = useState("tempDesc");
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  //Gathers the data through task ID
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/archiveTask/${id}`); //it used id because thats what was useing the App.js
      if (response.ok) {
        const data = await response.json();
        setTaskTitle(data.title);
        setTaskDesc(data.description);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  //Note lets look at getting this section left alligned with the text, I would now
  //But I got backend junk to do 

  // FrontEnd //

  return (
    <div className="historyTitleDesc">
      <table align='left'>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="taskTitle">{taskTitle}</td>
          </tr>
          <tr>
            <th>Description</th>
          </tr>
          <tr>
            <td id="taskDescription">{taskDesc}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}

export default HistoryTitleDesc;