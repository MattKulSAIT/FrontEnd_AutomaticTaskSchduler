import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RescHours() {
  const [rescAvailHrs, setRescAvailHrs] = useState(0);
  const [rescEstWorkHrs, setRescEstWorkHrs] = useState(0);
  const [rescTotalHrs, setRescTotalHrs] = useState(0);
  const [rescNumCurrTasks, setRescNumCurrTask] = useState(0);
  const { id } = useParams();

  const fetchAvaliableHours = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/schedule/available/${id}`);
      if (response.ok) {
        const data = await response.json();
        setRescAvailHrs(data); // Data is a number, no need to destructure
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
        setRescEstWorkHrs(data); // Data is a number, no need to destructure
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
        setRescTotalHrs(data); // Data is a number, no need to destructure
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      //setError(error.message);
    }
  };

  const fetchNumOfTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/generalResource/${id}`);
      if (response.ok) {
        const data = await response.json();
        setRescNumCurrTask(data); // Data is a number, no need to destructure
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      //setError(error.message);
    }
  };

  useEffect(() => {
    fetchAvaliableHours(id);
    fetchWorkHours(id);
    fetchTotalHours(id);
    fetchNumOfTask(id);
  }, [id]);

  return (
    <div className='rescHours'>
      <table align='left' className='tableComp'>
        <tr>
          <th id='rescTableTitle'>Overall Hours:</th>
        </tr>
        <tr>
          <td id='rescAvailHrs'>Available Hours: {rescAvailHrs}</td>
          <td id='rescEstWorkHrs'>Estimated Work Hours: {rescEstWorkHrs}</td>
        </tr>
        <tr>
          <td id='rescTotalHrs'>Total Hours (Curr. Week): {rescTotalHrs}</td>
          <td id='rescNumCurrTasks'># of Current Tasks: {rescNumCurrTasks}</td>
        </tr>
      </table>
    </div>
  );
}

export default RescHours;
