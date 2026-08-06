import styled from 'styled-components';

import logoVert from '../../../src/assets/logo_vert.svg';

const LogoContainer = styled.button`
  position: fixed;
  bottom: calc(var(--space-1000) + var(--space-500));
  right: 0;
  z-index: 1000;
  width: 48px;
  padding: 0;
  border: none;
  background-color: #e1251b;
  cursor: pointer;

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--space-025));
  }

  @media (max-width: 480px) {
    width: 32px;
  }
`;

const LogoImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

/** Fixed Lenovo tab — matches legacy site chrome. */
export function LenovoLogo() {
  return (
    <LogoContainer
      type="button"
      aria-label="Visit Lenovo.com"
      onClick={() => window.open('https://lenovo.com', '_blank', 'noopener,noreferrer')}
    >
      <LogoImage src={logoVert} alt="" />
    </LogoContainer>
  );
}
