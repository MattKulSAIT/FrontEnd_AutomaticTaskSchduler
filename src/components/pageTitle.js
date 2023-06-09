import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import backArrow from '../assets/backArrow_pageTitle.png'

export default function PageTitle({ currPage, whereTheBackButtonsGoes }) {
  function backButton() {
    window.location.href = whereTheBackButtonsGoes;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5%' }}>
          <Button
            sx={{ color: 'white', background: '#CA3433', marginLeft: '20px', height: '70px', width: '70px', borderRadius: 100, ':hover': { background: '#FF0000' } }}
            onClick={backButton}
          >
            <div style={{ fontSize: '70px', marginRight: '13px' }}>
              <img src={backArrow} alt='something' style={{ width: '42px', height: '50px', marginLeft: '2px' }}></img>
            </div>
          </Button>
          <div style={{ fontSize: '75px', marginLeft: '40px', color: '#CA3433', fontWeight: 'bold' }}>{currPage}</div>
        </div>
      </AppBar>
    </Box>
  );
}
