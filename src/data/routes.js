import CanvasPage from '../pages/CanvasPage';
import VersionControl from '../pages/VersionControl';
import ColorsPage from '../pages/foundations/ColorsPage';
import WhatsNew from '../pages/WhatsNew';
import FigmaLibraries from '../pages/get-started/FigmaLibraries';
import AboutCake from '../pages/get-started/AboutCake';
import Home from '../pages/Home';
import ChipPage from '../pages/ChipPage';
import ButtonPage from '../pages/ButtonPage';
import AccordionPage from '../pages/AccordionPage.js';
import IconIdentityPage from '../pages/subsystems/ai/IconIdentityPage';

export const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    description: 'Welcome to Cake Design System',
    category: 'guides'
  },
  {
    path: '/components/accordion',
    component: AccordionPage,
    title: 'Accordion',
    description: 'Expandable and collapsible content sections for organizing information',
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
    path: '/components/chip',
    component: ChipPage,
    title: 'Chip',
    description: 'Compact and versatile UI element for displaying discrete information',
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
    path: '/subsystems/ai/icon-identity',
    component: IconIdentityPage,
    title: 'Icon & Identity',
    description: 'Guidelines and components for AI-powered icon generation and brand identity management',
    category: 'subsystems'
  }
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