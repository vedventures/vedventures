import React, { useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

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

const BusinessVertical = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(212, 175, 55, 0.1) inset;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.15), transparent 70%);
    opacity: 0.7;
  }
  
  &:hover {
    transform: scale(1.05) !important;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 175, 55, 0.2) inset;
    z-index: 10;
    border-color: rgba(212, 175, 55, 0.5);
  }
  
  &.pulse-animation {
    width: 160px;
    height: 160px;
  }
  
  &.orbit-animation {
    width: 140px;
    height: 140px;
  }
  
  &.float-animation {
    width: 150px;
    height: 150px;
  }
  
  &.bounce-animation {
    width: 130px;
    height: 130px;
  }
  
  @media (max-width: 768px) {
    &.pulse-animation {
      width: 110px;
      height: 110px;
    }
    
    &.orbit-animation {
      width: 90px;
      height: 90px;
    }
    
    &.float-animation {
      width: 100px;
      height: 100px;
    }
    
    &.bounce-animation {
      width: 80px;
      height: 80px;
    }
  }
`;

const VerticalIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent);
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const VerticalName = styled(motion.div)`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--light-text);
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  ${BusinessVertical}:hover & {
    opacity: 1;
    bottom: -25px;
  }
`;

const CenterCircle = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
  z-index: 5;
  
  &:before {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 1px dashed rgba(212, 175, 55, 0.5);
    animation: rotate 20s linear infinite;
  }
  
  &:after {
    content: 'V';
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    
    &:after {
      font-size: 1.5rem;
    }
  }
`;

const ConnectionLine = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  height: 2px;
  background: linear-gradient(90deg, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0.2));
  z-index: 1;
  box-shadow: 0 0 8px rgba(212, 175, 55, 0.3);
