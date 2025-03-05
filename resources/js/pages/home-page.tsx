import 'swiper/css';

import BannersBlock from '@/components/blocks/banners-block';
import AppLayout from '@/components/layouts/app-layout';
import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getVacancies } from '@/store/vacancies-slice/vacancies-selector';
import { fetchVacanciesAction } from '@/store/vacancies-slice/vacancies-api-actions';
import HotVacancies from '@/components/blocks/hot-vacancies';
import SearchField from '../components/ui/search-field';
import VacanciesBlock from '@/components/blocks/vacancies-block';
import FilterBlock from '@/components/blocks/filter-block';
import { getCompanies } from '@/store/companies-slice/companies-selector';
import { fetchCompaniesAction } from '@/store/companies-slice/companies-api-actions';
import { getBanners } from '@/store/banners-slice/banners-selector';
import { fetchBannersAction } from '@/store/banners-slice/banners-api-actions';

function HomePage(): ReactNode {
  const dispatch = useAppDispatch();
  const vacancies = useAppSelector(getVacancies);
  const companies = useAppSelector(getCompanies);
  const banners = useAppSelector(getBanners);

  useEffect(() => {
    if (!vacancies) dispatch(fetchVacanciesAction());
    if (!companies) dispatch(fetchCompaniesAction());
    if (!banners) dispatch(fetchBannersAction());
  }, [banners, companies, dispatch, vacancies]);

  if (!vacancies || !companies || !banners) return null;

  return (
    <AppLayout>
      <main className="bg-gray-100">
        <BannersBlock />

        {vacancies && (vacancies.length > 0) &&
          <>
            <HotVacancies vacancies={vacancies.filter(({ hot }) => hot)} />

            <h1 className="container text-center font-semibold text-2xl mt-8 mb-6 md:mt-12 md:mb-10 md:text-3xl" id="#vacancies">
              Актуальные вакансии
            </h1>

            <SearchField className="mb-6" />

            <div className="container mb-6 md:mb-10 lg:grid lg:grid-cols-[320px,1fr] lg:gap-x-6">
              <FilterBlock className="mb-6" vacancies={vacancies} />
              <VacanciesBlock vacancies={vacancies} />
            </div>
          </>}
      </main>
    </AppLayout>
  );
}

export default HomePage;
