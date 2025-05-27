import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { 
  digitalSolutionsImage, 
  constructionMaterialsImage, 
  ecommerceImage, 
  retailImage 
} from '../../assets/images/placeholders';

const VenturesSection = styled.section`
  padding: 12rem 0;
  background-color: var(--light-background);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 85% 30%, rgba(212, 175, 55, 0.04) 0%, transparent 60%);
    pointer-events: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 5%;
    right: -5%;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.02) 0%, transparent 70%);
    filter: blur(50px);
    z-index: 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 8rem;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 80px;
    background: linear-gradient(to bottom, var(--accent), transparent);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
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
  padding: 0.5rem 3rem;
  
  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
  }
  
  &:before {
    left: 0;
    width: 40px;
    background: linear-gradient(to right, transparent, var(--accent));
  }
  
  &:after {
    right: 0;
    width: 40px;
    background: linear-gradient(to left, transparent, var(--accent));
  }
  
  &:hover {
    &:before, &:after {
      width: 50px;
      transition: width 0.3s ease;
    }
  }
  
  /* Gold dot accent */
  &:before, &:after {
    content: '';
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  margin-bottom: 2rem;
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
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.9;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.02em;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 2rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
`;

const VenturesGrid = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem 4rem;
  position: relative;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.15), transparent);
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, transparent, rgba(212, 175, 55, 0.15), transparent);
    z-index: -1;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    
    &:after {
      display: none;
    }
  }
`;

const VentureCard = styled(motion.div)`
  background-color: var(--card-background);
  border: 1px solid var(--border-color);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(212, 175, 55, 0.03), transparent);
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
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
    transform: translateY(-15px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2), 0 15px 25px rgba(212, 175, 55, 0.1);
    border-color: rgba(212, 175, 55, 0.3);
    
    &:before {
      opacity: 1;
    }
    
    &:after {
      transform: scaleX(0.8);
    }
  }
`;

const VentureImageContainer = styled.div`
  height: 320px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent 30%);
    z-index: 2;
    pointer-events: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 30px;
    height: 30px;
    border-top: 1px solid rgba(212, 175, 55, 0.6);
    border-left: 1px solid rgba(212, 175, 55, 0.6);
    z-index: 3;
    opacity: 0;
    transition: all 0.4s ease;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  }
  
  ${VentureCard}:hover &:after {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const VentureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: grayscale(20%) contrast(1.05);
  
  ${VentureCard}:hover & {
    transform: scale(1.08) translateY(-5px);
    filter: grayscale(0%) contrast(1.1);
  }
`;

const VentureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.2),
    rgba(5, 5, 5, 0.6)
  );
  z-index: 2;
  transition: all 0.5s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border-bottom: 1px solid rgba(212, 175, 55, 0.7);
    border-right: 1px solid rgba(212, 175, 55, 0.7);
    opacity: 0;
    transition: all 0.4s ease 0.2s;
    transform: translate(5px, 5px);
    box-shadow: -3px -3px 10px rgba(0, 0, 0, 0.1);
  }
  
  ${VentureCard}:hover & {
    background: linear-gradient(
      to bottom,
      rgba(10, 10, 10, 0.1),
      rgba(5, 5, 5, 0.5)
    );
  }
  
  ${VentureCard}:hover &:after {
    opacity: 1;
    transform: translate(0, 0);
  }
  
  /* Gold accent glow */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom right, rgba(212, 175, 55, 0.1), transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  ${VentureCard}:hover &:before {
    opacity: 1;
  }
`;

const VentureContent = styled.div`
  padding: 3rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  transition: all 0.3s ease;
  
  ${VentureCard}:hover & {
    padding-top: 2.5rem;
    padding-bottom: 3.5rem;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(212, 175, 55, 0.03), transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }
  
  ${VentureCard}:hover &:before {
    opacity: 1;
  }
  
  /* Gold accent line */
  &:after {
    content: '';
    position: absolute;
    top: 1.5rem;
    left: 3rem;
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.5s ease;
  }
  
  ${VentureCard}:hover &:after {
    opacity: 0.7;
    transform: scaleX(1);
  }
`;

const VentureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1.2rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
  transition: transform 0.3s ease;
  
  ${VentureCard}:hover & {
    transform: translateY(-5px);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), transparent);
    transition: width 0.4s ease;
    box-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
  }
  
  ${VentureCard}:hover &:after {
    width: 60px;
  }
  
  /* Gold dot accent */
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--accent);
    box-shadow: 0 0 8px rgba(212, 175, 55, 0.5);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  ${VentureCard}:hover &:before {
    opacity: 1;
  }
