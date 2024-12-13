import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Login = ({ toggleLogin }) => {
  const navigate = useNavigate()
  const handleLogin = () => {
    // Add authentication logic here (if any)
    toggleLogin();
    navigate('/')
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField fullWidth label="Email" margin="normal" variant="outlined" />
      <TextField fullWidth label="Password" margin="normal" variant="outlined" type="password" />
      <Button onClick={handleLogin} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
