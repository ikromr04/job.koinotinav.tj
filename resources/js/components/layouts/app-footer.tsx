import React from 'react';
import { Icons } from '../icons';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

function AppFooter(): JSX.Element {
  return (
    <footer>
      <div className="relative z-0 flex flex-col items-center bg-anime bg-no-repeat bg-cover text-white py-6 md:py-10 lg:py-16">
        <div className="anim-container">
          <div className="anim"></div>
          <div className="anim second"></div>
          <div className="anim third"></div>
        </div>

        <dl className="relative z-10 flex flex-col gap-4 sm:flex-row-reverse sm:gap-8 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-2">
            <dt className="text-[20px] font-semibold">О нас</dt>

            <dd>
              <a href="https://koinotinav.tj/about/history">
                История
              </a>
            </dd>
            <dd>
              <a href="https://koinotinav.tj/about/mission">
                Миссия, Видение, Ценности
              </a>
            </dd>
            <dd>
              <a href="https://koinotinav.tj/news">
                Новости
              </a>
            </dd>
          </div>

          <div className="flex flex-col gap-2 md:grid lg:grid-cols-2 lg:gap-x-16">
            <dt className="text-[20px] font-semibold lg:col-span-2">Полезные ссылки</dt>

            <dd>
              <a href="https://koinotinav.tj/projects">
                Компании
              </a>
            </dd>
            <dd>
              <a href="https://koinotinav.tj/partnership">
                Партнерство
              </a>
            </dd>
            <dd>
              <a href="https://koinotinav.tj/contribution">
                Вклад в общество
              </a>
            </dd>
            <dd>
              <a href="https://sport.koinotinav.com/" target="_blank">
                Кубок “КОИНОТИ НАВ”
              </a>
            </dd>
            <dd>
              <a href="https://job.koinotinav.tj/" target="_blank">
                Карьера
              </a>
            </dd>
            <dd>
              <a href="https://koinotinav.tj/contacts">
                Контакты
              </a>
            </dd>
          </div>
        </dl>

        <div className="container absolute top-1/2">
          <button
            className="absolute right-0 top-1/2 flex justify-center items-center transform -translate-y-1/2 -rotate-90 bg-secondary shadow shadow-secondary hover:shadow-none transition duration-300 text-white w-12 h-12 rounded-full"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Icons.nextSlide className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>

      <div className="container text-center flex flex-col gap-4 py-6 md:pt-8 md:pb-12 md:gap-y-8">
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-x-4">
          <Link className="flex items-center gap-2" to="mailto:info@koinotinav.tj">
            <Icons.mail width={18} height={16} />
            info@koinotinav.tj
          </Link>
          <Link className="flex items-center gap-2" to="https://t.me/hrkoinotinav" target="_blank">
            <Icons.telegram width={16} height={16} />
            @hrkoinotinav
          </Link>
        </div>

        <p className="uppercase">
          © {dayjs().year()} ЗАО “Коиноти нав” <br />
          Все права защищены
        </p>
      </div>
    </footer>

  );
}

export default AppFooter;
