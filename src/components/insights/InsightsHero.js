import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 70vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--dark-background);
  color: var(--light-text);
  padding-top: 4.5rem;
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 60vh;
    padding-top: 5rem;
    padding-bottom: 3rem;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.9),
    rgba(5, 5, 5, 0.95)
  );
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  }
`;

const HeroContent = styled.div`
  width: 80%;
  max-width: 1200px;
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  
  span {
    display: inline-block;
    background: linear-gradient(135deg, var(--light-text) 0%, var(--accent) 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.03em;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const Divider = styled(motion.div)`
  width: 50px;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), transparent);
  margin: 2.5rem auto;
  opacity: 0.7;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const InsightsHero = () => {
  return (
    <HeroSection>
      <HeroOverlay />
      <HeroContent>
        <HeroTitle
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <span>Insights</span> & Perspectives
        </HeroTitle>
        <Divider 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 50, opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <HeroSubtitle
          initial="hidden"
          animate="visible"
          variants={{
            ...fadeIn,
            visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: 0.2 } }
          }}
        >
          Explore our latest thoughts on industry trends, emerging technologies, 
          and strategic approaches that are shaping the future of business across 
          our diverse portfolio of ventures.
        </HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default InsightsHero;
