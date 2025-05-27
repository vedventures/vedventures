import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 8rem 0;
  background-color: var(--dark-background);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 85% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
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
  margin: 0 auto;
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

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, var(--accent), transparent);
    
    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

const ProcessStep = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  
  &:nth-child(even) {
    direction: rtl;
    
    .step-content {
      direction: ltr;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-left: 4rem;
    
    &:nth-child(even) {
      direction: ltr;
    }
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background-color: var(--dark-background);
  border: 2px solid var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 2rem;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const StepContent = styled.div`
  width: 100%;
`;

const StepTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
`;

const StepImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%;
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
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const StepImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%) contrast(1.1);
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

const VenturesProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Identify Opportunities",
      description: "We begin by identifying market opportunities and gaps where we can create value through innovative products and services. Our team conducts thorough market research and analysis to ensure we're targeting viable and sustainable business areas.",
      image: "/images/ventures/process-1.jpg"
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Once an opportunity is identified, we develop a comprehensive strategic plan that outlines our vision, goals, and execution strategy. This includes market positioning, competitive analysis, and financial projections to ensure viability.",
      image: "/images/ventures/process-2.jpg"
    },
    {
      number: "03",
      title: "Resource Allocation",
      description: "We assemble the right team and allocate appropriate resources to bring the venture to life. This includes talent acquisition, technology infrastructure, and capital investment to support the venture's growth trajectory.",
      image: "/images/ventures/process-3.jpg"
    },
    {
      number: "04",
      title: "Execution & Scaling",
      description: "With a solid foundation in place, we execute our plan with precision and agility, continuously iterating based on market feedback. As the venture gains traction, we implement scaling strategies to maximize its potential and market reach.",
      image: "/images/ventures/process-4.jpg"
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
            Our Approach
          </SectionSubtitle>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How We Build Successful Ventures
          </SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our systematic approach to building and growing ventures ensures that each 
            business we develop is positioned for long-term success and sustainable growth.
          </SectionText>
        </SectionHeader>
        
        <ProcessSteps
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {processSteps.map((step, index) => (
            <ProcessStep key={index} variants={fadeIn}>
              <StepNumber>{step.number}</StepNumber>
              <StepContent className="step-content">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
              <StepImageContainer>
                <StepImage src={step.image} alt={step.title} />
              </StepImageContainer>
            </ProcessStep>
          ))}
        </ProcessSteps>
      </ContentContainer>
    </SectionContainer>
  );
};

export default VenturesProcess;
