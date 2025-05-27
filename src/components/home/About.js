import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { aboutImage } from '../../assets/images/placeholders';

const AboutSection = styled.section`
  padding: 10rem 0;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-gold-radial);
    pointer-events: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutContent = styled.div`
  width: 100%;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const SectionSubtitle = styled(motion.span)`
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 3.5rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 2.5rem;
    height: 1px;
    background-color: var(--accent);
    transform: translateY(-50%);
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.3);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  position: relative;
  display: inline-block;
  
  span {
    color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.02em;
`;

const AboutStats = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  position: relative;
  padding: 3rem 0;
  
  &:before, &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
  }
  
  &:before {
    top: 0;
  }
  
  &:after {
    bottom: 0;
    transform: rotate(180deg);
  }
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 2rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.8rem;
    width: 3px;
    height: 2.5rem;
    background: linear-gradient(to bottom, var(--accent), transparent);
  }
  
  &:hover {
    transform: translateX(5px);
    transition: transform 0.3s ease;
  }
`;

const StatNumber = styled.span`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.8rem;
  font-family: var(--heading-font);
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
  letter-spacing: -0.02em;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0.2rem;
    left: 0;
    width: 2rem;
    height: 1px;
    background-color: var(--accent);
    opacity: 0.5;
  }
`;

const StatLabel = styled.span`
  font-size: 0.9rem;
  color: var(--light-text);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: 0.8rem;
  display: inline-block;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  ${StatItem}:hover &:after {
    width: 100%;
  }
`;

const StatDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--muted-text);
  font-weight: 300;
  max-width: 95%;
  position: relative;
  padding-top: 0.5rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 1px;
    background-color: rgba(246, 135, 18, 0.3);
  }
`;

const AboutImageWrapper = styled(motion.div)`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 0;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  filter: grayscale(20%) contrast(1.1);
  transition: all 0.5s ease;
  border: 1px solid rgba(212, 175, 55, 0.2);
  
  &:hover {
    filter: grayscale(0%) contrast(1.05);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 175, 55, 0.1);
  }
`;

const AboutAccent = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 0;
  z-index: -1;
  
  &.top-left {
    top: -30px;
    left: -30px;
    border-top: 1px solid var(--accent);
    border-left: 1px solid var(--accent);
  }
  
  &.bottom-right {
    bottom: -30px;
    right: -30px;
    border-bottom: 1px solid var(--accent);
    border-right: 1px solid var(--accent);
  }
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <AboutSection id="about">
      <AboutContainer ref={ref}>
        <ContentRow>
          <AboutContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <SectionSubtitle variants={itemVariants}>The Essence</SectionSubtitle>
            <SectionTitle variants={itemVariants}>
              Crafting <span>Extraordinary</span> Experiences
            </SectionTitle>
            <AboutText variants={itemVariants}>
              VEDANTA VENTURES embodies the perfect fusion of visionary leadership and meticulous execution. 
              We cultivate excellence across diverse industries, creating bespoke solutions that transcend 
              conventional boundaries. Our philosophy is rooted in the pursuit of perfection, where every 
              detail reflects our unwavering commitment to sophistication.
            </AboutText>
          </AboutContent>
          
          <AboutImageWrapper
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <AboutImage src={aboutImage} alt="Vedanta Ventures Office" />
            <AboutAccent className="top-left" />
            <AboutAccent className="bottom-right" />
          </AboutImageWrapper>
        </ContentRow>
        
        <AboutContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AboutText variants={itemVariants}>
            With a portfolio spanning premium digital solutions, architectural materials, curated e-commerce, 
            and immersive retail experiences, we transform ordinary interactions into extraordinary moments. 
            Each venture is a carefully orchestrated symphony of innovation, elegance, and purpose.
          </AboutText>
          
          <StatsRow>
            <AboutStats variants={containerVariants}>
              <StatItem variants={itemVariants}>
                <StatNumber>4</StatNumber>
                <StatLabel>Business Verticals</StatLabel>
                <StatDescription>Strategically built across Digital, Commerce, Materials & Retail</StatDescription>
              </StatItem>
              <StatItem variants={itemVariants}>
                <StatNumber>100+</StatNumber>
                <StatLabel>Deliverables Deployed</StatLabel>
                <StatDescription>Across digital campaigns, product launches, and supply operations</StatDescription>
              </StatItem>
            </AboutStats>
            
            <AboutStats variants={containerVariants}>
              <StatItem variants={itemVariants}>
                <StatNumber>50+</StatNumber>
                <StatLabel>Collaborators & Experts</StatLabel>
                <StatDescription>Across design, tech, trade, logistics & growth strategy</StatDescription>
              </StatItem>
              <StatItem variants={itemVariants}>
                <StatNumber>1</StatNumber>
                <StatLabel>Unified Vision</StatLabel>
                <StatDescription>To quietly build bold ventures — designed for the long term</StatDescription>
              </StatItem>
            </AboutStats>
          </StatsRow>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
