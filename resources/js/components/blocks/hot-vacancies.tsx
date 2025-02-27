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
    <section className="">
      <h2 className="md:text-3xl sm:text-2xl sm:leading-9 text-center md:leading-[52px] font-bold text-xl leading-7 mb-5 container">
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
              className="relative z-0 bg-white"
            >
              <div className="flex flex-col h-full items-center">
                <img
                  className="w-full aspect-[3/2] object-cover rounded mb-2 bg-gray-100"
                  src={vacancy.image}
                  alt=""
                />
                <div key={vacancy.title} dangerouslySetInnerHTML={{ __html: vacancy.title }} />
              </div>
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
