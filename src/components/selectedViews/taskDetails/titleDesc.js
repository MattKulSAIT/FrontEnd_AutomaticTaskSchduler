import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

/**
 * Title Description Component
 *  This displays the Title and Description of the selected task
 */
function TitleDesc() {

  // BackEnd //

  // Variables
  const [taskTitle, setTaskTitle] = useState("tempTitle");
  const [taskDesc, setTaskDesc] = useState("tempDesc");
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  //Used to get the data from the database based from the task ID
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/taskView/${id}`); //it used id because thats what was useing the App.js
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
    <div className="titleDesc">
      <table align='left'>
          <tr>
            <th>Title</th>
          </tr>
          <tr>
            <td id="taskTitle">{taskTitle}</td>
          </tr>
          <tr>
            <th>Description</th>
          </tr>
          <tr>
            <td id="taskDescription">{taskDesc}</td>
          </tr>
      </table>
    </div>
  );

}

export default TitleDesc;