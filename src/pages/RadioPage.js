import React, { useState } from 'react';
import styled from 'styled-components';
import Radio, { RADIO_STATES, RADIO_THEMES, RADIO_SIZES } from '../components/design-system/Radio';

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
  font-size: 16px;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
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

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
`;

const PreviewSection = styled.div`
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RadioRow = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const RadioPage = () => {
  const [size, setSize] = useState(RADIO_SIZES.MEDIUM);
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const [label, setLabel] = useState('Label');
  const [isDisabled, setIsDisabled] = useState(false);
  const [showFocus, setShowFocus] = useState(false);
  const [showHover, setShowHover] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [groupValue, setGroupValue] = useState('option1');

  const isDarkMode = theme === THEMES.DARK_A;

  return (
    <PageContainer>
      <Header>
        <Title>Radio</Title>
        <Description>
          The Radio Component is used for single-choice selections from multiple options. It provides a clean, 
          accessible interface for mutually exclusive choices with support for various states, themes, and sizes.
        </Description>
      </Header>

      <Section>
        <ControlsGrid>
          <Control>
            <Label>State</Label>
            <Select 
              value={isDisabled ? 'disabled' : 'default'}
              onChange={(e) => setIsDisabled(e.target.value === 'disabled')}
            >
              <option value="default">Default</option>
              <option value="disabled">Disabled</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select 
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>


        </ControlsGrid>

        <PreviewSection isDarkMode={isDarkMode}>
          <div>
            <Radio
              size={size}
              theme={theme}
              label={label}
              disabled={isDisabled}
              checked={selectedValue === 'option1'}
              onChange={(e) => setSelectedValue(e.target.checked ? 'option1' : '')}
              value="option1"
              name="single-radio"
            />
          </div>




        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default RadioPage;

