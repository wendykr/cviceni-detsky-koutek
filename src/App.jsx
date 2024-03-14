import { Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';

export const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Outlet />
    </div>
  );
};