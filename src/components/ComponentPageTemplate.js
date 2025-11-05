import styled from 'styled-components';
import { THEMES } from '../tokens/colorTokens';

/**
 * Shared styled components for component documentation pages
 * Provides consistent layout, typography, and controls across all component pages
 */

export const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Header = styled.div`
  margin-bottom: 48px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #0F172A;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;

  &[data-has-bullets='true'] {
    padding-left: 24px;
    
    li {
      position: relative;
      list-style-type: none;
      margin-bottom: 8px;
      
      &:before {
        content: "•";
        position: absolute;
        left: -24px;
        color: #475569;
      }
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 48px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`;

export const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #0F172A;
`;

export const Select = styled.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`;

/**
 * PreviewSection component for displaying component examples
 * Supports theme prop (string: 'light.a' or 'dark.a') or isDarkMode prop (boolean)
 * @param {string} theme - Theme string ('light.a' or 'dark.a')
 * @param {boolean} isDarkMode - Boolean indicating dark mode (alternative to theme prop)
 */
export const PreviewSection = styled.div`
  background: ${props => {
    // Support both theme prop (string) and isDarkMode prop (boolean)
    const isDark = props.theme === THEMES.DARK_A || props.$theme === THEMES.DARK_A || props.isDarkMode || props.$isDarkMode;
    return isDark ? '#18181B' : '#FFFFFF';
  }};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => {
    const isDark = props.theme === THEMES.DARK_A || props.$theme === THEMES.DARK_A || props.isDarkMode || props.$isDarkMode;
    return isDark ? '#52525B' : '#E2E8F0';
  }};
`;
