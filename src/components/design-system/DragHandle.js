import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getTokenColor, THEMES } from '../../tokens/colorTokens';

// SVG asset URLs from Figma localhost server
const imgStateLayer = "http://localhost:3845/assets/bfbb8fdc52b91c7ea01e4540eacd88f737624aeb.svg";
const imgStateLayer1 = "http://localhost:3845/assets/e2d0109402ca0cabf3988a2e594d34a2105a7091.svg";
const imgStateLayer2 = "http://localhost:3845/assets/94c6c222b82ec7af7f63109ecd275a672dc73432.svg";
const img = "http://localhost:3845/assets/66f15f9730bee7a9ddfeb7cdcd6f6571b074bcfb.svg";
const imgStateLayer3 = "http://localhost:3845/assets/e4b93c69073db1d46dd58284f004b84e2c95e831.svg";
const imgStateLayer4 = "http://localhost:3845/assets/c0c4687d0d06209283655680bc5369dec0dc6ea2.svg";
const imgStateLayer5 = "http://localhost:3845/assets/10c09f87cf85054af874daad60e4212c3a7b9b4a.svg";

/**
 * Drag handle states
 */
export const DRAG_HANDLE_STATES = {
  ENABLED: 'Enabled',
  HOVERED: 'Hovered',
  PRESSED: 'Pressed',
  FOCUSED: 'Focused',
  DISABLED: 'Disabled'
};

/**
 * Drag handle themes
 */
export const DRAG_HANDLE_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

const DragHandleContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: ${props => props.hasBadge ? 'column' : 'block'};
  align-items: center;
`;

const HandleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StateLayerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  z-index: ${props => props.zIndex || 'auto'};
`;

const RotatedContainer = styled.div`
  transform: rotate(180deg) scaleY(-1);
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const StateLayer = styled.div`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const StateLayerImage = styled.img`
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
`;

const StateLayerFill = styled.div`
  position: absolute;
  inset: 0;
  --fill-0: ${props => props.fillColor};
  --stroke-0: ${props => props.strokeColor};
`;

const FocusRingContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.zIndex || 'auto'};
`;

const FocusRing = styled.div`
  position: absolute;
  inset: -15%;
  --stroke-0: ${props => props.focusColor};
`;

const FocusRingImage = styled.img`
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
`;

const PressedHandleWrapper = styled.div`
  height: 48px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const FocusedHandleWrapper = styled.div`
  height: 48px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const BadgeContainer = styled.div`
  position: absolute;
  left: calc(50% - 0.5px);
  top: -18px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StyledBadge = styled.div`
  background-color: ${props => props.badgeBg};
  border: 1px solid ${props => props.badgeBorder};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
`;

const BadgeText = styled.p`
  font-family: 'Segoe UI', 'Segoe UI Semibold', sans-serif;
  font-weight: 600;
  line-height: 16px;
  font-size: 12px;
  color: ${props => props.textColor};
  text-align: center;
  margin: 0;
  padding: 0;
`;

