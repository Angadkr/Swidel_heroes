import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { shops, users } from "../data/sampleData"; // Ensure these are defined and valid
import "mapbox-gl/dist/mapbox-gl.css";
import StyledPopup from "./styledPopup";

const MAPBOX_TOKEN = "pk.eyJ1IjoiYW5na3IwMDciLCJhIjoiY200bGtmemJtMDJmdzJqc2N3eXJ4anl3cyJ9.1-OgYQdsgAX8MKjTYscoGw";

const PickupAndDrop = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [cursor, setCursor] = useState("grab");

  // Log state updates for debugging
  useEffect(() => {
    console.log("Selected location updated:", selectedLocation);
  }, [selectedLocation]);

  const handleLocation = (shop) => {
    setSelectedLocation(shop);
  };

  const handleCursor = (text) => {
    setCursor(text);
  };

  return (
    <Map
      initialViewState={{
        longitude: 77.229446,
        latitude: 28.612894,
        zoom: 14,
      }}
      style={{ width: "100%", height: "400px", zIndex: 20, cursor: cursor }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {/* Render shop markers */}
      {shops &&
        shops.map((shop) => (
          <React.Fragment key={shop.id}>
            <Marker
              longitude={shop.longitude}
              latitude={shop.latitude}
              anchor="center"
              onClick={() => {
                if (shop.latitude && shop.longitude) {
                  handleLocation(shop);
                } else {
                  console.error("Invalid coordinates:", shop);
                }
              }}
              onMouseEnter={() => handleCursor("pointer")}
              onMouseLeave={() => handleCursor("grab")}
            >
              <img
                src="https://www.clipartmax.com/png/small/139-1399412_fullwidth-map-google-maps-marker-blue.png"
                alt={shop.name}
                style={{ width: "25px", height: "25px" }}
              />
            </Marker>
          </React.Fragment>
        ))}

      {/* Render popup for selected location */}
      {selectedLocation &&
        !isNaN(selectedLocation.latitude) &&
        !isNaN(selectedLocation.longitude) && (
          <Popup
            longitude={selectedLocation.longitude}
            latitude={selectedLocation.latitude}
            closeOnClick={false} // Prevents closing on map clicks
            onClose={() => setSelectedLocation(null)}
            
            anchor="top"
          >
            <StyledPopup shop={selectedLocation} />
          </Popup>
        )}

      {/* Render user markers */}
      {users &&
        users.map((user) => (
          <Marker
            key={user.id || user.name} // Ensure unique key
            longitude={user.longitude}
            latitude={user.latitude}
            anchor="center"
            onClick={() => {
              if (user.latitude && user.longitude) {
                handleLocation(user);
              } else {
                console.error("Invalid coordinates:", user);
              }
            }}
            onMouseEnter={() => handleCursor("pointer")}
            onMouseLeave={() => handleCursor("grab")}
          >
            <img
              src="https://www.clipartmax.com/png/small/30-305648_red-map-marker-png.png"
              alt={user.name}
              style={{ width: "25px", height: "25px" }}
            />
          </Marker>
        ))}
    </Map>
  );
};

export default PickupAndDrop;
