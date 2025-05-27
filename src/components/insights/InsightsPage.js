import React from 'react';
import styled from 'styled-components';
import InsightsHero from './InsightsHero';
import InsightsFeatured from './InsightsFeatured';
import InsightsList from './InsightsList';
import InsightsNewsletter from './InsightsNewsletter';

const InsightsPageContainer = styled.main`
  background-color: var(--dark-background);
  color: var(--light-text);
`;

const InsightsPage = () => {
  return (
    <InsightsPageContainer>
      <InsightsHero />
      <InsightsFeatured />
      <InsightsList />
      <InsightsNewsletter />
    </InsightsPageContainer>
  );
};

export default InsightsPage;
