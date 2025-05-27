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
    background: radial-gradient(circle at 30% 70%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
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
  margin: 0 auto;
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const TeamMemberCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  
  &:hover {
    .member-info {
      transform: translateY(0);
    }
    
    .member-image {
      transform: scale(1.05);
    }
  }
`;

const MemberImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 120%;
  overflow: hidden;
  background-color: #111;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.8) 100%);
    z-index: 2;
  }
`;

const MemberImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: grayscale(30%);
  z-index: 1;
`;

const MemberInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 3;
  transition: transform 0.3s ease;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--light-text);
`;

const MemberPosition = styled.p`
  font-size: 0.9rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--muted-text);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--light-text);
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
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
      staggerChildren: 0.2
    }
  }
};

const AboutTeam = () => {
  const teamMembers = [
    {
      name: 'Shivendra Singh',
      position: 'Founder & CEO',
      bio: 'With over 15 years of experience in technology and business development, Shivendra leads Vedanta Ventures with a vision to create innovative solutions across multiple industries.',
      image: '/images/about/team1.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Priya Patel',
      position: 'Chief Operating Officer',
      bio: 'Priya oversees the day-to-day operations across all our business verticals, ensuring excellence in execution and alignment with our strategic goals.',
      image: '/images/about/team2.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Vikram Mehta',
      position: 'Head of Web Development',
      bio: 'Vikram leads our web development vertical, bringing cutting-edge technology solutions to our clients with a focus on performance and user experience.',
      image: '/images/about/team3.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Ananya Singh',
      position: 'Director of Construction',
      bio: 'With extensive experience in the construction industry, Ananya manages our construction materials vertical with a commitment to quality and sustainability.',
      image: '/images/about/team4.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Arjun Kapoor',
      position: 'Digital Products Lead',
      bio: 'Arjun spearheads our digital products division, focusing on creating innovative solutions that address real-world challenges.',
      image: '/images/about/team5.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Nisha Verma',
      position: 'Retail Operations Manager',
      bio: 'Nisha manages our retail ventures, ensuring exceptional customer experiences and operational efficiency across all our retail locations.',
      image: '/images/about/team6.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
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
            Our Team
          </SectionSubtitle>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The People Behind Vedanta Ventures
          </SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our success is driven by our talented team of professionals who bring diverse 
            expertise and a shared commitment to excellence across all our business verticals.
          </SectionText>
        </SectionHeader>
        
        <TeamGrid
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} variants={fadeIn}>
              <MemberImageContainer>
                <MemberImage className="member-image" src={member.image} alt={member.name} />
              </MemberImageContainer>
              <MemberInfo className="member-info">
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
                <MemberBio>{member.bio}</MemberBio>
                <SocialLinks>
                  {member.social.linkedin && (
                    <SocialLink href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </SocialLink>
                  )}
                  {member.social.twitter && (
                    <SocialLink href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </SocialLink>
                  )}
                </SocialLinks>
              </MemberInfo>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </ContentContainer>
    </SectionContainer>
  );
};

export default AboutTeam;
