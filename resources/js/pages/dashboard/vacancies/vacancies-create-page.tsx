import VacanciesCreateForm from '@/components/forms/vacancies/vacancies-create-form';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { AppRoute } from '@/const/routes';
import React from 'react';

function VacanciesCreatePage(): JSX.Element {
  return (
    <DashboardLayout>
      <main className="flex flex-col px-6 py-3">
        <h1 className="title mb-1">
          Добавить вакансию
        </h1>

        <Breadcrumbs
          className="mb-3"
          items={[
            ['Вакансии', AppRoute.Dashboard.Vacancies.Index],
            ['Добавить', ''],
          ]}
        />

        <VacanciesCreateForm />
      </main>
    </DashboardLayout>
  );
}

export default VacanciesCreatePage;
