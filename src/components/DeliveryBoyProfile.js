import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, List, ListItem, ListItemText } from '@mui/material';
import { deliveryBoy } from '../data/sampleData';

const DeliveryBoyProfile = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Card>
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Avatar src={deliveryBoy.photo} sx={{ width: 100, height: 100, mx: 'auto' }} />
            <Typography variant="h5" gutterBottom>{deliveryBoy.name}</Typography>
          </Box>
          <Typography>Rating: {deliveryBoy.rating}</Typography>
          <Typography>Reviews: {deliveryBoy.reviews}</Typography>
          <Typography>Rank: {deliveryBoy.rank}</Typography>
          <Typography variant="h6" sx={{ mt: 3 }}>Rewards:</Typography>
          <List>
            {deliveryBoy.rewards.map((reward, index) => (
              <ListItem key={index}>
                <ListItemText primary={reward} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeliveryBoyProfile;
