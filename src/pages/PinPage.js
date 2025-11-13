import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Pin, { PIN_STATES, PIN_THEMES } from '../components/design-system/Pin.js';

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 48px;
`;

const Title = styled.h1`
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

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`;

const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #0F172A;
`;

const Select = styled.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`;

const PinContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${props => props.theme === PIN_THEMES.DARK ? '#52525B' : '#E2E8F0'};
  border-radius: 8px;
  background-color: ${props => props.theme === PIN_THEMES.DARK ? '#18181B' : '#FFFFFF'};
`;

const PinPreview = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const PinPage = () => {
  const [state, setState] = useState('rest');
  const [theme, setTheme] = useState(PIN_THEMES.LIGHT);
  const [isPinned, setIsPinned] = useState(false);

  // Memoize onClick handler to avoid stale closures
  // Use functional update to always get the latest state
  const handlePinClick = useCallback(() => {
    setIsPinned(prev => !prev);
  }, []); // Empty deps because we use functional update

  const getPinProps = () => {
    const props = {
      isPinned: isPinned,
      theme: theme,
    };

    if (state === 'disabled') {
      props.disabled = true;
    } else {
      props.disabled = false;
      props.state = state;
      props.onClick = handlePinClick;
    }

    return props;
  };

  return (
    <PageContainer>
      <Header>
        <Title>Pin</Title>
        <Description>
          Interactive pin component for marking items as pinned or unpinned. The pin component supports all interaction states including rest, hovered, focus, and disabled states, with support for both light and dark themes.
        </Description>
      </Header>

      <Section>
        <ControlsGrid>
          <Control>
            <Label>State</Label>
            <Select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="rest">Rest</option>
              <option value="hover">Hover</option>
              <option value="focus">Focus</option>
              <option value="disabled">Disabled</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={PIN_THEMES.LIGHT}>Light.a</option>
              <option value={PIN_THEMES.DARK}>Dark.a</option>
            </Select>
          </Control>

          <Control>
            <Label>Pin State</Label>
            <Select value={isPinned ? 'pinned' : 'unpinned'} onChange={(e) => setIsPinned(e.target.value === 'pinned')}>
              <option value="unpinned">Unpinned</option>
              <option value="pinned">Pinned</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PinContainer theme={theme}>
          <PinPreview>
            <Pin {...getPinProps()} />
          </PinPreview>
        </PinContainer>
      </Section>
    </PageContainer>
  );
};

export default PinPage;

