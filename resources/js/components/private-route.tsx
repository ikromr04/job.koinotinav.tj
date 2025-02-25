import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/index';
import { getAuthStatus } from '../store/auth-slice/auth-selector';
import { AuthorizationStatus } from '@/const/store';
import { AppRoute } from '@/const/routes';

type PrivateRouteProps = {
  children: ReactNode;
};

function PrivateRoute({
  children,
}: PrivateRouteProps): ReactNode {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Auth.Login} />
  );
}

export default PrivateRoute;
