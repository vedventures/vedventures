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
  padding: 10rem 0;
  background-color: var(--light-background);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 85% 30%, rgba(255, 107, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 6rem;
  padding: 0 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, var(--accent), transparent);
  }
`;

const SectionSubtitle = styled(motion.span)`
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 1px;
    background-color: var(--accent);
  }
  
  &:before {
    left: -45px;
  }
  
  &:after {
    right: -45px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  
  span {
    color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--muted-text);
  font-weight: 300;
  letter-spacing: 0.02em;
  max-width: 700px;
  margin: 0 auto;
`;

const VenturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const VentureCard = styled(motion.div)`
  background-color: var(--card-background);
  border: 1px solid var(--border-color);
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
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
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(212, 175, 55, 0.1);
    border-color: rgba(212, 175, 55, 0.3);
  }
`;

const VentureImageContainer = styled.div`
  height: 280px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
`;

const VentureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
  filter: grayscale(30%) contrast(1.1);
  
  ${VentureCard}:hover & {
    transform: scale(1.05);
    filter: grayscale(0%) contrast(1.05);
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
    rgba(10, 10, 10, 0.3),
    rgba(5, 5, 5, 0.7)
  );
  z-index: 2;
  
  &:after {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border-top: 1px solid var(--accent);
    border-right: 1px solid var(--accent);
    opacity: 0;
    transition: all 0.4s ease 0.2s;
  }
  
  ${VentureCard}:hover &:after {
    opacity: 1;
  }
`;

const VentureContent = styled.div`
  padding: 2.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
`;

const VentureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1.2rem;
  letter-spacing: 0.03em;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 1px;
    background-color: var(--accent);
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.2);
  }
`;

const VentureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
  margin-bottom: 2rem;
  flex-grow: 1;
  font-weight: 300;
  letter-spacing: 0.02em;
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
  padding: 0.5rem 0;
  position: relative;
  width: fit-content;
  transition: all 0.3s ease;
  
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
  
  &:hover {
    color: var(--light-text);
    
    &:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  
  span {
    margin-right: 1rem;
  }
  
  svg {
    transition: all 0.3s ease;
    width: 14px;
    height: 14px;
  }
  
  &:hover svg {
    transform: translateX(5px);
    color: var(--accent);
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
