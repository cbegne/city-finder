import React from 'react';
import styled from 'styled-components';
import { MapCities } from './MapCities';
import { MapInteractive } from './MapInteractive';
import { MapHandler } from './MapHandler';
import './leaflet.css';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid lightgray;
  padding: 40px;
`;

export const MapMain = () => (
  <Wrapper>
    <MapHandler>
      {({ cities, selectedCity, setSelectedCity, selectedCityData }) => (
        <>
          <MapCities cities={cities} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
          <MapInteractive cities={cities} selectedCityData={selectedCityData} />
        </>
      )}
    </MapHandler>
  </Wrapper>
);
