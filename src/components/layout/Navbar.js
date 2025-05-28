import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
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
  z-index: 1001;
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
  z-index: 1001;
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
  width: 100%;
  height: 100vh;
  background-color: rgba(10, 10, 10, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(15px);
  overflow: hidden;
  
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
  gap: 2.5rem;
  text-align: center;
  position: relative;
  padding: 3rem;
  width: 100%;
  max-width: 400px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
`;

const MobileNavLink = styled(motion(Link))`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--light-text);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0.8rem 0;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.8rem 2rem;
  display: inline-block;
  background: linear-gradient(90deg, transparent, rgba(10, 10, 10, 0.3), transparent);
  border-radius: 2px;
  overflow: hidden;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 0.4s ease;
  }
  
  &:before {
    left: 0;
    top: 0;
  }
  
  &:after {
    right: 0;
    bottom: 0;
  }
  
  &:hover {
    color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    
    &:before, &:after {
      width: 100%;
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

const LogoContainer = styled(motion.div)`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.1;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 50%;
  color: var(--accent);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent);
    color: var(--dark-background);
    transform: translateY(-3px);
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
          <NavLink to="/insights" scrolled={scrolled}>Insights</NavLink>
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
            <MobileMenu
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <DecorativeCircle 
                style={{ width: '300px', height: '300px', top: '20%', left: '10%' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <DecorativeCircle 
                style={{ width: '200px', height: '200px', bottom: '15%', right: '10%' }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              
              <LogoContainer
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <img src={process.env.PUBLIC_URL + '/logov.png'} alt="Vedanta Ventures" width="120" />
              </LogoContainer>
              
              <MobileNavLinks>
                <MobileNavLink 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  variants={linkVariants}
                  whileHover={{ x: 5 }}
                >
                  Home
                </MobileNavLink>
                <MobileNavLink 
                  to="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  variants={linkVariants}
                  whileHover={{ x: 5 }}
                >
                  About
                </MobileNavLink>
                <MobileNavLink 
                  to="/ventures" 
                  onClick={() => setMobileMenuOpen(false)}
                  variants={linkVariants}
                  whileHover={{ x: 5 }}
                >
                  Ventures
                </MobileNavLink>
                <MobileNavLink 
                  to="/insights" 
                  onClick={() => setMobileMenuOpen(false)}
                  variants={linkVariants}
                  whileHover={{ x: 5 }}
                >
                  Insights
                </MobileNavLink>
                <MobileNavLink 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  variants={linkVariants}
                  whileHover={{ x: 5 }}
                >
                  Contact
                </MobileNavLink>
                
                <SocialLinks
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
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
                </SocialLinks>
              </MobileNavLinks>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
