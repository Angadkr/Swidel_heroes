import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';

const LoginPage = ({ toggleLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic here
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
          Login
        </Typography>
        <form onSubmit={handleLogin}>
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
            Login
          </Button>
        </form>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Don't have an account?{' '}
          <a href="/register" style={{ color: '#1976d2', textDecoration: 'none' }}>
            Register here
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
