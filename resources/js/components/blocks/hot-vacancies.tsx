import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Icons } from '../icons';
import { Vacancies } from '@/types/vacancies';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '@/const/routes';

type HotVacanciesProps = {
  vacancies: Vacancies;
};

function HotVacancies({
  vacancies,
}: HotVacanciesProps): ReactNode {
  const getSlidesCount = (): number => {
    switch (true) {
      case (window.innerWidth < 605):
        return 1;
      case (window.innerWidth < 920):
        return 2;
      case (window.innerWidth < 1236):
        return 3;
      case (window.innerWidth < 1552):
        return 4;
      case (window.innerWidth < 1867):
        return 5;
      default:
        return 6;
    }
  };

  return (
    <section>
      <h2 className="container text-center font-semibold text-2xl mt-8 mb-6 md:mt-12 md:mb-10 md:text-3xl">
        Горячие вакансии
      </h2>

      <div className="relative z-0 px-[calc(5vw)]">
        {vacancies.length > getSlidesCount() ? <>
          <Swiper
            className="relative z-0 !p-4 !-m-4"
            spaceBetween={24}
            slidesPerView={1}
            loop
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.vacancies-pagination',
              renderBullet: (_, className) => `<button class="${className} flex min-w-3 min-h-3 bg-gray-300 rounded-full" type="button"></button>`,
            }}
            navigation={{
              prevEl: '.vacancies-prev',
              nextEl: '.vacancies-next',
            }}
            breakpoints={{
              605: {
                slidesPerView: 2,
              },
              920: {
                slidesPerView: 3,
              },
              1236: {
                slidesPerView: 4,
              },
              1552: {
                slidesPerView: 5,
              },
              1867: {
                slidesPerView: 6,
              },
            }}
          >
            {vacancies.map((vacancy) => (
              <SwiperSlide
                key={JSON.stringify(vacancy)}
                className="relative z-0 py-2"
              >
                <Link
                  className="flex flex-col h-full items-center bg-white rounded shadow-md transition-all duration-300 transform hover:scale-[1.04]"
                  to={generatePath(AppRoute.Vacancies.Show, { id: vacancy.id })}
                >
                  <img
                    className="w-full aspect-[3/2] object-cover rounded-t bg-white"
                    src={vacancy.image}
                    alt={vacancy.direction}
                  />
                  <div
                    className="py-3 px-6 my-auto text-center"
                    key={vacancy.title}
                    dangerouslySetInnerHTML={{ __html: vacancy.title }}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full gap-2 vacancies-pagination items-center justify-center py-3 hidden md:flex md:py-6"></div>

          <button className="vacancies-prev absolute left-5 top-1/2 z-10 bg-white rounded-full transform -translate-y-1/2 rotate-180 hidden md:block lg:left-10" type="button">
            <Icons.nextSlide className="w-9 h-9" />
            <span className="sr-only">Предыдущий</span>
          </button>
          <button className="vacancies-next absolute right-5 top-1/2 z-10 bg-white rounded-full transform -translate-y-1/2 hidden md:block lg:right-10" type="button">
            <Icons.nextSlide className="w-9 h-9" />
            <span className="sr-only">Следующий</span>
          </button>
        </> :
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,260px))] gap-6 justify-center">
            {vacancies.map((vacancy) => (
              <Link
                key={vacancy.id}
                className="flex flex-col h-full items-center bg-white rounded shadow-md transition-all duration-300 transform hover:scale-[1.04]"
                to={generatePath(AppRoute.Vacancies.Show, { id: vacancy.id })}
              >
                <img
                  className="w-full aspect-[3/2] object-cover rounded-t bg-white"
                  src={vacancy.image}
                  alt={vacancy.direction}
                />
                <div
                  className="py-3 px-6 my-auto text-center"
                  key={vacancy.title}
                  dangerouslySetInnerHTML={{ __html: vacancy.title }}
                />
              </Link>
            ))}
          </div>}
      </div>
    </section>
  );
}

export default HotVacancies;
