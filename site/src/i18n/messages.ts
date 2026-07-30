import type { SiteLocale } from './types';

export interface HomeStarterCardCopy {
  title: string;
  body: string;
  cta: string;
}

export interface HomeFoundationCardCopy {
  title: string;
  body: string;
  wcagLinkLabel: string;
  bodyAfterLink: string;
}

export interface SiteMessages {
  chrome: {
    skipToContent: string;
    closeNavigation: string;
    openMenu: string;
    closeMenu: string;
    search: string;
    searchPlaceholder: string;
    designSystem: string;
    home: string;
    foundations: string;
    components: string;
    allComponents: string;
    switchToLightTheme: string;
    switchToDarkTheme: string;
    switchToChinese: string;
    switchToEnglish: string;
    shellFooter: (year: number) => string;
  };
  home: {
    heroSubtitle: string;
    getStartedTitle: string;
    getStartedLead: string;
    sharedFoundationsTitle: string;
    footer: string;
    starterCards: {
      designers: HomeStarterCardCopy;
      developers: HomeStarterCardCopy;
      resources: HomeStarterCardCopy;
    };
    foundationCards: {
      accessibility: HomeFoundationCardCopy;
      brand: { title: string; body: string };
      modularity: { title: string; body: string };
    };
  };
  routes: Record<string, string>;
}

const en: SiteMessages = {
  chrome: {
    skipToContent: 'Skip to content',
    closeNavigation: 'Close navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    search: 'Search',
    searchPlaceholder: 'Search documentation...',
    designSystem: 'Design system',
    home: 'Home',
    foundations: 'Foundations',
    components: 'Components',
    allComponents: 'All components →',
    switchToLightTheme: 'Switch to light theme',
    switchToDarkTheme: 'Switch to dark theme',
    switchToChinese: 'Switch to Chinese',
    switchToEnglish: 'Switch to English',
    shellFooter: (year) => `© ${year} Cake Design System. All rights reserved.`,
  },
  home: {
    heroSubtitle: 'Lenovo design system for Web & Windows OS.',
    getStartedTitle: 'Get started',
    getStartedLead: 'Everything you need to start building consistent experiences.',
    sharedFoundationsTitle: 'Shared foundations',
    footer: '© 2026 Cake& Design System. All rights reserved.',
    starterCards: {
      designers: {
        title: 'Designers',
        body: 'Access our Figma libraries, iconography, and patterns guidelines to create consistent Lenovo experiences.',
        cta: 'Get Figma kit',
      },
      developers: {
        title: 'Developers',
        body: 'Explore our full component library in Storybook to see interactive examples, usage guidelines, and available props for every component.',
        cta: 'View Storybook',
      },
      resources: {
        title: 'Resources',
        body: 'Visit our Resources page for downloadable brand assets, approved fonts, logos, color palettes, and links to our full brand guidelines.',
        cta: 'View resources',
      },
    },
    foundationCards: {
      accessibility: {
        title: 'Accessibility',
        body: 'Every Cake& component is built to meet ',
        wcagLinkLabel: 'WCAG 2.2 AA standards',
        bodyAfterLink:
          ', ensuring your experiences are accessible, inclusive, and usable by everyone, regardless of ability or device.',
      },
      brand: {
        title: 'Brand',
        body: "Maintain brand consistency across all your applications. Cake& provides the building blocks that reflect Lenovo's design language and values.",
      },
      modularity: {
        title: 'Modularity',
        body: 'Build with confidence using our modular component system. Mix and match components to create consistent, scalable interfaces that adapt to your needs.',
      },
    },
  },
  routes: {
    '/resources': 'Resources',
    '/whats-new': "What's New",
    '/foundations/colors': 'Colors',
    '/foundations/iconography': 'Iconography',
    '/foundations/language-grammar': 'Language & Grammar',
    '/foundations/ai/overview': 'AI Overview',
    '/foundations/ai/gradient': 'AI Gradient',
    '/foundations/ai/logo-icon': 'AI Logo & Icon',
    '/components/alert': 'Alert',
    '/components/accordion': 'Accordion',
    '/components/avatar': 'Avatar',
    '/components/badge': 'Badge',
    '/components/breadcrumb': 'Breadcrumb',
    '/components/button': 'Button',
    '/components/canvas': 'Canvas',
    '/components/checkbox': 'Checkbox',
    '/components/chip': 'Chip',
    '/components/menu': 'Menu',
    '/components/dropdown': 'Dropdown',
    '/components/modal': 'Modal',
    '/components/radio': 'Radio',
    '/components/segmented-control': 'Segmented Control',
    '/components/text-inputs': 'Text Inputs',
    '/components/toggle': 'Toggle',
    '/components/slider': 'Slider',
    '/components/spinner': 'Loading',
    '/components/link': 'Link',
    '/components/tab': 'Tab',
    '/components/tooltip': 'Tooltip',
  },
};

