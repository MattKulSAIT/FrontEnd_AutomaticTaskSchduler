import * as React from 'react';

import './TestPage.css';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function TestPage() {

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

export default TestPage;

/*
Use the onAccept to gather the date when 'OK' is clicked

OR

Use value to get the selected value
*/