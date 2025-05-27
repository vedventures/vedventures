import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  gap: 5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
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
  
  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30px;
    height: 1px;
    background-color: var(--accent);
    transform: translateY(-50%);
  }
  
  &:before {
    left: -40px;
  }
  
  &:after {
    right: -40px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  
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
`;

const VenturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
`;

const VentureItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  
  &:nth-child(even) {
    direction: rtl;
    
    .venture-content {
      direction: ltr;
    }
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    
    &:nth-child(even) {
      direction: ltr;
    }
  }
`;

const VentureContent = styled.div`
  width: 100%;
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const VentureImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  overflow: hidden;
  background: linear-gradient(135deg, var(--dark-background), var(--light-background));
  
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.15), transparent 60%);
    z-index: 1;
  }
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const AnimatedPattern = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.9;
  overflow: hidden;
`;

const VentureIcon = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: var(--accent);
  z-index: 3;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(10, 10, 10, 0.8);
  box-shadow: 0 0 40px rgba(212, 175, 55, 0.4);
  border: 1px solid rgba(212, 175, 55, 0.5);
  backdrop-filter: blur(5px);
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), transparent);
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.1);
`;

const DiamondShape = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), transparent 70%);
  transform: rotate(45deg);
  z-index: 1;
`;

const GlowingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.3);
  z-index: 1;
`;

const FloatingLine = styled(motion.div)`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.7), transparent);
  z-index: 1;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
`;

const GridPattern = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 1;
  opacity: 0.5;
`;

const VentureTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const VentureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
  margin-bottom: 2rem;
`;

const VentureFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
`;

const VentureFeatureItem = styled.li`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--light-text);
  margin-bottom: 1rem;
  position: relative;
  padding-left: 2rem;
  
  &:before {
    content: '✦';
    position: absolute;
    left: 0;
    top: 0;
    color: var(--accent);
    font-size: 1rem;
  }
`;

const LearnMoreButton = styled(motion.a)`
  display: inline-block;
  background-color: transparent;
  color: var(--accent);
  padding: 1rem 2.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: 1px solid var(--accent);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.08);
  text-decoration: none;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--accent);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: -1;
  }
  
  &:hover {
    color: var(--dark-background);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.25);
    
    &:before {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 2rem;
    font-size: 0.75rem;
  }
