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
import IconIdentityPage from '../pages/subsystems/ai/IconIdentityPage';
import AvatarPage from '../pages/AvatarPage';
import BadgePage from '../pages/BadgePage';
import BreadcrumbPage from '../pages/BreadcrumbPage';
import RadioPage from '../pages/RadioPage';
import TextInputsPage from '../pages/TextInputsPage';
import AlertPage from '../pages/AlertPage';
import MenuPage from '../pages/MenuPage';
import DropdownPage from '../pages/DropdownPage';
import IconographyPage from '../pages/IconographyPage';
import LanguageGrammarPage from '../pages/foundations/LanguageGrammarPage.js';


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
    path: '/components/menu',
    component: MenuPage,
    title: 'Menu',
    description: 'Menu component for displaying selectable options with search and scroll support',
    category: 'components'
  },
  {
    path: '/components/dropdown',
    component: DropdownPage,
    title: 'Dropdown',
    description: 'Dropdown component for selecting options from a list with optional search functionality and scrolling support',
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
    path: '/components/text-inputs',
    component: TextInputsPage,
    title: 'Text Inputs',
    description: 'Text field and text area components for form inputs with support for labels, helper text, error states, and validation',
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
    category: 'subsystems',
    hasChildren: true
  },
  {
    path: '/subsystems/ai/icon-identity',
    component: IconIdentityPage,
    title: 'Icon & Identity',
    description: 'AI icon and brand identity guidelines for Lenovo software applications',
    category: 'subsystems',
    parentPath: '/subsystems/ai/cake-ai'
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