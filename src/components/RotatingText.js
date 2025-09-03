import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import colorData from '../data/colors.json';

const rollInFromTop = keyframes`
  0% {
    transform: translateY(-40px) rotateX(-90deg);
  }
  25% {
    transform: translateY(-30px) rotateX(-67.5deg);
  }
  50% {
    transform: translateY(-20px) rotateX(-45deg);
  }
  75% {
    transform: translateY(-10px) rotateX(-22.5deg);
  }
  100% {
    transform: translateY(0) rotateX(0deg);
  }
`;

const rollOutToBottom = keyframes`
  0% {
    transform: translateY(0) rotateX(0deg);
  }
  25% {
    transform: translateY(10px) rotateX(22.5deg);
  }
  50% {
    transform: translateY(20px) rotateX(45deg);
  }
  75% {
    transform: translateY(30px) rotateX(67.5deg);
  }
  100% {
    transform: translateY(40px) rotateX(90deg);
  }
`;

const TextContainer = styled.span`
  position: relative;
  display: inline-block;
  min-width: 140px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const RotatingWord = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: ${props => props.color};
  font-weight: 600;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  white-space: nowrap;
  
  &.entering {
    animation: ${rollInFromTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
  
  &.exiting {
    animation: ${rollOutToBottom} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
  
  &.visible {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
  
  &.hidden {
    opacity: 0;
    transform: translateY(-40px) rotateX(-90deg);
    pointer-events: none;
  }
`;

const RotatingText = ({ words, interval = 2000, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentColor, setCurrentColor] = useState('#1d4ed8');
  const [nextColor, setNextColor] = useState('#1d4ed8');

  // Get all 700 color values from the color data
  const get700Colors = () => {
    const colors = [];
    Object.keys(colorData).forEach(colorName => {
      if (colorName !== 'common' && colorName !== 'brand' && colorData[colorName]['700']) {
        colors.push(colorData[colorName]['700']);
      }
    });
    return colors;
  };

  const getRandomColor = () => {
    const colors = get700Colors();
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % words.length);
        setCurrentColor(nextColor);
        setNextColor(getRandomColor());
        setIsTransitioning(false);
      }, 500); // Half of the animation duration
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval, nextIndex, nextColor]);

  return (
    <TextContainer className={className}>
      <RotatingWord
        className={isTransitioning ? 'exiting' : 'visible'}
        color={currentColor}
      >
        {words[currentIndex]}
      </RotatingWord>
      <RotatingWord
        className={isTransitioning ? 'entering' : 'hidden'}
        color={nextColor}
      >
        {words[nextIndex]}
      </RotatingWord>
    </TextContainer>
  );
};

export default RotatingText;
