import React, { useState } from 'react';
import styled from 'styled-components';
import Badge, { BADGE_COLORS, BADGE_SIZES } from '../components/design-system/Badge';

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

const PreviewSection = styled.div`
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const BadgeExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  background: ${props => props.isDarkMode ? '#27272A' : '#F8FAFC'};
  min-width: 80px;
`;

const BadgeLabel = styled.span`
  font-size: 12px;
  color: ${props => props.isDarkMode ? '#A1A1AA' : '#64748B'};
  text-align: center;
`;

const PropsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 24px;
`;

const PropsHeader = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #E2E8F0;
  font-weight: 600;
  color: #0F172A;
  background-color: #F8FAFC;
`;

const PropsCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #E2E8F0;
  color: #475569;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const BadgePage = () => {
  // Basic badge section state
  const [basicColor, setBasicColor] = useState(BADGE_COLORS.BLUE);
  const [basicSize, setBasicSize] = useState(BADGE_SIZES.MEDIUM);
  const [basicContent, setBasicContent] = useState('1');
  const [basicTheme, setBasicTheme] = useState(THEMES.LIGHT_A);
  const isBasicDarkMode = basicTheme === THEMES.DARK_A;

  // Color variants section state
  const [colorSize, setColorSize] = useState(BADGE_SIZES.MEDIUM);
  const [colorContent, setColorContent] = useState('5');
  const [colorTheme, setColorTheme] = useState(THEMES.LIGHT_A);
  const isColorDarkMode = colorTheme === THEMES.DARK_A;

  // Size variants section state
  const [sizeColor, setSizeColor] = useState(BADGE_COLORS.BLUE);
  const [sizeContent, setSizeContent] = useState('12');
  const [sizeTheme, setSizeTheme] = useState(THEMES.LIGHT_A);
  const isSizeDarkMode = sizeTheme === THEMES.DARK_A;

  // Shape examples section state
  const [shapeColor, setShapeColor] = useState(BADGE_COLORS.BLUE);
  const [shapeSize, setShapeSize] = useState(BADGE_SIZES.MEDIUM);
  const [shapeTheme, setShapeTheme] = useState(THEMES.LIGHT_A);
  const isShapeDarkMode = shapeTheme === THEMES.DARK_A;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <PageContainer>
      <Header>
        <Title>Badge</Title>
        <Description>
          The Badge component is a compact UI element used to display small amounts of information, 
          such as notification counts, status indicators, or numerical labels. It automatically 
          adapts its shape from circular (for single digits) to pill-shaped (for multi-digit numbers) 
          to provide optimal visual presentation.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic badge</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Color</Label>
            <Select value={basicColor} onChange={(e) => setBasicColor(e.target.value)}>
              {Object.values(BADGE_COLORS).map((color) => (
                <option key={color} value={color}>{capitalizeFirstLetter(color)}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Size</Label>
            <Select value={basicSize} onChange={(e) => setBasicSize(e.target.value)}>
              {Object.values(BADGE_SIZES).map((size) => (
                <option key={size} value={size}>{capitalizeFirstLetter(size)}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Content</Label>
            <Input 
              type="text" 
              value={basicContent} 
              onChange={(e) => setBasicContent(e.target.value)}
              placeholder="Enter badge content"
            />
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
          <Badge
            color={basicColor}
            size={basicSize}
            isDarkMode={isBasicDarkMode}
          >
            {basicContent}
          </Badge>
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Color variants</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Size</Label>
            <Select value={colorSize} onChange={(e) => setColorSize(e.target.value)}>
              {Object.values(BADGE_SIZES).map((size) => (
                <option key={size} value={size}>{capitalizeFirstLetter(size)}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Content</Label>
            <Input 
              type="text" 
              value={colorContent} 
              onChange={(e) => setColorContent(e.target.value)}
              placeholder="Enter badge content"
            />
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={colorTheme} onChange={(e) => setColorTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isColorDarkMode}>
          <BadgeExample isDarkMode={isColorDarkMode}>
            <Badge
              color={BADGE_COLORS.BLUE}
              size={colorSize}
              isDarkMode={isColorDarkMode}
            >
              {colorContent}
            </Badge>
            <BadgeLabel isDarkMode={isColorDarkMode}>Blue</BadgeLabel>
          </BadgeExample>
          
          <BadgeExample isDarkMode={isColorDarkMode}>
            <Badge
              color={BADGE_COLORS.RED}
              size={colorSize}
              isDarkMode={isColorDarkMode}
            >
              {colorContent}
            </Badge>
            <BadgeLabel isDarkMode={isColorDarkMode}>Red</BadgeLabel>
          </BadgeExample>
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Size variants</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Color</Label>
            <Select value={sizeColor} onChange={(e) => setSizeColor(e.target.value)}>
              {Object.values(BADGE_COLORS).map((color) => (
                <option key={color} value={color}>{capitalizeFirstLetter(color)}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Content</Label>
            <Input 
              type="text" 
              value={sizeContent} 
              onChange={(e) => setSizeContent(e.target.value)}
              placeholder="Enter badge content"
            />
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={sizeTheme} onChange={(e) => setSizeTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isSizeDarkMode}>
          <BadgeExample isDarkMode={isSizeDarkMode}>
            <Badge
              color={sizeColor}
              size={BADGE_SIZES.SMALL}
              isDarkMode={isSizeDarkMode}
            >
              {sizeContent}
            </Badge>
            <BadgeLabel isDarkMode={isSizeDarkMode}>Small</BadgeLabel>
          </BadgeExample>
          
          <BadgeExample isDarkMode={isSizeDarkMode}>
            <Badge
              color={sizeColor}
              size={BADGE_SIZES.MEDIUM}
              isDarkMode={isSizeDarkMode}
            >
              {sizeContent}
            </Badge>
            <BadgeLabel isDarkMode={isSizeDarkMode}>Medium</BadgeLabel>
          </BadgeExample>
          
          <BadgeExample isDarkMode={isSizeDarkMode}>
            <Badge
              color={sizeColor}
              size={BADGE_SIZES.LARGE}
              isDarkMode={isSizeDarkMode}
            >
              {sizeContent}
            </Badge>
            <BadgeLabel isDarkMode={isSizeDarkMode}>Large</BadgeLabel>
          </BadgeExample>
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Shape examples</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Color</Label>
            <Select value={shapeColor} onChange={(e) => setShapeColor(e.target.value)}>
              {Object.values(BADGE_COLORS).map((color) => (
                <option key={color} value={color}>{capitalizeFirstLetter(color)}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Size</Label>
            <Select value={shapeSize} onChange={(e) => setShapeSize(e.target.value)}>
              {Object.values(BADGE_SIZES).map((size) => (
                <option key={size} value={size}>{capitalizeFirstLetter(size)}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={shapeTheme} onChange={(e) => setShapeTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isShapeDarkMode}>
          <BadgeExample isDarkMode={isShapeDarkMode}>
            <Badge
              color={shapeColor}
              size={shapeSize}
              isDarkMode={isShapeDarkMode}
            >
              1
            </Badge>
            <BadgeLabel isDarkMode={isShapeDarkMode}>Single digit (circular)</BadgeLabel>
          </BadgeExample>
          
          <BadgeExample isDarkMode={isShapeDarkMode}>
            <Badge
              color={shapeColor}
              size={shapeSize}
              isDarkMode={isShapeDarkMode}
            >
              12
            </Badge>
            <BadgeLabel isDarkMode={isShapeDarkMode}>Multi-digit (pill)</BadgeLabel>
          </BadgeExample>
          
          <BadgeExample isDarkMode={isShapeDarkMode}>
            <Badge
              color={shapeColor}
              size={shapeSize}
              isDarkMode={isShapeDarkMode}
            >
              99+
            </Badge>
            <BadgeLabel isDarkMode={isShapeDarkMode}>With overflow</BadgeLabel>
          </BadgeExample>
        </PreviewSection>
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
              <PropsCell>color</PropsCell>
              <PropsCell>'blue' | 'red'</PropsCell>
              <PropsCell>'blue'</PropsCell>
              <PropsCell>The color variant of the badge</PropsCell>
            </tr>
            <tr>
              <PropsCell>size</PropsCell>
              <PropsCell>'small' | 'medium' | 'large'</PropsCell>
              <PropsCell>'medium'</PropsCell>
              <PropsCell>The size variant of the badge</PropsCell>
            </tr>
            <tr>
              <PropsCell>isDarkMode</PropsCell>
              <PropsCell>boolean</PropsCell>
              <PropsCell>false</PropsCell>
              <PropsCell>Whether to use dark mode styles</PropsCell>
            </tr>
            <tr>
              <PropsCell>children</PropsCell>
              <PropsCell>node</PropsCell>
              <PropsCell>'1'</PropsCell>
              <PropsCell>The content to display in the badge</PropsCell>
            </tr>
            <tr>
              <PropsCell>className</PropsCell>
              <PropsCell>string</PropsCell>
              <PropsCell>-</PropsCell>
              <PropsCell>Additional CSS class name</PropsCell>
            </tr>
          </tbody>
        </PropsTable>
      </Section>
    </PageContainer>
  );
};

export default BadgePage; 