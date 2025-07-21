import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/design-system/Button';
import Card from '../components/design-system/Card';

const PageContainer = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 60px 0px 120px 0px;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  color: #171717;
  font-family: "Segoe UI", system-ui, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 24px;
  margin: 0;
`;

const PageDescription = styled.p`
  color: #334155;
  font-family: "Segoe UI", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 16px 0;
`;

const DeveloperNote = styled.p`
  color: #334155;
  font-family: "Segoe UI", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 24px 0;
  
  strong {
    font-weight: 600;
  }
  
  a {
    color: #1D4ED8;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Section = styled.section`
  padding: 16px 0px;
`;

const SectionTitle = styled.h2`
  color: #334155;
  font-family: "Segoe UI", system-ui, sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 16px 0;
`;

const SectionDescription = styled.p`
  color: #334155;
  font-family: "Segoe UI", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 32px 0;
`;

const ExampleContainer = styled.div`
  background: #ffffff;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
`;

const ControlsContainer = styled.div`
  background: #f9fafb;
  border: 1px solid #E2E8F0;
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
  color: #374151;
  font-family: "Segoe UI", system-ui, sans-serif;
`;

const ControlSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background: #ffffff;
  font-family: "Segoe UI", system-ui, sans-serif;
  
  &:focus {
    outline: none;
    border-color: #1D4ED8;
    box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);
  }
`;

const ControlCheckbox = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  font-family: "Segoe UI", system-ui, sans-serif;
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

const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
`;

const VariantExample = styled.div`
  text-align: center;
`;

const VariantLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: "Segoe UI", system-ui, sans-serif;
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
  font-family: "Segoe UI", system-ui, sans-serif;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const ButtonPage = () => {
  const [buttonConfig, setButtonConfig] = useState({
    variant: 'primary',
    size: 'medium',
    disabled: false,
    text: 'Button Text'
  });

  const handleConfigChange = (key, value) => {
    setButtonConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const generateCode = () => {
    const props = [];
    if (buttonConfig.variant !== 'primary') props.push(`variant="${buttonConfig.variant}"`);
    if (buttonConfig.size !== 'medium') props.push(`size="${buttonConfig.size}"`);
    if (buttonConfig.disabled) props.push('disabled');
    
    const propsString = props.length > 0 ? ` ${props.join(' ')}` : '';
    
    return `<Button${propsString}>
  ${buttonConfig.text}
</Button>`;
  };

  const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger'];
  const sizes = ['small', 'medium', 'large'];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Button</PageTitle>
        <DeveloperNote>
          <strong>Developers</strong> - Detailed specifications for this component are available in the{' '}
          <a href="https://www.figma.com/design/BCCMpyKHRRpKWoe3jAtd35/%F0%9F%8E%82-Cake?node-id=22922-14411" target="_blank" rel="noopener noreferrer">
            Button
          </a>{' '}
          section in Figma.
        </DeveloperNote>
        <PageDescription>
          The Button Component is a fundamental element of the user interface used for triggering actions, 
          navigating between pages, or submitting forms. It provides a clear call-to-action and enhances 
          user interaction within the application or website.
        </PageDescription>
      </PageHeader>

      <Section>
        <SectionTitle>Basic</SectionTitle>
        <SectionDescription>
          Basic button examples with different variants and sizes.
        </SectionDescription>

        <ExampleContainer>
          <ControlsContainer>
            <ControlsGrid>
              <ControlGroup>
                <ControlLabel>Variant</ControlLabel>
                <ControlSelect
                  value={buttonConfig.variant}
                  onChange={(e) => handleConfigChange('variant', e.target.value)}
                >
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="outline">Outline</option>
                  <option value="ghost">Ghost</option>
                  <option value="danger">Danger</option>
                </ControlSelect>
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Size</ControlLabel>
                <ControlSelect
                  value={buttonConfig.size}
                  onChange={(e) => handleConfigChange('size', e.target.value)}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </ControlSelect>
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Button Text</ControlLabel>
                <input
                  type="text"
                  value={buttonConfig.text}
                  onChange={(e) => handleConfigChange('text', e.target.value)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontFamily: '"Segoe UI", system-ui, sans-serif'
                  }}
                />
              </ControlGroup>

              <ControlGroup>
                <CheckboxLabel>
                  <ControlCheckbox
                    type="checkbox"
                    checked={buttonConfig.disabled}
                    onChange={(e) => handleConfigChange('disabled', e.target.checked)}
                  />
                  Disabled
                </CheckboxLabel>
              </ControlGroup>
            </ControlsGrid>
          </ControlsContainer>

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Button
              variant={buttonConfig.variant}
              size={buttonConfig.size}
              disabled={buttonConfig.disabled}
              onClick={() => alert('Button clicked!')}
            >
              {buttonConfig.text}
            </Button>
          </div>

          <CodeBlock>{generateCode()}</CodeBlock>
        </ExampleContainer>
      </Section>

      <Section>
        <SectionTitle>Variations</SectionTitle>
        <SectionDescription>
          Buttons come in different variants to match various use cases and contexts.
        </SectionDescription>

        <VariantGrid>
          {variants.map(variant => (
            <VariantExample key={variant}>
              <VariantLabel>{variant}</VariantLabel>
              <Button variant={variant}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
              </Button>
            </VariantExample>
          ))}
        </VariantGrid>
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
              <Button size={size}>
                {size.charAt(0).toUpperCase() + size.slice(1)} Button
              </Button>
            </SizeExample>
          ))}
        </SizeGrid>
      </Section>

      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>
        <SectionDescription>
          Follow these guidelines to ensure consistent and effective button usage across your application.
        </SectionDescription>

        <CardGrid>
          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827', fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: '14px', fontWeight: '600' }}>Primary Actions</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5', fontFamily: '"Segoe UI", Helvetica, sans-serif', fontSize: '14px' }}>
                Use primary buttons for the main action on a page or form. There should typically 
                be only one primary button per view.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827', fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: '14px', fontWeight: '600' }}>Secondary Actions</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5', fontFamily: '"Segoe UI", Helvetica, sans-serif', fontSize: '14px' }}>
                Use secondary, outline, or ghost buttons for less important actions or to provide 
                alternative options.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827', fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: '14px', fontWeight: '600' }}>Danger Actions</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5', fontFamily: '"Segoe UI", Helvetica, sans-serif', fontSize: '14px' }}>
                Use danger buttons for destructive actions like delete or remove. Always provide 
                confirmation before executing dangerous actions.
              </p>
            </Card.Body>
          </Card>
        </CardGrid>
      </Section>
    </PageContainer>
  );
};

export default ButtonPage; 