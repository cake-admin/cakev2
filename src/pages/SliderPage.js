import React, { useState } from 'react';
import styled from 'styled-components';
import Slider, { SLIDER_THEMES } from '../components/design-system/Slider';

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 16px;
  }

  @media (max-width: 375px) {
    padding: 12px;
  }
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

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border: 1px solid ${props => props.theme === SLIDER_THEMES.DARK ? '#52525B' : '#E2E8F0'};
  border-radius: 8px;
  background-color: ${props => props.theme === SLIDER_THEMES.DARK ? '#18181B' : '#FFFFFF'};
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 16px;
    gap: 16px;
    max-width: min(600px, calc(100vw - 64px));
  }

  @media (max-width: 375px) {
    padding: 12px;
    max-width: calc(100vw - 24px);
  }
`;

const SliderPage = () => {
  const [theme, setTheme] = useState(SLIDER_THEMES.LIGHT);
  const [sliderValue, setSliderValue] = useState(50);
  const [withLabelValue, setWithLabelValue] = useState(50);
  const [withValueDisplayValue, setWithValueDisplayValue] = useState(50);

  return (
    <PageContainer>
      <Header>
        <Title>Slider</Title>
        <Description>
          Interactive slider component for selecting values within a range. The slider component supports all interaction states including enabled, hovered, pressed, focus, and disabled states, with support for both light and dark themes.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic Slider</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={SLIDER_THEMES.LIGHT}>Light.a</option>
              <option value={SLIDER_THEMES.DARK}>Dark.a</option>
            </Select>
          </Control>

          <Control>
            <Label>Value</Label>
            <Select value={sliderValue} onChange={(e) => setSliderValue(parseFloat(e.target.value))}>
              <option value="0">0</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </Select>
          </Control>
        </ControlsGrid>

        <SliderContainer theme={theme}>
          <Slider
            theme={theme}
            value={sliderValue}
            min={0}
            max={100}
            step={1}
            onChange={(e) => setSliderValue(parseFloat(e.target.value))}
          />
        </SliderContainer>
      </Section>

      <Section>
        <SectionTitle>With Label</SectionTitle>
        <SliderContainer theme={theme}>
          <Slider
            label="Volume"
            value={withLabelValue}
            min={0}
            max={100}
            step={1}
            theme={theme}
            onChange={(e) => setWithLabelValue(parseFloat(e.target.value))}
          />
        </SliderContainer>
      </Section>

      <Section>
        <SectionTitle>With Value Display</SectionTitle>
        <SliderContainer theme={theme}>
          <Slider
            label="Brightness"
            showValue={true}
            value={withValueDisplayValue}
            min={0}
            max={100}
            step={1}
            theme={theme}
            onChange={(e) => setWithValueDisplayValue(parseFloat(e.target.value))}
          />
        </SliderContainer>
      </Section>

      <Section>
        <SectionTitle>Disabled State</SectionTitle>
        <SliderContainer theme={theme}>
          <Slider
            label="Disabled Slider"
            value={50}
            min={0}
            max={100}
            step={1}
            theme={theme}
            disabled={true}
          />
        </SliderContainer>
      </Section>
    </PageContainer>
  );
};

export default SliderPage;

