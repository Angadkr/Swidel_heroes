import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import {Grid2} from '@mui/material'; // Import Grid2
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5', // Light gray for a professional look
        color: '#333', // Neutral dark gray text
        borderTop: '1px solid rgba(0, 0, 0, 0.1)', // Subtle border for separation
        width: '100%',
        textAlign: 'left',
        p: { xs: 3, sm: 4 },
        mt: 4,
      }}
    >
      <Grid2 container spacing={4}>
        {/* Column 1: App Description */}
        <Grid2 xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            @Swidel Heroes
          </Typography>
          <Typography variant="body2">
            Empowering delivery heroes for a local market e-commerce startup. Earn rewards, points, and ranks based on performance!
          </Typography>
        </Grid2>

        {/* Column 2: Contact Information */}
        <Grid2 xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2">
            <strong>Angad Kumar</strong> - +91 98765 43210<br />
            <strong>Vaibhav Kumar Singh</strong> - +91 98765 43211<br />
            Address: C-123, Business Lane, New Delhi, India
          </Typography>
        </Grid2>

        {/* Column 3: Social Icons */}
        <Grid2 xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              sx={{ color: '#4267B2' }} // Facebook blue
              href="https://facebook.com"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{ color: '#1DA1F2' }} // Twitter blue
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{ color: '#E1306C' }} // Instagram pink
              href="https://instagram.com"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{ color: '#0077B5' }} // LinkedIn blue
              href="https://linkedin.com"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid2>
      </Grid2>

      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="body2" sx={{ fontSize: '12px' }}>
          © 2024 Swidel Heroes. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
