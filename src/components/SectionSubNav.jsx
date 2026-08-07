import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getActiveSection } from '../data/nav';

const SubBar = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-100);
  padding: var(--space-200) var(--space-400);
  background: var(--color-surfaces-canvas);
  border-bottom: var(--stroke-100) solid var(--color-stroke-border);
  font-family: var(--font-family);
  overflow-x: auto;
`;

const Tab = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 var(--space-200);
  border-radius: var(--radius-200);
  text-decoration: none;
  white-space: nowrap;
  font-size: var(--type-size-body);
  color: var(--color-text-icon-secondary);

  &:hover {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
    color: var(--color-text-icon-primary);
    text-decoration: none;
  }

  &.active {
    background: var(--color-tonal-tonal-lightest);
    color: var(--color-text-icon-on-tonal);
    font-weight: var(--font-weight-medium);
  }
`;

/** Whether a section child should show as selected for the current path. */
const isChildActive = (section, child, pathname) => {
  if (section.id === 'foundations') {
    if (child.path === '/foundations/ai') {
      return pathname === '/foundations/ai' || pathname.startsWith('/foundations/ai/');
    }
    if (child.path === '/foundations') {
      return (
        pathname === '/foundations' ||
        (pathname.startsWith('/foundations/') && !pathname.startsWith('/foundations/ai'))
      );
    }
  }

  if (child.path === section.path) {
    return pathname === child.path;
  }

  return pathname === child.path || pathname.startsWith(`${child.path}/`);
};

/**
 * Secondary tabs for Resources / Foundations. Hidden on Components (no children).
 */
const SectionSubNav = () => {
  const { pathname } = useLocation();
  const section = getActiveSection(pathname);

  if (!section?.children?.length) return null;

  return (
    <SubBar aria-label={`${section.label} pages`}>
      {section.children.map((child) => (
        <Tab
          key={child.path + child.label}
          to={child.path}
          className={() =>
            isChildActive(section, child, pathname) ? 'active' : undefined
          }
        >
          {child.label}
        </Tab>
      ))}
    </SubBar>
  );
};

export default SectionSubNav;
