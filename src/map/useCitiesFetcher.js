import { useState, useEffect } from 'react';

export const useCitiesFetcher = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch('/cities.json');
      const data = await response.json();
      setCities(data);
    };

    fetchCities();
  }, []);

  return { cities };
};
