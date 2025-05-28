import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 990;
  padding: 1.5rem 0;
  transition: all 0.4s ease;
  background-color: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 3px var(--border-color)' : 'none'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid var(--border-color)' : 'none'};
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  z-index: 990;
  position: relative;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    background-color: var(--accent);
    border-radius: 50%;
    box-shadow: var(--shadow-accent);
  }
`;

const LogoImage = styled.img`
  height: 45px;
  width: auto;
  transition: all 0.3s ease;
  filter: ${props => props.scrolled ? 'brightness(1)' : 'brightness(1.2)'};
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${props => props.scrolled ? 'var(--light-text)' : 'var(--light-text)'};
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--accent);
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? 'var(--light-text)' : 'var(--light-text)'};
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1200;
  width: 45px;
  height: 45px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border: 1px solid var(--accent);
    opacity: 0;
    transition: all 0.3s ease;
    border-radius: 50%;
  }
  
  &:hover:before {
    opacity: 0.5;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%; /* Cover 3/4 of the screen width */
  height: 100vh;
  background-color: rgba(15, 15, 15, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1100;
  backdrop-filter: blur(15px);
  overflow: hidden;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(212, 175, 55, 0.1);
  padding-top: 5rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 60%);
    pointer-events: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 70%, rgba(212, 175, 55, 0.05) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  position: relative;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 2rem;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), transparent);
  }
`;

const MobileNavLink = styled(motion(Link))`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--light-text);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background-color: var(--accent);
    transition: height 0.3s ease;
  }
  
  &:hover {
    color: var(--accent);
    background: rgba(212, 175, 55, 0.05);
    
    &:before {
      height: 70%;
    }
  }
`;

const menuVariants = {
  closed: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Overlay for the rest of the screen
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1050;
  backdrop-filter: blur(5px);
`;

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const linkVariants = {
  closed: {
    y: 20,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  }
};

const DecorativeCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.1);
  pointer-events: none;
`;

const MenuSection = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const MenuSectionTitle = styled.h4`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(212, 175, 55, 0.7);
  margin-bottom: 1rem;
  margin-left: 1.5rem;
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  font-size: 0.8rem;
  color: var(--muted-text);
  line-height: 1.5;
  
  strong {
    color: var(--accent);
    font-weight: 500;
  }
`;

const Divider = styled(motion.div)`
  width: 90%;
  height: 1px;
  background: linear-gradient(90deg, rgba(212, 175, 55, 0.2), transparent);
  margin: 1rem 0 1.5rem 1.5rem;
`;

const LogoContainer = styled(motion.div)`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  opacity: 0.8;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
  margin-left: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 50%;
  color: var(--accent);
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background-color: var(--accent);
    color: var(--dark-background);
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarInner>
        <Logo to="/" scrolled={scrolled}>
          <LogoImage src={process.env.PUBLIC_URL + '/logov.png'} alt="Vedanta Ventures" scrolled={scrolled} />
        </Logo>
        
        <NavLinks>
          <NavLink to="/" scrolled={scrolled}>Home</NavLink>
          <NavLink to="/about" scrolled={scrolled}>About</NavLink>
          <NavLink to="/ventures" scrolled={scrolled}>Ventures</NavLink>
          <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
        </NavLinks>
        
        <MobileMenuButton 
          scrolled={scrolled} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <Overlay 
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileMenu
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <DecorativeCircle 
                  style={{ width: '200px', height: '200px', top: '10%', right: '10%' }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <DecorativeCircle 
                  style={{ width: '150px', height: '150px', bottom: '15%', left: '10%' }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                
                <LogoContainer
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.8, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <img src={process.env.PUBLIC_URL + '/logov.png'} alt="Vedanta Ventures" width="100" />
                </LogoContainer>
                
                <MobileNavLinks>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <MenuSectionTitle>Navigation</MenuSectionTitle>
                    <Divider 
                      initial={{ width: 0 }}
                      animate={{ width: '90%' }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    
                    <MenuSection>
                      <MobileNavLink 
                        to="/" 
                        onClick={() => setMobileMenuOpen(false)}
                        variants={linkVariants}
                        whileHover={{ x: 5 }}
                      >
                        <i className="fas fa-home" style={{ marginRight: '12px', fontSize: '0.9rem' }}></i> Home
                      </MobileNavLink>
                      <MobileNavLink 
                        to="/about" 
                        onClick={() => setMobileMenuOpen(false)}
                        variants={linkVariants}
                        whileHover={{ x: 5 }}
                      >
                        <i className="fas fa-info-circle" style={{ marginRight: '12px', fontSize: '0.9rem' }}></i> About
                      </MobileNavLink>
                      <MobileNavLink 
                        to="/ventures" 
                        onClick={() => setMobileMenuOpen(false)}
                        variants={linkVariants}
                        whileHover={{ x: 5 }}
                      >
                        <i className="fas fa-briefcase" style={{ marginRight: '12px', fontSize: '0.9rem' }}></i> Ventures
                      </MobileNavLink>

                      <MobileNavLink 
                        to="/contact" 
                        onClick={() => setMobileMenuOpen(false)}
                        variants={linkVariants}
                        whileHover={{ x: 5 }}
                      >
                        <i className="fas fa-envelope" style={{ marginRight: '12px', fontSize: '0.9rem' }}></i> Contact
                      </MobileNavLink>
                    </MenuSection>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <MenuSectionTitle>Legal</MenuSectionTitle>
                    <Divider 
                      initial={{ width: 0 }}
                      animate={{ width: '90%' }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                    
                    <MenuSection>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0.5rem' }}>
                        <MobileNavLink 
                          to="/privacy" 
                          onClick={() => setMobileMenuOpen(false)}
                          variants={linkVariants}
                          whileHover={{ x: 5 }}
                          style={{ 
                            fontSize: '0.9rem', 
                            padding: '0.6rem 0.8rem',
                            letterSpacing: '1px',
                            flex: '1 1 auto',
                            marginRight: '0.5rem'
                          }}
                        >
                          <i className="fas fa-shield-alt" style={{ marginRight: '8px', fontSize: '0.8rem' }}></i> Privacy
                        </MobileNavLink>
                        <MobileNavLink 
                          to="/terms" 
                          onClick={() => setMobileMenuOpen(false)}
                          variants={linkVariants}
                          whileHover={{ x: 5 }}
                          style={{ 
                            fontSize: '0.9rem', 
                            padding: '0.6rem 0.8rem',
                            letterSpacing: '1px',
                            flex: '1 1 auto',
                            marginLeft: '0.5rem'
                          }}
                        >
                          <i className="fas fa-file-contract" style={{ marginRight: '8px', fontSize: '0.8rem' }}></i> Terms
                        </MobileNavLink>
                      </div>
                    </MenuSection>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                    <MenuSectionTitle>Connect</MenuSectionTitle>
                    <Divider 
                      initial={{ width: 0 }}
                      animate={{ width: '90%' }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    />
                    
                    <SocialLinks
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
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
                    
                    <ContactInfo>
                      <strong>Vedanta Ventures</strong><br />
                      #17, 2nd Floor, 7th Main Road<br />
                      2nd Stage, Indiranagar<br />
                      Bengaluru - 560038<br />
                      <strong>Email:</strong> vedantaventures1@gmail.com<br />
                      <strong>Phone:</strong> +91 9979972714
                    </ContactInfo>
                  </div>
                </MobileNavLinks>
              </MobileMenu>
            </>
          )}
        </AnimatePresence>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
