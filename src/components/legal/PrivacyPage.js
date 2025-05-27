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

const PrivacyPage = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <PageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
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
              At Vedanta Ventures, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </Paragraph>
            <Paragraph>
              This privacy policy applies to all information collected through our website (www.vedantaventures.com), as well as any related services, sales, marketing, or events.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>2. Information We Collect</SectionTitle>
            <Paragraph>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
            </Paragraph>
            <Paragraph>
              The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:
            </Paragraph>
            <List>
              <ListItem><strong>Personal Information:</strong> Name, email address, phone number, and other similar contact data.</ListItem>
              <ListItem><strong>Business Information:</strong> Company name, job title, and business contact details.</ListItem>
              <ListItem><strong>Usage Data:</strong> Information about how you use our website, products, and services.</ListItem>
              <ListItem><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.</ListItem>
            </List>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>3. How We Use Your Information</SectionTitle>
            <Paragraph>
              We use the information we collect in various ways, including to:
            </Paragraph>
            <List>
              <ListItem>Provide, operate, and maintain our website;</ListItem>
              <ListItem>Improve, personalize, and expand our website;</ListItem>
              <ListItem>Understand and analyze how you use our website;</ListItem>
              <ListItem>Develop new products, services, features, and functionality;</ListItem>
              <ListItem>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes;</ListItem>
              <ListItem>Send you emails;</ListItem>
              <ListItem>Find and prevent fraud.</ListItem>
            </List>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>4. Sharing Your Information</SectionTitle>
            <Paragraph>
              We may share your information with third parties in the following situations:
            </Paragraph>
            <List>
              <ListItem><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</ListItem>
              <ListItem><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</ListItem>
              <ListItem><strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy.</ListItem>
              <ListItem><strong>With Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</ListItem>
            </List>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>5. Cookies and Tracking Technologies</SectionTitle>
            <Paragraph>
              We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </Paragraph>
            <Paragraph>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>6. Data Security</SectionTitle>
            <Paragraph>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>7. Your Data Protection Rights</SectionTitle>
            <Paragraph>
              Depending on your location, you may have the following data protection rights:
            </Paragraph>
            <List>
              <ListItem>The right to access, update, or delete the information we have on you.</ListItem>
              <ListItem>The right of rectification - the right to have your information rectified if that information is inaccurate or incomplete.</ListItem>
              <ListItem>The right to object - the right to object to our processing of your personal data.</ListItem>
              <ListItem>The right of restriction - the right to request that we restrict the processing of your personal information.</ListItem>
              <ListItem>The right to data portability - the right to be provided with a copy of the information we have on you in a structured, machine-readable, and commonly used format.</ListItem>
              <ListItem>The right to withdraw consent - the right to withdraw your consent at any time where we relied on your consent to process your personal information.</ListItem>
            </List>
            <Paragraph>
              Please note that we may ask you to verify your identity before responding to such requests.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>8. Children's Privacy</SectionTitle>
            <Paragraph>
              Our website is not intended for children under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>9. Changes to This Privacy Policy</SectionTitle>
            <Paragraph>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this page.
            </Paragraph>
            <Paragraph>
              You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
            </Paragraph>
          </Section>
          
          <Section variants={fadeIn}>
            <SectionTitle>10. Contact Us</SectionTitle>
            <Paragraph>
              If you have any questions about this privacy policy, please contact us at:
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

export default PrivacyPage;
