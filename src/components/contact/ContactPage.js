import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  padding: 10rem 0 6rem;
  background-color: var(--dark-background);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 15% 85%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 85% 15%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--muted-text);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
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
`;

const InfoItem = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.2rem;
  flex-shrink: 0;
  border: 1px solid rgba(212, 175, 55, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoLabel = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: var(--muted-text);
  line-height: 1.6;
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
  border: 1px solid rgba(212, 175, 55, 0.2);
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

const ContactForm = styled(motion.form)`
  background: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 5px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
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
`;

const FormGroup = styled(motion.div)`
  margin-bottom: 2rem;
  position: relative;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: var(--muted-text);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.1);
  color: var(--light-text);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.1);
  color: var(--light-text);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0.6));
  color: var(--dark-background);
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: inline-block;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(0, 150, 0, 0.1);
  border: 1px solid rgba(0, 150, 0, 0.3);
  color: #00c853;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
`;

const ErrorMessage = styled(motion.div)`
  background-color: rgba(150, 0, 0, 0.1);
  border: 1px solid rgba(150, 0, 0, 0.3);
  color: #f44336;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
`;

const MapContainer = styled(motion.div)`
  width: 100%;
  height: 400px;
  margin-top: 5rem;
  border: 1px solid rgba(212, 175, 55, 0.1);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), transparent);
    pointer-events: none;
    z-index: 1;
  }
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const DecorativeLine = styled(motion.div)`
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent);
  width: 80%;
  top: 50%;
  left: 10%;
  z-index: 0;
`;

const DecorativeCircle = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.05);
  z-index: 0;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
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
      staggerChildren: 0.2
    }
  }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormStatus({
        submitted: true,
        success: true,
        error: false,
        message: 'Thank you for your message. We will get back to you shortly.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          error: false,
          message: ''
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <PageContainer>
      <DecorativeLine 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />
      <DecorativeCircle 
        style={{ top: '20%', right: '-150px' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2 }}
      />
      <DecorativeCircle 
        style={{ bottom: '10%', left: '-150px' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      
      <ContentContainer>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get in Touch
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We're always interested in new projects, partnerships, and opportunities. 
            Reach out to discuss how we can collaborate to create extraordinary value together.
          </PageSubtitle>
        </PageHeader>
        
        <ContactGrid>
          <ContactInfo
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <InfoTitle>Contact Information</InfoTitle>
            
            <InfoItem variants={fadeIn}>
              <IconContainer>
                <i className="fas fa-map-marker-alt"></i>
              </IconContainer>
              <InfoContent>
                <InfoLabel>Our Location</InfoLabel>
                <InfoText>
                  #17, 2nd Floor, 7th Main Road<br />
                  2nd Stage, Indiranagar<br />
                  Bengaluru - 560038
                </InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem variants={fadeIn}>
              <IconContainer>
                <i className="fas fa-envelope"></i>
              </IconContainer>
              <InfoContent>
                <InfoLabel>Email Us</InfoLabel>
                <InfoText>vedantaventures1@gmail.com</InfoText>
                <InfoText>support@vedantaventures.com</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem variants={fadeIn}>
              <IconContainer>
                <i className="fas fa-phone-alt"></i>
              </IconContainer>
              <InfoContent>
                <InfoLabel>Call Us</InfoLabel>
                <InfoText>+91 9979972714</InfoText>
                <InfoText>+91 8023456789</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem variants={fadeIn}>
              <IconContainer>
                <i className="fas fa-clock"></i>
              </IconContainer>
              <InfoContent>
                <InfoLabel>Business Hours</InfoLabel>
                <InfoText>Monday - Friday: 9:00 AM - 6:00 PM</InfoText>
                <InfoText>Saturday: 10:00 AM - 2:00 PM</InfoText>
                <InfoText>Sunday: Closed</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem variants={fadeIn}>
              <InfoContent>
                <InfoLabel>Connect With Us</InfoLabel>
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
                  <SocialLink 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </SocialLink>
                </SocialLinks>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <FormTitle>Send Us a Message</FormTitle>
            
            <FormGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FormLabel>Your Name</FormLabel>
              <FormInput 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FormLabel>Your Email</FormLabel>
              <FormInput 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FormLabel>Subject</FormLabel>
              <FormInput 
                type="text" 
                name="subject" 
                placeholder="Enter subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                name="message" 
                placeholder="Enter your message" 
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {formStatus.success && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {formStatus.message}
              </SuccessMessage>
            )}
            
            {formStatus.error && (
              <ErrorMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {formStatus.message}
              </ErrorMessage>
            )}
          </ContactForm>
        </ContactGrid>
        
        <MapContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <MapIframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9932904316404!2d77.63756661482193!3d12.97456999085573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1685bd3d1655%3A0x1d6ef5445755e1df!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1653393463986!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Vedanta Ventures Location"
          />
        </MapContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default ContactPage;
