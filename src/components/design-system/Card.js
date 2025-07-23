import React from 'react';
import styled from 'styled-components';
import colorData from '../../data/colors.json';

const StyledCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;
  border: 1px solid #e5e7eb;
  
  ${props => props.elevated && `
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  `}
  
  ${props => props.hoverable && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  `}
  
  ${props => {
    switch (props.variant) {
      case 'outlined':
        return `
          background: transparent;
          border: 2px solid #e5e7eb;
          box-shadow: none;
        `;
      case 'elevated':
        return `
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        `;
      default:
        return '';
    }
  }}
`;

const CardHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #f3f4f6;
  
  ${props => props.compact && `
    padding: 16px 20px;
  `}
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${colorData.slate[900]};
  
  ${props => props.compact && `
    font-size: 16px;
  `}
`;

const CardSubtitle = styled.p`
  margin: 4px 0 0 0;
  font-size: 14px;
  color: ${colorData.slate[700]};
  
  ${props => props.compact && `
    font-size: 13px;
  `}
`;

const CardBody = styled.div`
  padding: 24px;
  
  ${props => props.compact && `
    padding: 20px;
  `}
`;

const CardFooter = styled.div`
  padding: 20px 24px;
  border-top: 1px solid #f3f4f6;
  background-color: #f9fafb;
  
  ${props => props.compact && `
    padding: 16px 20px;
  `}
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Card = ({ 
  children, 
  variant = 'default',
  elevated = false,
  hoverable = false,
  compact = false,
  onClick,
  ...props 
}) => {
  return (
    <StyledCard
      variant={variant}
      elevated={elevated}
      hoverable={hoverable}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card; 