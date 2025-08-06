import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar, { AVATAR_VARIANTS, AVATAR_SIZES } from '../components/design-system/Avatar';
import avatarImage from '../assets/avatar/avatar.svg';

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

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

const PreviewContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: center;
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const AvatarPage = () => {
  const [size, setSize] = useState(AVATAR_SIZES.MEDIUM);
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const isDarkMode = theme === THEMES.DARK_A;

  const sampleImage = avatarImage;
  const sampleInitials = 'JD';

  return (
    <PageContainer>
      <Header>
        <Title>Avatar</Title>
        <Description>
          Avatars are used to represent people or organizations. They can display
          images, initials, or a fallback icon.
        </Description>
      </Header>


      <Section>
        <ControlsGrid>
          <Control>
            <Label>Size</Label>
            <Select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value={AVATAR_SIZES.XLARGE}>Extra Large (64px)</option>
              <option value={AVATAR_SIZES.LARGE}>Large (48px)</option>
              <option value={AVATAR_SIZES.MEDIUM}>Medium (40px)</option>
              <option value={AVATAR_SIZES.SMALL}>Small (32px)</option>
            </Select>
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewContainer isDarkMode={isDarkMode}>
          <Avatar
            variant={AVATAR_VARIANTS.IMAGE}
            size={size}
            src={sampleImage}
            alt="Image Avatar"
            isDarkMode={isDarkMode}
          />
          <Avatar
            variant={AVATAR_VARIANTS.INITIALS}
            size={size}
            initials={sampleInitials}
            alt="Initials Avatar"
            isDarkMode={isDarkMode}
          />
          <Avatar
            variant={AVATAR_VARIANTS.ICON}
            size={size}
            alt="Icon Avatar"
            isDarkMode={isDarkMode}
          />
        </PreviewContainer>
      </Section>

    </PageContainer>
  );
};

export default AvatarPage;