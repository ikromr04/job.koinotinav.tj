import 'swiper/css';

import BannersBlock from '@/components/blocks/banners-block';
import AppLayout from '@/components/layouts/app-layout';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getVacancies } from '@/store/vacancies-slice/vacancies-selector';
import { fetchVacanciesAction } from '@/store/vacancies-slice/vacancies-api-actions';
import HotVacancies from '@/components/blocks/hot-vacancies';
import SearchField from '../components/ui/search-field';
import FilterForm from '@/components/forms/filter-form';
import VacanciesBlock from '@/components/blocks/vacancies-block';

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

        <h1 className="md:text-3xl sm:text-2xl sm:leading-9 text-center md:leading-[52px] font-bold text-xl leading-7 mb-5 container">
          Актуальные вакансии
        </h1>

        <SearchField />

        <div>
          <FilterForm />
          <VacanciesBlock />
        </div>
      </main>
    </AppLayout>
  );
}

export default HomePage;
