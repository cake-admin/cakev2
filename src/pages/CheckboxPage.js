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

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px;
  border: 1px solid #F1F5F9;
  border-radius: 6px;
  background-color: #FAFAFA;
`;

const CheckboxLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
  min-width: 120px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background-color: ${props => props.theme === CHECKBOX_THEMES.DARK ? '#1E293B' : '#FFFFFF'};
  color: ${props => props.theme === CHECKBOX_THEMES.DARK ? '#F1F5F9' : '#0F172A'};
`;

const ThemeTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${props => props.theme === CHECKBOX_THEMES.DARK ? '#F1F5F9' : '#0F172A'};
`;

const PropsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const PropsHeader = styled.th`
  text-align: left;
  padding: 12px;
  background: #F8FAFC;
  border-bottom: 1px solid #E2E8F0;
  font-weight: 600;
  color: #0F172A;
`;

const PropsCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #E2E8F0;
  font-size: 14px;
  color: #475569;
`;

const CodeBlock = styled.pre`
  background: #1E293B;
  color: #F1F5F9;
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
`;

const CheckboxPage = () => {
  const [state, setState] = useState(CHECKBOX_STATES.UNCHECKED);
  const [theme, setTheme] = useState(CHECKBOX_THEMES.LIGHT);
  const [size, setSize] = useState(CHECKBOX_SIZES.MEDIUM);
  const [disabled, setDisabled] = useState(false);
  const [labelText, setLabelText] = useState('Label');
  const [customChecked, setCustomChecked] = useState(false);
  const [customIndeterminate, setCustomIndeterminate] = useState(false);

  const getCheckboxProps = () => {
    const props = {
      label: labelText,
      disabled: disabled,
      theme: theme,
      size: size,
    };

    if (state === CHECKBOX_STATES.CHECKED) {
      props.checked = true;
    } else if (state === CHECKBOX_STATES.INDETERMINATE) {
      props.indeterminate = true;
    } else {
      props.checked = false;
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
            <Label>Size</Label>
            <Select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value={CHECKBOX_SIZES.SMALL}>Small</option>
              <option value={CHECKBOX_SIZES.MEDIUM}>Medium</option>
              <option value={CHECKBOX_SIZES.LARGE}>Large</option>
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

          <Control>
            <Label>
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
              />
              {' '}Disabled
            </Label>
          </Control>
        </ControlsGrid>

        <CheckboxContainer>
          <Checkbox {...getCheckboxProps()} />
        </CheckboxContainer>
      </Section>

      <Section>
        <SectionTitle>All States</SectionTitle>
        <CheckboxContainer>
          <CheckboxRow>
            <CheckboxLabel>Unchecked:</CheckboxLabel>
            <Checkbox label="Label" />
          </CheckboxRow>

          <CheckboxRow>
            <CheckboxLabel>Checked:</CheckboxLabel>
            <Checkbox label="Label" checked={true} />
          </CheckboxRow>

          <CheckboxRow>
            <CheckboxLabel>Indeterminate:</CheckboxLabel>
            <Checkbox label="Label" indeterminate={true} />
          </CheckboxRow>

          <CheckboxRow>
            <CheckboxLabel>Disabled Unchecked:</CheckboxLabel>
            <Checkbox label="Label" disabled={true} />
          </CheckboxRow>

          <CheckboxRow>
            <CheckboxLabel>Disabled Checked:</CheckboxLabel>
            <Checkbox label="Label" checked={true} disabled={true} />
          </CheckboxRow>

          <CheckboxRow>
            <CheckboxLabel>Disabled Indeterminate:</CheckboxLabel>
            <Checkbox label="Label" indeterminate={true} disabled={true} />
          </CheckboxRow>
        </CheckboxContainer>
      </Section>

      <Section>
        <SectionTitle>Theme Comparison</SectionTitle>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <ThemeContainer theme={CHECKBOX_THEMES.LIGHT}>
            <ThemeTitle theme={CHECKBOX_THEMES.LIGHT}>Light Theme</ThemeTitle>
            <CheckboxGroup>
              <Checkbox label="Label" />
              <Checkbox label="Label" checked={true} />
              <Checkbox label="Label" indeterminate={true} />
              <Checkbox label="Label" disabled={true} />
              <Checkbox label="Label" checked={true} disabled={true} />
            </CheckboxGroup>
          </ThemeContainer>

          <ThemeContainer theme={CHECKBOX_THEMES.DARK}>
            <ThemeTitle theme={CHECKBOX_THEMES.DARK}>Dark Theme</ThemeTitle>
            <CheckboxGroup>
              <Checkbox label="Label" theme={CHECKBOX_THEMES.DARK} />
              <Checkbox label="Label" checked={true} theme={CHECKBOX_THEMES.DARK} />
              <Checkbox label="Label" indeterminate={true} theme={CHECKBOX_THEMES.DARK} />
              <Checkbox label="Label" disabled={true} theme={CHECKBOX_THEMES.DARK} />
              <Checkbox label="Label" checked={true} disabled={true} theme={CHECKBOX_THEMES.DARK} />
            </CheckboxGroup>
          </ThemeContainer>
        </div>
      </Section>

      <Section>
        <SectionTitle>Interactive Examples</SectionTitle>
        <CheckboxContainer>
          <CheckboxGroup>
            <Checkbox
              label="Accept terms and conditions"
              checked={customChecked}
              onChange={(e) => setCustomChecked(e.target.checked)}
            />
            
            <Checkbox
              label="Subscribe to newsletter"
              checked={customIndeterminate}
              indeterminate={customIndeterminate}
              onChange={(e) => setCustomIndeterminate(e.target.checked)}
            />
            
            <Checkbox
              label="Enable notifications"
              disabled={true}
            />
          </CheckboxGroup>
        </CheckboxContainer>
      </Section>

      <Section>
        <SectionTitle>Props</SectionTitle>
        <PropsTable>
          <thead>
            <tr>
              <PropsHeader>Prop</PropsHeader>
              <PropsHeader>Type</PropsHeader>
              <PropsHeader>Default</PropsHeader>
              <PropsHeader>Description</PropsHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <PropsCell>checked</PropsCell>
              <PropsCell>boolean</PropsCell>
              <PropsCell>false</PropsCell>
              <PropsCell>Whether the checkbox is checked</PropsCell>
            </tr>
            <tr>
              <PropsCell>indeterminate</PropsCell>
              <PropsCell>boolean</PropsCell>
              <PropsCell>false</PropsCell>
              <PropsCell>Whether the checkbox is in indeterminate state (shows dash)</PropsCell>
            </tr>
            <tr>
              <PropsCell>disabled</PropsCell>
              <PropsCell>boolean</PropsCell>
              <PropsCell>false</PropsCell>
              <PropsCell>Whether the checkbox is disabled</PropsCell>
            </tr>
            <tr>
              <PropsCell>label</PropsCell>
              <PropsCell>string</PropsCell>
              <PropsCell>'Label'</PropsCell>
              <PropsCell>Text label displayed next to the checkbox</PropsCell>
            </tr>
            <tr>
              <PropsCell>theme</PropsCell>
              <PropsCell>string</PropsCell>
              <PropsCell>'light'</PropsCell>
              <PropsCell>Theme variant: 'light' or 'dark'</PropsCell>
            </tr>
            <tr>
              <PropsCell>size</PropsCell>
              <PropsCell>string</PropsCell>
              <PropsCell>'medium'</PropsCell>
              <PropsCell>Size variant: 'small', 'medium', or 'large'</PropsCell>
            </tr>
            <tr>
              <PropsCell>onChange</PropsCell>
              <PropsCell>function</PropsCell>
              <PropsCell>-</PropsCell>
              <PropsCell>Callback fired when checkbox state changes</PropsCell>
            </tr>
            <tr>
              <PropsCell>onFocus</PropsCell>
              <PropsCell>function</PropsCell>
              <PropsCell>-</PropsCell>
              <PropsCell>Callback fired when checkbox receives focus</PropsCell>
            </tr>
            <tr>
              <PropsCell>onBlur</PropsCell>
              <PropsCell>function</PropsCell>
              <PropsCell>-</PropsCell>
              <PropsCell>Callback fired when checkbox loses focus</PropsCell>
            </tr>
          </tbody>
        </PropsTable>
      </Section>

      <Section>
        <SectionTitle>Usage Examples</SectionTitle>
        <CheckboxContainer>
          <SectionTitle style={{ fontSize: '16px', marginBottom: '12px' }}>Basic Usage</SectionTitle>
          <CodeBlock>{`import Checkbox from '../components/design-system/Checkbox';

// Controlled component
const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Accept terms"
/>`}</CodeBlock>

          <SectionTitle style={{ fontSize: '16px', marginBottom: '12px', marginTop: '24px' }}>Indeterminate State</SectionTitle>
          <CodeBlock>{`// For "select all" functionality
const [indeterminate, setIndeterminate] = useState(false);

<Checkbox
  indeterminate={indeterminate}
  onChange={(e) => setIndeterminate(e.target.checked)}
  label="Select all items"
/>`}</CodeBlock>

          <SectionTitle style={{ fontSize: '16px', marginBottom: '12px', marginTop: '24px' }}>Theme and Size</SectionTitle>
          <CodeBlock>{`// With theme and size variants
<Checkbox
  label="Custom checkbox"
  theme="dark"
  size="large"
  checked={true}
/>`}</CodeBlock>
        </CheckboxContainer>
      </Section>

      <Section>
        <SectionTitle>Accessibility</SectionTitle>
        <CheckboxContainer>
          <CheckboxGroup>
            <div>
              <strong>Keyboard Navigation:</strong>
              <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                <li>Tab to focus the checkbox</li>
                <li>Space to toggle the checkbox state</li>
                <li>Enter to toggle the checkbox state</li>
              </ul>
            </div>
            
            <div style={{ marginTop: '16px' }}>
              <strong>Screen Reader Support:</strong>
              <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                <li>Proper label association with input element</li>
                <li>ARIA attributes for all states (checked, indeterminate, disabled)</li>
                <li>Clear announcement of state changes</li>
              </ul>
            </div>
          </CheckboxGroup>
        </CheckboxContainer>
      </Section>
    </PageContainer>
  );
};

export default CheckboxPage; 