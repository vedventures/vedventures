// Theme configuration for Vedanta Ventures
// Premium black and gold color palette

const theme = {
  colors: {
    primary: '#0f0f0f',
    secondary: '#1a1a1a',
    accent: '#d4af37', // Premium gold
    accentSecondary: '#f5cb5c', // Light gold
    text: '#e0e0e0',
    lightText: '#f5f5f5',
    mutedText: '#a0a0a0',
    background: '#0a0a0a',
    lightBackground: '#151515',
    darkBackground: '#050505',
    cardBackground: 'rgba(25, 25, 25, 0.8)',
    overlay: 'rgba(0, 0, 0, 0.7)',
    borderColor: 'rgba(212, 175, 55, 0.3)', // Subtle gold
  },
  
  shadows: {
    small: '0 4px 6px rgba(0, 0, 0, 0.1)',
    medium: '0 10px 15px rgba(0, 0, 0, 0.1)',
    large: '0 15px 30px rgba(0, 0, 0, 0.1)',
    gold: '0 5px 15px rgba(212, 175, 55, 0.2)',
    accentGlow: '0 0 10px rgba(212, 175, 55, 0.5)',
  },
  
  transitions: {
    slow: '0.5s ease',
    medium: '0.3s ease',
    fast: '0.1s ease',
  },
  
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Raleway', sans-serif",
  },
  
  borderRadius: '4px',
  
  gradients: {
    goldRadial: 'radial-gradient(circle at 15% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)',
    goldLinear: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)',
  }
};

export default theme;
