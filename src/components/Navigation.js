import React, { useState } from 'react';
import { NavLink, useLocation, useMatch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import cakeLogo from '../assets/cake.svg';
import SearchBar from './design-system/SearchBar';

// Updated to fix home page selection and content display
const GlobalStyle = createGlobalStyle`
  .iQvbDV {
    padding-right: 24px !important;
  }
`;

const NavContainer = styled.nav`
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #E2E8F0;
  font-size: 14px;
  font-family: "Segoe UI", system-ui, sans-serif;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  z-index: 1001;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    position: fixed;
    left: ${props => props.isOpen ? '0' : '-250px'};
    z-index: 1001;
    transition: left 0.3s ease;
    box-shadow: ${props => props.isOpen ? '2px 0 8px rgba(0,0,0,0.1)' : 'none'};
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 24px;
  background: #fff;
`;

const HeaderLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: inherit;
  
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const CakeLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;



const CakeTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const CakeTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #171717;
  line-height: 1.2;
`;

const CakeVersion = styled.span`
  font-size: 10px;
  color: #64748B;
  margin-top: 2px;
`;

const SidebarNav = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  width: 100%;
`;

const NavLinkStyled = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 40px;
  text-decoration: none;
  color: #171717;
  position: relative;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 40px;
  border-radius: 0;
  margin: 0;
  transition: background 0.2s, color 0.2s;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover:not(.active) {
    color: #171717;
    background-color: #F1F5F9;
  }
  
  &.active {
    background-color: #EFF6FF;
    color: #1D4ED8;
    font-weight: 600;
  }
  
  &.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #1D4ED8;
    border-radius: 4px 0 0 4px;
  }
`;

const SubmenuToggle = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 40px;
  text-decoration: none;
  color: #171717;
  position: relative;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 0;
  margin: 8px 0 4px 0;
  transition: background 0.2s, color 0.2s;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  
  &:hover {
    color: #171717;
    background: none;
  }
`;

const Chevron = styled.span`
  transition: transform 0.3s ease;
  margin-right: 0;
  color: #171717;
  transform-origin: center;
  transform: rotate(0deg);
  
  ${props => props.expanded && `
    transform: rotate(180deg);
  `}
`;

const Submenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: ${props => props.expanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

const SubmenuItem = styled.li`
  width: 100%;
`;

const SubmenuLink = styled(NavLink)`
  width: 100%;
  padding: 0 24px;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 16px;
  color: #171717;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #F1F5F9;
    color: #171717;
  }
  
  &.active {
    background-color: #EFF6FF;
    color: #1D4ED8;
    font-weight: 600;
  }
  
  &.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #1D4ED8;
    border-radius: 4px 0 0 4px;
  }
`;

const MobileToggle = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  background: #ffffff;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
`;

const Navigation = () => {
  const location = useLocation();
  const isHome = useMatch('/');
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({
    getStarted: location.pathname.startsWith('/get-started'),
    foundations: location.pathname.startsWith('/foundations'),
    components: location.pathname.startsWith('/components'),
    subsystems: location.pathname.startsWith('/subsystems')
  });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const toggleMenu = (menuKey) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // TODO: Implement search functionality
  };

  return (
    <>
      <GlobalStyle />
      <MobileToggle onClick={toggleNav}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </MobileToggle>
      
      <Overlay isOpen={isOpen} onClick={closeNav} />
      
      <NavContainer isOpen={isOpen}>
        <SidebarHeader>
          <HeaderLink to="/" onClick={closeNav}>
            <CakeLogo src={cakeLogo} alt="Cake Logo" />
            <CakeTitleGroup>
              <CakeTitle>Cake</CakeTitle>
              <CakeVersion>Version 4.0.1</CakeVersion>
            </CakeTitleGroup>
          </HeaderLink>
        </SidebarHeader>
        
        <SearchBar onSearch={handleSearch} />
        
        <SidebarNav>
          <NavList>
            <NavItem>
              <NavLinkStyled 
                to="/" 
                end 
                onClick={closeNav}
                className={isHome ? 'active' : ''}
              >
                Home
              </NavLinkStyled>
            </NavItem>
            
            <NavItem>
              <NavLinkStyled to="/whats-new" onClick={closeNav}>
                What's New
              </NavLinkStyled>
            </NavItem>
            
            <NavItem>
              <SubmenuToggle onClick={() => toggleMenu('getStarted')}>
                GET STARTED
                <Chevron expanded={expandedMenus.getStarted}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"/>
                  </svg>
                </Chevron>
              </SubmenuToggle>
              <Submenu expanded={expandedMenus.getStarted}>
                <SubmenuItem>
                  <SubmenuLink to="/get-started/about" onClick={closeNav}>
                    About Cake
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/get-started/figma-libraries" onClick={closeNav}>
                    Figma Libraries
                  </SubmenuLink>
                </SubmenuItem>
              </Submenu>
            </NavItem>
            
            <NavItem>
              <SubmenuToggle onClick={() => toggleMenu('foundations')}>
                FOUNDATIONS
                <Chevron expanded={expandedMenus.foundations}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"/>
                  </svg>
                </Chevron>
              </SubmenuToggle>
              <Submenu expanded={expandedMenus.foundations}>
                <SubmenuItem>
                  <SubmenuLink to="/foundations/colors" onClick={closeNav}>
                    Color
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/foundations/iconography" onClick={closeNav}>
                    Iconography
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/foundations/typography" onClick={closeNav}>
                    Typography
                  </SubmenuLink>
                </SubmenuItem>
              </Submenu>
            </NavItem>
            
            <NavItem>
              <SubmenuToggle onClick={() => toggleMenu('components')}>
                COMPONENTS
                <Chevron expanded={expandedMenus.components}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"/>
                  </svg>
                </Chevron>
              </SubmenuToggle>
              <Submenu expanded={expandedMenus.components}>
                <SubmenuItem>
                  <SubmenuLink to="/components/accordion" onClick={closeNav}>
                    Accordion
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/components/alert" onClick={closeNav}>
                    Alert
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/components/avatar" onClick={closeNav}>
                    Avatar
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/components/badge" onClick={closeNav}>
                    Badge
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/components/breadcrumb" onClick={closeNav}>
                    Breadcrumb
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/components/button" onClick={closeNav}>
                    Button
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/components/checkbox" onClick={closeNav}>
                    Checkbox
                  </SubmenuLink>
                </SubmenuItem>
              </Submenu>
            </NavItem>

            <NavItem>
              <SubmenuToggle onClick={() => toggleMenu('subsystems')}>
                SUB SYSTEMS
                <Chevron expanded={expandedMenus.subsystems}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z"/>
                  </svg>
                </Chevron>
              </SubmenuToggle>
              <Submenu expanded={expandedMenus.subsystems}>
                <SubmenuItem>
                  <SubmenuLink to="/subsystems/about" onClick={closeNav}>
                    About Sub Systems
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/subsystems/cake-for-ai" onClick={closeNav}>
                    Cake for AI
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/subsystems/cake-for-pc-software" onClick={closeNav}>
                    Cake for PC Software
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/subsystems/cake-for-enterprise" onClick={closeNav}>
                    Cake for Enterprise
                  </SubmenuLink>
                </SubmenuItem>
                <SubmenuItem>
                  <SubmenuLink to="/subsystems/red-velvet" onClick={closeNav}>
                    Red Velvet
                  </SubmenuLink>
                </SubmenuItem>
              </Submenu>
            </NavItem>
          </NavList>
        </SidebarNav>
      </NavContainer>
    </>
  );
};

export default Navigation; 