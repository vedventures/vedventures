import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Palette - Luxury Dark Theme */
    --primary: ${theme.colors.primary};
    --secondary: ${theme.colors.secondary};
    --accent: ${theme.colors.accent}; /* Premium gold */
    --accent-secondary: ${theme.colors.accentSecondary}; /* Light gold */
    --text: ${theme.colors.text};
    --light-text: ${theme.colors.lightText};
    --muted-text: ${theme.colors.mutedText};
    --background: ${theme.colors.background};
    --light-background: ${theme.colors.lightBackground};
    --dark-background: ${theme.colors.darkBackground};
    --card-background: ${theme.colors.cardBackground};
    --overlay: ${theme.colors.overlay};
    
    /* Typography */
    --heading-font: ${theme.fonts.heading};
    --body-font: ${theme.fonts.body};
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    
    /* Borders */
    --border-radius: ${theme.borderRadius};
    --border-color: ${theme.colors.borderColor}; /* Subtle gold */
    
    /* Shadows */
    --shadow-sm: ${theme.shadows.small};
    --shadow-md: ${theme.shadows.medium};
    --shadow-lg: ${theme.shadows.large};
    --shadow-gold: ${theme.shadows.gold};
    --shadow-accent: ${theme.shadows.accentGlow};
    
    /* Transitions */
    --transition-slow: ${theme.transitions.slow};
    --transition-medium: ${theme.transitions.medium};
    --transition-fast: ${theme.transitions.fast};
    
    /* Gradients */
    --gradient-gold-radial: ${theme.gradients.goldRadial};
    --gradient-gold-linear: ${theme.gradients.goldLinear};
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--body-font);
    color: var(--text);
    background-color: var(--background);
    line-height: 1.6;
    overflow-x: hidden;
    letter-spacing: 0.02em;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    color: var(--light-text);
    letter-spacing: 0.03em;
  }
  
  h1 {
    font-size: 4rem;
    font-weight: 800;
  }
  
  h2 {
    font-size: 3rem;
  }
  
  h3 {
    font-size: 2.2rem;
  }
  
  h4 {
    font-size: 1.8rem;
  }
  
  p {
    margin-bottom: var(--spacing-md);
    font-weight: 300;
    font-size: 1.05rem;
  }
  
  a {
    color: var(--light-text);
    text-decoration: none;
    transition: all var(--transition-medium);
    position: relative;
    
    &:hover {
      color: var(--accent);
    }
  }
  
  ::selection {
    background-color: var(--accent);
    color: var(--primary);
  }
  
  button {
    cursor: pointer;
    font-family: var(--body-font);
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
  }
  
  .section {
    padding: calc(var(--spacing-xl) * 2) 0;
    position: relative;
  }
  
  .section::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
  
  .gold-text {
    color: var(--accent);
  }
  
  .silver-text {
    color: var(--accent-secondary);
  }
  
  .luxury-card {
    background-color: var(--card-background);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-gold);
    transition: all var(--transition-medium);
  }
  
  .luxury-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    .section {
      padding: var(--spacing-xl) 0;
    }
    
    .container {
      padding: 0 var(--spacing-md);
    }
  }
`;

export default GlobalStyles;
