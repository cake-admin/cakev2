import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Card from '../components/design-system/Card';
import Chip, { CHIP_TYPES, CHIP_SIZES, CHIP_STYLES } from '../components/design-system/Chip';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ExtensionIcon from '@mui/icons-material/Extension';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import { fontStack } from '../styles/globalStyles';
import colorData from '../data/colors.json';
import heroBanner from '../assets/hero/hero-banner.png';

const PageContainer = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 60px 20px 120px 20px;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  color: ${colorData.slate[900]};
  font-family: ${fontStack};
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 24px;
  margin: 0;
`;

const PageDescription = styled.p`
  color: ${colorData.slate[700]};
  font-family: ${fontStack};
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 24px 0;
`;

const Section = styled.section`
  padding: 16px 0px;
`;

const SectionTitle = styled.h2`
  color: ${colorData.slate[700]};
  font-family: ${fontStack};
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 16px 0;
`;

const SectionDescription = styled.p`
  color: ${colorData.slate[700]};
  font-family: ${fontStack};
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 32px 0;
`;

const CardsRow = styled.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  color: ${colorData.slate[900]};
  
  & > svg {
    width: 32px;
    height: 32px;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 12px 0;
  color: ${colorData.slate[900]};
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
`;

const CardText = styled.p`
  margin: 0;
  color: ${colorData.slate[700]};
  line-height: 1.5;
  font-family: ${fontStack};
  font-size: 14px;

  a {
    color: #1D4ED8;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HorizontalCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  cursor: pointer;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const CardImageWrapper = styled.div`
  flex: 0 0 220px;
  
  @media (max-width: 600px) {
    flex: 0 0 160px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContentWrapper = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardSubheader = styled.h4`
  color: ${colorData.slate[700]};
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 4px 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0 12px;
`;

const StyledSuccessIcon = styled(CheckCircleIcon)`
  color: ${props => props.isDarkMode ? '#18181B' : '#047857'};
`;

const StyledInfoIcon = styled(InfoIcon)`
  color: ${props => props.isDarkMode ? '#18181B' : '#1D4ED8'};
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const Home = () => {
  const navigate = useNavigate();
  const isDarkMode = false; // We're using light theme for the homepage

  const handleWhatsNewClick = () => {
    navigate('/whats-new');
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>One Lenovo "Cake" Design System</PageTitle>
        <PageDescription>
          The One Lenovo "Cake" Design System is a design framework aimed at creating a unified design language across all Lenovo software. Its purpose is to ensure consistency, improve usability, and enhance the overall user experience of Lenovo's diverse range of digital products.
        </PageDescription>
      </PageHeader>

      <Section>
        <SectionTitle>What's New</SectionTitle>
        <SectionDescription>
          Stay up to date with the latest updates and improvements to the Cake Design System.
        </SectionDescription>
        
        <HorizontalCard elevated hoverable onClick={handleWhatsNewClick}>
          <CardImageWrapper>
            <Card.Image src={heroBanner} alt="Cake Design System Updates" />
          </CardImageWrapper>
          <CardContentWrapper>
            <CardSubheader>Latest Updates</CardSubheader>
            <CardTitle>v1.4.0</CardTitle>
            <BadgeContainer>
              <Chip
                type={CHIP_TYPES.SUCCESS}
                size={CHIP_SIZES.SMALL}
                chipStyle={CHIP_STYLES.PILL}
                label="Current"
                rightIcon={<StyledSuccessIcon isDarkMode={isDarkMode} />}
                isDarkMode={isDarkMode}
              />
              <Chip
                type={CHIP_TYPES.INFO}
                size={CHIP_SIZES.SMALL}
                chipStyle={CHIP_STYLES.PILL}
                label="Major release"
                isDarkMode={isDarkMode}
              />
            </BadgeContainer>
            <CardText>
              Our latest major release brings significant improvements to accessibility and user experience. Updated core components now meet WCAG 2.2 guidelines with enhanced interaction consistency and improved color contrast.
            </CardText>
          </CardContentWrapper>
        </HorizontalCard>
      </Section>

      <Section>
        <SectionTitle>Core Principles</SectionTitle>
        <SectionDescription>
          Our design system is built on a foundation of consistency, accessibility, and flexibility. 
          Each component is designed to work seamlessly together while maintaining individual functionality.
        </SectionDescription>
        
        <CardsRow>
          <Card hoverable elevated>
            <Card.Body>
              <IconWrapper>
                <AutoFixHighIcon />
              </IconWrapper>
              <CardTitle>Consistency</CardTitle>
              <CardText>
                Unified design language across all components ensures a cohesive user experience.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card hoverable elevated>
            <Card.Body>
              <IconWrapper>
                <AccessibilityNewIcon />
              </IconWrapper>
              <CardTitle>Accessibility</CardTitle>
              <CardText>
                All components meet <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">WCAG guidelines</a> and support keyboard navigation.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card hoverable elevated>
            <Card.Body>
              <IconWrapper>
                <ExtensionIcon />
              </IconWrapper>
              <CardTitle>Flexibility</CardTitle>
              <CardText>
                Customizable components that adapt to different use cases and requirements.
              </CardText>
            </Card.Body>
          </Card>
        </CardsRow>
      </Section>
    </PageContainer>
  );
};

export default Home; 