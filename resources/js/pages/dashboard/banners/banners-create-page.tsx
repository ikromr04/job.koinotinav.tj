import BannersCreateForm from '@/components/forms/banners/banners-create-form';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { AppRoute } from '@/const/routes';
import React from 'react';

function BannersCreatePage(): JSX.Element {
  return (
    <DashboardLayout>
      <main className="flex flex-col px-6 py-3">
        <h1 className="title mb-1">
          Добавить баннер
        </h1>

        <Breadcrumbs
          className="mb-3"
          items={[
            ['Баннеры', AppRoute.Dashboard.Banners.Index],
            ['Добавить', ''],
          ]}
        />

        <BannersCreateForm />
      </main>
    </DashboardLayout>
  );
}

export default BannersCreatePage;
