import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { AppRoute } from '@/const/routes';
import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';
import BannersPage from './pages/dashboard/banners/banners-page';
import BannersCreatePage from './pages/dashboard/banners/banners-create-page';
import BannersEditPage from './pages/dashboard/banners/banners-edit-page';
import VacanciesPage from './pages/dashboard/vacancies/vacancies-page';
import VacanciesCreatePage from './pages/dashboard/vacancies/vacancies-create-page';
import VacanciesEditPage from './pages/dashboard/vacancies/vacancies-edit-page';
import CompaniesPage from './pages/dashboard/companies-page';
import LoginPage from './pages/login-page';

function App(): JSX.Element {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path={AppRoute.Auth.Login} element={<LoginPage />} />

        <Route path={AppRoute.Main} element={<HomePage />} />

        <Route path={AppRoute.Dashboard.Index} element={<Navigate to={AppRoute.Dashboard.Banners.Index} />} />

        <Route path={AppRoute.Dashboard.Banners.Index} element={<BannersPage />} />
        <Route path={AppRoute.Dashboard.Banners.Create} element={<BannersCreatePage />} />
        <Route path={AppRoute.Dashboard.Banners.Edit} element={<BannersEditPage />} />

        <Route path={AppRoute.Dashboard.Vacancies.Index} element={<VacanciesPage />} />
        <Route path={AppRoute.Dashboard.Vacancies.Create} element={<VacanciesCreatePage />} />
        <Route path={AppRoute.Dashboard.Vacancies.Edit} element={<VacanciesEditPage />} />

        <Route path={AppRoute.Dashboard.Companies.Index} element={<CompaniesPage />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
