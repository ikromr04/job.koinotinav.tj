import { AppRoute } from '@/const/routes';
import React from 'react';
import { Link } from 'react-router-dom';

function AppLogo(): JSX.Element {
  return (
    <Link className="flex max-w-max max-h-max" to={AppRoute.Main}>
      <img
        src="images/main-logo.svg"
        width="190"
        height="32"
        alt="Коиноти нав"/>
    </Link>
  );
}

export default AppLogo;
