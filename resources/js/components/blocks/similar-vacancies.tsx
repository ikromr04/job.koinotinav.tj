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
  const getSlidesCount = (): number => {
    switch (true) {
      case (window.innerWidth < 640):
        return 1;
      case (window.innerWidth < 1024):
        return 2;
      default:
        return 3;
    }
  };

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

      {vacancies.length > getSlidesCount() ?
        <div className="relative z-0">
          <Swiper
            className="relative z-0 p-4"
            spaceBetween={24}
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
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
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
        </div> :
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-start">
          {vacancies.map((vacancy) => <VacancyCard key={vacancy.id} className="h-full" vacancy={vacancy} />)}
        </div>}

    </section>
  );
}

export default SimilarVacancies;
