import React, { useState } from 'react';
import styled from 'styled-components';
import TextField, { TEXTFIELD_THEMES, TEXTFIELD_STATES } from '../components/design-system/TextField.tsx';
import TextArea, { TEXTAREA_THEMES, TEXTAREA_STATES } from '../components/design-system/TextArea.tsx';

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

const StyledSelect = styled.select`
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

const PreviewSection = styled.div`
  background: ${props => props.$isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.$isDarkMode ? '#52525B' : '#E2E8F0'};
`;

const InputContainer = styled.div`
  width: 320px;
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const STATES = {
  DEFAULT: 'default',
  FOCUSED: 'focused',
  ERROR: 'error',
  SUCCESS: 'success',
  DISABLED: 'disabled'
};

const TextInputsPage = () => {
  // Text field section state
  const [textFieldState, setTextFieldState] = useState(STATES.DEFAULT);
  const [textFieldTheme, setTextFieldTheme] = useState(THEMES.LIGHT_A);
  const [textFieldHasLabel, setTextFieldHasLabel] = useState(true);
  const [textFieldRequired, setTextFieldRequired] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState('');
  const isTextFieldDarkMode = textFieldTheme === THEMES.DARK_A;

  // Text area section state
  const [textAreaState, setTextAreaState] = useState(STATES.DEFAULT);
  const [textAreaTheme, setTextAreaTheme] = useState(THEMES.LIGHT_A);
  const [textAreaRows, setTextAreaRows] = useState(4);
  const [textAreaResize, setTextAreaResize] = useState('vertical');
  const [textAreaHasLabel, setTextAreaHasLabel] = useState(true);
  const [textAreaRequired, setTextAreaRequired] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const isTextAreaDarkMode = textAreaTheme === THEMES.DARK_A;

  const getTextFieldProps = () => {
    const props = {
      placeholder: 'Enter text...',
      value: textFieldValue,
      onChange: setTextFieldValue,
      theme: textFieldTheme,
      state: textFieldState === STATES.DEFAULT ? undefined : textFieldState,
    };

    if (textFieldHasLabel) {
      props.label = 'Label';
    }

    if (textFieldRequired) {
      props.required = true;
    }

    if (textFieldState === STATES.ERROR) {
      props.error = true;
      props.errorMessage = 'Error message';
    }

    if (textFieldState === STATES.SUCCESS) {
      props.success = true;
      props.successMessage = 'Success message';
    }

    if (textFieldState === STATES.DISABLED) {
      props.disabled = true;
    }

    return props;
  };

  const getTextAreaProps = () => {
    const props = {
      placeholder: 'Enter text...',
      value: textAreaValue,
      onChange: setTextAreaValue,
      theme: textAreaTheme,
      state: textAreaState === STATES.DEFAULT ? undefined : textAreaState,
      rows: textAreaRows,
      resize: textAreaResize,
    };

    if (textAreaHasLabel) {
      props.label = 'Label';
    }

    if (textAreaRequired) {
      props.required = true;
    }

    if (textAreaState === STATES.ERROR) {
      props.error = true;
      props.errorMessage = 'Error message';
    }

    if (textAreaState === STATES.SUCCESS) {
      props.success = true;
      props.successMessage = 'Success message';
    }

    if (textAreaState === STATES.DISABLED) {
      props.disabled = true;
    }

    return props;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <PageContainer>
      <Header>
        <Title>Text Inputs</Title>
        <Description>
          Text field and text area components for form inputs with support for labels, helper text, error states, and validation. These components provide consistent styling and behavior across different themes and states.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Text field</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>State</Label>
            <StyledSelect value={textFieldState} onChange={(e) => setTextFieldState(e.target.value)}>
              <option value={STATES.DEFAULT}>Default</option>
              <option value={STATES.FOCUSED}>Focused</option>
              <option value={STATES.ERROR}>Error</option>
              <option value={STATES.SUCCESS}>Success</option>
              <option value={STATES.DISABLED}>Disabled</option>
            </StyledSelect>
          </Control>

          <Control>
            <Label>Has Label</Label>
            <StyledSelect value={textFieldHasLabel} onChange={(e) => setTextFieldHasLabel(e.target.value === 'true')}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </StyledSelect>
          </Control>

          <Control>
            <Label>Required</Label>
            <StyledSelect value={textFieldRequired} onChange={(e) => setTextFieldRequired(e.target.value === 'true')}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </StyledSelect>
          </Control>

          <Control>
            <Label>Theme</Label>
            <StyledSelect value={textFieldTheme} onChange={(e) => setTextFieldTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </StyledSelect>
          </Control>
        </ControlsGrid>

        <PreviewSection $isDarkMode={isTextFieldDarkMode}>
          <InputContainer>
            <TextField {...getTextFieldProps()} />
          </InputContainer>
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Text area</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>State</Label>
            <StyledSelect value={textAreaState} onChange={(e) => setTextAreaState(e.target.value)}>
              <option value={STATES.DEFAULT}>Default</option>
              <option value={STATES.FOCUSED}>Focused</option>
              <option value={STATES.ERROR}>Error</option>
              <option value={STATES.SUCCESS}>Success</option>
              <option value={STATES.DISABLED}>Disabled</option>
            </StyledSelect>
          </Control>

          <Control>
            <Label>Rows</Label>
            <StyledSelect value={textAreaRows} onChange={(e) => setTextAreaRows(parseInt(e.target.value))}>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </StyledSelect>
          </Control>

          <Control>
            <Label>Resize</Label>
            <StyledSelect value={textAreaResize} onChange={(e) => setTextAreaResize(e.target.value)}>
              <option value="none">None</option>
              <option value="vertical">Vertical</option>
              <option value="horizontal">Horizontal</option>
              <option value="both">Both</option>
            </StyledSelect>
          </Control>

          <Control>
            <Label>Has Label</Label>
            <StyledSelect value={textAreaHasLabel} onChange={(e) => setTextAreaHasLabel(e.target.value === 'true')}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </StyledSelect>
          </Control>

          <Control>
            <Label>Required</Label>
            <StyledSelect value={textAreaRequired} onChange={(e) => setTextAreaRequired(e.target.value === 'true')}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </StyledSelect>
          </Control>

          <Control>
            <Label>Theme</Label>
            <StyledSelect value={textAreaTheme} onChange={(e) => setTextAreaTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </StyledSelect>
          </Control>
        </ControlsGrid>

        <PreviewSection $isDarkMode={isTextAreaDarkMode}>
          <InputContainer>
            <TextArea {...getTextAreaProps()} />
          </InputContainer>
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default TextInputsPage;
