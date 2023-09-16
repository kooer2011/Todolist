import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              backgroundColor: '#FCFF3E',
              borderRadius: '10px',
              boxShadow: '2px 2px 2px',
            }}
            variant="h6"
            color="black"
            component="div"
          >
            Todolist
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
