import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { shops, users } from "../data/sampleData"; // Ensure these are defined and valid
import "mapbox-gl/dist/mapbox-gl.css";
import StyledPopup from "./styledPopup";

const MAPBOX_TOKEN = "pk.eyJ1IjoiYW5na3IwMDciLCJhIjoiY200bGtmemJtMDJmdzJqc2N3eXJ4anl3cyJ9.1-OgYQdsgAX8MKjTYscoGw"; // Replace with your Mapbox token

const PickupAndDrop = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [cursor, setCursor] = useState("grab");
  const [orderStatus, setOrderStatus] = useState([
    { shopStatus: "picked up", userStatus: "delivered" },
    { shopStatus: "picked up", userStatus: "delivered" },
    { shopStatus: "picked up", userStatus: "delivered" },
    { shopStatus: "picked up", userStatus: "delivered" },
    { shopStatus: "waiting", userStatus: "pending" },
  ]);

  // Sample data for "Order Requests"
  const [orderRequests, setOrderRequests] = useState([
    {
      shop: { shopName: "Gupta Kirana Store", contact: "9876543210" },
      user: { name: "Rajesh Kumar", contact: "9123456780" },
      deliveryCharges: 50,
      status: "accept",
    },
    {
      shop: { shopName: "Sharma Grocery", contact: "9812345678" },
      user: { name: "Pooja Singh", contact: "8998765432" },
      deliveryCharges: 75,
      status: "reject",
    },
  ]);

  useEffect(() => {
    console.log("Selected location updated:", selectedLocation);
  }, [selectedLocation]);

  const handleLocation = (location) => {
    setSelectedLocation(location);
  };

  const toggleRequestStatus = (index) => {
    const updatedRequests = [...orderRequests];
    updatedRequests[index].status =
      updatedRequests[index].status === "accept" ? "reject" : "accept";
    setOrderRequests(updatedRequests);
  };

  const toggleShopStatus = (index) => {
    const updatedStatus = [...orderStatus];
    updatedStatus[index].shopStatus =
      updatedStatus[index].shopStatus === "waiting" ? "picked up" : "waiting";
    setOrderStatus(updatedStatus);
  };

  const toggleUserStatus = (index) => {
    const updatedStatus = [...orderStatus];
    updatedStatus[index].userStatus =
      updatedStatus[index].userStatus === "pending" ? "delivered" : "pending";
    setOrderStatus(updatedStatus);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Map Section */}
      <Box
        sx={{
          height: "50vh",
          width: "75%",
          margin: "0 auto 24px",
          boxShadow: 3,
        }}
      >
        <Map
          initialViewState={{
            longitude: 77.229446,
            latitude: 28.612894,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          cursor={cursor}
        >
          {shops.map((shop) => (
            <Marker
              key={shop.id}
              longitude={shop.longitude}
              latitude={shop.latitude}
              anchor="center"
              onClick={() => handleLocation(shop)}
              onMouseEnter={() => setCursor("pointer")}
              onMouseLeave={() => setCursor("grab")}
            >
              <img
                src="https://www.clipartmax.com/png/small/139-1399412_fullwidth-map-google-maps-marker-blue.png"
                alt={shop.shopName}
                style={{ width: "25px", height: "25px" }}
              />
            </Marker>
          ))}
          {users.map((user) => (
            <Marker
              key={user.id}
              longitude={user.longitude}
              latitude={user.latitude}
              anchor="center"
              onClick={() => handleLocation(user)}
              onMouseEnter={() => setCursor("pointer")}
              onMouseLeave={() => setCursor("grab")}
            >
              <img
                src="https://www.clipartmax.com/png/small/30-305648_red-map-marker-png.png" // Red marker from ClipartMax
                alt={user.name}
                style={{ width: "25px", height: "25px" }}
              />
            </Marker>
          ))}

          {/* Popup for Selected Location */}
          {selectedLocation && (
            <Popup
              longitude={selectedLocation.longitude}
              latitude={selectedLocation.latitude}
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              anchor="top"
            >
              <StyledPopup shop={selectedLocation} />
            </Popup>
          )}
        </Map>
      </Box>

      {/* Orders Section */}
      <Box
        sx={{
          width: "75%",
          margin: "0 auto",
          boxShadow: 3,
          padding: 3,
          backgroundColor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
          ORDERS TODAY
        </Typography>

        {/* Headings for Columns */}
        <Grid container spacing={2} sx={{ mb: 2, textAlign: "center" }}>
          <Grid item xs={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Retailer
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Buyer
            </Typography>
          </Grid>
        </Grid>

        {orderStatus.map((status, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
              marginBottom: 2,
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            {/* Shop Details */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {shops[index % shops.length]?.shopName}
                </Typography>
                <Typography variant="body2">
                  {shops[index % shops.length]?.contact}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={() => toggleShopStatus(index)}
                  sx={{
                    backgroundColor: status.shopStatus === "picked up" ? "green" : "yellow",
                    color: status.shopStatus === "picked up" ? "#fff" : "#000", // Black text for yellow button
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: status.shopStatus === "picked up" ? "#45a049" : "#f0c600",
                      transform: "scale(1.05)", // Scale effect on hover
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  {status.shopStatus}
                </Button>
              </Grid>
            </Grid>

            {/* User Details */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {users[index % users.length]?.name}
                </Typography>
                <Typography variant="body2">
                  {users[index % users.length]?.contact}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={() => toggleUserStatus(index)}
                  sx={{
                    backgroundColor: status.userStatus === "delivered" ? "green" : "yellow",
                    color: status.userStatus === "delivered" ? "#fff" : "#000", // Black text for yellow button
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: status.userStatus === "delivered" ? "#45a049" : "#f0c600",
                      transform: "scale(1.05)", // Scale effect on hover
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  {status.userStatus}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>

      {/* Order Requests Section */}
      <Box
        sx={{
          width: "75%",
          margin: "24px auto",
          boxShadow: 3,
          padding: 3,
          backgroundColor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
          ORDER REQUESTS
        </Typography>

        {/* Headings for Columns */}
        <Grid container spacing={2} sx={{ mb: 2, textAlign: "center" }}>
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Retailer
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Buyer
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Delivery Charges
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
              Status
            </Typography>
          </Grid>
        </Grid>

        {orderRequests.map((request, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
              marginBottom: 2,
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            {/* Retailer Column */}
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {request.shop.shopName}
                </Typography>
                <Typography variant="body2">
                  {request.shop.contact}
                </Typography>
              </Grid>
              {/* Buyer Column */}
              <Grid item xs={3}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {request.user.name}
                </Typography>
                <Typography variant="body2">
                  {request.user.contact}
                </Typography>
              </Grid>
              {/* Delivery Charges Column */}
              <Grid item xs={3}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ₹ {request.deliveryCharges}
                </Typography>
              </Grid>
              {/* Status Column */}
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => toggleRequestStatus(index)}
                  sx={{
                    backgroundColor: request.status === "accept" ? "blue" : "red",
                    color: "#fff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: request.status === "accept" ? "#0046ff" : "#ff3e3e",
                      transform: "scale(1.05)",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  {request.status}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default PickupAndDrop;
