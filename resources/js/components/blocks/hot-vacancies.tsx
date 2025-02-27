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
  return (
    <section className="p-2 -m-2">
      <h2 className="container text-center font-semibold text-2xl mt-8 mb-6 md:mt-12 md:mb-10 md:text-3xl">
        Горячие вакансии
      </h2>

      <div className="relative z-0 px-[5vw]">
        <Swiper
          spaceBetween={16}
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
            540: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 24,
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
                  className="p-2"
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
      </div>
    </section>
  );
}

export default HotVacancies;
