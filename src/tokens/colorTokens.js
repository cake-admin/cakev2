/**
 * Color Token System for Cake Design System
 * Maps semantic color tokens to actual color values for light.a and dark.a themes
 * 
 * This system centralizes color management and makes it easy to:
 * - Switch between themes
 * - Update colors globally
 * - Integrate with Figma design tokens
 * - Maintain consistency across components
 */

import colorData from '../data/colors.json';

/**
 * Theme constants
 */
export const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

/**
 * Color token mappings organized by semantic category
 * Each token maps to light.a and dark.a theme values
 */
const colorTokens = {
  // Background colors
  background: {
    canvas: {
      [THEMES.LIGHT_A]: '#F8FAFC', // slate-50
      [THEMES.DARK_A]: '#18181B'   // zinc-900
    },
    default: {
      [THEMES.LIGHT_A]: '#FFFFFF',  // white
      [THEMES.DARK_A]: '#27272A'    // zinc-800
    },
    disabled: {
      [THEMES.LIGHT_A]: '#F1F5F9',  // slate-100
      [THEMES.DARK_A]: '#1F2937'    // gray-800
    },
    error: {
      [THEMES.LIGHT_A]: '#FEF2F2',  // red-50
      [THEMES.DARK_A]: '#2F0808'    // custom dark red
    },
    success: {
      [THEMES.LIGHT_A]: '#ECFDF5',  // emerald-50
      [THEMES.DARK_A]: '#064E3B'    // emerald-900
    }
  },

  // Border colors
  border: {
    default: {
      [THEMES.LIGHT_A]: '#E2E8F0',  // slate-200
      [THEMES.DARK_A]: '#4B5563'    // gray-600
    },
    hover: {
      [THEMES.LIGHT_A]: '#CBD5E1',  // slate-300
      [THEMES.DARK_A]: '#6B7280'    // gray-500
    },
    focus: {
      [THEMES.LIGHT_A]: '#3B82F6',  // blue-500
      [THEMES.DARK_A]: '#3B82F6'    // blue-500
    },
    disabled: {
      [THEMES.LIGHT_A]: '#9CA3AF',  // gray-400
      [THEMES.DARK_A]: '#374151'    // gray-700
    },
    error: {
      [THEMES.LIGHT_A]: '#DC2626',  // red-600
      [THEMES.DARK_A]: '#FCA5A5'    // red-300
    },
    success: {
      [THEMES.LIGHT_A]: '#059669',  // emerald-600
      [THEMES.DARK_A]: '#34D399'    // emerald-400
    }
  },

  // Text colors
  text: {
    primary: {
      [THEMES.LIGHT_A]: '#0F172A',  // slate-900
      [THEMES.DARK_A]: '#F9FAFB'    // gray-50
    },
    secondary: {
      [THEMES.LIGHT_A]: '#334155',  // slate-700
      [THEMES.DARK_A]: '#D4D4D8'    // zinc-300
    },
    tertiary: {
      [THEMES.LIGHT_A]: '#64748B',  // slate-500
      [THEMES.DARK_A]: '#A1A1AA'    // zinc-400
    },
    disabled: {
      [THEMES.LIGHT_A]: '#475569',  // slate-600
      [THEMES.DARK_A]: '#6B7280'    // gray-500
    },
    placeholder: {
      [THEMES.LIGHT_A]: '#9CA3AF',  // gray-400
      [THEMES.DARK_A]: '#9CA3AF'    // gray-400
    },
    error: {
      [THEMES.LIGHT_A]: '#DC2626',  // red-600
      [THEMES.DARK_A]: '#FCA5A5'    // red-300
    },
    success: {
      [THEMES.LIGHT_A]: '#047857',  // emerald-700
      [THEMES.DARK_A]: '#34D399'    // emerald-400
    },
    metadata: {
      [THEMES.LIGHT_A]: '#334155',  // slate-700
      [THEMES.DARK_A]: '#A1A1AA'    // zinc-400
    }
  },

  // Button colors
  button: {
    primary: {
      background: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#93C5FD'    // blue-300
      },
      backgroundHover: {
        [THEMES.LIGHT_A]: '#1E3A8A',  // blue-900
        [THEMES.DARK_A]: '#60A5FA'    // blue-400
      },
      backgroundPressed: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#93C5FD'    // blue-300
      },
      text: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#18181B'    // zinc-900
      }
    },
    secondary: {
      background: {
        [THEMES.LIGHT_A]: '#E2E8F0',  // slate-200
        [THEMES.DARK_A]: '#CBD5E1'    // slate-300
      },
      backgroundHover: {
        [THEMES.LIGHT_A]: '#CBD5E1',  // slate-300
        [THEMES.DARK_A]: '#94A3B8'    // slate-400
      },
      backgroundPressed: {
        [THEMES.LIGHT_A]: '#E2E8F0',  // slate-200
        [THEMES.DARK_A]: '#CBD5E1'    // slate-300
      },
      text: {
        [THEMES.LIGHT_A]: '#1E293B',  // slate-800
        [THEMES.DARK_A]: '#18181B'    // zinc-900
      }
    },
    danger: {
      background: {
        [THEMES.LIGHT_A]: '#B91C1C',  // red-700
        [THEMES.DARK_A]: '#FCA5A5'    // red-300
      },
      backgroundHover: {
        [THEMES.LIGHT_A]: '#7F1D1D',  // red-900
        [THEMES.DARK_A]: '#EF4444'    // red-500
      },
      backgroundPressed: {
        [THEMES.LIGHT_A]: '#B91C1C',  // red-700
        [THEMES.DARK_A]: '#FCA5A5'    // red-300
      },
      text: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#18181B'    // zinc-900
      }
    },
    text: {
      primary: {
        text: {
          [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
          [THEMES.DARK_A]: '#93C5FD'    // blue-300
        },
        backgroundHover: {
          [THEMES.LIGHT_A]: '#DBEAFE',  // blue-100
          [THEMES.DARK_A]: 'rgba(59, 130, 246, 0.45)'  // blue-500 45% opacity
        },
        backgroundPressed: {
          [THEMES.LIGHT_A]: '#BFDBFE',  // blue-200
          [THEMES.DARK_A]: 'rgba(59, 130, 246, 0.35)'  // blue-500 35% opacity
        }
      },
      secondary: {
        text: {
          [THEMES.LIGHT_A]: '#334155',  // slate-700
          [THEMES.DARK_A]: '#E2E8F0'    // slate-200
        },
        backgroundHover: {
          [THEMES.LIGHT_A]: '#E2E8F0',  // slate-200
          [THEMES.DARK_A]: 'rgba(100, 116, 139, 0.25)'  // slate-500 25% opacity
        },
        backgroundPressed: {
          [THEMES.LIGHT_A]: '#CBD5E1',  // slate-300
          [THEMES.DARK_A]: 'rgba(100, 116, 139, 0.35)'  // slate-500 35% opacity
        }
      }
    },
    icon: {
      primary: {
        icon: {
          [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
          [THEMES.DARK_A]: '#93C5FD'    // blue-300
        },
        iconHover: {
          [THEMES.LIGHT_A]: '#1E40AF',  // blue-800
          [THEMES.DARK_A]: '#93C5FD'    // blue-300
        },
        iconPressed: {
          [THEMES.LIGHT_A]: '#1E3A8A',  // blue-900
          [THEMES.DARK_A]: '#93C5FD'    // blue-300
        },
        backgroundHover: {
          [THEMES.LIGHT_A]: '#DBEAFE',  // blue-100
          [THEMES.DARK_A]: 'rgba(59, 130, 246, 0.45)'  // blue-500 45% opacity
        },
        backgroundPressed: {
          [THEMES.LIGHT_A]: '#BFDBFE',  // blue-200
          [THEMES.DARK_A]: 'rgba(59, 130, 246, 0.35)'  // blue-500 35% opacity
        }
      },
      secondary: {
        icon: {
          [THEMES.LIGHT_A]: '#1E293B',  // slate-800
          [THEMES.DARK_A]: '#E2E8F0'    // slate-200
        },
        iconHover: {
          [THEMES.LIGHT_A]: '#0F172A',  // slate-900
          [THEMES.DARK_A]: '#E2E8F0'    // slate-200
        },
        iconPressed: {
          [THEMES.LIGHT_A]: '#0F172A',  // slate-900
          [THEMES.DARK_A]: '#E2E8F0'    // slate-200
        },
        backgroundHover: {
          [THEMES.LIGHT_A]: '#E2E8F0',  // slate-200
          [THEMES.DARK_A]: 'rgba(100, 116, 139, 0.25)'  // slate-500 25% opacity
        },
        backgroundPressed: {
          [THEMES.LIGHT_A]: '#CBD5E1',  // slate-300
          [THEMES.DARK_A]: 'rgba(100, 116, 139, 0.35)'  // slate-500 35% opacity
        }
      }
    },
    text: {
      primary: {
        textHover: {
          [THEMES.LIGHT_A]: '#1E3A8A',  // blue-900
          [THEMES.DARK_A]: '#93C5FD'    // blue-300
        },
        textPressed: {
          [THEMES.LIGHT_A]: '#1E3A8A',  // blue-900
          [THEMES.DARK_A]: '#93C5FD'    // blue-300
        }
      },
      secondary: {
        textHover: {
          [THEMES.LIGHT_A]: '#1E293B',  // slate-800
          [THEMES.DARK_A]: '#E2E8F0'    // slate-200
        },
        textPressed: {
          [THEMES.LIGHT_A]: '#0F172A',  // slate-900
          [THEMES.DARK_A]: '#E2E8F0'    // slate-200
        }
      }
    },
    disabled: {
      background: {
        [THEMES.LIGHT_A]: 'rgba(203, 213, 225, 0.5)',  // slate-300 50% opacity
        [THEMES.DARK_A]: 'rgba(100, 116, 139, 0.2)'    // slate-500 20% opacity
      },
      text: {
        [THEMES.LIGHT_A]: '#475569',  // slate-600
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      },
      icon: {
        [THEMES.LIGHT_A]: '#475569',  // slate-600
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    },
    focus: {
      ring: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#93C5FD'    // blue-300
      },
      ringInner: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#18181B'    // zinc-900
      }
    }
  },

  // Alert colors
  alert: {
    success: {
      background: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      },
      border: {
        [THEMES.LIGHT_A]: '#047857',  // emerald-700
        [THEMES.DARK_A]: '#34D399'    // emerald-400
      },
      icon: {
        [THEMES.LIGHT_A]: '#047857',  // emerald-700
        [THEMES.DARK_A]: '#34D399'    // emerald-400
      },
      text: {
        [THEMES.LIGHT_A]: '#0F172A',  // slate-900
        [THEMES.DARK_A]: '#D4D4D8'    // zinc-300
      }
    },
    warning: {
      background: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      },
      border: {
        [THEMES.LIGHT_A]: '#C2410C',  // orange-700
        [THEMES.DARK_A]: '#FDBA74'    // orange-300
      },
      icon: {
        [THEMES.LIGHT_A]: '#C2410C',  // orange-700
        [THEMES.DARK_A]: '#FDBA74'    // orange-300
      },
      text: {
        [THEMES.LIGHT_A]: '#0F172A',  // slate-900
        [THEMES.DARK_A]: '#D4D4D8'    // zinc-300
      }
    },
    error: {
      background: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      },
      border: {
        [THEMES.LIGHT_A]: '#B91C1C',  // red-700
        [THEMES.DARK_A]: '#FCA5A5'    // red-300
      },
      icon: {
        [THEMES.LIGHT_A]: '#B91C1C',  // red-700
        [THEMES.DARK_A]: '#FCA5A5'    // red-300
      },
      text: {
        [THEMES.LIGHT_A]: '#0F172A',  // slate-900
        [THEMES.DARK_A]: '#D4D4D8'    // zinc-300
      }
    },
    info: {
      background: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      },
      border: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#60A5FA'    // blue-400
      },
      icon: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#60A5FA'    // blue-400
      },
      text: {
        [THEMES.LIGHT_A]: '#0F172A',  // slate-900
        [THEMES.DARK_A]: '#D4D4D8'    // zinc-300
      }
    }
  },

  // Badge colors
  badge: {
    blue: {
      background: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#60A5FA'    // blue-400
      },
      text: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#0F172A'    // slate-900
      }
    },
    red: {
      background: {
        [THEMES.LIGHT_A]: '#B91C1C',  // red-700
        [THEMES.DARK_A]: '#FB7185'    // rose-400
      },
      text: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#0F172A'    // slate-900
      }
    }
  },

  // Checkbox colors
  checkbox: {
    border: {
      default: {
        [THEMES.LIGHT_A]: '#64748B',  // slate-500
        [THEMES.DARK_A]: '#71717A'    // zinc-500
      },
      hover: {
        [THEMES.LIGHT_A]: '#0F172A',  // slate-900
        [THEMES.DARK_A]: '#D4D4D8'    // zinc-300
      },
      checked: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#52525B'    // zinc-600
      },
      disabled: {
        [THEMES.LIGHT_A]: '#9CA3AF',  // gray-400
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    },
    background: {
      checked: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#93C5FD'    // blue-300
      },
      disabled: {
        [THEMES.LIGHT_A]: '#F3F4F6',  // gray-100
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      }
    },
    icon: {
      checked: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#18181B'    // zinc-900
      },
      disabled: {
        [THEMES.LIGHT_A]: '#9CA3AF',  // gray-400
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    },
    label: {
      default: {
        [THEMES.LIGHT_A]: '#0F172A',  // slate-900
        [THEMES.DARK_A]: '#D4D4D8'    // zinc-300
      },
      disabled: {
        [THEMES.LIGHT_A]: '#9CA3AF',  // gray-400
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    }
  },

  // Radio colors
  radio: {
    border: {
      default: {
        [THEMES.LIGHT_A]: '#64748B',  // slate-500
        [THEMES.DARK_A]: '#71717A'    // zinc-500
      },
      hover: {
        [THEMES.LIGHT_A]: '#0F172A',  // slate-900
        [THEMES.DARK_A]: '#D4D4D8'    // zinc-300
      },
      selected: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#93C5FD'    // blue-300
      },
      disabled: {
        [THEMES.LIGHT_A]: '#9CA3AF',  // gray-400
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    },
    dot: {
      selected: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // blue-700
        [THEMES.DARK_A]: '#93C5FD'    // blue-300
      },
      disabled: {
        [THEMES.LIGHT_A]: 'transparent',
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    },
    label: {
      default: {
        [THEMES.LIGHT_A]: '#0F172A',  // slate-900
        [THEMES.DARK_A]: '#D4D4D8'    // zinc-300
      },
      disabled: {
        [THEMES.LIGHT_A]: '#9CA3AF',  // gray-400
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    }
  },

  // Chip colors
  chip: {
    info: {
      background: {
        [THEMES.LIGHT_A]: '#EFF6FF',  // blue-50
        [THEMES.DARK_A]: '#93C5FD'    // blue-300
      },
      text: {
        [THEMES.LIGHT_A]: '#1E3A8A',  // blue-900
        [THEMES.DARK_A]: '#0F172A'    // slate-900
      }
    },
    success: {
      background: {
        [THEMES.LIGHT_A]: '#ECFDF5',  // emerald-50
        [THEMES.DARK_A]: '#34D399'    // emerald-400
      },
      text: {
        [THEMES.LIGHT_A]: '#047857',  // emerald-700
        [THEMES.DARK_A]: '#064E3B'    // emerald-900
      }
    },
    warning: {
      background: {
        [THEMES.LIGHT_A]: '#FFF7ED',  // orange-50
        [THEMES.DARK_A]: '#FDBA74'    // orange-300
      },
      text: {
        [THEMES.LIGHT_A]: '#C2410C',  // orange-700
        [THEMES.DARK_A]: '#7C2D12'    // orange-900
      }
    },
    error: {
      background: {
        [THEMES.LIGHT_A]: '#FEF2F2',  // red-50
        [THEMES.DARK_A]: '#FCA5A5'    // red-300
      },
      text: {
        [THEMES.LIGHT_A]: '#B91C1C',  // red-700
        [THEMES.DARK_A]: '#7F1D1D'    // red-900
      }
    }
  },

  // Reference colors (top-level)
  reference: {
    surfaceDisabled: {
      [THEMES.LIGHT_A]: '#F1F5F9',  // --reference/surface-disabled (slate-100)
      [THEMES.DARK_A]: '#1F2937'    // gray-800
    },
    errorWeak: {
      [THEMES.LIGHT_A]: '#FEF2F2',  // --reference/error-weak (red-50)
      [THEMES.DARK_A]: '#2F0808'    // custom dark red
    }
  },

  // Surface colors (top-level)
  surface: {
    card: {
      [THEMES.LIGHT_A]: '#FFFFFF',  // --surface/card
      [THEMES.DARK_A]: '#27272A'    // zinc-800
    }
  },

  // TextField colors (from Figma variables)
  textField: {
    surface: {
      input: {
        [THEMES.LIGHT_A]: '#F8FAFC',  // --surface/input (slate-50)
        [THEMES.DARK_A]: '#1F2937'    // gray-800
      },
      inputOnCanvas: {
        [THEMES.LIGHT_A]: '#F1F5F9',  // --surface/input-onCanvas (slate-100)
        [THEMES.DARK_A]: '#1F2937'    // gray-800
      },
      inputHover: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // --surface/input-hover
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      },
      inputFocus: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // --surface/input-focus
        [THEMES.DARK_A]: '#1F2937'    // gray-800
      },
      inputRest: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // --surface/input-rest
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      },
      disabled: {
        [THEMES.LIGHT_A]: '#F1F5F9',  // --reference/surface-disabled (slate-100)
        [THEMES.DARK_A]: '#1F2937'    // gray-800
      },
      inputError: {
        [THEMES.LIGHT_A]: '#FEF2F2',  // --surface/input-error (red-50)
        [THEMES.DARK_A]: '#2F0808'    // custom dark red
      },
      errorWeak: {
        [THEMES.LIGHT_A]: '#FEF2F2',  // --reference/error-weak (red-50)
        [THEMES.DARK_A]: '#2F0808'    // custom dark red
      },
      successWeak: {
        [THEMES.LIGHT_A]: '#ECFDF5',  // --reference/success-weak (emerald-50)
        [THEMES.DARK_A]: '#064E3B'    // emerald-900
      }
    },
    border: {
      input: {
        [THEMES.LIGHT_A]: '#64748B',  // --border/input (slate-500)
        [THEMES.DARK_A]: '#4B5563'    // gray-600
      },
      focus: {
        [THEMES.LIGHT_A]: '#1D4ED8',  // --border/focus (blue-700)
        [THEMES.DARK_A]: '#3B82F6'    // blue-500
      },
      inputError: {
        [THEMES.LIGHT_A]: '#B91C1C',  // --border/input-error (red-700)
        [THEMES.DARK_A]: '#FCA5A5'    // red-300
      },
      inputSuccess: {
        [THEMES.LIGHT_A]: '#047857',  // --border/input-success (emerald-700)
        [THEMES.DARK_A]: '#34D399'    // emerald-400
      },
      disabled: {
        [THEMES.LIGHT_A]: '#9CA3AF',  // --border/disabled (gray-400)
        [THEMES.DARK_A]: '#374151'    // gray-700
      }
    },
    reference: {
      helper: {
        [THEMES.LIGHT_A]: '#475569',  // --reference/helper (slate-600)
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      },
      error: {
        [THEMES.LIGHT_A]: '#B91C1C',  // --reference/error (red-700)
        [THEMES.DARK_A]: '#FCA5A5'    // red-300
      },
      success: {
        [THEMES.LIGHT_A]: '#047857',  // --reference/success (emerald-700)
        [THEMES.DARK_A]: '#34D399'    // emerald-400
      }
    },
    text: {
      disabled: {
        [THEMES.LIGHT_A]: '#475569',  // --text/disabled (slate-600)
        [THEMES.DARK_A]: '#6B7280'    // gray-500
      },
      disabledSurface: {
        [THEMES.LIGHT_A]: '#9CA3AF',  // --surface/disabled (gray-400) - used for disabled asterisk
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    },
    surface: {
      disabled: {
        [THEMES.LIGHT_A]: '#9CA3AF',  // --surface/disabled (gray-400) - used for disabled asterisk
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    }
  },

  // Zinc color tokens
  zinc: {
    800: {
      [THEMES.LIGHT_A]: '#27272A',  // zinc-800 (not typically used in light mode)
      [THEMES.DARK_A]: '#27272A'    // zinc-800
    }
  },

  // Menu colors (from Figma variables)
  menu: {
    surface: {
      item: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // --surface/item
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      },
      itemHover: {
        [THEMES.LIGHT_A]: '#F3F4F6',  // gray-100
        [THEMES.DARK_A]: '#3F3F46'    // zinc-700
      },
      itemSelected: {
        [THEMES.LIGHT_A]: '#EFF6FF',  // blue-50
        [THEMES.DARK_A]: 'rgba(29, 78, 216, 0.05)'  // 1D4ED8 at 5% opacity (info-a50) from Figma
      },
      itemSelectedHover: {
        [THEMES.LIGHT_A]: '#DBEAFE',  // blue-100
        [THEMES.DARK_A]: 'rgba(29, 78, 216, 0.10)'  // 1D4ED8 at 10% opacity (info-a100) from Figma
      },
      itemFocused: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      },
      itemDisabled: {
        [THEMES.LIGHT_A]: '#FFFFFF',  // white
        [THEMES.DARK_A]: '#27272A'    // zinc-800
      },
      search: {
        [THEMES.LIGHT_A]: '#F1F5F9',  // --surface/input-oncanvas (slate-100)
        [THEMES.DARK_A]: '#1F2937'    // gray-800
      }
    },
    border: {
      zero: {
        [THEMES.LIGHT_A]: 'rgba(255, 255, 255, 0)',  // --border/zero (transparent)
        [THEMES.DARK_A]: 'rgba(255, 255, 255, 0)'
      },
      search: {
        [THEMES.LIGHT_A]: '#64748B',  // --border/input (slate-500)
        [THEMES.DARK_A]: '#4B5563'    // gray-600
      },
      strong: {
        [THEMES.LIGHT_A]: '#64748B',  // --border/strong (slate-500)
        [THEMES.DARK_A]: '#64748B'    // slate-500
      }
    },
    text: {
      item: {
        [THEMES.LIGHT_A]: '#0F172A',  // --text/primary (slate-900)
        [THEMES.DARK_A]: '#F9FAFB'    // gray-50
      },
      itemSelected: {
        [THEMES.LIGHT_A]: '#0F172A',  // slate-900 (matches text.primary light.a)
        [THEMES.DARK_A]: '#F9FAFB'    // gray-50 (matches text.primary dark.a)
      },
      itemDisabled: {
        [THEMES.LIGHT_A]: '#9CA3AF',  // gray-400
        [THEMES.DARK_A]: '#6B7280'    // gray-500
      },
      search: {
        [THEMES.LIGHT_A]: '#475569',  // --reference/helper (slate-600)
        [THEMES.DARK_A]: '#9CA3AF'    // gray-400
      }
    }
  }
};

