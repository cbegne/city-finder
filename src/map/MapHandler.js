import { useState, useEffect } from 'react';
import { useCitiesFetcher } from './useCitiesFetcher';

export const MapHandler = ({ children }) => {
  const { cities } = useCitiesFetcher();
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCityData, setSelectedCityData] = useState(null);

  useEffect(() => {
    const findSelectedCityData = () => {
      const result = cities.find((elem) => elem.city === selectedCity);
      setSelectedCityData(result);
    };

    if (selectedCity) {
      findSelectedCityData();
    }
  }, [cities, selectedCity]);

  return children({ cities, selectedCity, setSelectedCity, selectedCityData });
};
