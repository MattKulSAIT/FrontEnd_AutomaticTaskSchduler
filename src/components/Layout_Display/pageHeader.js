import * as React from 'react';
import Button from '@mui/material/Button';
import ATlogo from '../../assets/AutoTaskerTemp_Final.png'

export default function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#CA3433', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 10px' }}>
        <img src={ATlogo} alt="AutoTasker Logo" style={{ width: '50px'}} />
        <div style={{ marginLeft: '10px' }}>AutoTask</div>
        <div style={{ marginLeft: 'auto' }}>
          ${'userName'}&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
              id="demo-positioned-button"
              aria-controls="demo-positioned-menu"
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? 'true' : undefined}
              onClick={handleMenuOpen}
              sx={{ color: '#CA3433', background: '#FFFFFF', marginRight: '%', ':hover': { background: '#FFFFFF' } }}
          >
              Logout
          </Button>
        </div>
    </div>
  );
}