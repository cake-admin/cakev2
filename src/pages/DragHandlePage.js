import React, { useState } from 'react';
import styled from 'styled-components';
import DragHandle, { DRAG_HANDLE_STATES, DRAG_HANDLE_THEMES } from '../components/design-system/DragHandle.js';

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

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #1D4ED8;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #0F172A;
  cursor: pointer;
`;

const DragHandleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${props => props.theme === DRAG_HANDLE_THEMES.DARK ? '#52525B' : '#E2E8F0'};
  border-radius: 8px;
  background-color: ${props => props.theme === DRAG_HANDLE_THEMES.DARK ? '#18181B' : '#FFFFFF'};
  align-items: center;
  justify-content: center;
  min-height: 120px;
`;

const StatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 32px;
  margin-top: 24px;
`;

const StateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const StateLabel = styled.span`
  font-size: 14px;
  color: ${props => props.theme === DRAG_HANDLE_THEMES.DARK ? '#D4D4D8' : '#475569'};
  font-weight: 500;
`;

const DragHandlePage = () => {
  const [state, setState] = useState(DRAG_HANDLE_STATES.ENABLED);
  const [theme, setTheme] = useState(DRAG_HANDLE_THEMES.LIGHT);
  const [hasBadge, setHasBadge] = useState(false);
  const [badgeCount, setBadgeCount] = useState(0);

  return (
    <PageContainer>
      <Header>
        <Title>Drag Handle</Title>
        <Description>
          Drag handle component for reordering and dragging elements. The drag handle supports all interaction states including enabled, hovered, pressed, focused, and disabled states, with support for both light and dark themes. Optional badge support is available for displaying counts or notifications.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Interactive Example</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>State</Label>
            <Select value={state} onChange={(e) => setState(e.target.value)}>
              <option value={DRAG_HANDLE_STATES.ENABLED}>Enabled</option>
              <option value={DRAG_HANDLE_STATES.HOVERED}>Hovered</option>
              <option value={DRAG_HANDLE_STATES.PRESSED}>Pressed</option>
              <option value={DRAG_HANDLE_STATES.FOCUSED}>Focused</option>
              <option value={DRAG_HANDLE_STATES.DISABLED}>Disabled</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={DRAG_HANDLE_THEMES.LIGHT}>Light.a</option>
              <option value={DRAG_HANDLE_THEMES.DARK}>Dark.a</option>
            </Select>
          </Control>

          <Control>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                checked={hasBadge}
                onChange={(e) => setHasBadge(e.target.checked)}
              />
              Show Badge
            </CheckboxLabel>
          </Control>

          {hasBadge && (
            <Control>
              <Label>Badge Count</Label>
              <Select 
                value={badgeCount} 
                onChange={(e) => setBadgeCount(parseInt(e.target.value, 10))}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={99}>99</option>
              </Select>
            </Control>
          )}
        </ControlsGrid>

        <DragHandleContainer theme={theme}>
          <DragHandle
            state={state}
            theme={theme}
            hasBadge={hasBadge}
            badgeCount={badgeCount}
          />
        </DragHandleContainer>
      </Section>

      <Section>
        <SectionTitle>All States</SectionTitle>
        <Description>
          All interaction states displayed together for comparison.
        </Description>
        <DragHandleContainer theme={theme}>
          <StatesGrid>
            <StateItem>
              <DragHandle
                state={DRAG_HANDLE_STATES.ENABLED}
                theme={theme}
                hasBadge={hasBadge}
                badgeCount={badgeCount}
              />
              <StateLabel theme={theme}>Enabled</StateLabel>
            </StateItem>
            <StateItem>
              <DragHandle
                state={DRAG_HANDLE_STATES.HOVERED}
                theme={theme}
                hasBadge={hasBadge}
                badgeCount={badgeCount}
              />
              <StateLabel theme={theme}>Hovered</StateLabel>
            </StateItem>
            <StateItem>
              <DragHandle
                state={DRAG_HANDLE_STATES.PRESSED}
                theme={theme}
                hasBadge={hasBadge}
                badgeCount={badgeCount}
              />
              <StateLabel theme={theme}>Pressed</StateLabel>
            </StateItem>
            <StateItem>
              <DragHandle
                state={DRAG_HANDLE_STATES.FOCUSED}
                theme={theme}
                hasBadge={hasBadge}
                badgeCount={badgeCount}
              />
              <StateLabel theme={theme}>Focused</StateLabel>
            </StateItem>
            <StateItem>
              <DragHandle
                state={DRAG_HANDLE_STATES.DISABLED}
                theme={theme}
                hasBadge={hasBadge}
                badgeCount={badgeCount}
              />
              <StateLabel theme={theme}>Disabled</StateLabel>
            </StateItem>
          </StatesGrid>
        </DragHandleContainer>
      </Section>
    </PageContainer>
  );
};

export default DragHandlePage;