`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const VenturesList = () => {
  const ventures = [
    {
      title: "Next-Gen Marketing & Cognitive Tech",
      description: "Our flagship vertical combines cutting-edge marketing strategies with AI-powered solutions to deliver transformative digital experiences that drive measurable business growth. We harness the power of data and creativity to help brands thrive in an increasingly complex digital landscape.",
      features: [
        "AI-driven Marketing Automation: Intelligent systems that personalize customer journeys and optimize campaigns",
        "Custom Web Development & UX Design: Immersive digital experiences crafted for engagement and conversion",
        "Cognitive Analytics & Insights: Advanced data processing that transforms information into actionable intelligence",
        "Conversational AI Solutions: Sophisticated chatbots and virtual assistants that elevate customer interactions"
      ],
      image: "/images/ventures/web-development.jpg",
      link: "#"
    },
    {
      title: "Foundations that Endure. Materials that Inspire.",
      description: "We supply structural and architectural essentials that form the backbone of India's finest spaces. Whether you're building upward or outward, our curated selection of construction materials supports every layer of your vision—with uncompromising strength, utility, and elegance.",
      features: [
        "Reinforcement Solutions: Robust steel options engineered for seismic stability and long-term performance",
        "Structural & Architectural Surfaces: Precision-sourced stone, marble, and finishes that elevate visual impact",
        "Core Construction Materials: Cement, timber, and foundational supplies tailored to modern standards",
        "Trade-Grade Quality & Timely Fulfilment: Trusted by contractors, builders, and designers"
      ],
      image: "/images/ventures/construction.jpg",
      link: "#"
    },
    {
      title: "Digital Products that Drive Possibility",
      description: "Our digital products division is dedicated to building intelligent, scalable, and impact-driven solutions that help businesses evolve. From startups to enterprises, we empower transformation through technology that adapts, automates, and advances.",
      features: [
        "Custom Mobile Applications: Seamlessly designed, user-centric apps that engage and deliver at scale",
        "SaaS Platforms: Agile, cloud-native software that streamlines operations and unlocks new value",
        "AI-Powered Innovations: Smart systems built to analyze, predict, and optimize real-world workflows",
        "Digital Transformation Accelerators: Tools and frameworks that bridge legacy systems with the future of work"
      ],
      image: "/images/ventures/digital-products.jpg",
      link: "#"
    },
    {
      title: "Retail Experiences that Elevate Everyday Life",
      description: "Our retail division is expanding with carefully curated consumer touchpoints that blend convenience with quality. We're crafting spaces and services that transform routine transactions into meaningful experiences, bringing premium offerings to communities across India.",
      features: [
        "Signature Hair Salon: A premium grooming destination offering personalized styling and rejuvenation services",
        "Modern Supermarket: Thoughtfully designed retail space with curated selection of daily essentials and specialty items",
        "Gourmet Eatery: Curated dining experience offering quality cuisine in a refined, welcoming atmosphere",
        "Amul Franchise: Authorized partnership bringing India's beloved dairy brand with guaranteed freshness and quality"
      ],
      image: "/images/ventures/retail.jpg",
      link: "#"
    }
  ];

  return (
    <SectionContainer>
      <ContentContainer>
        <SectionHeader>
          <SectionSubtitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Portfolio
          </SectionSubtitle>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Diverse Business Verticals
          </SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our ventures span across multiple industries, each representing our commitment 
            to excellence, innovation, and quality. Explore our diverse portfolio below.
          </SectionText>
        </SectionHeader>
        
        <VenturesGrid
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {ventures.map((venture, index) => (
            <VentureItem key={index} variants={fadeIn}>
              <VentureContent className="venture-content">
                <VentureTitle>{venture.title}</VentureTitle>
                <VentureDescription>{venture.description}</VentureDescription>
                <VentureFeatures>
                  {venture.features.map((feature, idx) => (
                    <VentureFeatureItem key={idx}>{feature}</VentureFeatureItem>
                  ))}
                </VentureFeatures>
                <LearnMoreButton href={venture.link}>Learn More</LearnMoreButton>
              </VentureContent>
              <VentureImageContainer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <AnimatedPattern>
                  {/* Create different patterns for each venture */}
                  {index === 0 && (
                    <>
                      <GridPattern 
                        animate={{
                          opacity: [0.3, 0.5, 0.3],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <DiamondShape
                        style={{ top: '10%', left: '20%' }}
                        animate={{
                          rotate: [45, 55, 45],
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <DiamondShape
                        style={{ bottom: '15%', right: '25%' }}
                        animate={{
                          rotate: [45, 35, 45],
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      />
                      <GlowingCircle
                        style={{ width: '200px', height: '200px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <FloatingLine
                        style={{ width: '80%', top: '30%', left: '10%' }}
                        animate={{ opacity: [0.3, 0.7, 0.3], width: ['70%', '80%', '70%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <FloatingLine
                        style={{ width: '60%', bottom: '35%', left: '20%' }}
                        animate={{ opacity: [0.2, 0.6, 0.2], width: ['50%', '60%', '50%'] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                      />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <FloatingShape
                        style={{ width: '250px', height: '250px', top: '20%', right: '10%' }}
                        animate={{
                          x: [0, 20, 0],
                          opacity: [0.3, 0.5, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <FloatingShape
                        style={{ width: '180px', height: '180px', bottom: '15%', left: '10%' }}
                        animate={{
                          x: [0, -15, 0],
                          y: [0, 15, 0],
                          opacity: [0.2, 0.4, 0.2],
                          scale: [1, 1.15, 1],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      />
                      <DiamondShape
                        style={{ top: '40%', left: '30%', width: '120px', height: '120px' }}
                        animate={{
                          rotate: [45, 60, 45],
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <FloatingLine
                        style={{ width: '90%', top: '60%', left: '5%' }}
                        animate={{ opacity: [0.3, 0.7, 0.3], y: [0, 10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <FloatingLine
                        style={{ width: '70%', top: '30%', left: '15%' }}
                        animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -10, 0] }}
                        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                      />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <GridPattern 
                        style={{ backgroundSize: '15px 15px', transform: 'rotate(45deg)' }}
                        animate={{
                          opacity: [0.2, 0.4, 0.2],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <GlowingCircle
                        style={{ width: '300px', height: '300px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.4, 0.2],
                          borderWidth: ['1px', '2px', '1px'],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <GlowingCircle
                        style={{ width: '200px', height: '200px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        animate={{
                          scale: [1.2, 1, 1.2],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      />
                      <FloatingShape
                        style={{ width: '180px', height: '180px', top: '20%', left: '15%' }}
                        animate={{
                          y: [0, 15, 0],
                          x: [0, 15, 0],
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <FloatingShape
                        style={{ width: '150px', height: '150px', bottom: '15%', right: '20%' }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.2, 0.5, 0.2],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                      />
                      <FloatingLine
                        style={{ width: '80%', top: '40%', left: '10%' }}
                        animate={{ opacity: [0.3, 0.7, 0.3], rotate: [0, 2, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <DiamondShape
                        style={{ width: '200px', height: '200px', top: '10%', right: '20%' }}
                        animate={{
                          rotate: [45, 35, 45],
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <DiamondShape
                        style={{ width: '150px', height: '150px', bottom: '15%', left: '20%' }}
                        animate={{
                          rotate: [45, 55, 45],
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                      />
                      <GlowingCircle
                        style={{ width: '250px', height: '250px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <FloatingShape
                        style={{ width: '220px', height: '220px', top: '30%', left: '30%' }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <FloatingLine
                        style={{ width: '90%', top: '25%', left: '5%' }}
                        animate={{ opacity: [0.3, 0.6, 0.3], y: [0, 10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <FloatingLine
                        style={{ width: '70%', bottom: '30%', left: '15%' }}
                        animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -5, 0] }}
                        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                      />
                    </>
                  )}
                </AnimatedPattern>
                <VentureIcon
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {index === 0 && '✨'}
                  {index === 1 && '🏗️'}
                  {index === 2 && '💻'}
                  {index === 3 && '🛍️'}
                </VentureIcon>
              </VentureImageContainer>
            </VentureItem>
          ))}
        </VenturesGrid>
      </ContentContainer>
    </SectionContainer>
  );
};

export default VenturesList;
