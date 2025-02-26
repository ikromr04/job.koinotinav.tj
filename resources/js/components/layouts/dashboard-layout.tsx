import React, { ReactNode } from 'react';
import PrivateRoute from '../private-route';

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayout({
  children,
}: DashboardLayoutProps): JSX.Element {
  return (
    <PrivateRoute>
      {children}
    </PrivateRoute>
  );
}

export default DashboardLayout;
