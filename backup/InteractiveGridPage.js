import React from 'react';
import styled from 'styled-components';
import InteractiveGrid from '../components/design-system/InteractiveGrid';
import Card from '../components/design-system/Card';

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 48px;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`;

const PageSubtitle = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

const DemoContainer = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 32px;
`;

const CodeBlock = styled.pre`
  background: #1f2937;
  color: #f9fafb;
  padding: 24px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
  color: #374151;
  
  &:before {
    content: '✨';
    margin-right: 12px;
    font-size: 18px;
  }
`;

const InteractiveGridPage = () => {
  return (
    <PageContainer>
      <Header>
        <PageTitle>Interactive Grid Pattern</PageTitle>
        <PageSubtitle>
          A beautiful animated grid pattern inspired by shadcn.io that responds to mouse movement with smooth animations and gradient effects.
        </PageSubtitle>
      </Header>

      <Section>
        <SectionTitle>Live Demo</SectionTitle>
        <SectionDescription>
          Move your mouse around the grid below to see the interactive effects in action.
        </SectionDescription>
        <DemoContainer>
          <InteractiveGrid />
        </DemoContainer>
      </Section>

      <Section>
        <SectionTitle>Features</SectionTitle>
        <FeatureList>
          <FeatureItem>Mouse-following gradient overlay</FeatureItem>
          <FeatureItem>Animated grid background with subtle movement</FeatureItem>
          <FeatureItem>Interactive grid dots with hover effects</FeatureItem>
          <FeatureItem>Responsive design that adapts to screen size</FeatureItem>
          <FeatureItem>Smooth transitions and animations</FeatureItem>
          <FeatureItem>Customizable colors and spacing</FeatureItem>
        </FeatureList>
      </Section>

      <Section>
        <SectionTitle>Usage</SectionTitle>
        <SectionDescription>
          Simply import and use the InteractiveGrid component in your React application.
        </SectionDescription>
        <Card>
          <Card.Body>
            <CodeBlock>{`import InteractiveGrid from './components/design-system/InteractiveGrid';

function MyComponent() {
  return (
    <div>
      <InteractiveGrid />
    </div>
  );
}`}</CodeBlock>
          </Card.Body>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Customization</SectionTitle>
        <SectionDescription>
          The component can be customized by modifying the styled components. Here are some key customization options:
        </SectionDescription>
        <Card>
          <Card.Body>
            <CodeBlock>{`// Grid spacing
background-size: 50px 50px; // Change grid cell size

// Animation duration
animation: \${gridAnimation} 20s ease-in-out infinite; // Adjust animation speed

// Gradient colors
background: radial-gradient(
  circle at \${props => props.mouseX}px \${props => props.mouseY}px,
  rgba(120, 119, 198, 0.3) 0%, // Primary color
  rgba(255, 255, 255, 0.1) 25%, // Secondary color
  transparent 50%
);

// Dot size and effects
width: 4px; // Dot size
transform: translate(-50%, -50%) scale(2); // Hover scale effect`}</CodeBlock>
          </Card.Body>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Technical Details</SectionTitle>
        <SectionDescription>
          The component uses React hooks, styled-components, and CSS animations to create smooth, performant interactions.
        </SectionDescription>
        <FeatureList>
          <FeatureItem>Uses useRef for DOM manipulation and mouse tracking</FeatureItem>
          <FeatureItem>Implements useEffect for event listeners and cleanup</FeatureItem>
          <FeatureItem>Uses useState for reactive mouse position updates</FeatureItem>
          <FeatureItem>CSS keyframes for smooth animations</FeatureItem>
          <FeatureItem>Responsive grid generation based on container size</FeatureItem>
          <FeatureItem>Optimized with proper event listener cleanup</FeatureItem>
        </FeatureList>
      </Section>
    </PageContainer>
  );
};

export default InteractiveGridPage;
