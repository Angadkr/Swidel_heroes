import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Swidel Heroes
      </Typography>
      <Typography variant="body1" gutterBottom>
        Empowering delivery professionals with tools for success.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" sx={{ mx: 1 }} href="/login">
          Login
        </Button>
        <Button variant="outlined" color="primary" sx={{ mx: 1 }} href="/register">
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
