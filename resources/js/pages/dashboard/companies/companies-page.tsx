import CompaniesDeleteForm from '@/components/forms/companies/companies-delete-form';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Button from '@/components/ui/button';
import DataTable from '@/components/ui/data-table';
import Modal from '@/components/ui/modal';
import { AppRoute } from '@/const/routes';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchCompaniesAction } from '@/store/companies-slice/companies-api-actions';
import { getCompanies } from '@/store/companies-slice/companies-selector';
import { Company } from '@/types/companies';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import React, { ReactNode, useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

function CompaniesPage(): ReactNode {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(getCompanies);
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: 0,
  });

  useEffect(() => {
    if (!companies) dispatch(fetchCompaniesAction());
  }, [companies, dispatch]);

  const columns: ColumnDef<Company>[] = [
    {
      id: 'ID',
      accessorKey: 'id',
      header: 'ID',
      enableSorting: true,
    },
    {
      id: 'Логотип',
      accessorKey: 'logo',
      header: 'Логотип',
      enableSorting: true,
      cell: ({ row }) => (
        <img
          className="min-h-16 max-h-16 aspect-[1/1] bg-gray-200 object-contain rounded-full"
          src={row.original.logo}
        />
      ),
    },
    {
      id: 'Название',
      accessorKey: 'title',
      header: 'Название',
      enableSorting: true,
      cell: ({ row }) => (
        <div dangerouslySetInnerHTML={{ __html: row.original.title }} />
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
            href={generatePath(AppRoute.Dashboard.Companies.Edit, { id: row.original.id })}
          >
            <span className="sr-only">Редактировать</span>
          </Button>
          <Button
            icon="delete"
            variant="error"
            onClick={() => setDeleteModal({ id: row.original.id, isOpen: true })}
          >
            <span className="sr-only">Удалить</span>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <main>
        <h1 className="title mx-8 mt-4 mb-2">
          Компании ({companies?.length})
        </h1>

        {companies &&
          <DataTable
            className="mx-4 mb-10"
            data={companies}
            columns={columns}
            visibility={{}}
            onCreateButtonClick={() => navigate(AppRoute.Dashboard.Companies.Create)}
          />}
      </main>

      <Modal isOpen={deleteModal.isOpen}>
        <CompaniesDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </DashboardLayout>
  );
}

export default CompaniesPage;
