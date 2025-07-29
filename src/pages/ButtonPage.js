import React, { useState } from 'react';
import styled from 'styled-components';
import Button, { BUTTON_VARIANTS, BUTTON_SIZES, ICON_POSITIONS, BUTTON_STYLES } from '../components/design-system/Button';

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
  font-size: 1.5rem; /* 24px */
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

const PreviewSection = styled.div`
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const STATES = {
  DISABLED: 'disabled',
  LOADING: 'loading'
};

const ButtonPage = () => {
  const [size, setSize] = useState(BUTTON_SIZES.MEDIUM);
  const [iconPosition, setIconPosition] = useState(ICON_POSITIONS.NONE);
  const [state, setState] = useState('');
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const [buttonStyle, setButtonStyle] = useState(BUTTON_STYLES.PILL);

  const isDarkMode = theme === THEMES.DARK_A;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const getButtonLabel = () => {
    return (variant) => {
      const variantName = variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase();
      return iconPosition !== ICON_POSITIONS.NONE ? `${variantName} with icon` : variantName;
    };
  };

  return (
    <PageContainer>
      <Header>
        <Title>Button</Title>
        <Description>
          The Button Component is a fundamental element of the user interface used for triggering actions, 
          navigating between pages, or submitting forms. It provides a clear call-to-action and enhances 
          user interaction within the application or website.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic Button</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Size</Label>
            <Select value={size} onChange={(e) => setSize(e.target.value)}>
              {Object.values(BUTTON_SIZES).map((size) => (
                <option key={size} value={size}>{capitalizeFirstLetter(size)}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Icon Position</Label>
            <Select value={iconPosition} onChange={(e) => setIconPosition(e.target.value)}>
              <option value={ICON_POSITIONS.NONE}>No Icon</option>
              <option value={ICON_POSITIONS.LEFT}>Left Icon</option>
              <option value={ICON_POSITIONS.RIGHT}>Right Icon</option>
            </Select>
          </Control>

          <Control>
            <Label>Style</Label>
            <Select value={buttonStyle} onChange={(e) => setButtonStyle(e.target.value)}>
              <option value={BUTTON_STYLES.PILL}>Pill</option>
              <option value={BUTTON_STYLES.SQUARE}>Square</option>
            </Select>
          </Control>

          <Control>
            <Label>State</Label>
            <Select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">None</option>
              <option value={STATES.DISABLED}>Disabled</option>
              <option value={STATES.LOADING}>Loading</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isDarkMode}>
          {Object.values(BUTTON_VARIANTS).map((variant) => (
            <Button
              key={variant}
              variant={variant}
              size={size}
              iconPosition={iconPosition}
              buttonStyle={buttonStyle}
              label={getButtonLabel()(variant)}
              disabled={state === STATES.DISABLED}
              loading={state === STATES.LOADING}
              isDarkMode={isDarkMode}
            />
          ))}
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default ButtonPage; 