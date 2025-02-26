import { AppRoute } from '@/const/routes';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

type AppLogoProps = {
  className?: string;
};

function AppLogo({
  className,
}: AppLogoProps): JSX.Element {
  return (
    <Link
      className={classNames(
        'flex max-w-max max-h-max',
        className,
      )}
      to={AppRoute.Main}
    >
      <img
        src="/images/main-logo.svg"
        width="190"
        height="32"
        alt="Коиноти нав" />
    </Link>
  );
}

export default AppLogo;
