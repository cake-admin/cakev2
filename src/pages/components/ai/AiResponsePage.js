import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import AiResponse from '../../../components/design-system/ai/AiResponse.js';
import UserResponse from '../../../components/design-system/ai/UserResponse.js';
import {
  PageContainer,
  Header,
  Title,
  Description,
  Section,
  SectionTitle,
  ControlsGrid,
  Control,
  Label,
  Select,
  PreviewSection
} from '../../../components/ComponentPageTemplate';

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

// Predefined response variations for demo
const RESPONSE_VARIATIONS = [
  "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias."
];

const AiResponsePage = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const isDarkMode = theme === THEMES.DARK_A;

  // State for regenerate functionality
  const [regenerations, setRegenerations] = useState([RESPONSE_VARIATIONS[0]]);
  const [regenerationCount, setRegenerationCount] = useState(1);
  const [currentRegenerationIndex, setCurrentRegenerationIndex] = useState(1);
  const maxRegenerations = 5;

  // Calculate current state
  const regenerateState = useMemo(() => {
    if (regenerationCount === 1) return 'rest';
    if (regenerationCount >= maxRegenerations) return 'max';
    return 'regeneration';
  }, [regenerationCount, maxRegenerations]);

  // Get current response text
  const currentResponseText = useMemo(() => {
    return regenerations[currentRegenerationIndex - 1] || regenerations[0];
  }, [regenerations, currentRegenerationIndex]);

  // Handler for regenerate button
  const handleRegenerate = () => {
    if (regenerateState === 'max') return; // Can't regenerate at max
    
    // Get a new response that's different from current
    const usedIndices = regenerations.map((_, idx) => 
      RESPONSE_VARIATIONS.indexOf(regenerations[idx])
    );
    let newIndex = 0;
    for (let i = 0; i < RESPONSE_VARIATIONS.length; i++) {
      if (!usedIndices.includes(i)) {
        newIndex = i;
        break;
      }
      // If all variations used, cycle through them
      newIndex = (regenerations.length) % RESPONSE_VARIATIONS.length;
    }
    
    const newResponse = RESPONSE_VARIATIONS[newIndex];
    const newCount = regenerationCount + 1;
    
    setRegenerations([...regenerations, newResponse]);
    setRegenerationCount(newCount);
    setCurrentRegenerationIndex(newCount); // Show the latest regeneration
  };

  // Handler for previous button
  const handlePrevious = () => {
    if (currentRegenerationIndex > 1) {
      setCurrentRegenerationIndex(currentRegenerationIndex - 1);
    }
  };

  // Handler for next button
  const handleNext = () => {
    if (currentRegenerationIndex < regenerationCount) {
      setCurrentRegenerationIndex(currentRegenerationIndex + 1);
    }
  };

  return (
    <PageContainer>
      <Header>
        <Title>AI Response</Title>
        <Description>
          Component for displaying AI-generated chat responses with interactive controls for feedback, regeneration, pinning, and favoriting. This component provides a consistent interface for AI interactions across the Cake Design System.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic Response</SectionTitle>
        <Description>
          The basic AI chat response component displays a message bubble with timestamp and action buttons. All buttons are interactive. Click regenerate to see the response text change, and use pagination controls to navigate between regenerations.
        </Description>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value={THEMES.LIGHT_A}>Light</option>
              <option value={THEMES.DARK_A}>Dark</option>
            </Select>
          </Control>
        </ControlsGrid>
        <PreviewSection theme={theme}>
          <AiResponse
            text={currentResponseText}
            isDarkMode={isDarkMode}
            regenerateState={regenerateState}
            regenerateCurrentIndex={currentRegenerationIndex}
            regenerateTotalCount={regenerationCount}
            onRegenerate={handleRegenerate}
            onRegeneratePrevious={handlePrevious}
            onRegenerateNext={handleNext}
          />
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>User Response</SectionTitle>
        <Description>
          The user response component displays a right-aligned message bubble with a timestamp and favorite button. The bubble uses a light blue background to distinguish user messages from AI responses. Click the star icon to favorite or unfavorite the message.
        </Description>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value={THEMES.LIGHT_A}>Light</option>
              <option value={THEMES.DARK_A}>Dark</option>
            </Select>
          </Control>
        </ControlsGrid>
        <PreviewSection theme={theme}>
          <UserResponse
            text={RESPONSE_VARIATIONS[0]}
            isDarkMode={isDarkMode}
          />
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default AiResponsePage;
