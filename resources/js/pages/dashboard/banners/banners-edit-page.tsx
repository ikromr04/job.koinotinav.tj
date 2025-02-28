import BannersEditForm from '@/components/forms/banners/banners-edit-form';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { AppRoute } from '@/const/routes';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchBannersAction } from '@/store/banners-slice/banners-api-actions';
import { getBanners } from '@/store/banners-slice/banners-selector';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BannersEditPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const banners = useAppSelector(getBanners);
  const banner = banners?.find((banner) => banner.id === +(params.id || 0)) || null;

  useEffect(() => {
    if (!banners && params.id) dispatch(fetchBannersAction());
  }, [banners, dispatch, params.id]);

  return (
    <DashboardLayout>
      <main className="flex flex-col px-6 py-3">
        <h1 className="title mb-1">
          Редактировать баннер
        </h1>

        <Breadcrumbs
          className="mb-3"
          items={[
            ['Баннеры', AppRoute.Dashboard.Banners.Index],
            ['Редактировать', ''],
          ]}
        />

        {banners && banner &&
          <BannersEditForm key={JSON.stringify(banner)} banner={banner} />
        }
      </main>
    </DashboardLayout>
  );
}

export default BannersEditPage;
