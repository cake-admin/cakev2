import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/design-system/Input';
import Card from '../components/design-system/Card';
import colorData from '../data/colors.json';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${colorData.slate[900]};
  margin: 0 0 8px 0;
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  color: ${colorData.slate[700]};
  margin: 0;
  line-height: 1.5;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${colorData.slate[900]};
  margin: 0 0 16px 0;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: ${colorData.slate[700]};
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

const ExampleContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
`;

const ControlsContainer = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
`;

const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`;

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ControlLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${colorData.slate[700]};
`;

const ControlSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const ControlCheckbox = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${colorData.slate[700]};
  cursor: pointer;
`;

const CodeBlock = styled.pre`
  background: #1f2937;
  color: #f9fafb;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  margin: 24px 0;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const StateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const StateExample = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
`;

const StateLabel = styled.div`
  font-size: 12px;
  color: ${colorData.slate[700]};
  margin-bottom: 12px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const SizeGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const SizeExample = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SizeLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  min-width: 80px;
`;

const InputPage = () => {
  const [inputConfig, setInputConfig] = useState({
    label: 'Input Label',
    placeholder: 'Enter your text here...',
    size: 'medium',
    disabled: false,
    required: false,
    error: false,
    success: false,
    helperText: '',
    type: 'text'
  });

  const handleConfigChange = (key, value) => {
    setInputConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const generateCode = () => {
    const props = [];
    if (inputConfig.size !== 'medium') props.push(`size="${inputConfig.size}"`);
    if (inputConfig.disabled) props.push('disabled');
    if (inputConfig.required) props.push('required');
    if (inputConfig.error) props.push('error');
    if (inputConfig.success) props.push('success');
    if (inputConfig.type !== 'text') props.push(`type="${inputConfig.type}"`);
    if (inputConfig.helperText) props.push(`helperText="${inputConfig.helperText}"`);
    
    const propsString = props.length > 0 ? ` ${props.join(' ')}` : '';
    
    return `<Input
  label="${inputConfig.label}"
  placeholder="${inputConfig.placeholder}"${propsString}
