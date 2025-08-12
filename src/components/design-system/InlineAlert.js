import React from 'react';
import styled from 'styled-components';
import Alert, { 
  ALERT_TYPES, 
  ALERT_VARIANTS, 
  ALERT_SEVERITIES, 
  ALERT_THEMES 
} from './Alert';

// Function to get inline alert colors with slightly different background colors
const getInlineAlertColors = (severity, theme) => {
  const isDark = theme === ALERT_THEMES.DARK;
  
  const severityColors = {
    [ALERT_SEVERITIES.SUCCESS]: {
      light: {
        background: '#F0FDF4', // Slightly different from toast
        border: '#047857',
        icon: '#047857',
        text: '#0F172A',
        metadata: '#334155'
      },
      dark: {
        background: '#1F2937', // Slightly different from toast
        border: '#34D399',
        icon: '#34D399',
        text: '#D4D4D8',
        metadata: '#A1A1AA'
      }
    },
    [ALERT_SEVERITIES.WARNING]: {
      light: {
        background: '#FFFBEB', // Slightly different from toast
        border: '#C2410C',
        icon: '#C2410C',
        text: '#0F172A',
        metadata: '#334155'
      },
      dark: {
        background: '#1F2937', // Slightly different from toast
        border: '#FDBA74',
        icon: '#FDBA74',
        text: '#D4D4D8',
        metadata: '#A1A1AA'
      }
    },
    [ALERT_SEVERITIES.ERROR]: {
      light: {
        background: '#FEF2F2', // Slightly different from toast
        border: '#B91C1C',
        icon: '#B91C1C',
        text: '#0F172A',
        metadata: '#334155'
      },
      dark: {
        background: '#1F2937', // Slightly different from toast
        border: '#FCA5A5',
        icon: '#FCA5A5',
        text: '#D4D4D8',
        metadata: '#A1A1AA'
      }
    },
    [ALERT_SEVERITIES.INFO]: {
      light: {
        background: '#EFF6FF', // Slightly different from toast
        border: '#1D4ED8',
        icon: '#1D4ED8',
        text: '#0F172A',
        metadata: '#334155'
      },
      dark: {
        background: '#1F2937', // Slightly different from toast
        border: '#60A5FA',
        icon: '#60A5FA',
        text: '#D4D4D8',
        metadata: '#A1A1AA'
      }
    }
  };

  return isDark ? severityColors[severity].dark : severityColors[severity].light;
};

// Styled wrapper to override Alert component styling
const InlineAlertWrapper = styled.div`
  /* Override the Alert component's styling */
  & > div {
    background: ${props => getInlineAlertColors(props.severity, props.theme).background} !important;
    box-shadow: none !important;
    max-width: 100% !important;
    min-width: auto !important;
    position: relative !important;
  }
`;

const InlineAlert = (props) => {
  return (
    <InlineAlertWrapper severity={props.severity} theme={props.theme}>
      <Alert
        {...props}
        type={ALERT_TYPES.INLINE}
      />
    </InlineAlertWrapper>
  );
};

export default InlineAlert;
export {
  ALERT_VARIANTS,
  ALERT_SEVERITIES,
  ALERT_THEMES
};
