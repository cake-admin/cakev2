import type { PageId } from '../../data/routes';
import { HomePage } from './HomePage';
import {
  AboutCakePage,
  FigmaLibrariesPage,
  ResourcesPage,
  VersionControlPage,
  WhatsNewPage,
} from './guides';
import {
  AiGradientPage,
  AiLogoIconPage,
  AiOverviewPage,
  IconographyPage,
  LanguageGrammarPage,
} from './foundations/FoundationPages';

export const pageComponents: Record<PageId, React.ComponentType> = {
  home: HomePage,
  resources: ResourcesPage,
  'whats-new': WhatsNewPage,
  'about-cake': AboutCakePage,
  'figma-libraries': FigmaLibrariesPage,
  'version-control': VersionControlPage,
  iconography: IconographyPage,
  'language-grammar': LanguageGrammarPage,
  'ai-overview': AiOverviewPage,
  'ai-gradient': AiGradientPage,
  'ai-logo-icon': AiLogoIconPage,
};
