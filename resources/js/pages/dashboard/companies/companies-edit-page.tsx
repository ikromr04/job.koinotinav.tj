import CompaniesEditForm from '@/components/forms/companies/companies-edit-form';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { AppRoute } from '@/const/routes';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchCompaniesAction } from '@/store/companies-slice/companies-api-actions';
import { getCompanies } from '@/store/companies-slice/companies-selector';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CompaniesEditPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const companies = useAppSelector(getCompanies);
  const company = companies?.find(({ id }) => id === +(params.id || 0)) || null;

  useEffect(() => {
    if (!companies && params.id) dispatch(fetchCompaniesAction());
  }, [companies, dispatch, params.id]);

  return (
    <DashboardLayout>
      <main className="flex flex-col px-6 py-3">
        <h1 className="title mb-1">
          Редактировать компанию
        </h1>

        <Breadcrumbs
          className="mb-3"
          items={[
            ['Компании', AppRoute.Dashboard.Companies.Index],
            ['Редактировать', ''],
          ]}
        />

        {companies && company &&
          <CompaniesEditForm key={JSON.stringify(company)} company={company} />}
      </main>
    </DashboardLayout>
  );
}

export default CompaniesEditPage;
