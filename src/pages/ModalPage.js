import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/design-system/Modal';
import Button from '../components/design-system/Button';
import Card from '../components/design-system/Card';

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

const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const ModalExample = styled.div`
  text-align: center;
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #ffffff;
`;

const ModalPage = () => {
  const [modalConfig, setModalConfig] = useState({
    title: 'Modal Title',
    subtitle: 'Modal subtitle with additional information',
    size: 'medium',
    showCloseButton: true,
    showBorder: true,
    footerAlign: 'flex-end',
    content: 'This is the modal content. You can put any content here including forms, text, or other components.'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfigChange = (key, value) => {
    setModalConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const generateCode = () => {
    const props = [];
    if (modalConfig.size !== 'medium') props.push(`size="${modalConfig.size}"`);
    if (!modalConfig.showCloseButton) props.push('showCloseButton={false}');
    if (!modalConfig.showBorder) props.push('showBorder={false}');
    if (modalConfig.footerAlign !== 'flex-end') props.push(`footerAlign="${modalConfig.footerAlign}"`);
    
    const propsString = props.length > 0 ? ` ${props.join(' ')}` : '';
    
    return `<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="${modalConfig.title}"
  subtitle="${modalConfig.subtitle}"${propsString}
  footer={
    <div>
      <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
        Cancel
      </Button>
      <Button onClick={() => setIsModalOpen(false)}>
        Confirm
      </Button>
    </div>
  }
>
  ${modalConfig.content}
</Modal>`;
  };

  const sizes = ['small', 'medium', 'large'];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Modal</PageTitle>
        <PageSubtitle>
          Overlay dialogs with backdrop and keyboard navigation. Modals are used to present 
          important information or actions that require user attention.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Interactive Example</SectionTitle>
        <SectionDescription>
          Customize the modal below to see how different properties affect its appearance and behavior.
        </SectionDescription>

        <ExampleContainer>
          <ControlsContainer>
            <ControlsGrid>
              <ControlGroup>
                <ControlLabel>Title</ControlLabel>
                <input
                  type="text"
                  value={modalConfig.title}
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
                  value={modalConfig.subtitle}
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
                <ControlLabel>Size</ControlLabel>
                <ControlSelect
                  value={modalConfig.size}
                  onChange={(e) => handleConfigChange('size', e.target.value)}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </ControlSelect>
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Footer Alignment</ControlLabel>
                <ControlSelect
                  value={modalConfig.footerAlign}
                  onChange={(e) => handleConfigChange('footerAlign', e.target.value)}
                >
                  <option value="flex-start">Left</option>
                  <option value="center">Center</option>
                  <option value="flex-end">Right</option>
                </ControlSelect>
              </ControlGroup>

              <ControlGroup>
                <ControlLabel>Content</ControlLabel>
                <textarea
                  value={modalConfig.content}
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
                  checked={modalConfig.showCloseButton}
                  onChange={(e) => handleConfigChange('showCloseButton', e.target.checked)}
                />
                Show Close Button
              </CheckboxLabel>

              <CheckboxLabel>
                <ControlCheckbox
                  type="checkbox"
                  checked={modalConfig.showBorder}
                  onChange={(e) => handleConfigChange('showBorder', e.target.checked)}
                />
                Show Border
              </CheckboxLabel>
            </div>
          </ControlsContainer>

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Button size="large" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
          </div>

          <CodeBlock>{generateCode()}</CodeBlock>
        </ExampleContainer>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalConfig.title}
          subtitle={modalConfig.subtitle}
          size={modalConfig.size}
          showCloseButton={modalConfig.showCloseButton}
          showBorder={modalConfig.showBorder}
          footerAlign={modalConfig.footerAlign}
          footer={
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </div>
          }
        >
          {modalConfig.content}
        </Modal>
      </Section>

      <Section>
        <SectionTitle>Modal Sizes</SectionTitle>
        <SectionDescription>
          Choose from three different sizes to match your content and layout needs.
        </SectionDescription>

        <ModalGrid>
          {sizes.map(size => (
            <ModalExample key={size}>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>
                {size.charAt(0).toUpperCase() + size.slice(1)} Modal
              </h3>
              <p style={{ margin: '0 0 16px 0', color: '#6b7280' }}>
                {size === 'small' && 'Compact modal for simple confirmations'}
                {size === 'medium' && 'Standard modal for most use cases'}
                {size === 'large' && 'Spacious modal for complex content'}
              </p>
              <Button onClick={() => {
                setModalConfig(prev => ({ ...prev, size }));
                setIsModalOpen(true);
              }}>
                Open {size.charAt(0).toUpperCase() + size.slice(1)} Modal
              </Button>
            </ModalExample>
          ))}
        </ModalGrid>
      </Section>

      <Section>
        <SectionTitle>Modal Examples</SectionTitle>
        <SectionDescription>
          Different types of modals for various use cases and scenarios.
        </SectionDescription>

        <ModalGrid>
          <ModalExample>
            <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Confirmation Modal</h3>
            <p style={{ margin: '0 0 16px 0', color: '#6b7280' }}>
              Use for confirming destructive actions or important decisions.
            </p>
            <Button variant="danger" onClick={() => {
              setModalConfig(prev => ({
                ...prev,
                title: 'Delete Item',
                subtitle: 'This action cannot be undone.',
                content: 'Are you sure you want to delete this item? This action cannot be undone.',
                size: 'small'
              }));
              setIsModalOpen(true);
            }}>
              Show Confirmation
            </Button>
          </ModalExample>

          <ModalExample>
            <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Form Modal</h3>
            <p style={{ margin: '0 0 16px 0', color: '#6b7280' }}>
              Use for collecting user input in a focused environment.
            </p>
            <Button onClick={() => {
              setModalConfig(prev => ({
                ...prev,
                title: 'Create New Item',
                subtitle: 'Fill out the form below to create a new item.',
                content: (
                  <div>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter name..."
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                        Description
                      </label>
                      <textarea
                        placeholder="Enter description..."
                        rows={3}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          resize: 'vertical'
                        }}
                      />
                    </div>
                  </div>
                ),
                size: 'medium'
              }));
              setIsModalOpen(true);
            }}>
              Show Form
            </Button>
          </ModalExample>

          <ModalExample>
            <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Content Modal</h3>
            <p style={{ margin: '0 0 16px 0', color: '#6b7280' }}>
              Use for displaying detailed information or complex content.
            </p>
            <Button onClick={() => {
              setModalConfig(prev => ({
                ...prev,
                title: 'Detailed Information',
                subtitle: 'View comprehensive details about this item.',
                content: (
                  <div>
                    <h4 style={{ margin: '0 0 12px 0', color: '#111827' }}>Overview</h4>
                    <p style={{ margin: '0 0 16px 0', color: '#6b7280', lineHeight: '1.6' }}>
                      This is a detailed view with comprehensive information about the selected item. 
                      It includes multiple sections and can contain any type of content including text, 
                      images, tables, or other components.
                    </p>
                    <h4 style={{ margin: '0 0 12px 0', color: '#111827' }}>Details</h4>
                    <ul style={{ margin: '0 0 16px 0', color: '#6b7280', lineHeight: '1.6' }}>
                      <li>Feature 1: Description of the first feature</li>
                      <li>Feature 2: Description of the second feature</li>
                      <li>Feature 3: Description of the third feature</li>
                    </ul>
                    <h4 style={{ margin: '0 0 12px 0', color: '#111827' }}>Summary</h4>
                    <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.6' }}>
                      This modal demonstrates how to display rich content with proper formatting and structure.
                    </p>
                  </div>
                ),
                size: 'large'
              }));
              setIsModalOpen(true);
            }}>
              Show Content
            </Button>
          </ModalExample>
        </ModalGrid>
      </Section>

      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>
        <SectionDescription>
          Follow these guidelines to ensure effective modal usage across your application.
        </SectionDescription>

        <CardGrid>
          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Clear Purpose</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Ensure the modal has a clear, focused purpose. Avoid using modals for content 
                that could be displayed inline or on a separate page.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Accessible Design</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Always provide a way to close the modal (close button, escape key, backdrop click) 
                and ensure proper focus management.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Appropriate Size</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Choose the modal size based on content complexity. Use small for confirmations, 
                medium for forms, and large for detailed content.
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

export default ModalPage; 