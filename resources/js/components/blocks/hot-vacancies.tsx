import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Icons } from '../icons';
import { Vacancies } from '@/types/vacancies';

type HotVacanciesProps = {
  vacancies: Vacancies;
};

function HotVacancies({
  vacancies,
}: HotVacanciesProps): ReactNode {
  return (
    <Swiper
      className="relative z-0"
      spaceBetween={50}
      slidesPerView={1}
      loop
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        el: '.banners-pagination',
        renderBullet: (_, className) => `<button class="${className} flex min-w-3 min-h-3 bg-gray-300 rounded-full" type="button"></button>`,
      }}
      navigation={{
        prevEl: '.banners-prev',
        nextEl: '.banners-next',
      }}
    >
      {vacancies.map((vacancy) => (
        <SwiperSlide
          key={JSON.stringify(vacancy)}
          className="relative z-0 py-8 min-h-60 md:py-12 md:min-h-96 lg:py-16 lg:min-h-[540px]"
        >
          <div className="container flex h-full items-center md:px-8 lg:px-14">
            <div key={vacancy.title} dangerouslySetInnerHTML={{ __html: vacancy.title }} />
          </div>
        </SwiperSlide>
      ))}

      <div className="absolute left-0 bottom-0 z-10 w-full gap-2 banners-pagination items-center justify-center py-3 hidden md:flex"></div>

      <button className="banners-prev absolute left-5 top-1/2 z-10 transform -translate-y-1/2 rotate-180 hidden md:block lg:left-10" type="button">
        <Icons.nextSlide className="w-9 h-9" />
        <span className="sr-only">Предыдущий</span>
      </button>
      <button className="banners-next absolute right-5 top-1/2 z-10 transform -translate-y-1/2 hidden md:block lg:right-10" type="button">
        <Icons.nextSlide className="w-9 h-9" />
        <span className="sr-only">Следующий</span>
      </button>
    </Swiper>
  );
}

export default HotVacancies;
