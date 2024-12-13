import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, toggleLogin }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white', // White background
        color: 'black', // Default text color
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center', // Align links and title to the center
        }}
      >
        {/* Swidel Heroes Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            '& span': { color: 'green' }, // Green for "Heroes"
          }}
        >
          SWIDEL <span>HEROES</span>
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>

          {!isLoggedIn ? (
            <>
              <Button
                component={Link}
                to="/login"
                sx={buttonStyle}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                sx={buttonStyle}
              >
                Register
              </Button>
            </>
          ) : (
            <>
              <Link to="/leaderboard" style={linkStyle}>
                Leaderboard
              </Link>
              <Link to="/profile" style={linkStyle}>
                Profile
              </Link>
              <Link to="/pickup-drop" style={linkStyle}>
                Orders
              </Link>
              <Button
                onClick={toggleLogin}
                sx={buttonStyle}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Button Styles for Login, Register, and Logout
const buttonStyle = {
  color: 'black',
  border: '1px solid black',
  padding: '6px 12px',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
};

// Link Styles with Smooth Border-Bottom on Hover
const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '16px',
  textTransform: 'capitalize',
  position: 'relative',
  paddingBottom: '2px',
  transition: 'all 0.3s ease', // Smooth transition for hover effects

  // Hover effects
  '&:hover': {
    fontSize: '18px', // Slight font size increase
    color: 'black',
  },

  // Border-bottom effect
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 0,
    height: '2px',
    backgroundColor: 'black',
    transition: 'width 0.3s ease', // Smooth underline animation
  },

  '&:hover::after': {
    width: '100%', // Animate underline to full width on hover
  },
};

export default Header;
