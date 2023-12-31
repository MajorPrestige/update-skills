import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import Loader from './Loader/Loader';

const TweetsPage = lazy(() => import('pages/TweetsPage/TweetsPage'));
const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));

const App = () => {
  return (
    <>
    <Header />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/tweets" element={<TweetsPage />} />
      </Routes>
    </Suspense>
    </>
  );
};

export default App;
