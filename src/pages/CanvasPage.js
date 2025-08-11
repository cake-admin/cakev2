import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import winDeskBg from '../assets/canvas/win_desk.png';

// Icon components
const MinimizeIcon = () => (
  <svg width="10" height="1" viewBox="0 0 10 1">
    <rect width="10" height="1" fill="currentColor" />
  </svg>
);

const MaximizeIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10">
    <rect width="10" height="10" fill="none" stroke="currentColor" />
  </svg>
);

const CloseIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10">
    <path d="M1,1 L9,9 M9,1 L1,9" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 48px;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`;

const ExampleSection = styled.div`
  margin-top: 2rem;
`;

const ExampleHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const DemoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url(${winDeskBg});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
`;

const TitleBar = styled.div`
  width: 100%;
  height: 32px;
  background: rgba(248, 250, 252, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: flex-end; // Windows 11 has controls right-aligned
  padding: 0;
  border-radius: 16px 16px 0 0;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  gap: 4px;
`;

const WindowTitle = styled.span`
  font-size: 12px;
  color: #000;
  font-weight: 500;
`;

const WindowControls = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const ControlButton = styled.button`
  width: 46px;
  height: 100%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${props => props.isClose ? 'rgb(255, 96, 92)' : 'rgba(0, 0, 0, 0.06)'};
    color: ${props => props.isClose ? 'white' : 'inherit'};
  }

  &:active {
    background: ${props => props.isClose ? 'rgb(235, 76, 72)' : 'rgba(0, 0, 0, 0.09)'};
  }

  svg {
    width: 10px;
    height: 10px;
    opacity: 0.7;
  }
`;

const DraggableCanvas = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background: rgba(248, 250, 252, 0.80);
  border-radius: 16px;
  box-shadow: 0px 30px 30px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: move;
  user-select: none;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const WindowContent = styled.div`
  padding: 1rem;
  flex: 1;
  cursor: default;
`;

const WindowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="2" y="2" width="12" height="12" rx="2" fill="#1a1a1a"/>
  </svg>
);

const CanvasPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Center the component when the page loads
    const container = document.querySelector('#demo-container');
    if (container) {
      const containerRect = container.getBoundingClientRect();
      // DraggableCanvas is 300x200 as defined in the styled component
      const centerX = (containerRect.width - 300) / 2;
      const centerY = (containerRect.height - 200) / 2;
      setPosition({ x: centerX, y: centerY });
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.target.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const container = document.querySelector('#demo-container');
      const rect = container.getBoundingClientRect();
      
      let newX = e.clientX - rect.left - dragOffset.x;
      let newY = e.clientY - rect.top - dragOffset.y;

      // Boundary checks
      newX = Math.max(0, Math.min(newX, rect.width - 300));
      newY = Math.max(0, Math.min(newY, rect.height - 200));

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <PageContainer>
      <HeaderWrapper>
        <Header>Canvas</Header>
        <Description>
          The canvas background provides a neutral, consistent foundation for application content. 
          It ensures readability, visual clarity, and appropriate contrast with interactive components.
        </Description>
      </HeaderWrapper>

      <ExampleSection>
        <DemoContainer
          id="demo-container"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <DraggableCanvas
            onMouseDown={handleMouseDown}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`
            }}
          >
            <TitleBar>
              <TitleSection>
              </TitleSection>
              <WindowControls>
                <ControlButton>
                  <MinimizeIcon />
                </ControlButton>
                <ControlButton>
                  <MaximizeIcon />
                </ControlButton>
                <ControlButton isClose>
                  <CloseIcon />
                </ControlButton>
              </WindowControls>
            </TitleBar>
            <WindowContent>
            </WindowContent>
          </DraggableCanvas>
        </DemoContainer>
      </ExampleSection>
    </PageContainer>
  );
};

export default CanvasPage; 