/**
 * Get a color token value for a specific theme
 * @param {string} tokenPath - Dot-separated path to the token (e.g., 'background.canvas', 'button.primary.background')
 * @param {string} theme - Theme name ('light.a' or 'dark.a')
 * @returns {string} Color value
 */
export const getTokenColor = (tokenPath, theme = THEMES.LIGHT_A) => {
  const parts = tokenPath.split('.');
  let value = colorTokens;

  for (const part of parts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part];
    } else {
      console.warn(`Color token not found: ${tokenPath}`);
      return '#000000'; // Fallback color
    }
  }

  if (typeof value === 'object' && theme in value) {
    return value[theme];
  }

  console.warn(`Theme '${theme}' not found for token: ${tokenPath}`);
  return '#000000'; // Fallback color
};

/**
 * Get all color tokens for a specific theme
 * @param {string} theme - Theme name ('light.a' or 'dark.a')
 * @returns {object} All color tokens for the theme
 */
export const getThemeTokens = (theme = THEMES.LIGHT_A) => {
  const flatten = (obj, prefix = '') => {
    const result = {};
    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        if (theme in obj[key] && Object.keys(obj[key]).length === 2) {
          // This is a theme value object
          result[prefix ? `${prefix}.${key}` : key] = obj[key][theme];
        } else {
          // Continue traversing
          Object.assign(result, flatten(obj[key], prefix ? `${prefix}.${key}` : key));
        }
      }
    }
    return result;
  };

  return flatten(colorTokens);
};

/**
 * Check if a theme is dark
 * @param {string} theme - Theme name
 * @returns {boolean} True if theme is dark
 */
export const isDarkTheme = (theme) => {
  return theme === THEMES.DARK_A;
};

export default colorTokens;

