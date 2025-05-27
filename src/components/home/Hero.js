import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroAnimation from './HeroAnimation';
import { gsap } from 'gsap';
import { heroBackground } from '../../assets/images/placeholders';

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--dark-background);
  color: var(--light-text);
  padding-top: 4.5rem; /* Added padding to create space between navbar and hero content */
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 7rem; /* Increased padding-top for more space on mobile */
    height: auto;
    min-height: 100vh;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackground});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.9),
    rgba(5, 5, 5, 0.95)
  );
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  }
`;

const HeroContent = styled.div`
  width: 50%;
  padding: 0 5rem 0 5rem;
  position: relative;
  z-index: 3;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1.5rem;
    text-align: center;
    align-items: center;
    margin-top: 3.5rem; /* Increased top margin for more space on mobile */
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  
  span {
    display: inline-block;
    background: linear-gradient(135deg, var(--light-text) 0%, var(--accent) 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    z-index: 2;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0.2em;
      left: 0;
      width: 100%;
      height: 0.1em;
      background: linear-gradient(90deg, var(--accent), transparent);
      z-index: -1;
      transform: translateY(0.1em);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 70%;
    background: linear-gradient(to bottom, var(--accent), transparent);
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    
    &:before {
      left: -0.8rem;
      height: 50%;
      width: 4px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    
    &:before {
      left: -0.6rem;
      height: 40%;
      width: 3px;
    }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 0 2.5rem 0;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.03em;
  position: relative;
  padding: 0;
  border-left: 1px solid rgba(212, 175, 55, 0.3);
  padding-left: 1.2rem;
  
  &:before {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0 1rem;
    margin: 0 auto 2rem;
    border-left: none;
    text-align: center;
    max-width: 90%;
    
    &:before {
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0 auto 1.8rem;
    
    &:before {
      width: 30px;
      bottom: -1rem;
    }
  }
`;

const HeroButton = styled(motion.button)`
  display: inline-block;
  background-color: transparent;
  color: var(--accent);
  padding: 1rem 3rem;
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
  align-self: flex-start;
  
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
  
  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: linear-gradient(60deg, var(--accent), transparent, var(--accent));
    background-size: 300% 300%;
    animation: borderGlow 4s ease infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -2;
  }
  
  @keyframes borderGlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  &:hover {
    color: var(--dark-background);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.25);
    
    &:before {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    align-self: center;
    padding: 0.9rem 2.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 2.2rem;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }
  
  &:hover {
    &:after {
      opacity: 0.5;
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--light-text);
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.8;
  z-index: 10;
  transition: all 0.3s ease;
  
  svg {
    margin-top: 8px;
    font-size: 1.5rem;
    color: var(--accent);
  }
  
  @media (max-width: 768px) {
    left: 25px;
    bottom: 40px;
    transform: translateX(0);
    flex-direction: row;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    left: 15px;
    bottom: 30px;
    font-size: 0.7rem;
    opacity: 0.7;
  }
`;

// eslint-disable-next-line no-unused-vars
// ScrollIcon is used instead of ScrollCircle

const ScrollText = styled.span`
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
  color: var(--muted-text);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 300;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
    writing-mode: horizontal-tb;
    transform: none;
    letter-spacing: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    letter-spacing: 1.5px;
  }
`;

const ScrollIcon = styled.div`
  width: 26px;
  height: 46px;
  border: 1px solid var(--accent);
  border-radius: 13px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    background-color: var(--accent);
    border-radius: 50%;
    animation: scrollAnimation 2s infinite;
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border-right: 1px solid var(--accent);
    border-bottom: 1px solid var(--accent);
    transform: translateX(-50%) rotate(45deg);
    opacity: 0;
    animation: arrowAnimation 2s infinite;
  }
  
  @keyframes scrollAnimation {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(20px);
      opacity: 0;
    }
  }
  
  @keyframes arrowAnimation {
    0% {
      opacity: 0;
      transform: translateX(-50%) rotate(45deg) translateY(-5px);
    }
    50% {
      opacity: 1;
      transform: translateX(-50%) rotate(45deg) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) rotate(45deg) translateY(5px);
    }
  }
`;

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  
  useEffect(() => {
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const buttonElement = buttonRef.current;
    const scrollIndicatorElement = scrollIndicatorRef.current;
    const heroBackground = document.querySelector('.hero-background');
    
    // Create a premium staggered reveal animation
    const tl = gsap.timeline();
    
    // Initial reveal animations with luxury timing
    tl.fromTo(titleElement, 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, 0.3
    )
    .fromTo(titleElement.querySelectorAll('span'), 
      { opacity: 0.3 },
      { opacity: 1, duration: 1.5, stagger: 0.05, ease: "power2.out" }, "-=0.8"
    )
    .fromTo(subtitleElement, 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.9"
    )
    .fromTo(buttonElement, 
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, "-=0.7"
    )
    .fromTo(scrollIndicatorElement, 
      { opacity: 0, y: 0 },
      { opacity: 1, duration: 0.8, ease: "power1.inOut" }, "-=0.4"
    );
    
    // Add subtle parallax effect on scroll
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (heroBackground) {
        gsap.to(heroBackground, {
          y: scrollPosition * 0.4,
          duration: 0.5,
          ease: "power1.out"
        });
      }
    });
    
    // Scroll indicator animation
    gsap.to(scrollIndicatorElement, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1.5
    });
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);
  
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <HeroSection>
      <HeroBackground className="hero-background" style={{ backgroundImage: `url(${heroBackground})` }} />
      <HeroOverlay />
      
      <HeroContent>
        <HeroTitle ref={titleRef}>
          <span>ELEVATE</span> WITH VEDANTA
        </HeroTitle>
        <HeroSubtitle ref={subtitleRef}>
          Architects of distinction, crafting bespoke experiences that transcend the ordinary. Where visionary design meets meticulous execution, we transform aspirations into tangible excellence.
        </HeroSubtitle>
        <HeroButton 
          ref={buttonRef}
          whileHover={{ y: -5, boxShadow: "0 5px 25px rgba(212, 175, 55, 0.25)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNextSection}
        >
          Explore Our Universe
        </HeroButton>
      </HeroContent>
      
      <HeroAnimation />
      
      <ScrollIndicator ref={scrollIndicatorRef} onClick={scrollToNextSection}>
        <ScrollText>Discover</ScrollText>
        <ScrollIcon />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
