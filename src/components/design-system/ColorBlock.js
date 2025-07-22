import React, { useState } from 'react';
import styled from 'styled-components';

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
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${ColorBlockContainer}:hover & {
    opacity: 1;
  }
`;

const ColorName = styled.div`
  font-weight: 400;
  color: #333;
  margin-bottom: 2px;
  font-size: 16px;
`;

const HexValue = styled.div`
  font-family: monospace;
  color: #666;
  font-size: 11px;
`;

const CopyMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
`;

const ColorBlock = ({ name, hex }) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 1500);
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
      <CopyMessage visible={showCopied}>Copied!</CopyMessage>
    </ColorBlockContainer>
  );
};

export default ColorBlock; 