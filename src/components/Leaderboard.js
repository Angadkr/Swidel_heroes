import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { deliveryBoys } from '../data/sampleData';

const Leaderboard = () => {
  const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Gold, Silver, Bronze
  const navigate = useNavigate(); // Hook to handle navigation

  const handleCardClick = (index) => {
    if (index === 14) {
      navigate('/profile'); // Navigate to /profile when 15th card is clicked
    }
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', color: 'black' }}
      >
        Leaderboard
      </Typography>

      {deliveryBoys.map((boy, index) => (
        <Paper
          key={index}
          onClick={() => handleCardClick(index)} // Handle click
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
            p: 2,
            borderRadius: '16px',
            cursor: index === 14 ? 'pointer' : 'default', // Make 15th card clickable
            backgroundColor:
              index === 14
                ? '#e0e0e0' // Light grey background for 15th entry
                : index < 3
                ? `${medalColors[index]}33` // Light gold, silver, bronze
                : 'white', // Default card color
            boxShadow: index === 14
              ? '0 4px 12px rgba(0, 0, 0, 0.3)' // Slightly larger shadow for 15th entry
              : index < 3
              ? '0 4px 12px rgba(0, 0, 0, 0.2)'
              : '0 2px 8px rgba(0, 0, 0, 0.1)',
            transform: index === 14 ? 'scale(1.05)' : 'none', // Slightly enlarge the 15th card
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: index === 14 ? 'scale(1.07)' : 'scale(1.02)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          {/* Medal or Rank */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '60px',
              height: '60px',
              backgroundColor: index < 3 ? medalColors[index] : '#f0f0f0',
              borderRadius: '50%',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '20px',
              position: 'relative',
            }}
          >
            {index < 3 && (
              <Box
                component="span"
                sx={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
              </Box>
            )}
            {index + 1}
          </Box>

          {/* Delivery Boy Details */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml: 3 }}>
            {/* Image */}
            <Avatar
              src={boy.photo}
              alt={boy.name}
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '12px',
                mr: 3,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />

            {/* Details */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
                {boy.name}
              </Typography>
              <Typography variant="body1" sx={{ color: 'black', mt: 1 }}>
                Rating: {boy.rating} ⭐
              </Typography>
              <Typography variant="body2" sx={{ color: 'black', mt: 0.5 }}>
                Reviews: {boy.reviews}
              </Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default Leaderboard;