const zh: SiteMessages = {
  chrome: {
    skipToContent: '跳转到主要内容',
    closeNavigation: '关闭导航',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    search: '搜索',
    searchPlaceholder: '搜索文档…',
    designSystem: '设计系统',
    home: '首页',
    foundations: '基础',
    components: '组件',
    allComponents: '全部组件 →',
    switchToLightTheme: '切换到浅色主题',
    switchToDarkTheme: '切换到深色主题',
    switchToChinese: '切换到中文',
    switchToEnglish: '切换到英文',
    shellFooter: (year) => `© ${year} Cake& 设计系统。保留所有权利。`,
  },
  home: {
    heroSubtitle: '联想 Web 与 Windows 操作系统设计系统。',
    getStartedTitle: '入门',
    getStartedLead: '开始构建一致体验所需的一切。',
    sharedFoundationsTitle: '共享基础',
    footer: '© 2026 Cake& 设计系统。保留所有权利。',
    starterCards: {
      designers: {
        title: '设计师',
        body: '访问我们的 Figma 组件库、图标和模式指南，打造一致的联想体验。',
        cta: '获取 Figma 套件',
      },
      developers: {
        title: '开发者',
        body: '在 Storybook 中探索完整组件库，查看交互示例、使用指南以及每个组件的可用属性。',
        cta: '查看 Storybook',
      },
      resources: {
        title: '资源',
        body: '访问资源页面，下载品牌素材、批准字体、标志、调色板，并查看完整品牌指南链接。',
        cta: '查看资源',
      },
    },
    foundationCards: {
      accessibility: {
        title: '无障碍',
        body: '每个 Cake& 组件均符合 ',
        wcagLinkLabel: 'WCAG 2.2 AA 标准',
        bodyAfterLink: '，确保您的体验对所有人（无论能力或设备）都可访问、包容且易用。',
      },
      brand: {
        title: '品牌',
        body: '在所有应用中保持品牌一致性。Cake& 提供反映联想设计语言与价值观的基础构建模块。',
      },
      modularity: {
        title: '模块化',
        body: '使用模块化组件系统自信构建。自由组合组件，创建一致、可扩展且适应需求的界面。',
      },
    },
  },
  routes: {
    '/resources': '资源',
    '/whats-new': '最新动态',
    '/foundations/colors': '颜色',
    '/foundations/iconography': '图标',
    '/foundations/language-grammar': '语言与语法',
    '/foundations/ai/overview': 'AI 概览',
    '/foundations/ai/gradient': 'AI 渐变',
    '/foundations/ai/logo-icon': 'AI 标志与图标',
    '/components/alert': 'Alert',
    '/components/accordion': 'Accordion',
    '/components/avatar': 'Avatar',
    '/components/badge': 'Badge',
    '/components/breadcrumb': 'Breadcrumb',
    '/components/button': 'Button',
    '/components/canvas': 'Canvas',
    '/components/checkbox': 'Checkbox',
    '/components/chip': 'Chip',
    '/components/menu': 'Menu',
    '/components/dropdown': 'Dropdown',
    '/components/modal': 'Modal',
    '/components/radio': 'Radio',
    '/components/segmented-control': 'Segmented Control',
    '/components/text-inputs': 'Text Inputs',
    '/components/toggle': 'Toggle',
    '/components/slider': 'Slider',
    '/components/spinner': 'Loading',
    '/components/link': 'Link',
    '/components/tab': 'Tab',
    '/components/tooltip': 'Tooltip',
  },
};

export const messages: Record<SiteLocale, SiteMessages> = { en, zh };

export function getRouteTitle(locale: SiteLocale, path: string, fallback: string): string {
  return messages[locale].routes[path] ?? fallback;
}
