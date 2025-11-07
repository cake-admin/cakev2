import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle, { TOGGLE_THEMES, TOGGLE_STATES } from '../components/design-system/Toggle';

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

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${props => props.theme === TOGGLE_THEMES.DARK ? '#52525B' : '#E2E8F0'};
  border-radius: 8px;
  background-color: ${props => props.theme === TOGGLE_THEMES.DARK ? '#18181B' : '#FFFFFF'};
`;

const TogglePage = () => {
  const [state, setState] = useState('Enabled');
  const [theme, setTheme] = useState(TOGGLE_THEMES.LIGHT);
  const [isOn, setIsOn] = useState(false);

  const getToggleProps = () => {
    const props = {
      label: 'Label',
      theme: theme,
      checked: isOn,
    };

    if (state === 'Disabled') {
      props.disabled = true;
    } else {
      props.disabled = false;
      props.onChange = (e) => {
        setIsOn(e.target.checked);
      };
    }

    return props;
  };

  return (
    <PageContainer>
      <Header>
        <Title>Toggle</Title>
        <Description>
          Interactive toggle switch component for binary choices and settings. The toggle component supports all interaction states including enabled, hovered, pressed, focus, and disabled states, with support for both light and dark themes.
        </Description>
      </Header>

      <Section>
        <ControlsGrid>
          <Control>
            <Label>State</Label>
            <Select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="Enabled">Enabled</option>
              <option value="Hovered">Hovered</option>
              <option value="Pressed">Pressed</option>
              <option value="Focus">Focus</option>
              <option value="Disabled">Disabled</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={TOGGLE_THEMES.LIGHT}>Light.a</option>
              <option value={TOGGLE_THEMES.DARK}>Dark.a</option>
            </Select>
          </Control>

          <Control>
            <Label>Toggle State</Label>
            <Select value={isOn ? 'on' : 'off'} onChange={(e) => setIsOn(e.target.value === 'on')}>
              <option value="off">Off</option>
              <option value="on">On</option>
            </Select>
          </Control>
        </ControlsGrid>

        <ToggleContainer theme={theme}>
          <Toggle {...getToggleProps()} />
        </ToggleContainer>
      </Section>
    </PageContainer>
  );
};

export default TogglePage;

