import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
// eslint-disable-next-line no-unused-vars
import AboutPage from './components/about/AboutPage';
// eslint-disable-next-line no-unused-vars
import VenturesPage from './components/ventures/VenturesPage';
// eslint-disable-next-line no-unused-vars
import InsightsPage from './components/insights/InsightsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ventures" element={<VenturesPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            {/* Additional routes will be added as we develop more pages */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
