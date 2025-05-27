import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const ContactSection = styled.section`
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
    background: radial-gradient(circle at 75% 75%, rgba(255, 107, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div``;

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

const ContactText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.02em;
  max-width: 90%;
`;

const ContactDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3.5rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -2rem;
    left: 0;
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.2rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--accent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  ${ContactItem}:hover & {
    color: var(--dark-background);
    
    &:before {
      opacity: 1;
    }
  }
`;

const ContactItemContent = styled.div``;

const ContactItemTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: var(--light-text);
  letter-spacing: 0.03em;
  transition: all 0.3s ease;
  
  ${ContactItem}:hover & {
    color: var(--accent);
  }
`;

const ContactItemText = styled.p`
  font-size: 1rem;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: 1.6;
`;

const ContactForm = styled(motion.form)`
  background-color: var(--card-background);
  padding: 3.5rem;
  border: 1px solid var(--border-color);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(212, 175, 55, 0.03), transparent);
    pointer-events: none;
  }
  
  @media (max-width: 576px) {
    padding: 2.5rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
  padding-bottom: 1.2rem;
  color: var(--light-text);
  letter-spacing: 0.03em;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 1px;
    background-color: var(--accent);
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.2);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  background-color: rgba(25, 25, 25, 0.6);
  border: 1px solid var(--border-color);
  color: var(--light-text);
  font-size: 1rem;
  font-family: var(--body-font);
  transition: all 0.3s ease;
  font-weight: 300;
  letter-spacing: 0.02em;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
  }
  
  &::placeholder {
    color: var(--muted-text);
    opacity: 0.7;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  background-color: rgba(25, 25, 25, 0.6);
  border: 1px solid var(--border-color);
  color: var(--light-text);
  font-size: 1rem;
  font-family: var(--body-font);
  resize: vertical;
  min-height: 180px;
  transition: all 0.3s ease;
  font-weight: 300;
  letter-spacing: 0.02em;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
  }
  
  &::placeholder {
    color: var(--muted-text);
    opacity: 0.7;
  }
`;

const FormButton = styled(motion.button)`
  display: inline-block;
  background-color: transparent;
  color: var(--accent);
  padding: 1.2rem 3rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  border: 1px solid var(--accent);
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: 1rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent);
    transition: all 0.6s ease;
    z-index: -1;
  }
  
  &:hover {
    color: var(--light-text);
    border-color: var(--accent);
    box-shadow: 0 5px 25px rgba(212, 175, 55, 0.2);
    transform: translateY(-3px);
    
    &:before {
      left: 100%;
    }
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formStatus, setFormStatus] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
    setFormStatus('success');
    
    // Reset form
    e.target.reset();
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };
  
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
    <ContactSection id="contact" ref={ref}>
      <ContactContainer>
        <ContactInfo
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionSubtitle variants={itemVariants}>Correspondence</SectionSubtitle>
          <SectionTitle variants={itemVariants}>
            Initiate a <span>Dialogue</span>
          </SectionTitle>
          <ContactText variants={itemVariants}>
            VEDANTA VENTURES welcomes discerning inquiries and meaningful collaborations. 
            Our team of specialists is prepared to engage with your vision and explore 
            the possibilities that align with our commitment to excellence.
          </ContactText>
          
          <ContactDetails variants={containerVariants}>
            <ContactItem variants={itemVariants}>
              <IconWrapper>
                <i className="fas fa-map-marker-alt"></i>
              </IconWrapper>
              <ContactItemContent>
                <ContactItemTitle>Our Location</ContactItemTitle>
                <ContactItemText>
                  #17, 2nd Floor, 7th Main Road, 2nd Stage,<br />
                  Indiranagar, Bengaluru - 560038
                </ContactItemText>
              </ContactItemContent>
            </ContactItem>
            
            <ContactItem variants={itemVariants}>
              <IconWrapper>
                <i className="fas fa-envelope"></i>
              </IconWrapper>
              <ContactItemContent>
                <ContactItemTitle>Email Us</ContactItemTitle>
                <ContactItemText>
                  vedantaventures1@gmail.com
                </ContactItemText>
              </ContactItemContent>
            </ContactItem>
            
            <ContactItem variants={itemVariants}>
              <IconWrapper>
                <i className="fas fa-phone-alt"></i>
              </IconWrapper>
              <ContactItemContent>
                <ContactItemTitle>Call Us</ContactItemTitle>
                <ContactItemText>
                  +91 9979972714
                </ContactItemText>
              </ContactItemContent>
            </ContactItem>
          </ContactDetails>
        </ContactInfo>
        
        <ContactForm
          as={motion.form}
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <FormTitle>Compose Your Message</FormTitle>
          
          <FormRow>
            <FormGroup>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput type="text" id="name" name="name" required />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <FormInput type="email" id="email" name="email" required />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput type="text" id="subject" name="subject" required />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Your Message</FormLabel>
            <FormTextarea id="message" name="message" required></FormTextarea>
          </FormGroup>
          
          <FormButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
          </FormButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
