import React, { useState } from 'react';
import styled from 'styled-components';
import Button, { BUTTON_VARIANTS, BUTTON_SIZES, ICON_POSITIONS, BUTTON_STYLES, ICON_VARIANTS } from '../components/design-system/Button';
import DropdownButton from '../components/design-system/DropdownButton.tsx';

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

  &[data-has-bullets='true'] {
    padding-left: 24px;
    
    li {
      position: relative;
      list-style-type: none;
      margin-bottom: 8px;
      
      &:before {
        content: "•";
        position: absolute;
        left: -24px;
        color: #475569;
      }
    }
  }
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

const PreviewSection = styled.div`
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const STATES = {
  DISABLED: 'disabled',
  LOADING: 'loading'
};

const ButtonPage = () => {
  // Basic button section state
  const [basicSize, setBasicSize] = useState(BUTTON_SIZES.MEDIUM);
  const [basicIconPosition, setBasicIconPosition] = useState(ICON_POSITIONS.NONE);
  const [basicState, setBasicState] = useState('');
  const [basicTheme, setBasicTheme] = useState(THEMES.LIGHT_A);
  const [basicButtonStyle, setBasicButtonStyle] = useState(BUTTON_STYLES.PILL);
  const isBasicDarkMode = basicTheme === THEMES.DARK_A;

  // Text button section state
  const [textSize, setTextSize] = useState(BUTTON_SIZES.MEDIUM);
  const [textIconPosition, setTextIconPosition] = useState(ICON_POSITIONS.NONE);
  const [textState, setTextState] = useState('');
  const [textTheme, setTextTheme] = useState(THEMES.LIGHT_A);
  const [textButtonStyle, setTextButtonStyle] = useState(BUTTON_STYLES.PILL);
  const isTextDarkMode = textTheme === THEMES.DARK_A;

  // Icon button section state
  const [iconSize, setIconSize] = useState(BUTTON_SIZES.MEDIUM);
  const [iconState, setIconState] = useState('');
  const [iconTheme, setIconTheme] = useState(THEMES.LIGHT_A);
  const [iconButtonStyle, setIconButtonStyle] = useState(BUTTON_STYLES.PILL);
  const isIconDarkMode = iconTheme === THEMES.DARK_A;

  // Dropdown button section state
  const [dropdownSize, setDropdownSize] = useState(BUTTON_SIZES.MEDIUM);
  const [dropdownState, setDropdownState] = useState('');
  const [dropdownTheme, setDropdownTheme] = useState(THEMES.LIGHT_A);
  const [dropdownButtonStyle, setDropdownButtonStyle] = useState(BUTTON_STYLES.PILL);
  const isDropdownDarkMode = dropdownTheme === THEMES.DARK_A;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const getBasicButtonLabel = (variant) => {
    return variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase();
  };

  const getTextButtonLabel = (variant) => {
    return variant;
  };

  return (
    <PageContainer>
      <Header>
        <Title>Button</Title>
        <Description>
          The Button Component is a fundamental element of the user interface used for triggering actions, 
          navigating between pages, or submitting forms. It provides a clear call-to-action and enhances 
          user interaction within the application or website.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic button</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Size</Label>
            <Select value={basicSize} onChange={(e) => setBasicSize(e.target.value)}>
              {Object.values(BUTTON_SIZES)
                .filter(size => size !== BUTTON_SIZES.SMALL && size !== BUTTON_SIZES.XLARGE)
                .map((size) => (
                  <option key={size} value={size}>{capitalizeFirstLetter(size)}</option>
                ))}
            </Select>
          </Control>

          <Control>
            <Label>Icon position</Label>
            <Select value={basicIconPosition} onChange={(e) => setBasicIconPosition(e.target.value)}>
              <option value={ICON_POSITIONS.NONE}>No icon</option>
              <option value={ICON_POSITIONS.LEFT}>Left icon</option>
              <option value={ICON_POSITIONS.RIGHT}>Right icon</option>
            </Select>
          </Control>

          <Control>
            <Label>Style</Label>
            <Select value={basicButtonStyle} onChange={(e) => setBasicButtonStyle(e.target.value)}>
              <option value={BUTTON_STYLES.PILL}>Pill</option>
              <option value={BUTTON_STYLES.SQUARE}>Square</option>
            </Select>
          </Control>

          <Control>
            <Label>State</Label>
            <Select value={basicState} onChange={(e) => setBasicState(e.target.value)}>
              <option value="">None</option>
              <option value={STATES.DISABLED}>Disabled</option>
              <option value={STATES.LOADING}>Loading</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={basicTheme} onChange={(e) => setBasicTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isBasicDarkMode}>
          {Object.values(BUTTON_VARIANTS)
            .filter(variant => variant !== BUTTON_VARIANTS.TEXT && variant !== BUTTON_VARIANTS.ICON)
            .map((variant) => (
              <Button
                key={variant}
                variant={variant}
                size={basicSize}
                iconPosition={basicIconPosition}
                buttonStyle={basicButtonStyle}
                label={getBasicButtonLabel(variant)}
                disabled={basicState === STATES.DISABLED}
                loading={basicState === STATES.LOADING}
                isDarkMode={isBasicDarkMode}
              />
            ))}
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Maximum width and truncation</SectionTitle>
        <PreviewSection>
          <Button
            variant={BUTTON_VARIANTS.PRIMARY}
            size={BUTTON_SIZES.MEDIUM}
            label="Button with really... long text"
          />
        </PreviewSection>
        <Description style={{ marginTop: '24px' }} data-has-bullets="true">
          <ul>
            <li>Buttons should have a maximum width of 264px.</li>
            <li>If the text on the button exceeds this width, it should be truncated in the middle.</li>
            <li>A tooltip will appear on hover, revealing the full text string of the button.</li>
          </ul>
        </Description>
      </Section>

      <Section>
        <SectionTitle>Text button</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Size</Label>
            <Select value={textSize} onChange={(e) => setTextSize(e.target.value)}>
              {Object.values(BUTTON_SIZES)
                .filter(size => size !== BUTTON_SIZES.SMALL && size !== BUTTON_SIZES.XLARGE)
                .map((size) => (
                  <option key={size} value={size}>{capitalizeFirstLetter(size)}</option>
                ))}
            </Select>
          </Control>

          <Control>
            <Label>Icon position</Label>
            <Select value={textIconPosition} onChange={(e) => setTextIconPosition(e.target.value)}>
              <option value={ICON_POSITIONS.NONE}>No icon</option>
              <option value={ICON_POSITIONS.LEFT}>Left icon</option>
              <option value={ICON_POSITIONS.RIGHT}>Right icon</option>
            </Select>
          </Control>

          <Control>
            <Label>Style</Label>
            <Select value={textButtonStyle} onChange={(e) => setTextButtonStyle(e.target.value)}>
              <option value={BUTTON_STYLES.PILL}>Pill</option>
              <option value={BUTTON_STYLES.SQUARE}>Square</option>
            </Select>
          </Control>

          <Control>
            <Label>State</Label>
            <Select value={textState} onChange={(e) => setTextState(e.target.value)}>
              <option value="">None</option>
              <option value={STATES.DISABLED}>Disabled</option>
              <option value={STATES.LOADING}>Loading</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={textTheme} onChange={(e) => setTextTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isTextDarkMode}>
          <Button
            variant={BUTTON_VARIANTS.TEXT}
            textVariant="primary"
            size={textSize}
            iconPosition={textIconPosition}
            buttonStyle={textButtonStyle}
            label={getTextButtonLabel("Primary")}
            disabled={textState === STATES.DISABLED}
            loading={textState === STATES.LOADING}
            isDarkMode={isTextDarkMode}
          />
          <Button
            variant={BUTTON_VARIANTS.TEXT}
            textVariant="secondary"
            size={textSize}
            iconPosition={textIconPosition}
            buttonStyle={textButtonStyle}
            label={getTextButtonLabel("Secondary")}
            disabled={textState === STATES.DISABLED}
            loading={textState === STATES.LOADING}
            isDarkMode={isTextDarkMode}
          />
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Icon button</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Size</Label>
            <Select value={iconSize} onChange={(e) => setIconSize(e.target.value)}>
              <option value={BUTTON_SIZES.SMALL}>Small</option>
              <option value={BUTTON_SIZES.MEDIUM}>Medium</option>
              <option value={BUTTON_SIZES.LARGE}>Large</option>
              <option value={BUTTON_SIZES.XLARGE}>XLarge</option>
            </Select>
          </Control>

          <Control>
            <Label>Style</Label>
            <Select value={iconButtonStyle} onChange={(e) => setIconButtonStyle(e.target.value)}>
              <option value={BUTTON_STYLES.PILL}>Pill</option>
              <option value={BUTTON_STYLES.SQUARE}>Square</option>
            </Select>
          </Control>

          <Control>
            <Label>State</Label>
            <Select value={iconState} onChange={(e) => setIconState(e.target.value)}>
              <option value="">None</option>
              <option value={STATES.DISABLED}>Disabled</option>
              <option value={STATES.LOADING}>Loading</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={iconTheme} onChange={(e) => setIconTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isIconDarkMode}>
          <Button
            variant={BUTTON_VARIANTS.ICON}
            iconVariant={ICON_VARIANTS.PRIMARY}
            size={iconSize}
            iconPosition={ICON_POSITIONS.NONE}
            buttonStyle={iconButtonStyle}
            aria-label="Download"
            disabled={iconState === STATES.DISABLED}
            loading={iconState === STATES.LOADING}
            isDarkMode={isIconDarkMode}
          />
          <Button
            variant={BUTTON_VARIANTS.ICON}
            iconVariant={ICON_VARIANTS.SECONDARY}
            size={iconSize}
            iconPosition={ICON_POSITIONS.NONE}
            buttonStyle={iconButtonStyle}
            aria-label="Download"
            disabled={iconState === STATES.DISABLED}
            loading={iconState === STATES.LOADING}
            isDarkMode={isIconDarkMode}
          />
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Dropdown button</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Size</Label>
            <Select value={dropdownSize} onChange={(e) => setDropdownSize(e.target.value)}>
              {Object.values(BUTTON_SIZES)
                .filter(size => size !== BUTTON_SIZES.SMALL && size !== BUTTON_SIZES.XLARGE)
                .map((size) => (
                  <option key={size} value={size}>{capitalizeFirstLetter(size)}</option>
                ))}
            </Select>
          </Control>

          <Control>
            <Label>Style</Label>
            <Select value={dropdownButtonStyle} onChange={(e) => setDropdownButtonStyle(e.target.value)}>
              <option value={BUTTON_STYLES.PILL}>Pill</option>
              <option value={BUTTON_STYLES.SQUARE}>Square</option>
            </Select>
          </Control>

          <Control>
            <Label>State</Label>
            <Select value={dropdownState} onChange={(e) => setDropdownState(e.target.value)}>
              <option value="">None</option>
              <option value={STATES.DISABLED}>Disabled</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={dropdownTheme} onChange={(e) => setDropdownTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isDropdownDarkMode}>
          <DropdownButton
            label="Primary"
            items={['Item', 'Item', 'Item', 'Item', 'Item']}
            disabled={dropdownState === STATES.DISABLED}
            buttonStyle={dropdownButtonStyle}
            size={dropdownSize}
            isDarkMode={isDropdownDarkMode}
          />
          <DropdownButton
            label="Secondary"
            items={['Item', 'Item', 'Item', 'Item', 'Item']}
            disabled={dropdownState === STATES.DISABLED}
            buttonStyle={dropdownButtonStyle}
            size={dropdownSize}
            isDarkMode={isDropdownDarkMode}
            variant="secondary"
          />
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default ButtonPage; 