import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import GlobalStyles from './styles/globalStyles';
import { routes } from './data/routes';

const Wrapper = styled.div`
  padding-left: 250px;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const PageContentWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 10px;
  color: #999;
  padding: 40px 0px;
`;

function App() {
  // Get the base URL from the homepage field in package.json
  const baseUrl = process.env.PUBLIC_URL || '';

  return (
    <Router basename={baseUrl}>
      <GlobalStyles />
      <Navigation />
      <Wrapper>
        <PageContentWrapper>
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          <Footer>© 2024 Cake Design System. All rights reserved.</Footer>
        </PageContentWrapper>
      </Wrapper>
    </Router>
  );
}

export default App; 