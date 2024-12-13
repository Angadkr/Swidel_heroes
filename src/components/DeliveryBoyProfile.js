import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Star } from '@mui/icons-material'; // For the star icons
import { deliveryBoy } from '../data/sampleData';

const DeliveryBoyProfile = () => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      sx={{
        color: index < Math.floor(deliveryBoy.rating) ? '#FFD700' : '#E0E0E0', // Yellow for filled stars, light gray for others
        fontSize: 24,
      }}
    />
  ));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full view height
        backgroundColor: '#f9f9f9',
        p: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 500,
          borderRadius: 4,
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Larger Photo Section */}
        <Box
          sx={{
            height: 250, // Increased height for better visibility
            width: '100%',
            backgroundImage: `url(${deliveryBoy.photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            mb: 2,
          }}
        />

        <CardContent sx={{ p: 4 }}>
          {/* Name */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {deliveryBoy.name}
            </Typography>
          </Box>

          {/* Rating */}
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                color: '#333',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {stars}
            </Typography>
          </Box>

          {/* Rank */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="body1" sx={{ color: '#333' }}>
              Rank: {deliveryBoy.rank}
            </Typography>
          </Box>

          {/* Total Points */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="body1" sx={{ color: '#333', fontWeight: 'bold' }}>
              Total Points: 4095
            </Typography>
          </Box>

          {/* Redeem Button */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ADD8E6', // Light blue
                color: '#0056b3',
                fontWeight: 'bold',
                width: '100%',
                p: 1.5,
                borderRadius: 8,
                '&:hover': {
                  backgroundColor: '#0056b3', // Darker blue
                  color: '#ffffff',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              REDEEM NOW
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeliveryBoyProfile;
