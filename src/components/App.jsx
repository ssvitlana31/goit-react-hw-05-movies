import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Movies from 'pages/Movies';
// import { Home } from '../pages/Home';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
