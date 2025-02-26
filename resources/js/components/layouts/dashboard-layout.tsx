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
      <div className="grid grid-cols-[auto_1fr] w-screen h-screen bg-gray-100 border-none">
        <DashboardSidebar />
        {children}
      </div>
    </PrivateRoute>
  );
}

export default DashboardLayout;
