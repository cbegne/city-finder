import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  padding: 20px;
  overflow-y: scroll;
  max-height: 80vh;
  margin-right: 20px;
`;

const Button = styled.button`
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  &:hover {
    background-color: black;
    color: white;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: black;
      color: white;
      font-weight: bold;
    `}
`;

export const MapCities = ({ cities, selectedCity, setSelectedCity }) => {
  const changeSelectedCity = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Wrapper onClick={changeSelectedCity}>
      {cities.map((elem) => (
        <Button type="button" key={elem.rank} value={elem.city} active={elem.city === selectedCity}>
          {elem.city}
        </Button>
      ))}
    </Wrapper>
  );
};
