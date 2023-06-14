import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SearchBox() {
    <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ flexGrow: 1, alignSelf: 'flex-begining', marginLeft: '20px' }}
    >
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '2%'}}>
            <input placeholder='Search Stufffff' style={{height: '40px', width: '250px', background: '#F5F5F5', border: 'none', boxShadow: 'inset 0px 0px 5px 2px rgba(0, 0, 0, 0.2)',}}></input>
            <Button sx={{ color: 'white', background: '#CA3433', marginLeft: '20px', ':hover': { background: '#FF0000' } }}>
                Search 
            </Button>
        </div>
    </Typography>
}

export default SearchBox;