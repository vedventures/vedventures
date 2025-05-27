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
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 3px rgba(255, 107, 0, 0.1)' : 'none'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 107, 0, 0.1)' : 'none'};
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
    box-shadow: 0 0 10px rgba(255, 107, 0, 0.5);
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
  width: 40px;
  height: 40px;
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
  background-color: rgba(10, 10, 10, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(212, 175, 55, 0.03) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const MobileNavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--light-text);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0.8rem 0;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem 1.5rem;
  
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
    
    &:before, &:after {
      width: 100%;
    }
  }
`;

const menuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

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
          <LogoImage src="/logov.png" alt="Vedanta Ventures" scrolled={scrolled} />
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
              <MobileNavLinks>
                <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
                <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
                <MobileNavLink to="/ventures" onClick={() => setMobileMenuOpen(false)}>Ventures</MobileNavLink>
                <MobileNavLink to="/insights" onClick={() => setMobileMenuOpen(false)}>Insights</MobileNavLink>
                <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
              </MobileNavLinks>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
