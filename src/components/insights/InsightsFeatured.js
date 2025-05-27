import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  text-align: left;
  max-width: 800px;
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
  padding-left: 3.5rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 2.5rem;
    height: 1px;
    background-color: var(--accent);
    transform: translateY(-50%);
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.3);
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

const FeaturedArticle = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 5rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ArticleContent = styled.div`
  width: 100%;
`;

const ArticleCategory = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const ArticleTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
  margin-bottom: 2rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
`;

const ArticleAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.span`
  font-size: 0.9rem;
  color: var(--light-text);
`;

const ArticleDate = styled.span`
  font-size: 0.9rem;
  color: var(--muted-text);
`;

const ReadMoreButton = styled(motion.button)`
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

const ArticleImageContainer = styled(motion.div)`
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
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 50px;
    height: 50px;
    border-right: 2px solid var(--accent);
    border-bottom: 2px solid var(--accent);
    z-index: 2;
  }
`;

const ArticleImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  filter: grayscale(20%) contrast(1.1);
  
  &:hover {
    filter: grayscale(0%) contrast(1.05);
    transform: scale(1.02);
  }
`;

// Animation variants defined inline in the component

const InsightsFeatured = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <SectionHeader>
          <SectionSubtitle
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Article
          </SectionSubtitle>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Latest from Our Thought Leaders
          </SectionTitle>
        </SectionHeader>
        
        <FeaturedArticle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ArticleContent>
            <ArticleCategory>Cognitive Technology</ArticleCategory>
            <ArticleTitle>The Future of AI-Driven Marketing: Personalization at Scale</ArticleTitle>
            <ArticleExcerpt>
              Explore how artificial intelligence is revolutionizing marketing strategies by enabling 
              hyper-personalization at unprecedented scale. Learn how businesses can leverage these 
              technologies to create more meaningful customer connections while optimizing their 
              marketing ROI.
            </ArticleExcerpt>
            <ArticleMeta>
              <ArticleAuthor>
                <AuthorImage src="/images/insights/author1.jpg" alt="Shivendra Singh" />
                <AuthorName>Shivendra Singh</AuthorName>
              </ArticleAuthor>
              <ArticleDate>May 15, 2025</ArticleDate>
            </ArticleMeta>
            <Link to="/insights/ai-driven-marketing">
              <ReadMoreButton
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Read Article
              </ReadMoreButton>
            </Link>
          </ArticleContent>
          <ArticleImageContainer
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ArticleImage src="/images/insights/featured-article.jpg" alt="AI-Driven Marketing" />
          </ArticleImageContainer>
        </FeaturedArticle>
      </ContentContainer>
    </SectionContainer>
  );
};

export default InsightsFeatured;
