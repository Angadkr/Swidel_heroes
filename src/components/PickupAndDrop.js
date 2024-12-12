import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { shops } from '../data/sampleData';
import 'mapbox-gl/dist/mapbox-gl.css'; // Add this line


const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW5na3IwMDciLCJhIjoiY200bGtmemJtMDJmdzJqc2N3eXJ4anl3cyJ9.1-OgYQdsgAX8MKjTYscoGw'; // Replace with your token

const PickupAndDrop = () => {
  return (
    <Map
      initialViewState={{
        longitude: -122.4194,
        latitude: 37.7749,
        zoom: 12,
      }}
      style={{ width: '100%', height: '400px',zIndex:'20' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {shops.map((shop) => (
        <Marker
          key={shop.id}
          longitude={shop.longitude}
          latitude={shop.latitude}
          anchor="center"
        >
          <img
            src="https://via.placeholder.com/40/FF0000/FFFFFF?text=M"
            alt={shop.name}
            style={{ width: '25px', height: '25px' }}
          />
        </Marker>
      ))}
    </Map>
  );
};

export default PickupAndDrop;
