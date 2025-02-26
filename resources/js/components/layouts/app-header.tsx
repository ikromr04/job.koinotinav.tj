import React from 'react';
import AppLogo from '../ui/app-logo';
import { Link } from 'react-router-dom';
import { Icons } from '../icons';
import { AppRoute } from '@/const/routes';

function AppHeader(): JSX.Element {
  return (
    <header>
      <div className="container flex items-center gap-x-4 pt-4 pb-2 md:pt-8 md:pb-6 lg:pt-16 lg:pb-8">
        <AppLogo />

        <Link className="flex items-center gap-2 ml-auto sm:ml-12" to="mailto:info@koinotinav.tj">
          <Icons.mail width={18} height={16} />
          <span className="sr-only sm:not-sr-only">info@koinotinav.tj</span>
        </Link>
        <Link className="flex items-center gap-2" to="https://t.me/hrkoinotinav" target="_blank">
          <Icons.telegram width={16} height={16} />
          <span className="sr-only sm:not-sr-only">@hrkoinotinav</span>
        </Link>
      </div>

      <nav className="relative bg-anime text-white py-1 md:py-4 lg:py-7">
        <div className="anim-container">
          <div className="anim"></div>
          <div className="anim second"></div>
          <div className="anim third"></div>
        </div>

        <div className="relative z-10 container flex items-center justify-between">
          <ul className="flex overflow-x-scroll gap-6 py-2 md:overflow-hidden lg:py-0 lg:h-10 lg:items-end lg:w-max lg:border-t lg:border-white/10 lg:gap-8">
            <li>
              <a className="block min-w-max" href="https://koinotinav.tj/">
                Главная
              </a>
            </li>
            <li>
              <a className="block min-w-max" href="https://koinotinav.tj/about/history">
                О нас
              </a>
            </li>
            <li>
              <a className="block min-w-max" href="https://koinotinav.tj/projects">
                Компании
              </a>
            </li>
            <li>
              <a className="block min-w-max" href="https://koinotinav.tj/partnership">
                Партнерство
              </a>
            </li>
            <li>
              <a className="block min-w-max" href="https://koinotinav.tj/contribution">
                Вклад в общество
              </a>
            </li>
            <li>
              <a className="block min-w-max" href="https://koinotinav.tj/contacts">
                Контакты
              </a>
            </li>
            <li className="lg:hidden">
              <Link className="block min-w-max" to={AppRoute.Main}>
                Карьера
              </Link>
            </li>
          </ul>

          <Link className="flex items-center gap-2 justify-center border-[2px] border-white font-semibold rounded lg:px-8 lg:h-12 sr-only lg:not-sr-only" to={AppRoute.Main}>
            <Icons.career width={18} height={18} /> Карьера
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
