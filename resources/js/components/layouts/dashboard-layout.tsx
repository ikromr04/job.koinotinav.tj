import React, { ReactNode } from 'react';
import PrivateRoute from '../private-route';
import DashboardSidebar from './dashboard-sidebar';

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayout({
  children,
}: DashboardLayoutProps): JSX.Element {
  return (
    <PrivateRoute>
      <div className="grid grid-cols-[230px_calc(100%-230px)] w-screen h-screen bg-gray-100 border-none overflow-hidden">
        <DashboardSidebar />

        <div className="overflow-y-auto">
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
}

export default DashboardLayout;
