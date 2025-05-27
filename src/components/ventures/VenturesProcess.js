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
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(30, 30, 30, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  
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

const SVGContainer = styled(motion.div)`
  position: absolute;
  width: 85%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const SVGOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.05), transparent 70%);
  z-index: 0;
`;

const StepSVG = styled(motion.svg)`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.2));
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
                <SVGOverlay 
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <SVGContainer
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {step.number === "01" && (
                    <StepSVG viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      {/* Identify Opportunities SVG - Compass/Exploration Theme */}
                      <motion.circle 
                        cx="100" 
                        cy="100" 
                        r="70" 
                        fill="none" 
                        stroke="rgba(212, 175, 55, 0.2)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <motion.circle 
                        cx="100" 
                        cy="100" 
                        r="50" 
                        fill="none" 
                        stroke="rgba(212, 175, 55, 0.3)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M100,30 L100,170 M30,100 L170,100" 
                        stroke="rgba(212, 175, 55, 0.5)" 
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M100,100 L130,70" 
                        stroke="rgba(212, 175, 55, 0.9)" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                      />
                      <motion.circle 
                        cx="100" 
                        cy="100" 
                        r="8" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="130" 
                        cy="70" 
                        r="5" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
                      />
                    </StepSVG>
                  )}
                  
                  {step.number === "02" && (
                    <StepSVG viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      {/* Strategic Planning SVG - Blueprint/Planning Theme */}
                      <motion.rect 
                        x="40" 
                        y="40" 
                        width="120" 
                        height="120" 
                        fill="none" 
                        stroke="rgba(212, 175, 55, 0.3)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <motion.line 
                        x1="40" 
                        y1="70" 
                        x2="160" 
                        y2="70" 
                        stroke="rgba(212, 175, 55, 0.2)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                      />
                      <motion.line 
                        x1="40" 
                        y1="100" 
                        x2="160" 
                        y2="100" 
                        stroke="rgba(212, 175, 55, 0.2)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                      />
                      <motion.line 
                        x1="40" 
                        y1="130" 
                        x2="160" 
                        y2="130" 
                        stroke="rgba(212, 175, 55, 0.2)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                      />
                      <motion.line 
                        x1="70" 
                        y1="40" 
                        x2="70" 
                        y2="160" 
                        stroke="rgba(212, 175, 55, 0.2)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                      />
                      <motion.line 
                        x1="100" 
                        y1="40" 
                        x2="100" 
                        y2="160" 
                        stroke="rgba(212, 175, 55, 0.2)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
                      />
                      <motion.line 
                        x1="130" 
                        y1="40" 
                        x2="130" 
                        y2="160" 
                        stroke="rgba(212, 175, 55, 0.2)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M60,90 L80,110 L110,60 L140,90" 
                        fill="none" 
                        stroke="rgba(212, 175, 55, 0.9)" 
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                      />
                      <motion.circle 
                        cx="60" 
                        cy="90" 
                        r="4" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="80" 
                        cy="110" 
                        r="4" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.3, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="110" 
                        cy="60" 
                        r="4" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.4, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="140" 
                        cy="90" 
                        r="4" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.5, ease: "easeOut" }}
                      />
                    </StepSVG>
                  )}
                  
                  {step.number === "03" && (
                    <StepSVG viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      {/* Resource Allocation SVG - Puzzle/Assembly Theme */}
                      <motion.path 
                        d="M60,60 L90,60 L90,90 L120,90 L120,120 L90,120 L90,150 L60,150 L60,120 L30,120 L30,90 L60,90 Z" 
                        fill="none" 
                        stroke="rgba(212, 175, 55, 0.4)" 
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M120,60 L150,60 L150,90 L170,90 L170,120 L150,120 L150,150 L120,150 L120,120 L90,120 L90,90 L120,90 Z" 
                        fill="none" 
                        stroke="rgba(212, 175, 55, 0.4)" 
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                      />
                      <motion.rect 
                        x="60" 
                        y="90" 
                        width="30" 
                        height="30" 
                        fill="rgba(212, 175, 55, 0.15)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                      />
                      <motion.rect 
                        x="90" 
                        y="90" 
                        width="30" 
                        height="30" 
                        fill="rgba(212, 175, 55, 0.3)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                      />
                      <motion.rect 
                        x="120" 
                        y="90" 
                        width="30" 
                        height="30" 
                        fill="rgba(212, 175, 55, 0.45)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="75" 
                        cy="75" 
                        r="5" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.6, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="135" 
                        cy="75" 
                        r="5" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.7, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="105" 
                        cy="135" 
                        r="5" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.8, ease: "easeOut" }}
                      />
                    </StepSVG>
                  )}
                  
                  {step.number === "04" && (
                    <StepSVG viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      {/* Execution & Scaling SVG - Growth/Expansion Theme */}
                      <motion.path 
                        d="M40,160 L160,160" 
                        stroke="rgba(212, 175, 55, 0.3)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M40,40 L40,160" 
                        stroke="rgba(212, 175, 55, 0.3)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M40,130 L60,130 M40,100 L60,100 M40,70 L60,70" 
                        stroke="rgba(212, 175, 55, 0.2)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M70,160 L70,140 M100,160 L100,140 M130,160 L130,140" 
                        stroke="rgba(212, 175, 55, 0.2)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M40,160 L60,130 L80,140 L100,90 L120,100 L140,60 L160,40" 
                        fill="none" 
                        stroke="rgba(212, 175, 55, 0.9)" 
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                      />
                      <motion.circle 
                        cx="60" 
                        cy="130" 
                        r="4" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="80" 
                        cy="140" 
                        r="4" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.3, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="100" 
                        cy="90" 
                        r="4" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.4, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="120" 
                        cy="100" 
                        r="4" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.5, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="140" 
                        cy="60" 
                        r="4" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.6, ease: "easeOut" }}
                      />
                      <motion.circle 
                        cx="160" 
                        cy="40" 
                        r="6" 
                        fill="rgba(212, 175, 55, 0.9)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.7, ease: "easeOut" }}
                      />
                    </StepSVG>
                  )}
                </SVGContainer>
              </StepImageContainer>
            </ProcessStep>
          ))}
        </ProcessSteps>
      </ContentContainer>
    </SectionContainer>
  );
};

export default VenturesProcess;
