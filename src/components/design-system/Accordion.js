import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  width: 100%;
`;

const GroupContainer = styled.div`
  border: 1px solid ${props => props.theme === 'light' ? '#64748B' : '#71717A'};
  border-radius: 6px;
  background: ${props => props.theme === 'light' ? '#FFFFFF' : '#18181B'};
  overflow: hidden;
  transition: border-color 200ms ease-in-out;

  ${props => props.disabled && `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

const AccordionItemContainer = styled.div`
  background: ${props => props.theme === 'light' ? '#FFFFFF' : '#18181B'};
  transition: background-color 200ms ease-in-out;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme === 'light' ? '#64748B' : '#71717A'};
  }
`;

const AccordionButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme === 'light' ? '#0F172A' : '#FFFFFF'};
  transition: background-color 200ms ease-in-out;

  &:focus-visible {
    outline: 2px solid #3B82F6;
    outline-offset: -2px;
    border-radius: 5px;
  }

  &:hover {
    background-color: ${props => props.theme === 'light' ? '#F1F5F9' : '#27272A'};
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme === 'light' ? '#0F172A' : '#D4D4D8'};
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 8px;
  color: ${props => props.theme === 'light' ? '#0F172A' : '#D4D4D8'};
`;

const ChevronIcon = styled(ChevronDown)`
  flex-shrink: 0;
  margin-left: 16px;
  margin-top: 4px;
  width: 20px;
  height: 20px;
  color: ${props => props.theme === 'light' ? '#0F172A' : '#D4D4D8'};
  transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 200ms ease-in-out;
`;

const Content = styled.div`
  padding: ${props => props.isExpanded ? '16px' : '0 16px'};
  height: ${props => props.isExpanded ? 'auto' : '0'};
  opacity: ${props => props.isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 200ms ease-in-out;
`;

const ContentText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: ${props => props.theme === 'light' ? '#334155' : '#D4D4D8'};
`;

const AccordionItem = ({
  title,
  subtitle,
  content,
  isExpanded,
  onToggle,
  theme = 'light',
  disabled = false,
  id
}) => {
  const headerId = `accordion-header-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <AccordionItemContainer 
      theme={theme} 
      disabled={disabled}
      role="presentation"
    >
      <AccordionButton
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        id={headerId}
        theme={theme}
        disabled={disabled}
        aria-disabled={disabled}
      >
        <ContentWrapper>
          <Title theme={theme}>{title}</Title>
        </ContentWrapper>
        <ChevronIcon 
          theme={theme} 
          isExpanded={isExpanded}
          aria-hidden="true"
        />
      </AccordionButton>
      <Content 
        theme={theme} 
        isExpanded={isExpanded}
        role="region"
        aria-labelledby={headerId}
        id={panelId}
      >
        {subtitle && (
          <Subtitle theme={theme} id={`${panelId}-subtitle`}>
            {subtitle}
          </Subtitle>
        )}
        <ContentText theme={theme}>{content}</ContentText>
      </Content>
    </AccordionItemContainer>
  );
};

const Accordion = ({
  items,
  theme = 'light',
  disabled = false
}) => {
  const accordionId = React.useId();
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (id) => {
    if (disabled) return;
    
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (prev.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <AccordionContainer role="presentation">
      <GroupContainer 
        theme={theme} 
        disabled={disabled}
        role="list"
        aria-label="Accordion"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
            id={`${accordionId}-${item.id}`}
            theme={theme}
            isExpanded={expandedItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
            disabled={disabled}
          />
        ))}
      </GroupContainer>
    </AccordionContainer>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  disabled: PropTypes.bool
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      content: PropTypes.string.isRequired
    })
  ).isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  columns: PropTypes.number,
  disabled: PropTypes.bool
};

export default Accordion;