import React from 'react';
import styled from 'styled-components';
import VenturesHero from './VenturesHero';
import VenturesList from './VenturesList';
import VenturesProcess from './VenturesProcess';
import VenturesContact from './VenturesContact';

const VenturesPageContainer = styled.main`
  background-color: var(--dark-background);
  color: var(--light-text);
`;

const VenturesPage = () => {
  return (
    <VenturesPageContainer>
      <VenturesHero />
      <VenturesList />
      <VenturesProcess />
      <VenturesContact />
    </VenturesPageContainer>
  );
};

export default VenturesPage;
