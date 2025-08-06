import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox, { CHECKBOX_STATES, CHECKBOX_THEMES, CHECKBOX_SIZES } from '../components/design-system/Checkbox';

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

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background-color: #FFFFFF;
`;



const CheckboxPage = () => {
  const [state, setState] = useState(CHECKBOX_STATES.UNCHECKED);
  const [theme, setTheme] = useState(CHECKBOX_THEMES.LIGHT);
  const [labelText, setLabelText] = useState('Label');


  const [interactiveChecked, setInteractiveChecked] = useState(false);

  const getCheckboxProps = () => {
    const props = {
      label: labelText,
      theme: theme,
    };

    if (state === CHECKBOX_STATES.CHECKED) {
      props.checked = true;
    } else if (state === CHECKBOX_STATES.INDETERMINATE) {
      props.indeterminate = true;
    } else if (state === 'disabled-unchecked') {
      props.disabled = true;
    } else if (state === 'disabled-checked') {
      props.checked = true;
      props.disabled = true;
    } else if (state === 'disabled-indeterminate') {
      props.indeterminate = true;
      props.disabled = true;
    } else {
      props.checked = false;
    }

    // Add interactive functionality for non-disabled states
    if (!props.disabled) {
      props.checked = interactiveChecked;
      props.onChange = (e) => setInteractiveChecked(e.target.checked);
    }

    return props;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <PageContainer>
      <Header>
        <Title>Checkbox</Title>
        <Description>
          Interactive checkbox component for form inputs, selections, and toggles with support for checked, unchecked, indeterminate, and disabled states. The checkbox component follows accessibility best practices and includes proper ARIA attributes for screen readers.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Live Preview</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>State</Label>
            <Select value={state} onChange={(e) => setState(e.target.value)}>
              <option value={CHECKBOX_STATES.UNCHECKED}>Unchecked</option>
              <option value={CHECKBOX_STATES.CHECKED}>Checked</option>
              <option value={CHECKBOX_STATES.INDETERMINATE}>Indeterminate</option>
              <option value="disabled-unchecked">Disabled Unchecked</option>
              <option value="disabled-checked">Disabled Checked</option>
              <option value="disabled-indeterminate">Disabled Indeterminate</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={CHECKBOX_THEMES.LIGHT}>Light</option>
              <option value={CHECKBOX_THEMES.DARK}>Dark</option>
            </Select>
          </Control>

          <Control>
            <Label>Label Text</Label>
            <Input
              type="text"
              value={labelText}
              onChange={(e) => setLabelText(e.target.value)}
              placeholder="Enter label text"
            />
          </Control>
        </ControlsGrid>

        <CheckboxContainer>
          <Checkbox {...getCheckboxProps()} />
        </CheckboxContainer>
      </Section>


    </PageContainer>
  );
};

export default CheckboxPage; 