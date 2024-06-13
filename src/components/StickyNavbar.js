import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import '../style/stickynavbar.css'

function StickyNavbar() {
  const [value, setValue] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 200) { // Điều chỉnh giá trị này dựa trên khi bạn muốn navbar trở nên dính
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const elementId = ["overview", "event", "award"][newValue];
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      className={`navbar ${isSticky ? 'top' : 'bottom'}`}
      position="fixed"
    >
      <Tabs value={value} onChange={handleChange} variant="fullWidth" style={{ display: 'flex', gap: '20px'}}>
        <Tab label="Overview" style={{fontSize: '20px', fontWeight: '700', color: '#000',}} />
        <Tab label="The Event" style={{fontSize: '20px', fontWeight: '700', color: '#000',}} />
        <Tab label="The Award" style={{fontSize: '20px', fontWeight: '700', color: '#000', whiteSpace: 'nowrap'}} />
      </Tabs>
    </AppBar>
  );
}

export default StickyNavbar;
