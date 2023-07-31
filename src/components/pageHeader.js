import * as React from 'react';

import Button from '@mui/material/Button';

import ATlogo from '../assets/AutoTaskerTemp_Final.png'

/** PageHeader Component
 *   This displays the current user logged in and be logged out through here; Displays AutoTask logo and title
 */
function PageHeader() {

  //BackEnd

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  /** handleMenuOpen() Method
   * 
   */
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  /** handleMenuClose() Method
   * (UNUSED)
   */
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  //FontEnd

  return (
    <div className='pageHeader'>
      <div style={{ backgroundColor: '#CA3433', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 10px' }}>
          <img 
            src={ATlogo} 
            alt="AutoTasker Logo" 
            style={{ width: '50px'}}
          />
          <div style={{ marginLeft: '10px', color:'white', fontSize:'40px', fontWeight:'bold'}}>AutoTask</div>
        <div  style={{ marginLeft: 'auto', color:'white', fontSize:'20px', fontWeight:'bold' }}>
          ${'userName'}&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
              id="demo-positioned-button"
              aria-controls="demo-positioned-menu"
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? 'true' : undefined}
              onClick={handleMenuOpen}
              sx={{ color: '#CA3433',fontFamily: 'bahnschrift',fontWeight: 'bold',background: '#FFFFFF',paddingTop: '10px' , marginRight: '%', ':hover': { background: '#FFFFFF' } }}
          >
              Logout
          </Button>
        </div>
      </div>
    </div>
  );

}

export default PageHeader;