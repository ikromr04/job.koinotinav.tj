import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { AppRoute } from '@/const/routes';
import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';

function App(): JSX.Element {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path={AppRoute.Auth.Login} element={<HomePage />} />

        <Route path={AppRoute.Main} element={<HomePage />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
