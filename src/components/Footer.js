import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white', // Matches the header background color
        color: 'black', // Matches the header text color
        borderTop: '1px solid rgba(0, 0, 0, 0.1)', // Subtle border for separation
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        p: { xs: 1, sm: 2 }, // Responsive padding
        fontSize: '14px',
        zIndex: 10,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        © 2024 Swidel Heroes. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
