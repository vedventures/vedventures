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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 3;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: linear-gradient(to right, var(--light-text) 0%, var(--accent) 50%, var(--accent-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: textShine 8s ease infinite;
  
  @keyframes textShine {
    0% { background-position: 0% center; }
    50% { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: var(--muted-text);
  letter-spacing: 0.03em;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  background-color: transparent;
  color: var(--accent);
  padding: 1.2rem 3rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid var(--accent);
  cursor: pointer;
  transition: all 0.4s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
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
  
  svg {
    margin-top: 8px;
    font-size: 1.5rem;
    color: var(--accent);
  }
`;

const ScrollCircle = styled.div`
  position: relative;
  width: 30px;
  height: 50px;
  margin-top: 15px;
  border: 1px solid rgba(255, 107, 0, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--accent);
    position: absolute;
    top: 10px;
  }
`;

const ScrollText = styled.span`
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
  color: var(--muted-text);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 300;
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
      <HeroAnimation />
      <HeroContent>
        <HeroTitle ref={titleRef}>
          <span>ELEVATE</span> WITH VEDANTA
        </HeroTitle>
        <HeroSubtitle ref={subtitleRef}>
          Architects of distinction, crafting bespoke experiences that transcend the ordinary. Where visionary design meets meticulous execution, we transform aspirations into tangible excellence.
        </HeroSubtitle>
        <HeroButton 
          ref={buttonRef}
          whileHover={{ y: -5, boxShadow: "0 5px 25px rgba(255, 107, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNextSection}
        >
          Explore Our Universe
        </HeroButton>
      </HeroContent>
      
      <ScrollIndicator ref={scrollIndicatorRef} onClick={scrollToNextSection}>
        <span>Discover</span>
        <ScrollCircle />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
