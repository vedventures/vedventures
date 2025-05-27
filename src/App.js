import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Additional routes will be added as we develop more pages */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
