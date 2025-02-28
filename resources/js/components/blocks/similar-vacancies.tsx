import { Vacancies } from '@/types/vacancies';
import React, { ReactNode } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import VacancyCard from '../ui/vacancy-card';
import classNames from 'classnames';

type SimilarVacanciesProps = {
  vacancies: Vacancies;
  className?: string;
};

function SimilarVacancies({
  vacancies,
  className,
}: SimilarVacanciesProps): ReactNode {
  if (!vacancies.length) return null;

  const handleSwiperSlideClick = () =>
    document.querySelector('#vacancy')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section
      className={classNames(
        'container',
        className,
      )}
    >
      <h2 className="container font-semibold text-2xl mb-4 md:text-3xl">
        Похожие вакансии
      </h2>

      <div className="relative z-0">
        <Swiper
          className="relative z-0 p-4"
          spaceBetween={16}
          slidesPerView={1}
          loop
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: '.vacancies-pagination',
            renderBullet: (_, className) => `<button class="${className} flex min-w-3 min-h-3 bg-gray-300 rounded-full" type="button"></button>`,
          }}
          breakpoints={{
            540: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {vacancies.map((vacancy) => (
            <SwiperSlide
              key={JSON.stringify(vacancy)}
              className="relative z-0 py-2"
              onClick={handleSwiperSlideClick}
            >
              <VacancyCard className="h-full" vacancy={vacancy} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full gap-2 vacancies-pagination items-center justify-center py-3 hidden md:flex md:py-6"></div>
      </div>
    </section>
  );
}

export default SimilarVacancies;
