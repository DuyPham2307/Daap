import React, { useState } from 'react';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginModal from './LoginModal';

function HeaderUser() { // Nhận props onOpenModal trực tiếp từ Header
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModal, setShowModal] = useState(false); 

  // eslint-disable-next-line
  const [user, setUser] = useState({
    email: 'user@example.com',
    photoURL: 'https://avatar-placeholder.iran.liara.run/',
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
     // Gọi hàm onOpenModal từ props khi nhấp vào nút "Sign In"
     handleModalOpen();
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    handleClose();
  };

  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <IconButton onClick={handleMenu}>
            <Avatar alt="User Avatar" src={user.photoURL} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem style={{ fontWeight: '600', fontSize: '18px' }} onClick={handleSignOut}>Sign out</MenuItem>
          </Menu>
        </div>
      ) : (
        <div>
          <Button color="inherit" style={{ fontWeight: '600', fontSize: '18px' }} onClick={handleSignIn}>
            <AccountCircleIcon style={{ marginRight: '8px' }} />
            Sign In
          </Button>
          <LoginModal showModal={showModal} closeModal={handleModalClose} />
        </div>
      )}
    </div>
  );
}

export default HeaderUser;
