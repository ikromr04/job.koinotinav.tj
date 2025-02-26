import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Icons } from '../icons';

type BreadcrumbsProps = {
  items: [string, string][];
  className?: string;
};

function Breadcrumbs({
  items,
  className,
}: BreadcrumbsProps): JSX.Element {
  return (
    <div className="relative">
      <ul
        className={classNames(
          'flex items-center text-[15px] gap-1 overflow-x-auto no-scrollbar pr-7',
          className,
        )}
      >
        {items.map(([label, url]) => (
          <li key={label} className="flex gap-1 items-baseline min-w-max text-gray-600">
            {url ? <>
              <Link className="text-gray-900" to={url}>
                {label}
              </Link>
              <Icons.next className="text-gray-900" width={8} height={8} />
            </> : label}
          </li>
        ))}
      </ul>
      <div className="absolute top-0 right-0 z-10 min-w-6 h-full pointer-events-none bg-gradient-to-l from-gray-100 to-transparent"></div>
    </div>
  );
}

export default Breadcrumbs;
