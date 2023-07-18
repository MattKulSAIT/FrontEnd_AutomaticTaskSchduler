import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import backArrow from '../assets/backArrow_pageTitle.png'

/** PageTitle Component
 *   This displays the current page the user is on
 */
function PageTitle({ currPage, backButtonLink }) {

  // BackEnd //

  /** backButton() Method
   *   This method will move the user back to the previous page based on their location on the page map
   */
  function backButton() {
    window.location.href = backButtonLink;
  }

  // FrontEnd //
 
  return (
    <div className='pageTitle'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5%' }}>
            <div className='backButtonDiv'>
              <Button
                sx={{ color: 'white', background: '#CA3433', marginLeft: '20px', height: '70px', width: '70px', borderRadius: 100, ':hover': { background: '#FF0000' } }}
                onClick={backButton}
              >
                <div style={{ fontSize: '70px', marginRight: '13px' }}>
                  <img 
                    src={backArrow} 
                    alt='Back Page' 
                    style={{ width: '42px', height: '50px', marginLeft: '2px' }}
                  />
                </div>
              </Button>
            </div>
            <div className='currentPageDiv' style={{ fontSize: '75px', marginLeft: '40px', color: '#CA3433', fontWeight: 'bold' }}>
              {currPage}
            </div>
          </div>
        </AppBar>
      </Box>
    </div>
  );
  
}

export default PageTitle;