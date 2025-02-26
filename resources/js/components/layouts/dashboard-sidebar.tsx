import React from 'react';
import AppLogo from '../ui/app-logo';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '@/const/routes';
import classNames from 'classnames';
import { Icons } from '../icons';
import { useAppDispatch } from '@/hooks';
import { logoutAction } from '@/store/auth-slice/auth-api-actions';

function DashboardSidebar(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <aside className="flex flex-col bg-white border-r shadow">
      <nav className="flex flex-col grow">
        <AppLogo className="m-4 mr-6" />

        <hr />

        <ul>
          <li>
            <NavLink
              className={({ isActive }) => classNames('group navlink', isActive && 'active')}
              to={AppRoute.Dashboard.Banners.Index}
            >
              <Icons.banners className="navlink__icon" />
              Баннеры
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames('group navlink', isActive && 'active')}
              to={AppRoute.Dashboard.Vacancies.Index}
            >
              <Icons.career className="navlink__icon" />
              Вакансии
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames('group navlink', isActive && 'active')}
              to={AppRoute.Dashboard.Companies.Index}
            >
              <Icons.apartment className="navlink__icon" />
              Компании
            </NavLink>
          </li>
        </ul>

        <button
          className="navlink mt-auto"
          type="button"
          onClick={() => dispatch(logoutAction())}
        >
          <Icons.logout className="navlink__icon" />
          <span className="navlink__label">Выйти</span>
        </button>
      </nav>
    </aside>
  );
}

export default DashboardSidebar;
