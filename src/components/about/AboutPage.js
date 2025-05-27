import React from 'react';
import styled from 'styled-components';
import AboutHero from './AboutHero';
import AboutMission from './AboutMission';
import AboutValues from './AboutValues';
import AboutTeam from './AboutTeam';

const AboutPageContainer = styled.main`
  background-color: var(--dark-background);
  color: var(--light-text);
`;

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
    </AboutPageContainer>
  );
};

export default AboutPage;
