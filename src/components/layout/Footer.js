import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: var(--dark-background);
  color: var(--light-text);
  padding: 8rem 0 2rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.5;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 15% 15%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  text-decoration: none;
  margin-bottom: 2rem;
  display: inline-block;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 30px;
    height: 1px;
    background-color: var(--accent);
  }
`;

const FooterLogoImage = styled.img`
  height: 50px;
  width: auto;
  filter: brightness(1.1);
`;

const FooterDescription = styled.p`
  margin-bottom: 2rem;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.02em;
  max-width: 90%;
`;

const FooterHeading = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 30px;
    height: 1px;
    background-color: var(--accent);
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.2);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled(Link)`
  color: var(--muted-text);
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.02em;
  padding: 0.4rem 0;
  display: inline-block;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--light-text);
    transform: translateX(5px);
    
    &:before {
      width: 20px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: var(--accent);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--accent);
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: var(--dark-background);
    border-color: var(--accent);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
    
    &:before {
      transform: translateY(0);
    }
  }
`;

const BottomBar = styled.div`
  max-width: 1400px;
  margin: 6rem auto 0;
  padding: 2rem 2rem 0;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background-color: var(--accent);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.03em;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const BottomLink = styled(Link)`
  font-size: 0.85rem;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.03em;
  transition: all 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--light-text);
    
    &:after {
      width: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo to="/">
            <FooterLogoImage src={process.env.PUBLIC_URL + '/logov.png'} alt="Vedanta Ventures" />
          </FooterLogo>
          <FooterDescription>
            Cultivating extraordinary experiences through meticulous attention to detail and unwavering commitment to sophistication across diverse industries.
          </FooterDescription>
          <SocialLinks>
            <SocialLink 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
            <SocialLink 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-instagram"></i>
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/ventures">Our Ventures</FooterLink>
            <FooterLink to="/insights">Insights</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Ventures</FooterHeading>
          <FooterLinks>
            <FooterLink to="/ventures/digital">Digital Solutions</FooterLink>
            <FooterLink to="/ventures/materials">Construction Materials</FooterLink>
            <FooterLink to="/ventures/ecommerce">E-Commerce</FooterLink>
            <FooterLink to="/ventures/retail">Retail Experiences</FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Contact</FooterHeading>
          <FooterDescription>
            #17, 2nd Floor, 7th Main Road<br />
            2nd Stage, Indiranagar<br />
            Bengaluru - 560038
          </FooterDescription>
          <FooterDescription>
            <strong>Email:</strong> vedantaventures1@gmail.com<br />
            <strong>Phone:</strong> +91 9979972714
          </FooterDescription>
        </FooterColumn>
      </FooterContent>
      
      <BottomBar>
        <Copyright>
          © {new Date().getFullYear()} Vedanta Ventures. All Rights Reserved.
        </Copyright>
        <BottomLinks>
          <BottomLink to="/privacy">Privacy Policy</BottomLink>
          <BottomLink to="/terms">Terms of Service</BottomLink>
        </BottomLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
