import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import LegalNotice from './LegalNotice.tsx';
import Terms from './Terms.tsx';
import Privacy from './Privacy.tsx';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/legal-notice', element: <LegalNotice /> },
  { path: '/terms', element: <Terms /> },
  { path: '/privacy', element: <Privacy /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
