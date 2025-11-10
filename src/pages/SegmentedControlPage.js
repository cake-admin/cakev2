import React, { useState } from 'react';
import styled from 'styled-components';
import SegmentedControl, { SEGMENTED_CONTROL_MODES, SEGMENTED_CONTROL_THEMES } from '../components/design-system/SegmentedControl.js';

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

const PreviewSection = styled.div`
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ExampleLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.isDarkMode ? '#D4D4D8' : '#0F172A'};
  margin: 0;
`;

const SegmentedControlPage = () => {
  const [mode, setMode] = useState(SEGMENTED_CONTROL_MODES.RADIO);
  const [theme, setTheme] = useState(SEGMENTED_CONTROL_THEMES.LIGHT);
  const [isDisabled, setIsDisabled] = useState(false);
  
  // Radio mode state
  const [radioValue, setRadioValue] = useState('option1');
  
  // Checkbox mode state
  const [checkboxValues, setCheckboxValues] = useState(['option1']);

  const isDarkMode = theme === SEGMENTED_CONTROL_THEMES.DARK;

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' }
  ];

  return (
    <PageContainer>
      <Header>
        <Title>Segmented Control</Title>
        <Description>
          A segmented control component that displays Radio or Checkbox components in a segmented layout. 
          Supports both single selection (radio mode) and multiple selection (checkbox mode) with full 
          accessibility support and theme variants.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Interactive Example</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Mode</Label>
            <Select value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value={SEGMENTED_CONTROL_MODES.RADIO}>Radio (Single Selection)</option>
              <option value={SEGMENTED_CONTROL_MODES.CHECKBOX}>Checkbox (Multiple Selection)</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={SEGMENTED_CONTROL_THEMES.LIGHT}>Light.a</option>
              <option value={SEGMENTED_CONTROL_THEMES.DARK}>Dark.a</option>
            </Select>
          </Control>

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
        </ControlsGrid>

        <PreviewSection isDarkMode={isDarkMode}>
          <ExampleContainer>
            <ExampleLabel isDarkMode={isDarkMode}>
              {mode === SEGMENTED_CONTROL_MODES.RADIO ? 'Radio Mode (Single Selection)' : 'Checkbox Mode (Multiple Selection)'}
            </ExampleLabel>
            {mode === SEGMENTED_CONTROL_MODES.RADIO ? (
              <SegmentedControl
                mode={SEGMENTED_CONTROL_MODES.RADIO}
                options={options}
                value={radioValue}
                onChange={(value) => setRadioValue(value)}
                theme={theme}
                disabled={isDisabled}
                name="segmented-radio-example"
              />
            ) : (
              <SegmentedControl
                mode={SEGMENTED_CONTROL_MODES.CHECKBOX}
                options={options}
                values={checkboxValues}
                onChange={(values) => setCheckboxValues(values)}
                theme={theme}
                disabled={isDisabled}
              />
            )}
          </ExampleContainer>
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default SegmentedControlPage;

