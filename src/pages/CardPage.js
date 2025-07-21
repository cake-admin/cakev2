import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/design-system/Card';
import Button from '../components/design-system/Button';

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
  color: #111827;
  margin: 0 0 8px 0;
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: #6b7280;
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
  color: #374151;
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
  color: #374151;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const CardPage = () => {
  const [cardConfig, setCardConfig] = useState({
    variant: 'default',
    elevated: false,
    hoverable: false,
    compact: false,
    showHeader: true,
    showFooter: true,
    title: 'Card Title',
    subtitle: 'Card subtitle with additional information',
    content: 'This is the main content area of the card. It can contain any type of content including text, images, forms, or other components.'
  });

  const handleConfigChange = (key, value) => {
    setCardConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const generateCode = () => {
    const props = [];
    if (cardConfig.variant !== 'default') props.push(`variant="${cardConfig.variant}"`);
    if (cardConfig.elevated) props.push('elevated');
    if (cardConfig.hoverable) props.push('hoverable');
    if (cardConfig.compact) props.push('compact');
    
    const propsString = props.length > 0 ? ` ${props.join(' ')}` : '';
    
    let code = `<Card${propsString}>`;
    
    if (cardConfig.showHeader) {
      code += `\n  <Card.Header${cardConfig.compact ? ' compact' : ''}>
    <Card.Title>${cardConfig.title}</Card.Title>
    <Card.Subtitle>${cardConfig.subtitle}</Card.Subtitle>
  </Card.Header>`;
    }
    
    code += `\n  <Card.Body${cardConfig.compact ? ' compact' : ''}>
    ${cardConfig.content}
  </Card.Body>`;
    
    if (cardConfig.showFooter) {
      code += `\n  <Card.Footer${cardConfig.compact ? ' compact' : ''}>
    <Button size="small">Action</Button>
  </Card.Footer>`;
    }
    
    code += '\n</Card>';
    
    return code;
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Card</PageTitle>
        <PageSubtitle>
          Content containers with various layouts and interactive states. Cards are used to group 
          related content and actions into a single, cohesive unit.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Interactive Example</SectionTitle>
        <SectionDescription>
          Customize the card below to see how different properties affect its appearance and behavior.
        </SectionDescription>

        <ExampleContainer>
          <ControlsContainer>
            <ControlsGrid>
              <ControlGroup>
                <ControlLabel>Variant</ControlLabel>
                <ControlSelect
                  value={cardConfig.variant}
                  onChange={(e) => handleConfigChange('variant', e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="outlined">Outlined</option>
                  <option value="elevated">Elevated</option>
                </ControlSelect>
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Title</ControlLabel>
                <input
                  type="text"
                  value={cardConfig.title}
                  onChange={(e) => handleConfigChange('title', e.target.value)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Subtitle</ControlLabel>
                <input
                  type="text"
                  value={cardConfig.subtitle}
                  onChange={(e) => handleConfigChange('subtitle', e.target.value)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Content</ControlLabel>
                <textarea
                  value={cardConfig.content}
                  onChange={(e) => handleConfigChange('content', e.target.value)}
                  rows={3}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </ControlGroup>
            </ControlsGrid>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={cardConfig.elevated}
                  onChange={(e) => handleConfigChange('elevated', e.target.checked)}
                />
                Elevated
              </CheckboxLabel>

              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={cardConfig.hoverable}
                  onChange={(e) => handleConfigChange('hoverable', e.target.checked)}
                />
                Hoverable
              </CheckboxLabel>

              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={cardConfig.compact}
                  onChange={(e) => handleConfigChange('compact', e.target.checked)}
                />
                Compact
              </CheckboxLabel>

              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={cardConfig.showHeader}
                  onChange={(e) => handleConfigChange('showHeader', e.target.checked)}
                />
                Show Header
              </CheckboxLabel>

              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={cardConfig.showFooter}
                  onChange={(e) => handleConfigChange('showFooter', e.target.checked)}
                />
                Show Footer
              </CheckboxLabel>
            </div>
          </ControlsContainer>

          <div style={{ marginBottom: '24px' }}>
            <Card
              variant={cardConfig.variant}
              elevated={cardConfig.elevated}
              hoverable={cardConfig.hoverable}
              compact={cardConfig.compact}
            >
              {cardConfig.showHeader && (
                <Card.Header compact={cardConfig.compact}>
                  <Card.Title>{cardConfig.title}</Card.Title>
                  <Card.Subtitle>{cardConfig.subtitle}</Card.Subtitle>
                </Card.Header>
              )}
              
              <Card.Body compact={cardConfig.compact}>
                {cardConfig.content}
              </Card.Body>
              
              {cardConfig.showFooter && (
                <Card.Footer compact={cardConfig.compact}>
                  <Button size="small">Action</Button>
                </Card.Footer>
              )}
            </Card>
          </div>

          <CodeBlock>{generateCode()}</CodeBlock>
        </ExampleContainer>
      </Section>

      <Section>
        <SectionTitle>Variants</SectionTitle>
        <SectionDescription>
          Cards come in different variants to match various design contexts and use cases.
        </SectionDescription>

        <VariantGrid>
          <Card>
            <Card.Header>
              <Card.Title>Default Card</Card.Title>
              <Card.Subtitle>Standard card with subtle shadow</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <p>This is the default card variant with a subtle border and shadow.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="small">Learn More</Button>
            </Card.Footer>
          </Card>

          <Card variant="outlined">
            <Card.Header>
              <Card.Title>Outlined Card</Card.Title>
              <Card.Subtitle>Clean border without shadow</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <p>This variant uses a prominent border instead of a shadow for a cleaner look.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="small" variant="outline">View Details</Button>
            </Card.Footer>
          </Card>

          <Card variant="elevated">
            <Card.Header>
              <Card.Title>Elevated Card</Card.Title>
              <Card.Subtitle>Enhanced shadow for emphasis</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <p>This variant has a more prominent shadow to create visual hierarchy.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="small">Get Started</Button>
            </Card.Footer>
          </Card>
        </VariantGrid>
      </Section>

      <Section>
        <SectionTitle>Interactive States</SectionTitle>
        <SectionDescription>
          Cards can be made interactive with hover effects and click handlers.
        </SectionDescription>

        <CardGrid>
          <Card hoverable onClick={() => alert('Card clicked!')}>
            <Card.Header>
              <Card.Title>Hoverable Card</Card.Title>
              <Card.Subtitle>Try hovering over this card</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <p>This card has a hover effect that lifts it slightly and enhances the shadow.</p>
            </Card.Body>
          </Card>

          <Card elevated hoverable onClick={() => alert('Elevated card clicked!')}>
            <Card.Header>
              <Card.Title>Elevated + Hoverable</Card.Title>
              <Card.Subtitle>Combined effects for emphasis</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <p>This card combines both elevated styling and hover interactions.</p>
            </Card.Body>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>
        <SectionDescription>
          Follow these guidelines to ensure effective card usage across your application.
        </SectionDescription>

        <CardGrid>
          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Content Grouping</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Use cards to group related content, actions, and information into logical units 
                that are easy to scan and understand.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Visual Hierarchy</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Use different card variants and elevations to create visual hierarchy and 
                guide users' attention to important content.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Consistent Spacing</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Maintain consistent spacing between cards and within card content to create 
                a clean, organized layout.
              </p>
            </Card.Body>
          </Card>
        </CardGrid>
      </Section>
    </PageContainer>
  );
};

export default CardPage; 