`;

const OrbitPath = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 1px dashed rgba(212, 175, 55, 0.15);
  opacity: 0.5;
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const HeroAnimation = () => {
  const containerRef = useRef(null);
  
  // Wrap verticals array in useMemo to prevent it from changing on every render
  const verticals = useMemo(() => [
  
    { 
      name: 'Web Development', 
      icon: '🌐', 
      angle: 0,  // Top
      radius: 200,
      color: 'rgba(212, 175, 55, 0.15)',
      animation: 'pulse'
    },
    { 
      name: 'Construction', 
      icon: '🏗️', 
      angle: 90,  // Right
      radius: 200,
      color: 'rgba(212, 175, 55, 0.18)',
      animation: 'orbit'
    },
    { 
      name: 'Digital Products', 
      icon: '💻', 
      angle: 180,  // Bottom
      radius: 200,
      color: 'rgba(212, 175, 55, 0.12)',
      animation: 'float'
    },
    { 
      name: 'Retail', 
      icon: '🛍️', 
      angle: 270,  // Left
      radius: 200,
      color: 'rgba(212, 175, 55, 0.2)',
      animation: 'bounce'
    }
  ], []);
  
  useEffect(() => {
    // Create orbital rotation for all business verticals
    const verticalElements = document.querySelectorAll('.business-vertical');
    const connectionLines = document.querySelectorAll('.connection-line');
    
    // Create a timeline for the orbital rotation
    // eslint-disable-next-line no-unused-vars
    const orbitalTl = gsap.timeline({
      repeat: -1,
      duration: 60,
      ease: 'linear'
    });
    
    // Rotate each vertical and its connection line around the center
    verticalElements.forEach((element, index) => {
      // eslint-disable-next-line no-unused-vars
      const startAngle = verticals[index].angle;
      
      // Animate full 360 degree rotation
      gsap.to(element, {
        rotation: '+=360',
        transformOrigin: 'center center',
        duration: 60,
        repeat: -1,
        ease: 'linear'
      });
      
      // Rotate the connection line
      gsap.to(connectionLines[index], {
        rotation: '+=360',
        transformOrigin: 'left center',
        duration: 60,
        repeat: -1,
        ease: 'linear'
      });
    });
    
    // Apply different animations to each business vertical
    const elements = document.querySelectorAll('.business-vertical');
    
    elements.forEach((element, index) => {
      const vertical = verticals[index];
      
      // Counter-rotation to keep icons upright
      gsap.to(element, {
        rotation: -360,
        duration: 60,
        ease: 'linear',
        repeat: -1,
        transformOrigin: 'center center'
      });
      
      // Different animation for each vertical
      switch(vertical.animation) {
        case 'pulse':
          // Subtle pulsing animation
          gsap.to(element, {
            boxShadow: `0 15px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${vertical.color} inset`,
            scale: 1.03,
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: 0.2
          });
          break;
          
        case 'orbit':
          // Small orbital movement
          gsap.to(element, {
            scale: 0.95,
            duration: 3,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: 0.5
          });
          break;
          
        case 'float':
          // Subtle scale change
          gsap.to(element, {
            scale: 1.05,
            duration: 2.5,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: 0.8
          });
          break;
          
        case 'bounce':
          // Subtle scale effect
          gsap.to(element, {
            scale: 0.9,
            duration: 1.8,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            delay: 1
          });
          break;
          
        default:
          // Default subtle movement
          gsap.to(element, {
            scale: 1.02,
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
          });
      }
      
      // Add a rotating inner element to each vertical
      const innerElement = element.querySelector('.inner-circle');
      if (innerElement) {
        gsap.to(innerElement, {
          rotation: index % 2 === 0 ? 360 : -360,
          duration: 20 + index * 5,
          ease: 'linear',
          repeat: -1
        });
      }
    });
    
    // Rotate center circle pulse
    const centerCircle = document.querySelector('.center-circle');
    gsap.to(centerCircle, {
      boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)',
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
    
    // Subtle animation for connection lines
    const lines = document.querySelectorAll('.connection-line');
    lines.forEach((line, index) => {
      gsap.to(line, {
        opacity: 0.4,
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // eslint-disable-next-line no-unused-vars
  const calculatePosition = (angle, radius) => {
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    return { x, y };
  };
  
  return (
    <AnimationContainer ref={containerRef}>
      <AnimationWrapper>
        <OrbitPath />
        
        <CenterCircle 
          className="center-circle"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {verticals.map((vertical, index) => {
          return (
            <React.Fragment key={vertical.name}>
              {/* Connection line from center to vertical */}
              <ConnectionLine 
                className="connection-line"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: `${vertical.radius}px`,
                  transform: `rotate(${vertical.angle}deg)`,
                  transformOrigin: 'left center'
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 0.7, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
              />
              
              {/* Business vertical circle */}
              <BusinessVertical 
                className={`business-vertical ${vertical.animation}-animation`}
                style={{ 
                  position: 'absolute',
                  top: vertical.angle === 0 ? '0' : 
                       vertical.angle === 180 ? 'calc(100% - 160px)' : 
                       'calc(50% - 80px)',
                  left: vertical.angle === 90 ? 'calc(100% - 160px)' : 
                        vertical.angle === 270 ? '0' : 
                        'calc(50% - 80px)',
                  background: `rgba(${20 + index * 3}, ${20 + index * 2}, ${20}, 0.7)`,
                  borderColor: `rgba(212, 175, 55, ${0.3 + index * 0.1})`,
                  zIndex: 5 + index
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100, 
                  damping: 15,
                  delay: 1 + index * 0.2 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="inner-circle" style={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  border: `1px dashed rgba(212, 175, 55, 0.3)`,
                  opacity: 0.5
                }}></div>
                <VerticalIcon>{vertical.icon}</VerticalIcon>
                <VerticalName
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 2 + index * 0.2 }}
                >
                  {vertical.name}
                </VerticalName>
              </BusinessVertical>
            </React.Fragment>
          );
        })}
      </AnimationWrapper>
    </AnimationContainer>
  );
};

export default HeroAnimation;
