import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Styled components for the animation
const AnimationContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    margin-bottom: 2rem;
  }
`;

const AnimationWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  max-width: 90%;
  max-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const VenturesContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoldenFrame = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border: 2px solid rgba(212, 175, 55, 0.3);
  background: rgba(10, 10, 10, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 175, 55, 0.1);
  
  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 1px solid rgba(212, 175, 55, 0.2);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const DiamondFrame = styled(GoldenFrame)`
  transform: rotate(45deg);
`;

const GoldenLine = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.7), rgba(212, 175, 55, 0));
  top: 50%;
  left: 0;
`;

const VerticalLine = styled(GoldenLine)`
  width: 1px;
  height: 100%;
  left: 50%;
  top: 0;
  background: linear-gradient(180deg, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.7), rgba(212, 175, 55, 0));
`;

const DiagonalLine1 = styled(GoldenLine)`
  width: 141%;
  transform: rotate(45deg);
  transform-origin: center;
`;

const DiagonalLine2 = styled(GoldenLine)`
  width: 141%;
  transform: rotate(-45deg);
  transform-origin: center;
`;

const BusinessVertical = styled(motion.div)`
  position: absolute;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(15, 15, 15, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(212, 175, 55, 0.1) inset;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 2;
  padding: 1.5rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 1px solid rgba(212, 175, 55, 0.1);
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 175, 55, 0.2) inset;
    border-color: rgba(212, 175, 55, 0.5);
  }
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    padding: 1rem;
  }
`;

const VerticalIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`;

const VerticalName = styled(motion.div)`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--light-text);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    letter-spacing: 1px;
  }
`;

const VerticalDescription = styled(motion.p)`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;
  text-align: center;
  max-width: 100%;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CenterLogo = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: rgba(15, 15, 15, 0.9);
  border: 2px solid rgba(212, 175, 55, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
  z-index: 10;
  
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 1px solid rgba(212, 175, 55, 0.3);
  }
  
  img {
    width: 80px;
    height: auto;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    
    img {
      width: 50px;
    }
  }
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.3);
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  z-index: 1;
  pointer-events: none;
`;

const HeroAnimation = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  
  // Define the four business verticals
  const verticals = [
    {
      name: "Web Development",
      icon: "💻",
      description: "Premium digital experiences",
      position: "top"
    },
    {
      name: "Construction Materials",
      icon: "🏗️",
      description: "Quality building solutions",
      position: "right"
    },
    {
      name: "Digital Products",
      icon: "📱",
      description: "Innovative tech solutions",
      position: "bottom"
    },
    {
      name: "Retail",
      icon: "🛍️",
      description: "Exclusive retail offerings",
      position: "left"
    }
  ];
  
  // Create floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 400,
    y: (Math.random() - 0.5) * 400,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 3 + 2
  }));
  
  useEffect(() => {
    // Initialize animation timeline
    const tl = gsap.timeline();
    
    // Animate golden frames
    tl.fromTo('.golden-frame', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
    );
    
    // Animate golden lines
    tl.fromTo('.golden-line',
      { opacity: 0, scale: 0 },
      { opacity: 0.7, scale: 1, duration: 1, stagger: 0.15, ease: 'power2.out' },
      '-=0.5'
    );
    
    // Animate center logo
    tl.fromTo('.center-logo',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.2'
    );
    
    // Pulse animation for the glow effect
    gsap.to('.glow-effect', {
      scale: 1.2,
      opacity: 0.7,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    // Animate floating particles
    particles.forEach((particle) => {
      gsap.to(`#particle-${particle.id}`, {
        x: `+=${Math.random() * 50 - 25}`,
        y: `+=${Math.random() * 50 - 25}`,
        duration: particle.duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
    
    // Subtle hover effect for business verticals
    const verticalElements = document.querySelectorAll('.business-vertical');
    verticalElements.forEach((element) => {
      gsap.to(element, {
        y: '-=5',
        duration: Math.random() * 2 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
    
    // Store the timeline for cleanup
    animationRef.current = tl;
    
    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      gsap.killTweensOf('.golden-frame');
      gsap.killTweensOf('.golden-line');
      gsap.killTweensOf('.center-logo');
      gsap.killTweensOf('.business-vertical');
      gsap.killTweensOf('.glow-effect');
      particles.forEach((particle) => {
        gsap.killTweensOf(`#particle-${particle.id}`);
      });
    };
  }, [particles]);
  
  // Helper function to get position based on vertical position property
  const getPosition = (position) => {
    switch(position) {
      case 'top':
        return { top: '0', left: '50%', transform: 'translateX(-50%)' };
      case 'right':
        return { top: '50%', right: '0', transform: 'translateY(-50%)' };
      case 'bottom':
        return { bottom: '0', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { top: '50%', left: '0', transform: 'translateY(-50%)' };
      default:
        return {};
    }
  };
  
  return (
    <AnimationContainer ref={containerRef}>
      <AnimationWrapper>
        <VenturesContainer>
          {/* Golden frames */}
          <GoldenFrame className="golden-frame" />
          <DiamondFrame className="golden-frame diamond-frame" />
          
          {/* Decorative lines */}
          <GoldenLine className="golden-line" />
          <VerticalLine className="golden-line" />
          <DiagonalLine1 className="golden-line" />
          <DiagonalLine2 className="golden-line" />
          
          {/* Center logo */}
          <CenterLogo className="center-logo">
            <img src={process.env.PUBLIC_URL + '/logov.png'} alt="Vedanta Ventures" />
          </CenterLogo>
          
          {/* Glow effects */}
          <GlowEffect className="glow-effect" />
          
          {/* Floating particles */}
          {particles.map((particle) => (
            <FloatingParticle 
              key={particle.id}
              id={`particle-${particle.id}`}
              style={{
                left: `calc(50% + ${particle.x}px)`,
                top: `calc(50% + ${particle.y}px)`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.size / 6
              }}
            />
          ))}
          
          {/* Business verticals */}
          {verticals.map((vertical, index) => (
            <BusinessVertical
              key={vertical.name}
              className="business-vertical"
              style={getPosition(vertical.position)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <VerticalIcon>{vertical.icon}</VerticalIcon>
              <VerticalName>{vertical.name}</VerticalName>
              <VerticalDescription>{vertical.description}</VerticalDescription>
            </BusinessVertical>
          ))}
        </VenturesContainer>
      </AnimationWrapper>
    </AnimationContainer>
  );
};

export default HeroAnimation;
