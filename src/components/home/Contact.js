import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const ContactSection = styled.section`
  padding: 12rem 0;
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
    background: radial-gradient(circle at 75% 75%, rgba(246, 135, 18, 0.03) 0%, transparent 60%);
    pointer-events: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
    pointer-events: none;
    opacity: 0.3;
  }
  
  @media (max-width: 992px) {
    padding: 8rem 0;
  }
`;

const ContactContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 80%;
    background: linear-gradient(to bottom, transparent, rgba(246, 135, 18, 0.1), transparent);
    z-index: 0;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 5rem;
    
    &:before {
      display: none;
    }
  }
`;

const ContactInfo = styled.div`
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -3rem;
    right: -3rem;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(246, 135, 18, 0.02) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.5;
  }
`;

const SectionSubtitle = styled(motion.span)`
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 4rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 3rem;
    height: 1px;
    background: linear-gradient(to right, var(--accent), transparent);
    transform: translateY(-50%);
    transition: width 0.3s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--accent);
    transform: translateY(-50%);
    box-shadow: 0 0 10px rgba(246, 135, 18, 0.5);
  }
  
  &:hover:before {
    width: 3.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  margin-bottom: 2.5rem;
  line-height: 1.1;
  position: relative;
  display: inline-block;
  letter-spacing: -0.02em;
  
  span {
    position: relative;
    display: inline-block;
    color: var(--light-text);
    z-index: 1;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 5px;
      width: 100%;
      height: 8px;
      background: linear-gradient(90deg, var(--accent), transparent);
      z-index: -1;
      opacity: 0.6;
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 3rem;
    height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const ContactText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.9;
  margin-bottom: 4rem;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.02em;
  max-width: 95%;
  position: relative;
  padding-left: 1rem;
  border-left: 1px solid rgba(246, 135, 18, 0.2);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, rgba(246, 135, 18, 0.2), transparent);
  }
`;

const ContactDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 3.5rem;
  position: relative;
  padding: 2rem 0;
  
  &:before, &:after {
    content: '';
    position: absolute;
    left: -1rem;
    width: 1px;
    height: 50%;
    background: linear-gradient(to bottom, var(--accent), transparent);
  }
  
  &:before {
    top: 0;
  }
  
  &:after {
    bottom: 0;
    background: linear-gradient(to top, var(--accent), transparent);
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 1.5rem;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(246, 135, 18, 0.03), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateX(10px);
    
    &:before {
      opacity: 1;
    }
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid rgba(246, 135, 18, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: rgba(246, 135, 18, 0.03);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 15px;
    height: 15px;
    border-top: 1px solid var(--accent);
    border-left: 1px solid var(--accent);
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  ${ContactItem}:hover & {
    color: var(--light-text);
    border-color: var(--accent);
    transform: scale(1.05);
    
    &:before {
      opacity: 0.2;
    }
    
    &:after {
      opacity: 1;
    }
  }
`;

const ContactItemContent = styled.div`
  position: relative;
  transition: transform 0.3s ease;
  
  ${ContactItem}:hover & {
    transform: translateY(-2px);
  }
`;

const ContactItemTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--light-text);
  letter-spacing: -0.01em;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  ${ContactItem}:hover & {
    color: var(--accent);
    
    &:after {
      width: 100%;
    }
  }
`;

const ContactItemText = styled.p`
  font-size: 1rem;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: 1.8;
  position: relative;
  padding-left: 0.5rem;
  border-left: 1px solid rgba(246, 135, 18, 0.1);
  transition: all 0.3s ease;
  
  ${ContactItem}:hover & {
    border-left-color: rgba(246, 135, 18, 0.3);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: var(--card-background);
  padding: 4rem;
  border: 1px solid var(--border-color);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(246, 135, 18, 0.03), transparent);
    pointer-events: none;
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(246, 135, 18, 0.01) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.8;
  }
  
  @media (max-width: 576px) {
    padding: 3rem 2rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1.2rem;
  color: var(--light-text);
  letter-spacing: -0.01em;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--accent);
    box-shadow: 0 0 10px rgba(246, 135, 18, 0.5);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(246, 135, 18, 0.2), transparent);
    transition: width 0.4s ease;
    opacity: 0;
  }
  
  &:focus-within:after {
    width: 100%;
    opacity: 1;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 1px;
    background-color: var(--accent);
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1.3rem 1.5rem;
  background-color: rgba(25, 25, 25, 0.5);
  border: 1px solid rgba(246, 135, 18, 0.1);
  color: var(--light-text);
  font-size: 1rem;
  font-family: var(--body-font);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-weight: 300;
  letter-spacing: 0.02em;
  border-radius: 2px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 20px rgba(246, 135, 18, 0.1), inset 0 1px 3px rgba(0, 0, 0, 0.1);
    background-color: rgba(25, 25, 25, 0.7);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: var(--muted-text);
    opacity: 0.5;
    font-style: italic;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1.3rem 1.5rem;
  background-color: rgba(25, 25, 25, 0.5);
  border: 1px solid rgba(246, 135, 18, 0.1);
  color: var(--light-text);
  font-size: 1rem;
  font-family: var(--body-font);
  resize: vertical;
  min-height: 200px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-weight: 300;
  letter-spacing: 0.02em;
  border-radius: 2px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 20px rgba(246, 135, 18, 0.1), inset 0 1px 3px rgba(0, 0, 0, 0.1);
    background-color: rgba(25, 25, 25, 0.7);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: var(--muted-text);
    opacity: 0.5;
    font-style: italic;
  }
`;

const FormButton = styled(motion.button)`
  display: inline-block;
  background-color: rgba(246, 135, 18, 0.05);
  color: var(--accent);
  padding: 1.3rem 3.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  border: 1px solid rgba(246, 135, 18, 0.3);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: 2rem;
  border-radius: 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(246, 135, 18, 0.2), transparent);
    transition: all 0.6s ease;
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.5s ease;
  }
  
  &:hover {
    color: var(--light-text);
    border-color: rgba(246, 135, 18, 0.5);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(246, 135, 18, 0.1);
    transform: translateY(-3px);
    background-color: rgba(246, 135, 18, 0.08);
    
    &:before {
      left: 100%;
    }
    
    &:after {
      transform: scaleX(0.8);
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
