import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  padding: 10rem 0 6rem;
  background-color: var(--dark-background);
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100px;
    height: 2px;
    background-color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LastUpdated = styled.p`
  font-size: 0.9rem;
  color: var(--muted-text);
  margin-bottom: 3rem;
`;

const Section = styled(motion.div)`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--accent);
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-text);
  margin-bottom: 0.8rem;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
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

const TermsPage = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <PageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms of Service
        </PageTitle>
        <LastUpdated>Last Updated: May 28, 2025</LastUpdated>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Section variants={fadeIn}>
            <SectionTitle>1. Introduction</SectionTitle>
            <Paragraph>
              Welcome to Vedanta Ventures. These Terms of Service ("Terms") govern your use of our website located at www.vedantaventures.com (the "Service") operated by Vedanta Ventures.
            </Paragraph>
            <Paragraph>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>2. Use License</SectionTitle>
            <Paragraph>
              Permission is granted to temporarily view the materials (information or software) on Vedanta Ventures' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </Paragraph>
            <List>
              <ListItem>Modify or copy the materials;</ListItem>
              <ListItem>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</ListItem>
              <ListItem>Attempt to decompile or reverse engineer any software contained on Vedanta Ventures' website;</ListItem>
              <ListItem>Remove any copyright or other proprietary notations from the materials; or</ListItem>
              <ListItem>Transfer the materials to another person or "mirror" the materials on any other server.</ListItem>
            </List>
            <Paragraph>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Vedanta Ventures at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>3. Disclaimer</SectionTitle>
            <Paragraph>
              The materials on Vedanta Ventures' website are provided on an 'as is' basis. Vedanta Ventures makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </Paragraph>
            <Paragraph>
              Further, Vedanta Ventures does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>4. Limitations</SectionTitle>
            <Paragraph>
              In no event shall Vedanta Ventures or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vedanta Ventures' website, even if Vedanta Ventures or a Vedanta Ventures authorized representative has been notified orally or in writing of the possibility of such damage.
            </Paragraph>
            <Paragraph>
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>5. Accuracy of Materials</SectionTitle>
            <Paragraph>
              The materials appearing on Vedanta Ventures' website could include technical, typographical, or photographic errors. Vedanta Ventures does not warrant that any of the materials on its website are accurate, complete or current. Vedanta Ventures may make changes to the materials contained on its website at any time without notice. However, Vedanta Ventures does not make any commitment to update the materials.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>6. Links</SectionTitle>
            <Paragraph>
              Vedanta Ventures has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vedanta Ventures of the site. Use of any such linked website is at the user's own risk.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>7. Modifications</SectionTitle>
            <Paragraph>
              Vedanta Ventures may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>8. Governing Law</SectionTitle>
            <Paragraph>
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>9. Contact Us</SectionTitle>
            <Paragraph>
              If you have any questions about these Terms, please contact us at:
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> vedantaventures1@gmail.com<br />
              <strong>Address:</strong> #17, 2nd Floor, 7th Main Road, 2nd Stage, Indiranagar, Bengaluru - 560038
            </Paragraph>
          </Section>
        </motion.div>
      </ContentContainer>
    </PageContainer>
  );
};

export default TermsPage;
