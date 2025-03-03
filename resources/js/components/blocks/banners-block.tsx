import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchBannersAction } from '@/store/banners-slice/banners-api-actions';
import { getBanners } from '@/store/banners-slice/banners-selector';
import React, { ReactNode, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Icons } from '../icons';
import classNames from 'classnames';

type BannersBlockProps = {
  className?: string;
}

function BannersBlock({
  className,
}: BannersBlockProps): ReactNode {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(getBanners);

  useEffect(() => {
    if (!banners) dispatch(fetchBannersAction());
  }, [banners, dispatch]);

  if (!banners || !banners.length) return null;

  if (banners.length === 1) {
    return (
      <div className="relative z-0 flex items-center py-8 min-h-60 md:py-12 md:min-h-96 lg:py-16 lg:min-h-[540px] text-white">
        <div className="container flex h-full items-center md:px-8 lg:px-14">
          <div className="max-w-[540px]">
            <div key={banners[0].content} dangerouslySetInnerHTML={{ __html: banners[0].content }} />
            <img
              className="absolute left-0 top-0 -z-20 w-full h-full object-cover"
              src={banners[0].background}
              alt="Баннер"
            />
            <img
              className="absolute left-0 top-0 -z-10 w-full h-full object-cover object-left"
              src="/images/banners/bg.svg"
              alt="Наложение"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Swiper
      className={classNames(
        'relative z-0 text-white',
        className,
      )}
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
      {banners.map((banner) => (
        <SwiperSlide
          key={JSON.stringify(banner)}
          className="relative z-0 py-8 min-h-60 md:py-12 md:min-h-96 lg:py-16 lg:min-h-[540px]"
        >
          <div className="container flex h-full items-center md:px-8 lg:px-14">
            <div className="max-w-[540px]">
              <div key={banner.content} dangerouslySetInnerHTML={{ __html: banner.content }} />
              <img
                className="absolute left-0 top-0 -z-20 w-full h-full object-cover"
                src={banner.background}
                alt="Баннер"
              />
              <img
                className="absolute left-0 top-0 -z-10 w-full h-full object-cover object-left"
                src="/images/banners/bg.svg"
                alt="Наложение"
              />
            </div>
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

export default BannersBlock;
