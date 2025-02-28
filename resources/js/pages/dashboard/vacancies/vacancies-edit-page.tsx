import VacanciesEditForm from '@/components/forms/vacancies/vacancies-edit-form';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { AppRoute } from '@/const/routes';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchVacanciesAction } from '@/store/vacancies-slice/vacancies-api-actions';
import { getVacancies } from '@/store/vacancies-slice/vacancies-selector';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VacanciesEditPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const vacancies = useAppSelector(getVacancies);
  const vacancy = vacancies?.find(({ id }) => id === +(params.id || 0)) || null;

  useEffect(() => {
    if (!vacancies && params.id) dispatch(fetchVacanciesAction());
  }, [dispatch, params.id, vacancies]);

  return (
    <DashboardLayout>
      <main className="flex flex-col px-6 py-3">
        <h1 className="title mb-1">
          Редактировать вакансию
        </h1>

        <Breadcrumbs
          className="mb-3"
          items={[
            ['Вакансии', AppRoute.Dashboard.Vacancies.Index],
            ['Редактировать', ''],
          ]}
        />

        {vacancies && vacancy &&
          <VacanciesEditForm key={JSON.stringify(vacancy)} vacancy={vacancy} />}
      </main>
    </DashboardLayout>
  );
}

export default VacanciesEditPage;
