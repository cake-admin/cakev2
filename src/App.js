import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ButtonPage from './pages/ButtonPage';
import CardPage from './pages/CardPage';
import InputPage from './pages/InputPage';
import ModalPage from './pages/ModalPage';
import VersionControl from './pages/VersionControl';
import ColorsPage from './pages/foundations/ColorsPage';
import WhatsNew from './pages/WhatsNew';
import FigmaLibraries from './pages/get-started/FigmaLibraries';
import AboutCake from './pages/get-started/AboutCake';
import GlobalStyles from './styles/globalStyles';

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
  return (
    <Router>
      <GlobalStyles />
      <Navigation />
      <Wrapper>
        <PageContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components/button" element={<ButtonPage />} />
            <Route path="/components/card" element={<CardPage />} />
            <Route path="/components/input" element={<InputPage />} />
            <Route path="/components/modal" element={<ModalPage />} />
            <Route path="/version-control" element={<VersionControl />} />
            <Route path="/foundations/colors" element={<ColorsPage />} />
            <Route path="/whats-new" element={<WhatsNew />} />
            <Route path="/get-started/figma-libraries" element={<FigmaLibraries />} />
            <Route path="/get-started/about-cake" element={<AboutCake />} />
          </Routes>
          <Footer>© 2024 Cake Design System. All rights reserved.</Footer>
        </PageContentWrapper>
      </Wrapper>
    </Router>
  );
}

export default App; 