`;

const VentureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.9;
  color: var(--muted-text);
  margin-bottom: 2.5rem;
  flex-grow: 1;
  font-weight: 300;
  letter-spacing: 0.02em;
  position: relative;
  transition: transform 0.4s ease;
  
  ${VentureCard}:hover & {
    transform: translateY(-5px);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1.2rem;
    left: 0;
    width: 20px;
    height: 1px;
    background-color: rgba(212, 175, 55, 0.3);
    transition: width 0.4s ease;
  }
  
  ${VentureCard}:hover &:after {
    width: 40px;
  }
  
  /* Add subtle gold left border */
  padding-left: 0.5rem;
  border-left: 1px solid rgba(212, 175, 55, 0.1);
  
  ${VentureCard}:hover & {
    border-left-color: rgba(212, 175, 55, 0.2);
  }
`;

const VentureLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  margin-top: auto;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.7rem 1.5rem;
  position: relative;
  width: fit-content;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
  overflow: hidden;
  background-color: rgba(212, 175, 55, 0.03);
  transform: translateY(10px);
  opacity: 0.8;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent 0%, transparent 50%, rgba(212, 175, 55, 0.1) 50%, transparent 100%);
    background-size: 250% 100%;
    transition: all 0.6s ease;
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--accent);
    transform: scaleX(0.3);
    transform-origin: left;
    transition: transform 0.4s ease;
    opacity: 0.5;
  }
  
  ${VentureCard}:hover & {
    transform: translateY(0);
    opacity: 1;
    border-color: rgba(212, 175, 55, 0.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &:hover {
    color: var(--light-text);
    background-color: rgba(212, 175, 55, 0.05);
    
    &:before {
      background-position: 100% 0;
    }
    
    &:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  
  span {
    margin-right: 1rem;
    position: relative;
    z-index: 1;
  }
  
  svg {
    transition: all 0.3s ease;
    width: 14px;
    height: 14px;
    position: relative;
    z-index: 1;
  }
  
  &:hover svg {
    transform: translateX(8px);
    color: var(--accent);
  }
  
  /* Gold dot accent */
  &:before {
    content: '';
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.1);
  }
`;

const Ventures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const venturesData = [
    {
      id: 1,
      title: "Digital Solutions",
      description: "Innovative web development and marketing strategies that elevate your digital presence. We combine cutting-edge technology with creative excellence to deliver transformative digital experiences.",
      image: digitalSolutionsImage,
      link: "/ventures/digital"
    },
    {
      id: 2,
      title: "Construction Materials",
      description: "Premium steel, timber, and construction materials that meet the highest standards of quality and sustainability. Our materials form the foundation of exceptional architectural achievements.",
      image: constructionMaterialsImage,
      link: "/ventures/materials"
    },
    {
      id: 3,
      title: "E-Commerce",
      description: "Curated digital products and services delivered through intuitive e-commerce platforms. We create seamless online shopping experiences that connect consumers with premium offerings.",
      image: ecommerceImage,
      link: "/ventures/ecommerce"
    },
    {
      id: 4,
      title: "Retail Experiences",
      description: "Immersive physical retail spaces that engage all senses. From artisanal coffee shops to sophisticated salons, we craft memorable environments that foster connection and discovery.",
      image: retailImage,
      link: "/ventures/retail"
    }
  ];
  
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
    <VenturesSection id="ventures" ref={ref}>
      <SectionHeader
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionSubtitle variants={itemVariants}>Portfolio</SectionSubtitle>
        <SectionTitle variants={itemVariants}>
          Curated <span>Excellence</span> Across Industries
        </SectionTitle>
        <SectionDescription variants={itemVariants}>
          VEDANTA VENTURES meticulously cultivates a portfolio of distinctive enterprises, 
          each embodying our unwavering commitment to sophistication and innovation. 
          Discover our carefully curated collection of ventures.
        </SectionDescription>
      </SectionHeader>
      
      <VenturesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {venturesData.map((venture) => (
          <VentureCard key={venture.id} variants={itemVariants}>
            <VentureImageContainer>
              <VentureImage src={venture.image} alt={venture.title} />
              <VentureOverlay />
            </VentureImageContainer>
            <VentureContent>
              <VentureTitle>{venture.title}</VentureTitle>
              <VentureDescription>{venture.description}</VentureDescription>
              <VentureLink href={venture.link}>
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                </svg>
              </VentureLink>
            </VentureContent>
          </VentureCard>
        ))}
      </VenturesGrid>
    </VenturesSection>
  );
};

export default Ventures;
