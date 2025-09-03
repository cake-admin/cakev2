import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

// 3D Flip Animation Keyframes
const flipIn = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(-90deg) translateY(-12px);
  }
  20% {
    opacity: 0.2;
    transform: rotateX(-70deg) translateY(-8px);
  }
  40% {
    opacity: 0.5;
    transform: rotateX(-50deg) translateY(-4px);
  }
  60% {
    opacity: 0.8;
    transform: rotateX(-25deg) translateY(-2px);
  }
  80% {
    opacity: 0.95;
    transform: rotateX(-10deg) translateY(-1px);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0);
  }
`;

const flipOut = keyframes`
  0% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0);
  }
  20% {
    opacity: 0.95;
    transform: rotateX(10deg) translateY(1px);
  }
  40% {
    opacity: 0.8;
    transform: rotateX(25deg) translateY(2px);
  }
  60% {
    opacity: 0.5;
    transform: rotateX(50deg) translateY(4px);
  }
  80% {
    opacity: 0.2;
    transform: rotateX(70deg) translateY(8px);
  }
  100% {
    opacity: 0;
    transform: rotateX(90deg) translateY(12px);
  }
`;

// Container with 3D perspective
const HeadlineContainer = styled.span`
  display: inline;
  perspective: 1000px;
  transform-style: preserve-3d;
  font-family: inherit;
  line-height: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: none;
  }
`;

// Base text styling
const BaseText = styled.span`
  white-space: nowrap;
`;

// Rotating word container
const RotatingWordContainer = styled.span`
  position: relative;
  display: inline-block;
  min-width: ${props => props.minWidth || '200px'};
  height: 1em;
  margin: 0 0.25rem;
  
  @media (prefers-reduced-motion: reduce) {
    min-width: auto;
    height: auto;
  }
`;

// Individual rotating word
const RotatingWord = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: ${props => props.accentColor || '#3b82f6'};
  font-weight: inherit;
  white-space: nowrap;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform, opacity;
  text-transform: capitalize;
  
  /* Subtle shadow for depth */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  /* Animation states */
  &.visible {
    opacity: 1;
    transform: rotateX(0deg) translateY(0);
  }
  
  &.entering {
    animation: ${flipIn} ${props => props.animationDuration || '1s'} cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  &.exiting {
    animation: ${flipOut} ${props => props.animationDuration || '1s'} cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  &.hidden {
    opacity: 0;
    transform: rotateX(-90deg) translateY(-12px);
    pointer-events: none;
  }
  
  /* Hover pause effect */
  ${props => props.pauseOnHover && css`
    ${HeadlineContainer}:hover & {
      animation-play-state: paused;
    }
  `}
  
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transform: none !important;
    opacity: ${props => props.isVisible ? 1 : 0};
  }
`;

// Loading state
const LoadingContainer = styled.div`
  display: inline-flex;
  align-items: baseline;
  font-size: ${props => props.fontSize || '2rem'};
  color: ${props => props.textColor || '#1a1a1a'};
  
  &::after {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid #e5e7eb;
    border-top: 2px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-left: 0.5rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const RotatingHeadline = ({
  baseText = "Great design needs solid",
  words = ['ingredients', 'principles', 'guidelines', 'recipes', 'foundations', 'elements'],
  animationSpeed = 2500,
  animationDuration = 600,
  fontSize = '2rem',
  mobileFontSize = '1.5rem',
  fontWeight = '400',
  textColor = '#1a1a1a',
  accentColor = '#3b82f6',
  accentWeight = '600',
  minWidth = '200px',
  pauseOnHover = true,
  className,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Handle reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;



  useEffect(() => {
    if (isLoading || prefersReducedMotion || words.length <= 1) return;

                   const startAnimation = () => {
        intervalRef.current = setInterval(() => {
          setIsTransitioning(true);
          
          setTimeout(() => {
            setCurrentIndex(nextIndex);
            setNextIndex((nextIndex + 1) % words.length);
            setIsTransitioning(false);
          }, animationDuration * 0.5);
        }, animationSpeed);
      };

    startAnimation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [words.length, animationSpeed, animationDuration, nextIndex, isLoading, prefersReducedMotion]);

  // Pause animation on hover if enabled
  const handleMouseEnter = () => {
    if (pauseOnHover && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
                   if (pauseOnHover && !prefersReducedMotion && words.length > 1) {
        intervalRef.current = setInterval(() => {
          setIsTransitioning(true);
          
          setTimeout(() => {
            setCurrentIndex(nextIndex);
            setNextIndex((nextIndex + 1) % words.length);
            setIsTransitioning(false);
          }, animationDuration * 0.5);
        }, animationSpeed);
      }
  };

  if (isLoading) {
    return (
      <LoadingContainer 
        fontSize={fontSize}
        textColor={textColor}
        className={className}
        {...props}
      >
        {baseText} <span style={{ color: accentColor, fontWeight: accentWeight }}>loading...</span>
      </LoadingContainer>
    );
  }

  if (words.length === 0) {
    return (
      <HeadlineContainer 
        fontSize={fontSize}
        mobileFontSize={mobileFontSize}
        fontWeight={fontWeight}
        textColor={textColor}
        className={className}
        {...props}
      >
        {baseText}
      </HeadlineContainer>
    );
  }

  return (
    <HeadlineContainer
      ref={containerRef}
      fontSize={fontSize}
      mobileFontSize={mobileFontSize}
      fontWeight={fontWeight}
      textColor={textColor}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="banner"
      aria-label={`${baseText} ${words[currentIndex]}`}
      {...props}
    >
      <BaseText>{baseText}</BaseText>
      <RotatingWordContainer minWidth={minWidth}>
        <RotatingWord
          className={isTransitioning ? 'exiting' : 'visible'}
          accentColor={accentColor}
          accentWeight={accentWeight}
          animationDuration={`${animationDuration}ms`}
          pauseOnHover={pauseOnHover}
          isVisible={!isTransitioning}
        >
          {words[currentIndex]}
        </RotatingWord>
        <RotatingWord
          className={isTransitioning ? 'entering' : 'hidden'}
          accentColor={accentColor}
          accentWeight={accentWeight}
          animationDuration={`${animationDuration}ms`}
          pauseOnHover={pauseOnHover}
          isVisible={isTransitioning}
        >
          {words[nextIndex]}
        </RotatingWord>
      </RotatingWordContainer>
    </HeadlineContainer>
  );
};

RotatingHeadline.propTypes = {
  baseText: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.string),
  animationSpeed: PropTypes.number,
  animationDuration: PropTypes.number,
  fontSize: PropTypes.string,
  mobileFontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textColor: PropTypes.string,
  accentColor: PropTypes.string,
  accentWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.string,
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
};

export default RotatingHeadline;
