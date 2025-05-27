import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SectionContainer = styled.section`
  padding: 8rem 0;
  background-color: var(--dark-background);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 85% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
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
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const HeaderLeft = styled.div`
  max-width: 600px;
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
  margin-bottom: 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CategoryFilter = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
`;

const CategoryButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.active ? 'var(--accent)' : 'var(--muted-text)'};
  font-size: 0.9rem;
  font-weight: ${props => props.active ? '500' : '400'};
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 1px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--accent);
    
    &:after {
      width: 100%;
    }
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const ArticleCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ArticleImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 65%;
  overflow: hidden;
  margin-bottom: 1.5rem;
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

const ArticleCategory = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.8rem;
`;

const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const ArticleAuthor = styled.span`
  font-size: 0.85rem;
  color: var(--light-text);
`;

const ArticleDate = styled.span`
  font-size: 0.85rem;
  color: var(--muted-text);
`;

const ArticleExcerpt = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--muted-text);
  margin-bottom: 1.5rem;
`;

const ReadMoreLink = styled(Link)`
  font-size: 0.9rem;
  color: var(--accent);
  text-decoration: none;
  position: relative;
  padding-bottom: 0.3rem;
  align-self: flex-start;
  margin-top: auto;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const LoadMoreButton = styled(motion.button)`
  display: block;
  margin: 5rem auto 0;
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
`;

// Animation variants defined inline in the component

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const InsightsList = () => {
  const articles = [
    {
      id: 1,
      title: "Sustainable Construction: Building for a Better Future",
      excerpt: "Discover how sustainable construction practices are reshaping the industry and creating environmentally responsible buildings that benefit both people and the planet.",
      category: "Construction",
      author: "Ananya Singh",
      date: "May 10, 2025",
      image: "/images/insights/article1.jpg",
      slug: "sustainable-construction"
    },
    {
      id: 2,
      title: "The Rise of Conversational Commerce",
      excerpt: "How AI-powered chatbots and voice assistants are transforming e-commerce by creating more intuitive and personalized shopping experiences.",
      category: "Digital Products",
      author: "Arjun Kapoor",
      date: "April 28, 2025",
      image: "/images/insights/article2.jpg",
      slug: "conversational-commerce"
    },
    {
      id: 3,
      title: "Experiential Retail: Creating Memorable In-Store Experiences",
      excerpt: "In the age of e-commerce, physical retail spaces are evolving to offer unique experiences that can't be replicated online. Learn how brands are reimagining retail.",
      category: "Retail",
      author: "Nisha Verma",
      date: "April 15, 2025",
      image: "/images/insights/article3.jpg",
      slug: "experiential-retail"
    },
    {
      id: 4,
      title: "Web Performance Optimization: Speed as a Competitive Advantage",
      excerpt: "Why website speed matters more than ever and how optimizing performance can significantly impact user experience, conversion rates, and SEO rankings.",
      category: "Marketing & Tech",
      author: "Vikram Mehta",
      date: "April 5, 2025",
      image: "/images/insights/article4.jpg",
      slug: "web-performance-optimization"
    },
    {
      id: 5,
      title: "The Ethics of AI: Navigating the Future of Technology",
      excerpt: "As AI becomes increasingly integrated into business operations, understanding the ethical implications and establishing responsible practices is essential.",
      category: "Marketing & Tech",
      author: "Shivendra Singh",
      date: "March 22, 2025",
      image: "/images/insights/article5.jpg",
      slug: "ethics-of-ai"
    },
    {
      id: 6,
      title: "Supply Chain Innovation in Construction Materials",
      excerpt: "How technology and data analytics are revolutionizing supply chain management in the construction materials industry, improving efficiency and sustainability.",
      category: "Construction",
      author: "Priya Patel",
      date: "March 10, 2025",
      image: "/images/insights/article6.jpg",
      slug: "supply-chain-innovation"
    }
  ];

  return (
    <SectionContainer>
      <ContentContainer>
        <SectionHeader>
          <HeaderLeft>
            <SectionSubtitle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Knowledge Hub
            </SectionSubtitle>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore Our Articles
            </SectionTitle>
          </HeaderLeft>
          
          <CategoryFilter>
            <CategoryButton active={true}>All</CategoryButton>
            <CategoryButton>Marketing & Tech</CategoryButton>
            <CategoryButton>Construction</CategoryButton>
            <CategoryButton>Digital Products</CategoryButton>
            <CategoryButton>Retail</CategoryButton>
          </CategoryFilter>
        </SectionHeader>
        
        <ArticlesGrid
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {articles.map(article => (
            <ArticleCard key={article.id} variants={fadeIn}>
              <ArticleImageContainer>
                <ArticleImage src={article.image} alt={article.title} />
              </ArticleImageContainer>
              <ArticleCategory>{article.category}</ArticleCategory>
              <Link to={`/insights/${article.slug}`} style={{ textDecoration: 'none' }}>
                <ArticleTitle>{article.title}</ArticleTitle>
              </Link>
              <ArticleMeta>
                <ArticleAuthor>{article.author}</ArticleAuthor>
                <ArticleDate>{article.date}</ArticleDate>
              </ArticleMeta>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <ReadMoreLink to={`/insights/${article.slug}`}>Read More</ReadMoreLink>
            </ArticleCard>
          ))}
        </ArticlesGrid>
        
        <LoadMoreButton
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Load More Articles
        </LoadMoreButton>
      </ContentContainer>
    </SectionContainer>
  );
};

export default InsightsList;
