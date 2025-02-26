import DashboardLayout from '@/components/layouts/dashboard-layout';
import Button from '@/components/ui/button';
import DataTable from '@/components/ui/data-table';
import { AppRoute } from '@/const/routes';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchBannersAction } from '@/store/banners-slice/banners-api-actions';
import { getBanners } from '@/store/banners-slice/banners-selector';
import { Banner } from '@/types/banners';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import React, { ReactNode, useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

function BannersPage(): ReactNode {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(getBanners);
  const navigate = useNavigate();

  useEffect(() => {
    if (!banners) dispatch(fetchBannersAction());
  }, [banners, dispatch]);

  const columns: ColumnDef<Banner>[] = [
    {
      id: 'Флажки',
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      size: 50
    },
    {
      id: 'ID',
      accessorKey: 'id',
      header: 'ID',
      enableSorting: true,
    },
    {
      id: 'Фон',
      accessorKey: 'background',
      header: 'Фон',
      enableSorting: true,
      cell: ({ row }) => (
        <img
          className="min-h-16 max-h-16 aspect-[1920/540] bg-gray-200 object-cover"
          src={row.original.background}
        />
      ),
    },
    {
      id: 'Содержание',
      accessorKey: 'content',
      header: 'Содержание',
      enableSorting: true,
      cell: ({ row }) => (
        <div dangerouslySetInnerHTML={{ __html: row.original.content }} />
      ),
    },
    {
      id: 'Дата добавления',
      accessorKey: 'created_at',
      header: 'Дата добавления',
      enableSorting: true,
      cell: ({ row }) => dayjs(row.original.created_at).format('DD MMM YYYY'),
    },
    {
      id: 'Дата обновления',
      accessorKey: 'updated_at',
      header: 'Дата обновления',
      enableSorting: true,
      cell: ({ row }) => dayjs(row.original.updated_at).format('DD MMM YYYY'),
    },
    {
      id: 'Действия',
      accessorKey: 'actions',
      header: 'Действия',
      enableSorting: false,
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <Button
            icon="edit"
            variant="warn"
            href={generatePath(AppRoute.Dashboard.Banners.Edit, { id: row.original.id })}
          >
            <span className="sr-only">Редактировать</span>
          </Button>
          <Button
            icon="delete"
            variant="error"
          >
            <span className="sr-only">Удалить</span>
          </Button>
        </div>
      ),
    },
  ];

  if (!banners) return null;

  return (
    <DashboardLayout>
      <main>
        <h1 className="title mx-8 mt-4 mb-2">
          Баннеры ({banners.length})
        </h1>

        <DataTable
          className="mx-4 mb-10"
          data={banners}
          columns={columns}
          visibility={{}}
          onCreateButtonClick={() => navigate(AppRoute.Dashboard.Banners.Create)}
        />
      </main>
    </DashboardLayout>
  );
}

export default BannersPage;
