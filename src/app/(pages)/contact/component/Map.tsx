'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon in Next.js
import 'leaflet/dist/leaflet.css';

// Create custom marker icon with brand colors
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: #006d5a;
        width: 40px;
        height: 40px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid #80dac9;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-size: 18px;
        ">📍</div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

const Map: React.FC = () => {
  // Office coordinates: Plot 1, Katalima Crescent, Naguru, Kampala
  const officePosition: [number, number] = [0.34296087958897586, 32.60949731373947];

  return (
    <div className="w-full h-96 bg-body-bg border border-neutral-200 relative overflow-hidden rounded-2xl">
      <MapContainer
        center={officePosition}
        zoom={15}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={officePosition} icon={createCustomIcon()}>
          <Popup>
            <div className="text-center p-2">
              <h3 className="font-bold text-lg mb-1 text-dark">CoopProfiler Office</h3>
              <p className="text-sm text-gray-600">
                Plot 1, Katalima Crescent, Naguru
                <br />
                Kampala, Uganda
                <br />
                P.O.Box 130337
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

