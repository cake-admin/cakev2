import React, { useState } from 'react';
import styled from 'styled-components';
import Alert, { 
  ALERT_TYPES, 
  ALERT_VARIANTS, 
  ALERT_SEVERITIES, 
  ALERT_THEMES, 
  ALERT_POSITIONS 
} from '../components/design-system/Alert';
import InlineAlert from '../components/design-system/InlineAlert';
import Button, { BUTTON_VARIANTS, BUTTON_SIZES } from '../components/design-system/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
  font-size: 1.5rem;
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
  font-size: 0.875rem;
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
  font-size: 0.875rem;
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
  accent-color: #3B82F6;
`;



const PreviewContainer = styled.div`
  background: ${props => props.theme === ALERT_THEMES.DARK ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;





const AlertPage = () => {
  const [variant, setVariant] = useState(ALERT_VARIANTS.SIMPLE);
  const [severity, setSeverity] = useState(ALERT_SEVERITIES.INFO);
  const [theme, setTheme] = useState(ALERT_THEMES.LIGHT);
  const [position, setPosition] = useState(ALERT_POSITIONS.BOTTOM_CENTER);
  const [title, setTitle] = useState('Alert Title');
  const [message, setMessage] = useState('This is an alert message that provides important information to the user.');
  const [dismissible, setDismissible] = useState(false);
  const [autoDismiss, setAutoDismiss] = useState(true);
  const [autoDismissTime, setAutoDismissTime] = useState(3000);
  const [showActions, setShowActions] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastPosition, setToastPosition] = useState(ALERT_POSITIONS.BOTTOM_CENTER);
  const [toastId, setToastId] = useState(0);

  // Inline alert state
  const [inlineVariant, setInlineVariant] = useState(ALERT_VARIANTS.SIMPLE);
  const [inlineSeverity, setInlineSeverity] = useState(ALERT_SEVERITIES.INFO);
  const [inlineTheme, setInlineTheme] = useState(ALERT_THEMES.LIGHT);
  const [inlineTitle, setInlineTitle] = useState('Inline Alert Title');
  const [inlineMessage, setInlineMessage] = useState('This is an inline alert message that appears within the page content.');
  const [inlineDismissible, setInlineDismissible] = useState(false);
  const [inlineShowActions, setInlineShowActions] = useState(true);

  const handleDismiss = () => {
    console.log('Alert dismissed');
  };

  const handleAction = (action) => {
    console.log('Action clicked:', action);
  };

  const showToastRight = () => {
    setShowToast(false); // First hide any existing toast
    setTimeout(() => {
      setToastPosition(ALERT_POSITIONS.BOTTOM_RIGHT);
      setToastId(prev => prev + 1);
      setShowToast(true);
    }, 50); // Small delay to ensure clean unmount/remount
  };

  const showToastCentered = () => {
    setShowToast(false); // First hide any existing toast
    setTimeout(() => {
      setToastPosition(ALERT_POSITIONS.BOTTOM_CENTER);
      setToastId(prev => prev + 1);
      setShowToast(true);
    }, 50); // Small delay to ensure clean unmount/remount
  };

  const actions = variant === ALERT_VARIANTS.SIMPLE ? [
    { label: 'Secondary', variant: 'secondary' },
    { label: 'Primary', variant: 'primary' }
  ] : showActions ? [
    { label: 'Tertiary', variant: 'tertiary' },
    { label: 'Secondary', variant: 'secondary' },
    { label: 'Primary', variant: 'primary' }
  ] : [];

  const inlineActions = inlineVariant === ALERT_VARIANTS.SIMPLE ? [
    { label: 'Secondary', variant: 'secondary' },
    { label: 'Primary', variant: 'primary' }
  ] : inlineShowActions ? [
    { label: 'Tertiary', variant: 'tertiary' },
    { label: 'Secondary', variant: 'secondary' },
    { label: 'Primary', variant: 'primary' }
  ] : [];

  const timestamp = null; // Let the component generate dynamic timestamp

  return (
    <PageContainer>
      <Header>
        <Title>Alert</Title>
        <Description>
          The Alert Component is a versatile UI element designed to deliver important messages, notifications, warnings, or feedback to users in an efficient and visually appealing manner. It serves as a crucial part of our design system, ensuring consistent and effective communication across all digital platforms.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Toast Alert</SectionTitle>
        <Description style={{ marginBottom: '32px' }}>
          The Toast Alert Component is a lightweight and non-intrusive UI element designed to display transient messages or notifications to users. It appears briefly and automatically fades away, providing timely feedback without disrupting the user's workflow.
        </Description>
        <ControlsGrid>
          <Control>
            <Label>Variant</Label>
            <Select value={variant} onChange={(e) => setVariant(e.target.value)}>
              <option value={ALERT_VARIANTS.SIMPLE}>Simple</option>
              <option value={ALERT_VARIANTS.ADVANCED}>Advanced</option>
            </Select>
          </Control>

          <Control>
            <Label>Severity</Label>
            <Select value={severity} onChange={(e) => setSeverity(e.target.value)}>
              <option value={ALERT_SEVERITIES.INFO}>Info</option>
              <option value={ALERT_SEVERITIES.SUCCESS}>Success</option>
              <option value={ALERT_SEVERITIES.WARNING}>Warning</option>
              <option value={ALERT_SEVERITIES.ERROR}>Error</option>
            </Select>
          </Control>

          {variant === ALERT_VARIANTS.ADVANCED && (
            <Control>
              <Label>Show Actions</Label>
              <Select 
                value={showActions ? 'yes' : 'no'} 
                onChange={(e) => setShowActions(e.target.value === 'yes')}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </Select>
            </Control>
          )}

          <Control>
            <Label>Theme</Label>
            <Select 
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value={ALERT_THEMES.LIGHT}>Light.a</option>
              <option value={ALERT_THEMES.DARK}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <div style={{ marginBottom: '24px', display: 'flex', gap: '12px' }}>
          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            size={BUTTON_SIZES.MEDIUM}
            onClick={showToastRight}
            disabled={showToast}
            label="Show toast right"
          />
          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            size={BUTTON_SIZES.MEDIUM}
            onClick={showToastCentered}
            disabled={showToast}
            label="Show toast centered"
          />
        </div>

        <PreviewContainer theme={theme}>
          <Alert
            type={ALERT_TYPES.INLINE}
            variant={variant}
            severity={severity}
            theme={theme}
            title={title}
            message={message}
            dismissible={true}
            keepVisible={true}
            onDismiss={handleDismiss}
            onAction={handleAction}
            actions={actions}
            timestamp={timestamp}
          />
        </PreviewContainer>
        
        {showToast && (
          <Alert
            key={toastId}
            type={ALERT_TYPES.TOAST}
            variant={variant}
            severity={severity}
            theme={theme}
            position={toastPosition}
            title={title}
            message={message}
            dismissible={dismissible}
            autoDismiss={true}
            autoDismissTime={3000}
            onDismiss={() => {
              setShowToast(false);
            }}
            onAction={handleAction}
            actions={actions}
            timestamp={timestamp}
          />
        )}
      </Section>

      <Section>
        <SectionTitle>Inline Alert</SectionTitle>
        <Description style={{ marginBottom: '32px' }}>
          The Inline Alert Component is a lightweight UI element designed to provide contextual feedback or notifications within a block of content. It seamlessly integrates into your interface, allowing you to convey important information without disrupting the user's workflow.
        </Description>
        <ControlsGrid>
          <Control>
            <Label>Variant</Label>
            <Select value={inlineVariant} onChange={(e) => setInlineVariant(e.target.value)}>
              <option value={ALERT_VARIANTS.SIMPLE}>Simple</option>
              <option value={ALERT_VARIANTS.ADVANCED}>Advanced</option>
            </Select>
          </Control>

          <Control>
            <Label>Severity</Label>
            <Select value={inlineSeverity} onChange={(e) => setInlineSeverity(e.target.value)}>
              <option value={ALERT_SEVERITIES.INFO}>Info</option>
              <option value={ALERT_SEVERITIES.SUCCESS}>Success</option>
              <option value={ALERT_SEVERITIES.WARNING}>Warning</option>
              <option value={ALERT_SEVERITIES.ERROR}>Error</option>
            </Select>
          </Control>

          {inlineVariant === ALERT_VARIANTS.ADVANCED && (
            <Control>
              <Label>Show Actions</Label>
              <Select 
                value={inlineShowActions ? 'yes' : 'no'} 
                onChange={(e) => setInlineShowActions(e.target.value === 'yes')}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </Select>
            </Control>
          )}

          <Control>
            <Label>Theme</Label>
            <Select 
              value={inlineTheme}
              onChange={(e) => setInlineTheme(e.target.value)}
            >
              <option value={ALERT_THEMES.LIGHT}>Light.a</option>
              <option value={ALERT_THEMES.DARK}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewContainer theme={inlineTheme}>
          <InlineAlert
            variant={inlineVariant}
            severity={inlineSeverity}
            theme={inlineTheme}
            title={inlineTitle}
            message={inlineMessage}
            dismissible={true}
            keepVisible={true}
            onDismiss={handleDismiss}
            onAction={handleAction}
            actions={inlineActions}
            timestamp={timestamp}
          />
        </PreviewContainer>
      </Section>

      <Section>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', color: '#0F172A' }}>Usage Guidelines</h3>
        <Description style={{ marginBottom: '32px' }}>
          Inline alerts are designed to be integrated seamlessly within your content. Here are some common usage patterns and examples.
        </Description>
        
        <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          <div>
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid #E2E8F0', 
              borderRadius: '8px', 
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '1.125rem', fontWeight: '600', color: '#0F172A' }}>
                Example 1
              </h3>
              <p style={{ margin: '0 0 24px 0', color: '#475569', lineHeight: '1.5' }}>
                Use an informational Inline Alert to inform users that a setting is disabled because it is already configured in Windows Settings. Include a button for users to navigate directly to the relevant setting for customization.
              </p>
              
              <hr style={{ 
                border: 'none', 
                height: '1px', 
                background: '#E2E8F0', 
                margin: '0 0 24px 0' 
              }} />
              
              <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: '600', color: '#0F172A' }}>
                Section title
              </h4>
              <p style={{ margin: '0 0 16px 0', color: '#475569', lineHeight: '1.5', fontSize: '0.875rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <InlineAlert
                variant={ALERT_VARIANTS.ADVANCED}
                severity={ALERT_SEVERITIES.INFO}
                theme={ALERT_THEMES.LIGHT}
                title="Title"
                message="Use an informational Inline Alert to inform users that a setting is disabled because it is already configured in Windows Settings. Include a button for users to navigate directly to the relevant setting for customization."
                dismissible={false}
                keepVisible={true}
                actions={[
                  { 
                    label: 'Open in Windows Settings', 
                    variant: 'primary',
                    icon: <OpenInNewIcon style={{ fontSize: '16px' }} />
                  }
                ]}
              />
            </div>
          </div>

          <div>
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid #E2E8F0', 
              borderRadius: '8px', 
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '1.125rem', fontWeight: '600', color: '#0F172A' }}>
                Example 2
              </h3>
              <p style={{ margin: '0 0 24px 0', color: '#475569', lineHeight: '1.5' }}>
                Use a warning Inline Alert to draw attention to critical information about a feature or section.
              </p>
              
              <hr style={{ 
                border: 'none', 
                height: '1px', 
                background: '#E2E8F0', 
                margin: '0 0 24px 0' 
              }} />
              
              <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: '600', color: '#0F172A' }}>
                Section title
              </h4>
              <p style={{ margin: '0 0 16px 0', color: '#475569', lineHeight: '1.5', fontSize: '0.875rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <InlineAlert
                variant={ALERT_VARIANTS.SIMPLE}
                severity={ALERT_SEVERITIES.WARNING}
                theme={ALERT_THEMES.LIGHT}
                title=""
                message="This feature is currently in beta and may have limited functionality. Please report any issues you encounter."
                dismissible={false}
                keepVisible={true}
                actions={[]}
              />
            </div>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
};

export default AlertPage;
