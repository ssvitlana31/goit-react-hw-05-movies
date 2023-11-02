import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Movies from 'pages/Movies';
// import Cast from './Cast';
// import Reviews from './Reviews';
// import NotFound from './NotFound';
// import MovieInfo from 'pages/MovieInfo';
// import { Home } from '../pages/Home';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('../pages/Home'));
const MovieInfo = lazy(() => import('pages/MovieInfo'));
const NotFound = lazy(() => import('./NotFound'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
