import React, { ReactNode } from 'react';
import AppHeader from './app-header';
import AppFooter from './app-footer';

type AppLayoutProps = {
  children: ReactNode;
};

function AppLayout({
  children,
}: AppLayoutProps): JSX.Element {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}

export default AppLayout;
