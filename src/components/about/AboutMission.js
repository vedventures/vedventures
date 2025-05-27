import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const SectionContainer = styled.section`
  padding: 8rem 0;
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
    background: radial-gradient(circle at 15% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
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

const ContentColumn = styled.div`
  width: 100%;
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
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionText = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
  margin-bottom: 2rem;
  max-width: 90%;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  padding: 1.5rem;
  background: rgba(20, 20, 20, 0.3);
  border: 1px solid rgba(212, 175, 55, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 0;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--accent);
    opacity: 0.7;
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--accent);
`;

const StatTitle = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--light-text);
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 120%;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(212, 175, 55, 0.2);
    pointer-events: none;
    z-index: 2;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 50px;
    height: 50px;
    border-right: 2px solid var(--accent);
    border-bottom: 2px solid var(--accent);
    z-index: 2;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    rgba(212, 175, 55, 0.03),
    rgba(212, 175, 55, 0.03) 10px,
    transparent 10px,
    transparent 20px
  );
  z-index: 1;
`;

// eslint-disable-next-line no-unused-vars
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  filter: grayscale(20%) contrast(1.1);
`;

// Animation variants are defined inline in the component

const AboutMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && ref.current) {
      gsap.to('.stat-item', {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });
    }
  }, [isInView]);
  
  return (
    <SectionContainer>
      <ContentContainer>
        <ContentRow>
          <ContentColumn>
            <SectionSubtitle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Mission
            </SectionSubtitle>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Creating Value Through Excellence
            </SectionTitle>
            <SectionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Vedanta Ventures, our mission is to create exceptional value through innovation, 
              quality, and sustainable practices. We believe in building businesses that not only 
              deliver superior products and services but also contribute positively to society 
              and the environment.
            </SectionText>
            <SectionText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our diverse portfolio spans across multiple industries, allowing us to leverage 
              cross-sector insights and create unique synergies. We are committed to excellence 
              in everything we do, from web development to construction materials, digital products, 
              and retail ventures.
            </SectionText>
            
            <StatsContainer ref={ref}>
              <StatItem className="stat-item" style={{ opacity: 0, transform: 'translateY(30px)' }}>
                <StatNumber>2015</StatNumber>
                <StatTitle>Year Established</StatTitle>
              </StatItem>
              <StatItem className="stat-item" style={{ opacity: 0, transform: 'translateY(30px)' }}>
                <StatNumber>4</StatNumber>
                <StatTitle>Business Verticals</StatTitle>
              </StatItem>
              <StatItem className="stat-item" style={{ opacity: 0, transform: 'translateY(30px)' }}>
                <StatNumber>50+</StatNumber>
                <StatTitle>Team Members</StatTitle>
              </StatItem>
              <StatItem className="stat-item" style={{ opacity: 0, transform: 'translateY(30px)' }}>
                <StatNumber>100+</StatNumber>
                <StatTitle>Projects Completed</StatTitle>
              </StatItem>
            </StatsContainer>
          </ContentColumn>
          
          <ContentColumn>
            <ImageContainer
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <BackgroundPattern />
              <Image src="/images/about/mission.jpg" alt="Vedanta Ventures Mission" />
            </ImageContainer>
          </ContentColumn>
        </ContentRow>
      </ContentContainer>
    </SectionContainer>
  );
};

export default AboutMission;
