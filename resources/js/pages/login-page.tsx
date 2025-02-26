import LoginForm from '@/components/forms/login-form';
import AppLogo from '@/components/ui/app-logo';
import { AppRoute } from '@/const/routes';
import { AuthorizationStatus } from '@/const/store';
import { useAppSelector } from '@/hooks';
import { getAuthStatus } from '@/store/auth-slice/auth-selector';
import React from 'react';
import { Navigate } from 'react-router-dom';

function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Dashboard.Index} />;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-primary-light/10">
      <AppLogo className="mt-8 mb-4 md:mt-12 md:mb-6 xl:mt-0" />

      <div className="w-[90vw] max-w-96 mx-auto mb-16 md:bg-white md:shadow-md sm:rounded-lg md:p-10 md:mb-20 xl:mb-28">
        <h1 className="title mb-5">Вход в админ-панель</h1>

        <LoginForm />
      </div>
    </main>
  );
}

export default LoginPage;
