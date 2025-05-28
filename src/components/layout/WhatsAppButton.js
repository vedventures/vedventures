import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

const WhatsAppLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25D366;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover:before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const WhatsAppIcon = styled.i`
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  top: -40px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
  pointer-events: none;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    right: 25px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.8);
  }
`;

const WhatsAppButton = () => {
  // Format the phone number for WhatsApp link
  const phoneNumber = '9979972714';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  
  return (
    <ButtonContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <WhatsAppLink 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="fab fa-whatsapp" />
      </WhatsAppLink>
      <Tooltip
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        Chat with us
      </Tooltip>
    </ButtonContainer>
  );
};

export default WhatsAppButton;
