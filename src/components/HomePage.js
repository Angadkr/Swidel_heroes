import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const HomePage = ({isLoggedIn}) => {
  return (
    <Box sx={{ textAlign: 'center', p: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Swidel Heroes
      </Typography>
      <Typography variant="body1" gutterBottom>
        Empowering delivery professionals with tools for success.
      </Typography>
      {!isLoggedIn?<Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" sx={{ mx: 1 }} href="/login">
          Login
        </Button>
        <Button variant="outlined" color="primary" sx={{ mx: 1 }} href="/register">
          Register
        </Button>
      </Box>:<Box sx={{ mt: 4 }}>
        <Button  variant="contained" color="primary" sx={{ mx: 1 }} component={Link} to="/profile">
          profile
        </Button>
      </Box>}
      
    </Box>
  );
};

export default HomePage;
