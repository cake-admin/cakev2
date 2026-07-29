import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { SiteShell } from './layout/SiteShell';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { StorybookRedirectPage } from './pages/StorybookRedirectPage';
import { pageComponents } from './pages/pageRegistry';
import { siteRoutes } from './data/routes';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      {siteRoutes.map((route) => {
        if (route.page) {
          const Page = pageComponents[route.page];
          return <Route key={route.path} path={route.path} element={<Page />} />;
        }
        if (route.storybookUrl) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<StorybookRedirectPage route={route} />}
            />
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<PlaceholderPage route={route} />}
          />
        );
      })}
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
