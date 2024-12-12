import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField fullWidth label="Email" margin="normal" variant="outlined" />
      <TextField fullWidth label="Password" margin="normal" variant="outlined" type="password" />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
