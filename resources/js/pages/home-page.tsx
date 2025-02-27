import 'swiper/css';

import BannersBlock from '@/components/blocks/banners-block';
import AppLayout from '@/components/layouts/app-layout';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getVacancies } from '@/store/vacancies-slice/vacancies-selector';
import { fetchVacanciesAction } from '@/store/vacancies-slice/vacancies-api-actions';
import HotVacancies from '@/components/blocks/hot-vacancies';

function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const vacancies = useAppSelector(getVacancies);

  useEffect(() => {
    if (!vacancies) dispatch(fetchVacanciesAction());
  }, [dispatch, vacancies]);

  return (
    <AppLayout>
      <main>
        <BannersBlock className="mb-6" />

        {vacancies && <HotVacancies vacancies={vacancies.filter(({ hot }) => hot)} />}
      </main>
    </AppLayout>
  );
}

export default HomePage;
