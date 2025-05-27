import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    background: radial-gradient(circle at 30% 70%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(20, 20, 20, 0.7);
  border: 1px solid rgba(212, 175, 55, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--accent), transparent);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: 5rem;
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
  margin-bottom: 2.5rem;
`;

const ContactButton = styled(motion.button)`
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
`;

const ContactImageContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  background-image: url('/images/ventures/contact.jpg');
  background-size: cover;
  background-position: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), transparent);
  }
  
  @media (max-width: 992px) {
    min-height: 300px;
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

const VenturesContact = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <ContactCard
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <ContactInfo>
            <ContactTitle>Interested in Collaboration?</ContactTitle>
            <ContactText>
              Whether you're looking to partner with us, invest in our ventures, or explore 
              potential business opportunities, we'd love to hear from you. Our team is 
              always open to discussing new ideas and collaborations that align with our 
              vision and values.
            </ContactText>
            <Link to="/contact">
              <ContactButton
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Get in Touch
              </ContactButton>
            </Link>
          </ContactInfo>
          <ContactImageContainer />
        </ContactCard>
      </ContentContainer>
    </SectionContainer>
  );
};

export default VenturesContact;
