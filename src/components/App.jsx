import { Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import MenuLayout from './MenuLayout/MenuLayout';

const Home = lazy(() => import('../pages/Home'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const CastMovie = lazy(() => import('../pages/CastMovie/CastMovie'));
const MovieReview = lazy(() => import('../pages/MovieReview/MovieReview'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuLayout />} >
          <Route index element={<Home />} />
          <Route path="movies" element={<MovieSearch />} />

          <Route path='movies/:movieID' element={<MovieDetails />} >
            <Route path='cast' element={<CastMovie />} />
            <Route path='review' element={<MovieReview />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};
