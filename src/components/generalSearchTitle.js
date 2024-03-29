import * as React from 'react';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import backArrow from '../assets/backArrow_pageTitle.png'

// Tool Bar Styling

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

/** PageTitleSearch Component
 *   This displays the current page the user is on with a search button
 */
function PageTitleSearch({ currPage, backButtonLink }) {

  function backButton() {
    window.location.href = backButtonLink;
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: '#FFFFFF' }}>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '2.5%'}}>
            <Button sx={{ color: 'white', background: '#CA3433', marginLeft: '20px', height: '70px', width: '70px', borderRadius: 100, ':hover': { background: '#FF0000' } }}
              onClick={backButton}>
              <div style={{ fontSize: '70px', marginRight: '13px' }}><img src={backArrow} alt='something' style={{ width: '42px', height: '50px', marginLeft: '2px'}}></img></div>
            </Button>
            <div style={{fontSize: '75px', marginLeft: '40px', color: '#CA3433', fontWeight: "bold"}}>{currPage}</div>
          </div>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-begining', marginLeft: '20px' }}
          >
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '2%'}}>
                <input placeholder='Search' style={{height: '40px', width: '250px', background: '#F5F5F5', border: 'none', boxShadow: 'inset 0px 0px 5px 2px rgba(0, 0, 0, 0.2)',}}></input>
                <Button sx={{ color: 'white', background: '#CA3433', marginLeft: '20px', ':hover': { background: '#FF0000' } }}>
                    Search 
                </Button>
            </div>
          </Typography>
      </AppBar>
    </Box>
  );
}

export default PageTitleSearch;