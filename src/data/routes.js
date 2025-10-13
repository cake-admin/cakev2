import CanvasPage from '../pages/CanvasPage';
import CheckboxPage from '../pages/CheckboxPage';
import VersionControl from '../pages/VersionControl';
import ColorsPage from '../pages/foundations/ColorsPage';
import WhatsNew from '../pages/WhatsNew';
import FigmaLibraries from '../pages/get-started/FigmaLibraries';
import AboutCake from '../pages/get-started/AboutCake';

import Resources from '../pages/Resources';
import Home from '../pages/Home';
import ChipPage from '../pages/ChipPage';
import ButtonPage from '../pages/ButtonPage';
import AccordionPage from '../pages/AccordionPage.js';
import CakeAiPage from '../pages/subsystems/ai/CakeAiPage';
import AvatarPage from '../pages/AvatarPage';
import BadgePage from '../pages/BadgePage';
import BreadcrumbPage from '../pages/BreadcrumbPage';
import RadioPage from '../pages/RadioPage';
import AlertPage from '../pages/AlertPage';
import IconographyPage from '../pages/IconographyPage';
import LanguageGrammarPage from '../pages/foundations/LanguageGrammarPage.js';
import AccessPage from '../pages/subsystems/ai/AccessPage.js';
import ChatPage from '../pages/subsystems/ai/ChatPage.js';
import DisclaimerPage from '../pages/subsystems/ai/DisclaimerPage.js';
import InputPage from '../pages/subsystems/ai/InputPage.js';
import ResponsePage from '../pages/subsystems/ai/ResponsePage.js';


