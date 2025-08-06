import React, { useState } from 'react';
import styled from 'styled-components';
import Chip, { CHIP_TYPES, CHIP_SIZES, CHIP_STYLES } from '../components/design-system/Chip';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';

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

const PreviewSection = styled.div`
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CodeSection = styled.pre`
  background: #0F172A;
  color: #F8FAFC;
  padding: 24px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const StyledInfoIcon = styled(InfoIcon)`
  color: ${props => props.isDarkMode ? '#18181B' : '#1D4ED8'};
`;

const StyledSuccessIcon = styled(CheckCircleIcon)`
  color: ${props => props.isDarkMode ? '#18181B' : '#047857'};
`;

const StyledWarningIcon = styled(WarningIcon)`
  color: ${props => props.isDarkMode ? '#18181B' : '#C2410C'};
`;

const StyledErrorIcon = styled(ErrorIcon)`
  color: ${props => props.isDarkMode ? '#18181B' : '#B91C1C'};
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const getIconByType = (type, isDarkMode) => {
  switch (type) {
    case CHIP_TYPES.INFO:
      return <StyledInfoIcon isDarkMode={isDarkMode} />;
    case CHIP_TYPES.SUCCESS:
      return <StyledSuccessIcon isDarkMode={isDarkMode} />;
    case CHIP_TYPES.WARNING:
      return <StyledWarningIcon isDarkMode={isDarkMode} />;
    case CHIP_TYPES.ERROR:
      return <StyledErrorIcon isDarkMode={isDarkMode} />;
    default:
      return null;
  }
};

const ChipPage = () => {
  const [size, setSize] = useState(CHIP_SIZES.LARGE);
  const [chipStyle, setChipStyle] = useState(CHIP_STYLES.PILL);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const [isIconOnly, setIsIconOnly] = useState(false);
  const [theme, setTheme] = useState(THEMES.LIGHT_A);

  const isDarkMode = theme === THEMES.DARK_A;

  const getTypeLabel = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <PageContainer>
      <Header>
        <Title>Chip</Title>
        <Description>
          The Chip Component is a compact and versatile UI element used to represent discrete pieces of information, 
          attributes, or actions within an interface. It offers a visually appealing way to display and interact 
          with small sets of data or options.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Examples</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Size</Label>
            <Select value={size} onChange={(e) => setSize(e.target.value)}>
              {Object.values(CHIP_SIZES).map((size) => (
                <option key={size} value={size}>{size.toLowerCase()}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Style</Label>
            <Select value={chipStyle} onChange={(e) => setChipStyle(e.target.value)}>
              {Object.values(CHIP_STYLES).map((style) => (
                <option key={style} value={style}>{style.toLowerCase()}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Icons</Label>
            <Select 
              value={isIconOnly ? 'icon-only' : `${showLeftIcon}-${showRightIcon}`}
              onChange={(e) => {
                const value = e.target.value;
                if (value === 'icon-only') {
                  setIsIconOnly(true);
                  setShowLeftIcon(true);
                  setShowRightIcon(false);
                } else {
                  setIsIconOnly(false);
                  const [left, right] = value.split('-');
                  setShowLeftIcon(left === 'true');
                  setShowRightIcon(right === 'true');
                }
              }}
            >
              <option value="icon-only">Icon only</option>
              <option value="true-false">Left icon only</option>
              <option value="false-true">Right icon only</option>
              <option value="false-false">No icons</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select 
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isDarkMode}>
          {Object.values(CHIP_TYPES).map((type) => (
            <Chip
              key={type}
              type={type}
              size={size}
              chipStyle={chipStyle}
              label={!isIconOnly ? getTypeLabel(type) : undefined}
              leftIcon={showLeftIcon || isIconOnly ? getIconByType(type, isDarkMode) : null}
              rightIcon={showRightIcon && !isIconOnly ? getIconByType(type, isDarkMode) : null}
              isIconOnly={isIconOnly}
              isDarkMode={isDarkMode}
            />
          ))}
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default ChipPage; 