import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const StyledPopup = ({ shop }) => (
  <Card sx={{ maxWidth: 300, boxShadow: 5, borderRadius: 2 }}>
    <CardMedia
      component="img"
      height="140"
      image="https://via.placeholder.com/300" // Replace with a shop image if available
      alt={shop.name}
    />
    <CardContent>
      <Typography variant="h6" component="div" gutterBottom>
        {shop.shopName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {shop.name}
      </Typography>
      <Typography variant="body2" color="text.primary">
        Contact: {shop.contact}
      </Typography>
    </CardContent>
  </Card>
);

export default StyledPopup;
