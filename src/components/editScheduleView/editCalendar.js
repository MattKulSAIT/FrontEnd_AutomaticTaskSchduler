import * as React from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditCalendar = () => {

  //Get Value of date function

  //Maybe use the onAccept to get the hours of employee
  //to be displayed on the 'editHours' component

  return (

    <div className='component'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker 
                orientation="landscape"
                disablePast="true"
                sx={{
                    bgcolor: '#F5F5F5',
                    WebkitTextFillColor: '#757575',                   
                }}  
            />
        </LocalizationProvider>
    </div>
    
);

}

export default EditCalendar;

/*
Use the onAccept to gather the date when 'OK' is clicked

OR

Use value to get the selected value
*/