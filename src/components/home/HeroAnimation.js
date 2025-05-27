import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const AnimationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeroAnimation = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrame;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          opacity: Math.random() * 0.5 + 0.1,
          color: i % 5 === 0 ? '#FF6B00' : '#ffffff' // Every 5th particle is gold
        });
      }
      
      particlesRef.current = particles;
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color === '#FF6B00' 
          ? `rgba(255, 107, 0, ${particle.opacity})` 
          : `rgba(255, 255, 255, ${particle.opacity * 0.3})`;
        ctx.fill();
      });
      
      // Draw connecting lines between close particles
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particle.color === '#FF6B00' || particles[j].color === '#FF6B00'
              ? `rgba(255, 107, 0, ${0.1 * (1 - distance / 100)})`
              : `rgba(255, 255, 255, ${0.03 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
    };
    
    // Update particle positions
    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };
    
    // Animation loop
    const animate = () => {
      drawParticles();
      updateParticles();
      animationFrame = requestAnimationFrame(animate);
      animationFrameRef.current = animationFrame;
    };
    
    // Create subtle pulsating effect for logo reveal
    const createLogoRevealEffect = () => {
      // Find the center of the screen
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Create a radial gradient that expands outward
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, canvas.width * 0.5
      );
      
      gradient.addColorStop(0, 'rgba(255, 107, 0, 0.2)');
      gradient.addColorStop(0.5, 'rgba(255, 107, 0, 0.05)');
      gradient.addColorStop(1, 'rgba(255, 107, 0, 0)');
      
      // Create pulsating animation
      gsap.to({}, {
        duration: 2,
        repeat: -1,
        yoyo: true,
        onUpdate: function() {
          const progress = this.progress();
          const radius = canvas.width * 0.3 * (0.8 + 0.2 * progress);
          
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });
    };
    
    // Initialize
    resizeCanvas();
    initParticles();
    createLogoRevealEffect();
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <AnimationContainer>
      <Canvas ref={canvasRef} />
    </AnimationContainer>
  );
};

export default HeroAnimation;
