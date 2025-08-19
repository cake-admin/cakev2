import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const gridAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const GridContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #0a0a0a;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;
`;

const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: ${gridAnimation} 20s ease-in-out infinite;
`;

const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at ${props => props.mouseX}px ${props => props.mouseY}px,
    rgba(120, 119, 198, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 25%,
    transparent 50%
  );
  pointer-events: none;
  transition: all 0.1s ease-out;
`;

const GridDot = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  
  &:hover {
    background: rgba(120, 119, 198, 1);
    transform: translate(-50%, -50%) scale(2);
    box-shadow: 0 0 20px rgba(120, 119, 198, 0.5);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  pointer-events: none;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
`;

const InteractiveGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gridDots, setGridDots] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const generateGridDots = () => {
      const dots = [];
      const spacing = 50;
      const container = containerRef.current;
      
      if (container) {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        
        for (let x = spacing; x < width; x += spacing) {
          for (let y = spacing; y < height; y += spacing) {
            dots.push({ x, y, id: `${x}-${y}` });
          }
        }
      }
      
      setGridDots(dots);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      generateGridDots();
      
      // Regenerate dots on window resize
      const handleResize = () => {
        generateGridDots();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <GridContainer ref={containerRef}>
      <Grid />
      <GradientOverlay 
        mouseX={mousePosition.x} 
        mouseY={mousePosition.y} 
      />
      {gridDots.map((dot) => (
        <GridDot 
          key={dot.id} 
          x={dot.x} 
          y={dot.y}
        />
      ))}
      <Content>
        <Title>Interactive Grid</Title>
        <Subtitle>Move your mouse to see the magic</Subtitle>
      </Content>
    </GridContainer>
  );
};

export default InteractiveGrid;
