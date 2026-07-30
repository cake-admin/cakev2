import { Link } from 'react-router-dom';

import { Button } from '@/cakeand/components/Button';
import { Card } from '@/cakeand/components/Card';
import { SimpleCard } from '@/cakeand/components/Card/SimpleCard';

import { DocPage } from '../../components/DocPage';
import { STORYBOOK_HOME } from '../../data/routes';

export function IconographyPage() {
  return (
    <DocPage
      title="Iconography"
      description="cake& uses lucide-react for icons. Icons inherit color via currentColor and size via each component's icon slot."
    >
      <DocPage.SectionBody>
        <p>
          Do not install a parallel icon library. Compose icons inside cake& components using the
          documented slot sizes per component variant.
        </p>
        <p>
          For the full component catalog and icon slot conventions, see Storybook.
        </p>
      </DocPage.SectionBody>
      <DocPage.Section>
        <Button
          size="lg"
          onClick={() => {
            window.location.href = STORYBOOK_HOME;
          }}
        >
          Open Storybook
        </Button>
      </DocPage.Section>
    </DocPage>
  );
}

export function LanguageGrammarPage() {
  return (
    <DocPage
      title="Language & grammar"
      description="Guidelines for creating clear, accessible, and purposeful content that aligns with Lenovo's tone of voice."
    >
      <DocPage.Section>
        <DocPage.SectionTitle>Voice and tone</DocPage.SectionTitle>
        <DocPage.SectionBody>
          <ul>
            <li>Write in active voice and address the user directly when appropriate.</li>
            <li>Prefer short sentences and plain language over jargon.</li>
            <li>Lead with the outcome, then supporting detail.</li>
            <li>Use consistent terminology across products — match UI labels to documentation.</li>
          </ul>
        </DocPage.SectionBody>
      </DocPage.Section>

      <DocPage.Section>
        <DocPage.SectionTitle>Accessibility in content</DocPage.SectionTitle>
        <DocPage.SectionBody>
          <ul>
            <li>Do not rely on color alone to convey meaning — pair with text or icons.</li>
            <li>Write descriptive link text (avoid “click here”).</li>
            <li>Provide visible labels for every form control.</li>
          </ul>
        </DocPage.SectionBody>
      </DocPage.Section>
    </DocPage>
  );
}

export function AiOverviewPage() {
  return (
    <DocPage
      title="AI overview"
      description="Lenovo's hybrid, tiered AI visual system — principles for gradients, logos, icons, and motion across product segments."
    >
      <DocPage.SectionBody>
        <p>
          AI experiences should be recognizable without relying on a single universal symbol.
          The system defines when to use AI gradients, segment-specific treatments (consumer,
          commercial, internal), and how logos and icons fit within product hierarchy.
        </p>
      </DocPage.SectionBody>

      <DocPage.Section>
        <DocPage.SectionTitle>Design principles</DocPage.SectionTitle>
        <DocPage.Grid>
          {[
            {
              title: 'Contextual',
              body: 'Apply AI treatments where they add meaning — not on every surface.',
            },
            {
              title: 'Segment-aware',
              body: 'Consumer, commercial, and internal products each have approved visual recipes.',
            },
            {
              title: 'Restrained',
              body: 'Avoid icon overload; prefer gradient and typography for AI moments.',
            },
          ].map((item) => (
            <Card key={item.title} elevation="low">
              <SimpleCard title={item.title} body={item.body} />
            </Card>
          ))}
        </DocPage.Grid>
      </DocPage.Section>

      <DocPage.SectionBody>
        <p>
          Continue with <Link to="/foundations/ai/gradient">AI gradient</Link> and{' '}
          <Link to="/foundations/ai/logo-icon">AI logo & icon</Link> for implementation detail.
        </p>
      </DocPage.SectionBody>
    </DocPage>
  );
}

export function AiGradientPage() {
  return (
    <DocPage
      title="AI gradient"
      description="When and how to apply AI gradient treatments across Lenovo product segments."
    >
      <DocPage.SectionBody>
        <p>
          AI gradients signal intelligent or generative features. Use them on hero moments,
          feature callouts, and primary AI entry points — not as a default page background.
        </p>
        <ul>
          <li>Consumer products use warmer, vibrant gradient recipes.</li>
          <li>Commercial products use restrained, professional treatments.</li>
          <li>Internal tools follow the internal canvas and surface palette.</li>
        </ul>
      </DocPage.SectionBody>
    </DocPage>
  );
}

export function AiLogoIconPage() {
  return (
    <DocPage
      title="AI logo & icon"
      description="Logo and icon guidance for AI features within Lenovo experiences."
    >
      <DocPage.SectionBody>
        <p>
          Use approved AI mark assets only in contexts defined by brand guidelines. Pair logos
          with clear text labels for accessibility — the icon alone is never sufficient naming.
        </p>
        <p>
          Prefer existing product iconography for utility actions; reserve AI-specific marks for
          feature entry points and marketing surfaces.
        </p>
      </DocPage.SectionBody>
    </DocPage>
  );
}