export const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    description: 'Welcome to Cake Design System',
    category: 'guides'
  },
  {
    path: '/components/alert',
    component: AlertPage,
    title: 'Alert',
    description: 'Alert components provide feedback to users about important information, success states, warnings, or errors',
    category: 'components'
  },
  {
    path: '/components/accordion',
    component: AccordionPage,
    title: 'Accordion',
    description: 'Expandable and collapsible content sections for organizing information',
    category: 'components'
  },
  {
    path: '/components/avatar',
    component: AvatarPage,
    title: 'Avatar',
    description: 'Component for displaying user profile images, initials, or icons',
    category: 'components'
  },
  {
    path: '/components/badge',
    component: BadgePage,
    title: 'Badge',
    description: 'Compact UI element for displaying notification counts, status indicators, or numerical labels',
    category: 'components'
  },
  {
    path: '/components/breadcrumb',
    component: BreadcrumbPage,
    title: 'Breadcrumb',
    description: 'Hierarchical navigation component for displaying page location and navigation context',
    category: 'components'
  },
  {
    path: '/components/button',
    component: ButtonPage,
    title: 'Button',
    description: 'Interactive button component with various styles and states',
    category: 'components'
  },
  {
    path: '/components/canvas',
    component: CanvasPage,
    title: 'Canvas',
    description: 'Drawing and illustration component',
    category: 'components'
  },
  {
    path: '/components/checkbox',
    component: CheckboxPage,
    title: 'Checkbox',
    description: 'Interactive checkbox component for form inputs, selections, and toggles with support for checked, unchecked, indeterminate, and disabled states',
    category: 'components'
  },
  {
    path: '/components/chip',
    component: ChipPage,
    title: 'Chip',
    description: 'Compact and versatile UI element for displaying discrete information',
    category: 'components'
  },
  {
    path: '/components/radio',
    component: RadioPage,
    title: 'Radio',
    description: 'Interactive radio component for single-choice selections from multiple options with support for various states and themes',
    category: 'components'
  },
  {
    path: '/version-control',
    component: VersionControl,
    title: 'Version Control',
    description: 'Version history and changelog',
    category: 'guides'
  },
  {
    path: '/foundations/colors',
    component: ColorsPage,
    title: 'Colors',
    description: 'Color system and design tokens',
    category: 'foundations'
  },
  {
    path: '/whats-new',
    component: WhatsNew,
    title: "What's New",
    description: 'Latest updates and changes',
    category: 'guides'
  },

  {
    path: '/resources',
    component: Resources,
    title: 'Resources',
    description: 'Figma libraries and design resources',
    category: 'guides'
  },
  {
    path: '/get-started/figma-libraries',
    component: FigmaLibraries,
    title: 'Figma Libraries',
    description: 'Design resources and Figma components',
    category: 'guides'
  },
  {
    path: '/get-started/about-cake',
    component: AboutCake,
    title: 'About Cake',
    description: 'Introduction to Cake Design System',
    category: 'guides'
  },
  {
    path: '/subsystems/ai/cake-ai',
    component: CakeAiPage,
    title: 'Cake AI',
    description: 'AI design system guidelines, icon identity, and resources for AI-powered interfaces',
    category: 'subsystems'
  },
  {
    path: '/subsystems/ai/access',
    component: AccessPage,
    title: 'AI Access',
    description: 'Guidelines for AI access patterns and user authentication flows',
    category: 'subsystems'
  },
  {
    path: '/subsystems/ai/chat',
    component: ChatPage,
    title: 'AI Chat',
    description: 'Design patterns and components for AI chat interfaces',
    category: 'subsystems'
  },
  {
    path: '/subsystems/ai/disclaimer',
    component: DisclaimerPage,
    title: 'AI Disclaimer',
    description: 'Disclaimer patterns and legal considerations for AI features',
    category: 'subsystems'
  },
  {
    path: '/subsystems/ai/input',
    component: InputPage,
    title: 'AI Input',
    description: 'Input components and patterns for AI interactions',
    category: 'subsystems'
  },
  {
    path: '/subsystems/ai/response',
    component: ResponsePage,
    title: 'AI Response',
    description: 'Response patterns and components for AI-generated content',
    category: 'subsystems'
  },
  {
    path: '/foundations/iconography',
    component: IconographyPage,
    title: 'Iconography',
    description: 'Material Design icon library usage, guidelines, and implementation patterns',
    category: 'foundations'
  },
  {
    path: '/foundations/language-grammar',
    component: LanguageGrammarPage,
    title: 'Language & Grammar',
    description: 'Guidelines for creating clear, accessible, and purposeful content that aligns with Lenovo\'s tone of voice',
    category: 'foundations'
  },
  {
    path: '/typography',
    component: LanguageGrammarPage,
    title: 'Typography',
    description: 'Guidelines for creating clear, accessible, and purposeful content that aligns with Lenovo\'s tone of voice',
    category: 'foundations'
  },
  {
    path: '/design-system',
    component: Home,
    title: 'Design System',
    description: 'Welcome to Cake Design System',
    category: 'guides'
  },
  {
    path: '/components',
    component: Home,
    title: 'Components',
    description: 'Browse all available components in the Cake Design System',
    category: 'components'
  },
  {
    path: '/foundations',
    component: Home,
    title: 'Foundations',
    description: 'Design foundations including colors, typography, and iconography',
    category: 'foundations'
  },
  {
    path: '/subsystems',
    component: Home,
    title: 'Subsystems',
    description: 'Specialized design systems for AI and other subsystems',
    category: 'subsystems'
  },
  {
    path: '/ai',
    component: CakeAiPage,
    title: 'AI',
    description: 'AI design system guidelines, icon identity, and resources for AI-powered interfaces',
    category: 'subsystems'
  },

];

export const getSearchResults = (query) => {
  if (!query.trim()) return { components: [], foundations: [], guides: [], subsystems: [] };

  const lowerQuery = query.toLowerCase();
  const results = {
    components: [],
    foundations: [],
    guides: [],
    subsystems: []
  };

  routes.forEach(route => {
    const matchesTitle = route.title.toLowerCase().includes(lowerQuery);
    const matchesDescription = route.description.toLowerCase().includes(lowerQuery);
    const matchesPath = route.path.toLowerCase().includes(lowerQuery);

    if (matchesTitle || matchesDescription || matchesPath) {
      results[route.category].push({
        title: route.title,
        path: route.path,
        description: route.description
      });
    }
  });

  return results;
}; 