/>`;
  };

  const sizes = ['small', 'medium', 'large'];
  const types = ['text', 'email', 'password', 'number', 'tel', 'url'];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Input</PageTitle>
        <PageSubtitle>
          Form inputs with validation states and helper text. Inputs are used to collect 
          user data and provide feedback on the input state.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Interactive Example</SectionTitle>
        <SectionDescription>
          Customize the input below to see how different properties affect its appearance and behavior.
        </SectionDescription>

        <ExampleContainer>
          <ControlsContainer>
            <ControlsGrid>
              <ControlGroup>
                <ControlLabel>Label</ControlLabel>
                <input
                  type="text"
                  value={inputConfig.label}
                  onChange={(e) => handleConfigChange('label', e.target.value)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Placeholder</ControlLabel>
                <input
                  type="text"
                  value={inputConfig.placeholder}
                  onChange={(e) => handleConfigChange('placeholder', e.target.value)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Size</ControlLabel>
                <ControlSelect
                  value={inputConfig.size}
                  onChange={(e) => handleConfigChange('size', e.target.value)}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </ControlSelect>
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Type</ControlLabel>
                <ControlSelect
                  value={inputConfig.type}
                  onChange={(e) => handleConfigChange('type', e.target.value)}
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </ControlSelect>
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Helper Text</ControlLabel>
                <input
                  type="text"
                  value={inputConfig.helperText}
                  onChange={(e) => handleConfigChange('helperText', e.target.value)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </ControlGroup>
            </ControlsGrid>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={inputConfig.disabled}
                  onChange={(e) => handleConfigChange('disabled', e.target.checked)}
                />
                Disabled
              </CheckboxLabel>

              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={inputConfig.required}
                  onChange={(e) => handleConfigChange('required', e.target.checked)}
                />
                Required
              </CheckboxLabel>

              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={inputConfig.error}
                  onChange={(e) => {
                    handleConfigChange('error', e.target.checked);
                    if (e.target.checked) {
                      handleConfigChange('success', false);
                    }
                  }}
                />
                Error State
              </CheckboxLabel>

              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={inputConfig.success}
                  onChange={(e) => {
                    handleConfigChange('success', e.target.checked);
                    if (e.target.checked) {
                      handleConfigChange('error', false);
                    }
                  }}
                />
                Success State
              </CheckboxLabel>
            </div>
          </ControlsContainer>

          <div style={{ marginBottom: '24px' }}>
            <Input
              label={inputConfig.label}
              placeholder={inputConfig.placeholder}
              size={inputConfig.size}
              disabled={inputConfig.disabled}
              required={inputConfig.required}
              error={inputConfig.error}
              success={inputConfig.success}
              helperText={inputConfig.helperText}
              type={inputConfig.type}
            />
          </div>

          <CodeBlock>{generateCode()}</CodeBlock>
        </ExampleContainer>
      </Section>

      <Section>
        <SectionTitle>Input States</SectionTitle>
        <SectionDescription>
          Inputs can be in different states to provide feedback to users about their input.
        </SectionDescription>

        <StateGrid>
          <StateExample>
            <StateLabel>Default</StateLabel>
            <Input
              label="Default Input"
              placeholder="Enter your text..."
            />
          </StateExample>

          <StateExample>
            <StateLabel>Focused</StateLabel>
            <Input
              label="Focused Input"
              placeholder="Click to focus..."
              autoFocus
            />
          </StateExample>

          <StateExample>
            <StateLabel>Error</StateLabel>
            <Input
              label="Error Input"
              placeholder="Invalid input..."
              error
              helperText="This field is required"
            />
          </StateExample>

          <StateExample>
            <StateLabel>Success</StateLabel>
            <Input
              label="Success Input"
              placeholder="Valid input..."
              success
              helperText="Input is valid"
            />
          </StateExample>

          <StateExample>
            <StateLabel>Disabled</StateLabel>
            <Input
              label="Disabled Input"
              placeholder="Cannot edit..."
              disabled
            />
          </StateExample>

          <StateExample>
            <StateLabel>Required</StateLabel>
            <Input
              label="Required Input"
              placeholder="This field is required..."
              required
            />
          </StateExample>
        </StateGrid>
      </Section>

      <Section>
        <SectionTitle>Sizes</SectionTitle>
        <SectionDescription>
          Choose from three different sizes to match your layout and hierarchy needs.
        </SectionDescription>

        <SizeGrid>
          {sizes.map(size => (
            <SizeExample key={size}>
              <SizeLabel>{size}:</SizeLabel>
              <Input
                label={`${size.charAt(0).toUpperCase() + size.slice(1)} Input`}
                placeholder={`${size} input...`}
                size={size}
              />
            </SizeExample>
          ))}
        </SizeGrid>
      </Section>

      <Section>
        <SectionTitle>Input Types</SectionTitle>
        <SectionDescription>
          Different input types provide appropriate validation and user experience for various data types.
        </SectionDescription>

        <InputGrid>
          {types.map(type => (
            <Input
              key={type}
              label={`${type.charAt(0).toUpperCase() + type.slice(1)} Input`}
              placeholder={`Enter ${type}...`}
              type={type}
              helperText={`Use this for ${type} data`}
            />
          ))}
        </InputGrid>
      </Section>

      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>
        <SectionDescription>
          Follow these guidelines to ensure effective input usage across your application.
        </SectionDescription>

        <CardGrid>
          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Clear Labels</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Always provide clear, descriptive labels that explain what information is expected 
                in the input field.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Helpful Placeholders</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Use placeholder text to provide examples or additional guidance about the expected input format.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Validation Feedback</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Provide immediate feedback through error and success states to help users understand 
                their input status.
              </p>
            </Card.Body>
          </Card>
        </CardGrid>
      </Section>
    </PageContainer>
  );
};

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

export default InputPage; 