import React, { useState } from 'react';
import styled from 'styled-components';
import Alert, { 
  ALERT_TYPES, 
  ALERT_VARIANTS, 
  ALERT_SEVERITIES, 
  ALERT_THEMES, 
  ALERT_POSITIONS 
} from '../components/design-system/Alert';

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
  accent-color: #3B82F6;
`;

const PreviewContainer = styled.div`
  background: ${props => props.theme === ALERT_THEMES.DARK ? '#1E293B' : '#F8FAFC'};
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 32px;
  min-height: 200px;
  position: relative;
  transition: background-color 0.3s ease;
`;

const ThemeToggle = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px 16px;
  background: #3B82F6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #2563EB;
  }
`;

const PropsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 24px;
`;

const PropsHeader = styled.th`
  text-align: left;
  padding: 12px;
  background: #F1F5F9;
  border: 1px solid #E2E8F0;
  font-weight: 600;
  color: #0F172A;
`;

const PropsCell = styled.td`
  padding: 12px;
  border: 1px solid #E2E8F0;
  color: #475569;
  font-size: 14px;
`;

const CodeBlock = styled.pre`
  background: #1E293B;
  color: #E2E8F0;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.5;
`;

const AlertPage = () => {
  const [alertType, setAlertType] = useState(ALERT_TYPES.INLINE);
  const [variant, setVariant] = useState(ALERT_VARIANTS.SIMPLE);
  const [severity, setSeverity] = useState(ALERT_SEVERITIES.INFO);
  const [theme, setTheme] = useState(ALERT_THEMES.LIGHT);
  const [position, setPosition] = useState(ALERT_POSITIONS.TOP_RIGHT);
  const [title, setTitle] = useState('Alert Title');
  const [message, setMessage] = useState('This is an alert message that provides important information to the user.');
  const [dismissible, setDismissible] = useState(false);
  const [autoDismiss, setAutoDismiss] = useState(false);
  const [autoDismissTime, setAutoDismissTime] = useState(5000);
  const [showActions, setShowActions] = useState(false);

  const handleDismiss = () => {
    console.log('Alert dismissed');
  };

  const handleAction = (action) => {
    console.log('Action clicked:', action);
  };

  const actions = showActions ? [
    { label: 'Tertiary', variant: 'tertiary' },
    { label: 'Secondary', variant: 'secondary' },
    { label: 'Primary', variant: 'primary' }
  ] : [];

  const timestamp = variant === ALERT_VARIANTS.ADVANCED ? '01/01/2024 • 9:00 AM' : null;

  const getPropsTable = () => {
    const props = [
      { name: 'type', type: 'string', default: 'inline', description: 'Type of alert (toast or inline)' },
      { name: 'variant', type: 'string', default: 'simple', description: 'Variant of alert (simple or advanced)' },
      { name: 'severity', type: 'string', default: 'info', description: 'Severity level (success, warning, error, info)' },
      { name: 'theme', type: 'string', default: 'light.a', description: 'Theme (light.a or dark.a)' },
      { name: 'position', type: 'string', default: 'top-right', description: 'Position for toast alerts' },
      { name: 'title', type: 'string', default: '', description: 'Alert title' },
      { name: 'message', type: 'string', default: '', description: 'Alert message' },
      { name: 'dismissible', type: 'boolean', default: 'false', description: 'Whether alert can be dismissed' },
      { name: 'autoDismiss', type: 'boolean', default: 'false', description: 'Auto-dismiss for toast alerts' },
      { name: 'autoDismissTime', type: 'number', default: '5000', description: 'Auto-dismiss time in milliseconds' },
      { name: 'onDismiss', type: 'function', default: '', description: 'Callback when alert is dismissed' },
      { name: 'onAction', type: 'function', default: '', description: 'Callback when action is clicked' },
      { name: 'actions', type: 'array', default: '[]', description: 'Array of action buttons' },
      { name: 'timestamp', type: 'string', default: '', description: 'Timestamp for advanced variant' }
    ];

    return props;
  };

  return (
    <PageContainer>
      <Header>
        <Title>Alert</Title>
        <Description>
          Alert components provide feedback to users about important information, success states, warnings, or errors. 
          They can be displayed as inline alerts within content or as toast notifications that appear temporarily.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Live Preview</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Alert Type</Label>
            <Select value={alertType} onChange={(e) => setAlertType(e.target.value)}>
              <option value={ALERT_TYPES.INLINE}>Inline</option>
              <option value={ALERT_TYPES.TOAST}>Toast</option>
            </Select>
          </Control>

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

          {alertType === ALERT_TYPES.TOAST && (
            <Control>
              <Label>Position</Label>
              <Select value={position} onChange={(e) => setPosition(e.target.value)}>
                <option value={ALERT_POSITIONS.TOP_RIGHT}>Top Right</option>
                <option value={ALERT_POSITIONS.TOP_LEFT}>Top Left</option>
                <option value={ALERT_POSITIONS.BOTTOM_RIGHT}>Bottom Right</option>
                <option value={ALERT_POSITIONS.BOTTOM_LEFT}>Bottom Left</option>
                <option value={ALERT_POSITIONS.TOP_CENTER}>Top Center</option>
                <option value={ALERT_POSITIONS.BOTTOM_CENTER}>Bottom Center</option>
              </Select>
            </Control>
          )}

          <Control>
            <Label>Title</Label>
            <Input 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter alert title"
            />
          </Control>

          <Control>
            <Label>Message</Label>
            <Input 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter alert message"
            />
          </Control>

          <Control>
            <Label>
              <Checkbox 
                type="checkbox" 
                checked={dismissible} 
                onChange={(e) => setDismissible(e.target.checked)}
              />
              Dismissible
            </Label>
          </Control>

          {alertType === ALERT_TYPES.TOAST && (
            <>
              <Control>
                <Label>
                  <Checkbox 
                    type="checkbox" 
                    checked={autoDismiss} 
                    onChange={(e) => setAutoDismiss(e.target.checked)}
                  />
                  Auto Dismiss
                </Label>
              </Control>

              {autoDismiss && (
                <Control>
                  <Label>Auto Dismiss Time (ms)</Label>
                  <Input 
                    type="number" 
                    value={autoDismissTime} 
                    onChange={(e) => setAutoDismissTime(Number(e.target.value))}
                    min="1000"
                    step="1000"
                  />
                </Control>
              )}
            </>
          )}

          {variant === ALERT_VARIANTS.ADVANCED && (
            <Control>
              <Label>
                <Checkbox 
                  type="checkbox" 
                  checked={showActions} 
                  onChange={(e) => setShowActions(e.target.checked)}
                />
                Show Actions
              </Label>
            </Control>
          )}
        </ControlsGrid>

        <PreviewContainer theme={theme}>
          <ThemeToggle onClick={() => setTheme(theme === ALERT_THEMES.LIGHT ? ALERT_THEMES.DARK : ALERT_THEMES.LIGHT)}>
            {theme === ALERT_THEMES.LIGHT ? 'Dark Theme' : 'Light Theme'}
          </ThemeToggle>
          
          {alertType === ALERT_TYPES.INLINE && (
            <Alert
              type={alertType}
              variant={variant}
              severity={severity}
              theme={theme}
              title={title}
              message={message}
              dismissible={dismissible}
              onDismiss={handleDismiss}
              onAction={handleAction}
              actions={actions}
              timestamp={timestamp}
            />
          )}
          
          {alertType === ALERT_TYPES.TOAST && (
            <Alert
              type={alertType}
              variant={variant}
              severity={severity}
              theme={theme}
              position={position}
              title={title}
              message={message}
              dismissible={dismissible}
              autoDismiss={autoDismiss}
              autoDismissTime={autoDismissTime}
              onDismiss={handleDismiss}
              onAction={handleAction}
              actions={actions}
              timestamp={timestamp}
            />
          )}
        </PreviewContainer>
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
            {getPropsTable().map((prop, index) => (
              <tr key={index}>
                <PropsCell>{prop.name}</PropsCell>
                <PropsCell>{prop.type}</PropsCell>
                <PropsCell>{prop.default}</PropsCell>
                <PropsCell>{prop.description}</PropsCell>
              </tr>
            ))}
          </tbody>
        </PropsTable>
      </Section>

      <Section>
        <SectionTitle>Usage Examples</SectionTitle>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', color: '#0F172A' }}>Basic Inline Alert</h3>
          <CodeBlock>{`<Alert
  severity="info"
  title="Information"
  message="This is an informational alert."
/>`}</CodeBlock>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', color: '#0F172A' }}>Advanced Toast Alert</h3>
          <CodeBlock>{`<Alert
  type="toast"
  variant="advanced"
  severity="success"
  title="Success!"
  message="Your changes have been saved successfully."
  dismissible={true}
  autoDismiss={true}
  autoDismissTime={3000}
  actions={[
    { label: 'Undo', variant: 'secondary' },
    { label: 'View', variant: 'primary' }
  ]}
  timestamp="01/01/2024 • 9:00 AM"
/>`}</CodeBlock>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', color: '#0F172A' }}>Error Alert with Actions</h3>
          <CodeBlock>{`<Alert
  severity="error"
  variant="advanced"
  title="Error Occurred"
  message="There was an error processing your request. Please try again."
  dismissible={true}
  actions={[
    { label: 'Cancel', variant: 'tertiary' },
    { label: 'Retry', variant: 'primary' }
  ]}
  onDismiss={() => console.log('Dismissed')}
  onAction={(action) => console.log('Action:', action)}
/>`}</CodeBlock>
        </div>
      </Section>
    </PageContainer>
  );
};

export default AlertPage;
