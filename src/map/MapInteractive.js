import React, { useState, useEffect } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const MapInteractive = ({ cities, selectedCityData }) => {
  const [position, setPosition] = useState([40.7127837, -74.0059413]);

  useEffect(() => {
    const showNewPosition = () => {
      const { latitude, longitude } = selectedCityData;
      setPosition([latitude, longitude]);
    };

    if (selectedCityData) {
      showNewPosition();
    }
  }, [selectedCityData]);

  return (
    <Wrapper>
      <Map center={position} zoom={12}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </Map>
    </Wrapper>
  );
};
