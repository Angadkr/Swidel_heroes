import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';

const Register = ({ toggleLogin }) => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration logic here
    toggleLogin();
    navigate('/');
  };

  return (
    <Box
      sx={{
        height: '100vh', // Full view height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center content vertically and horizontally
        backgroundColor: '#f5f5f5', // Optional background color
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '400px',
          p: 4,
          backgroundColor: '#fff',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="Name"
            type="text"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
          >
            Register
          </Button>
        </form>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
            Login here
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
