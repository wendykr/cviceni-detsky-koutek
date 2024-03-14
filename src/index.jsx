import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { CentersPage } from './pages/CentersPage/CentersPage';
import { CenterDetail } from './components/CenterDetail/CenterDetail';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/centers',
        element: <CentersPage />,
        children: [
          {
            path: 'center/:centerId',
            element: <CenterDetail />,
          },
          {
            path: '*',
            element: <ErrorPage />,
          },
        ],
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(
  document.querySelector('#app'),
).render(
  <RouterProvider router={router} />
);