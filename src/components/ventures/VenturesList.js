import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 8rem 0;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 15% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
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
    width: 30px;
    height: 1px;
    background-color: var(--accent);
    transform: translateY(-50%);
  }
  
  &:before {
    left: -40px;
  }
  
  &:after {
    right: -40px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionText = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
`;

const VenturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
`;

const VentureItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  
  &:nth-child(even) {
    direction: rtl;
    
    .venture-content {
      direction: ltr;
    }
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    
    &:nth-child(even) {
      direction: ltr;
    }
  }
`;

const VentureContent = styled.div`
  width: 100%;
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const VentureImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(212, 175, 55, 0.2);
    pointer-events: none;
    z-index: 2;
  }
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const VentureImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%) contrast(1.1);
  transition: all 0.5s ease;
  
  &:hover {
    filter: grayscale(0%) contrast(1.05);
    transform: scale(1.02);
  }
`;

const VentureTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const VentureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
  margin-bottom: 2rem;
`;

const VentureFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
`;

const VentureFeatureItem = styled.li`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--light-text);
  margin-bottom: 1rem;
  position: relative;
  padding-left: 2rem;
  
  &:before {
    content: '✦';
    position: absolute;
    left: 0;
    top: 0;
    color: var(--accent);
    font-size: 1rem;
  }
`;

const LearnMoreButton = styled(motion.a)`
  display: inline-block;
  background-color: transparent;
  color: var(--accent);
  padding: 1rem 2.5rem;
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
  text-decoration: none;
  
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
  
  &:hover {
    color: var(--dark-background);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.25);
    
    &:before {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 2rem;
    font-size: 0.75rem;
  }
`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const VenturesList = () => {
  const ventures = [
    {
      title: "Web Development",
      description: "Our web development vertical specializes in creating premium, high-performance websites and web applications that deliver exceptional user experiences.",
      features: [
        "Custom website design and development",
        "E-commerce solutions",
        "Progressive web applications",
        "CMS implementation and optimization"
      ],
      image: "/images/ventures/web-development.jpg",
      link: "#"
    },
    {
      title: "Construction Materials",
      description: "We provide high-quality construction materials that meet the highest standards of durability, sustainability, and aesthetic appeal.",
      features: [
        "Premium building materials",
        "Sustainable construction solutions",
        "Architectural elements",
        "Custom fabrication services"
      ],
      image: "/images/ventures/construction.jpg",
      link: "#"
    },
    {
      title: "Digital Products",
      description: "Our digital products division focuses on creating innovative software solutions that address real-world challenges across various industries.",
      features: [
        "Mobile applications",
        "SaaS platforms",
        "AI-powered solutions",
        "Digital transformation tools"
      ],
      image: "/images/ventures/digital-products.jpg",
      link: "#"
    },
    {
      title: "Retail",
      description: "Our retail ventures offer premium products and exceptional customer experiences, with a focus on quality, design, and sustainability.",
      features: [
        "Luxury home goods",
        "Fashion accessories",
        "Specialty food products",
        "Experiential retail concepts"
      ],
      image: "/images/ventures/retail.jpg",
      link: "#"
    }
  ];

  return (
    <SectionContainer>
      <ContentContainer>
        <SectionHeader>
          <SectionSubtitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Portfolio
          </SectionSubtitle>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Diverse Business Verticals
          </SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our ventures span across multiple industries, each representing our commitment 
            to excellence, innovation, and quality. Explore our diverse portfolio below.
          </SectionText>
        </SectionHeader>
        
        <VenturesGrid
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {ventures.map((venture, index) => (
            <VentureItem key={index} variants={fadeIn}>
              <VentureContent className="venture-content">
                <VentureTitle>{venture.title}</VentureTitle>
                <VentureDescription>{venture.description}</VentureDescription>
                <VentureFeatures>
                  {venture.features.map((feature, idx) => (
                    <VentureFeatureItem key={idx}>{feature}</VentureFeatureItem>
                  ))}
                </VentureFeatures>
                <LearnMoreButton href={venture.link}>Learn More</LearnMoreButton>
              </VentureContent>
              <VentureImageContainer>
                <VentureImage src={venture.image} alt={venture.title} />
              </VentureImageContainer>
            </VentureItem>
          ))}
        </VenturesGrid>
      </ContentContainer>
    </SectionContainer>
  );
};

export default VenturesList;
