import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import HeaderUser from './HeaderUser';
import '../style/header.css'
import icon from '../images/icon.png';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar className='header'>
        <Typography style={{display: 'flex', alignItems: 'center', padding: '0px 20px 0px 20px'}} >
          <img src={icon} alt="Logo" className="header-icon" />
        </Typography >
        <div style={{ flexGrow: 1, paddingLeft: '20px' ,display: 'flex', gap: '10px' }}>
          <Button color="inherit" component={Link} to="/" style={{ fontWeight: '600', fontSize: '18px' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/winner" style={{ fontWeight: '600', fontSize: '18px' }}>
            Winner
          </Button>
          <Button color="inherit" component={Link} to="/category" style={{ fontWeight: '600', fontSize: '18px' }}>
            Categories
          </Button>
          <Button color="inherit" component={Link} to="/faq" style={{ fontWeight: '600', fontSize: '18px' }}>
            FAQ
          </Button>
        </div>
        <HeaderUser />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
