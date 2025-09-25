import React from 'react';
import styled from 'styled-components';
import { fontStack } from '../../styles/globalStyles';
import colorData from '../../data/colors.json';

const ColorBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 80px;
  height: 64px;
  position: relative;
  cursor: pointer;
`;

const ColorSwatch = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.color};
`;

const ColorInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.9);
  font-family: ${fontStack};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${ColorBlockContainer}:hover & {
    opacity: 1;
  }
`;

const ColorName = styled.div`
  font-weight: 400;
  color: ${colorData.slate[900]};
  margin-bottom: 2px;
  font-size: 16px;
`;

const HexValue = styled.div`
  font-family: monospace;
  color: ${colorData.slate[700]};
  font-size: 11px;
`;

const ColorBlock = ({ name, hex, onCopy }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      // Call the onCopy prop function instead of showing internal tooltip
      if (onCopy) {
        onCopy();
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <ColorBlockContainer onClick={handleCopy}>
      <ColorSwatch color={hex} />
      <ColorInfo>
        <ColorName>{name}</ColorName>
        <HexValue>{hex}</HexValue>
      </ColorInfo>
    </ColorBlockContainer>
  );
};

export default ColorBlock; 