const HoveredHandleWrapper = styled.div`
  height: 48px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const PartsHandleHovered = ({ theme }) => {
  // Use design tokens for colors
  const fillColor32 = getTokenColor('reference.infoWeak', theme);
  const strokeColor = '#ffffff';
  // Track color should remain same as enabled - not change on hover
  const fillColor20 = getTokenColor('reference.primary', theme);

  return (
    <HoveredHandleWrapper>
      <StateLayerContainer size={32} zIndex={1}>
        <RotatedContainer size={32}>
          <StateLayer size={32}>
            <StateLayerFill fillColor={fillColor32} strokeColor={strokeColor}>
              <StateLayerImage alt="" src={imgStateLayer} />
            </StateLayerFill>
          </StateLayer>
        </RotatedContainer>
      </StateLayerContainer>
      <StateLayerContainer size={20} zIndex={2}>
        <RotatedContainer size={20}>
          <StateLayer size={20}>
            <StateLayerFill fillColor={fillColor20} strokeColor={strokeColor}>
              <StateLayerImage alt="" src={imgStateLayer1} />
            </StateLayerFill>
          </StateLayer>
        </RotatedContainer>
      </StateLayerContainer>
    </HoveredHandleWrapper>
  );
};

const DragHandle = ({
  hasBadge = false,
  state = DRAG_HANDLE_STATES.ENABLED,
  theme = DRAG_HANDLE_THEMES.LIGHT,
  badgeCount = 0,
  className,
  ...props
}) => {
  const isDark = theme === DRAG_HANDLE_THEMES.DARK;

  // Get colors based on state and theme - using design tokens
  const getColors = () => {
    const isDark = theme === DRAG_HANDLE_THEMES.DARK;
    // Use design token for 32px background layer
    const infoWeakBg = getTokenColor('reference.infoWeak', theme);
    
    if (state === DRAG_HANDLE_STATES.DISABLED) {
      return {
        fillColor: getTokenColor('icon.disabled', theme),
        strokeColor: '#ffffff',
        iconSize: 18
      };
    }

    if (state === DRAG_HANDLE_STATES.FOCUSED) {
      return {
        fillColor32: infoWeakBg,
        fillColor16: getTokenColor('reference.primary', theme),
        fillColor20: getTokenColor('reference.primary', theme),
        strokeColor: '#ffffff',
        focusColor: getTokenColor('border.focus', theme),
        iconSize: 20
      };
    }

    if (state === DRAG_HANDLE_STATES.PRESSED) {
      return {
        fillColor32: infoWeakBg,
        fillColor20: getTokenColor('reference.primary', theme),
        strokeColor: '#ffffff',
        iconSize: 20
      };
    }

    if (state === DRAG_HANDLE_STATES.HOVERED) {
      // Track color should remain same as enabled - not change on hover
      return {
        fillColor32: infoWeakBg,
        fillColor20: getTokenColor('reference.primary', theme), // Same as enabled - track doesn't change
        strokeColor: '#ffffff',
        iconSize: 20
      };
    }

    // Enabled (default)
    return {
      fillColor: getTokenColor('reference.primary', theme),
      strokeColor: '#ffffff',
      iconSize: 18
    };
  };

  const colors = getColors();
  // Use design tokens for badge colors
  const badgeBg = getTokenColor('button.primary.background', theme);
  const badgeText = getTokenColor('button.primary.text', theme);
  const badgeBorder = getTokenColor('border.zero', theme);

  if (state === DRAG_HANDLE_STATES.DISABLED) {
    return (
      <DragHandleContainer hasBadge={hasBadge} className={className} {...props}>
        <HandleWrapper>
          <StateLayerContainer size={colors.iconSize}>
            <RotatedContainer size={colors.iconSize}>
              <StateLayer size={colors.iconSize}>
                <StateLayerFill fillColor={colors.fillColor} strokeColor={colors.strokeColor}>
                  <StateLayerImage alt="" src={imgStateLayer2} />
                </StateLayerFill>
              </StateLayer>
            </RotatedContainer>
          </StateLayerContainer>
        </HandleWrapper>
      </DragHandleContainer>
    );
  }

  if (state === DRAG_HANDLE_STATES.HOVERED) {
    return (
      <DragHandleContainer hasBadge={hasBadge} className={className} {...props}>
        {hasBadge ? (
          <>
            <PartsHandleHovered theme={theme} />
            <BadgeContainer>
              <StyledBadge badgeBg={badgeBg} badgeBorder={badgeBorder}>
                <BadgeText textColor={badgeText}>{badgeCount}</BadgeText>
              </StyledBadge>
            </BadgeContainer>
          </>
        ) : (
          <HandleWrapper>
            <PartsHandleHovered theme={theme} />
          </HandleWrapper>
        )}
      </DragHandleContainer>
    );
  }

  if (state === DRAG_HANDLE_STATES.PRESSED) {
    return (
      <DragHandleContainer hasBadge={hasBadge} className={className} {...props}>
        {hasBadge ? (
          <>
            <PressedHandleWrapper>
              <StateLayerContainer size={32} zIndex={1}>
                <RotatedContainer size={32}>
                  <StateLayer size={32}>
                    <StateLayerFill fillColor={colors.fillColor32} strokeColor={colors.strokeColor}>
                      <StateLayerImage alt="" src={imgStateLayer} />
                    </StateLayerFill>
                  </StateLayer>
                </RotatedContainer>
              </StateLayerContainer>
              <StateLayerContainer size={20} zIndex={2}>
                <RotatedContainer size={20}>
                  <StateLayer size={20}>
                    <StateLayerFill fillColor={colors.fillColor20} strokeColor={colors.strokeColor}>
                      <StateLayerImage alt="" src={img} />
                    </StateLayerFill>
                  </StateLayer>
                </RotatedContainer>
              </StateLayerContainer>
            </PressedHandleWrapper>
            <BadgeContainer>
              <StyledBadge badgeBg={badgeBg} badgeBorder={badgeBorder}>
                <BadgeText textColor={badgeText}>{badgeCount}</BadgeText>
              </StyledBadge>
            </BadgeContainer>
          </>
        ) : (
          <HandleWrapper>
            <PressedHandleWrapper>
              <StateLayerContainer size={32} zIndex={1}>
                <RotatedContainer size={32}>
                  <StateLayer size={32}>
                    <StateLayerFill fillColor={colors.fillColor32} strokeColor={colors.strokeColor}>
                      <StateLayerImage alt="" src={imgStateLayer} />
                    </StateLayerFill>
                  </StateLayer>
                </RotatedContainer>
              </StateLayerContainer>
              <StateLayerContainer size={20} zIndex={2}>
                <RotatedContainer size={20}>
                  <StateLayer size={20}>
                    <StateLayerFill fillColor={colors.fillColor20} strokeColor={colors.strokeColor}>
                      <StateLayerImage alt="" src={img} />
                    </StateLayerFill>
                  </StateLayer>
                </RotatedContainer>
              </StateLayerContainer>
            </PressedHandleWrapper>
          </HandleWrapper>
        )}
      </DragHandleContainer>
    );
  }

  if (state === DRAG_HANDLE_STATES.FOCUSED) {
    return (
      <DragHandleContainer hasBadge={hasBadge} className={className} {...props}>
        {hasBadge ? (
          <>
            <FocusedHandleWrapper>
              <StateLayerContainer size={32} zIndex={1}>
                <RotatedContainer size={32}>
                  <StateLayer size={32}>
                    <StateLayerFill fillColor={colors.fillColor32} strokeColor={colors.strokeColor}>
                      <StateLayerImage alt="" src={imgStateLayer} />
                    </StateLayerFill>
                  </StateLayer>
                </RotatedContainer>
              </StateLayerContainer>
              <StateLayerContainer size={16} zIndex={2}>
                <RotatedContainer size={16}>
                  <StateLayer size={16}>
                    <StateLayerFill fillColor={colors.fillColor16} strokeColor={colors.strokeColor}>
                      <StateLayerImage alt="" src={imgStateLayer3} />
                    </StateLayerFill>
                  </StateLayer>
                </RotatedContainer>
              </StateLayerContainer>
              <FocusRingContainer size={20} zIndex={3}>
                <RotatedContainer size={20}>
                  <StateLayer size={20}>
                    <FocusRing focusColor={colors.focusColor}>
                      <FocusRingImage alt="" src={imgStateLayer4} />
                    </FocusRing>
                  </StateLayer>
                </RotatedContainer>
              </FocusRingContainer>
            </FocusedHandleWrapper>
            <BadgeContainer>
              <StyledBadge badgeBg={badgeBg} badgeBorder={badgeBorder}>
                <BadgeText textColor={badgeText}>{badgeCount}</BadgeText>
              </StyledBadge>
            </BadgeContainer>
          </>
        ) : (
          <HandleWrapper>
            <FocusedHandleWrapper>
              <StateLayerContainer size={32} zIndex={1}>
                <RotatedContainer size={32}>
                  <StateLayer size={32}>
                    <StateLayerFill fillColor={colors.fillColor32} strokeColor={colors.strokeColor}>
                      <StateLayerImage alt="" src={imgStateLayer} />
                    </StateLayerFill>
                  </StateLayer>
                </RotatedContainer>
              </StateLayerContainer>
              <StateLayerContainer size={16} zIndex={2}>
                <RotatedContainer size={16}>
                  <StateLayer size={16}>
                    <StateLayerFill fillColor={colors.fillColor16} strokeColor={colors.strokeColor}>
                      <StateLayerImage alt="" src={imgStateLayer3} />
                    </StateLayerFill>
                  </StateLayer>
                </RotatedContainer>
              </StateLayerContainer>
              <FocusRingContainer size={20} zIndex={3}>
                <RotatedContainer size={20}>
                  <StateLayer size={20}>
                    <FocusRing focusColor={colors.focusColor}>
                      <FocusRingImage alt="" src={imgStateLayer4} />
                    </FocusRing>
                  </StateLayer>
                </RotatedContainer>
              </FocusRingContainer>
            </FocusedHandleWrapper>
          </HandleWrapper>
        )}
      </DragHandleContainer>
    );
  }

  // Enabled (default)
  return (
    <DragHandleContainer hasBadge={hasBadge} className={className} {...props}>
      {hasBadge ? (
        <>
          <HandleWrapper>
            <StateLayerContainer size={colors.iconSize}>
              <RotatedContainer size={colors.iconSize}>
                <StateLayer size={colors.iconSize}>
                  <StateLayerFill fillColor={colors.fillColor} strokeColor={colors.strokeColor}>
                    <StateLayerImage alt="" src={imgStateLayer5} />
                  </StateLayerFill>
                </StateLayer>
              </RotatedContainer>
            </StateLayerContainer>
          </HandleWrapper>
          <BadgeContainer>
            <StyledBadge badgeBg={badgeBg} badgeBorder={badgeBorder}>
              <BadgeText textColor={badgeText}>{badgeCount}</BadgeText>
            </StyledBadge>
          </BadgeContainer>
        </>
      ) : (
        <HandleWrapper>
          <StateLayerContainer size={colors.iconSize}>
            <RotatedContainer size={colors.iconSize}>
              <StateLayer size={colors.iconSize}>
                <StateLayerFill fillColor={colors.fillColor} strokeColor={colors.strokeColor}>
                  <StateLayerImage alt="" src={imgStateLayer5} />
                </StateLayerFill>
              </StateLayer>
            </RotatedContainer>
          </StateLayerContainer>
        </HandleWrapper>
      )}
    </DragHandleContainer>
  );
};

DragHandle.propTypes = {
  /** Whether to show a badge on the drag handle */
  hasBadge: PropTypes.bool,
  /** The interaction state of the drag handle */
  state: PropTypes.oneOf(Object.values(DRAG_HANDLE_STATES)),
  /** The theme variant */
  theme: PropTypes.oneOf(Object.values(DRAG_HANDLE_THEMES)),
  /** The count to display in the badge */
  badgeCount: PropTypes.number,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export default DragHandle;

