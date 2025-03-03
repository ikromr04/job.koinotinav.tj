import classNames from 'classnames';
import React from 'react';

type AppLogoProps = {
  className?: string;
  href: string;
};

function AppLogo({
  className,
  href,
}: AppLogoProps): JSX.Element {
  return (
    <a
      className={classNames(
        'flex max-w-max max-h-max',
        className,
      )}
      href={href}
    >
      <img
        src="/images/main-logo.svg"
        width="190"
        height="32"
        alt="Коиноти нав" />
    </a>
  );
}

export default AppLogo;
