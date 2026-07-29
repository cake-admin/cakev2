import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { SiteShell } from './layout/SiteShell';
import { HomePage } from './pages/HomePage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { StorybookRedirectPage } from './pages/StorybookRedirectPage';
import { siteRoutes } from './data/routes';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const storybookRoutes = siteRoutes.filter((r) => r.storybookUrl);
  const placeholderRoutes = siteRoutes.filter(
    (r) => r.path !== '/' && !r.storybookUrl,
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {storybookRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<StorybookRedirectPage route={route} />}
        />
      ))}
      {placeholderRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PlaceholderPage route={route} />}
        />
      ))}
      <Route path="/foundations/ai" element={<Navigate to="/foundations/ai/overview" replace />} />
      <Route path="*" element={<PlaceholderPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteShell>
        <AppRoutes />
      </SiteShell>
    </BrowserRouter>
  );
}
