import CompaniesCreateForm from '@/components/forms/companies/companies-create-form';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { AppRoute } from '@/const/routes';
import React from 'react';

function CompaniesCreatePage(): JSX.Element {
  return (
    <DashboardLayout>
      <main className="flex flex-col px-6 py-3">
        <h1 className="title mb-1">
          Добавить компанию
        </h1>

        <Breadcrumbs
          className="mb-3"
          items={[
            ['Компании', AppRoute.Dashboard.Companies.Index],
            ['Добавить', ''],
          ]}
        />

        <CompaniesCreateForm />
      </main>
    </DashboardLayout>
  );
}

export default CompaniesCreatePage;
