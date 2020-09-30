import React from 'react';
import styled from 'styled-components';
import { MapMain } from './map/MapMain';

const Layout = styled.div`
  height: 100vh;
  width: 100%;
`;

const PageWrapper = styled.div`
  margin: auto;
  padding-top: 50px;
  padding-bottom: 100px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const App = () => (
  <Layout>
    <PageWrapper>
      <MapMain />
    </PageWrapper>
  </Layout>
);
