import VacanciesDeleteForm from '@/components/forms/vacancies/vacancies-delete-form';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Button from '@/components/ui/button';
import DataTable from '@/components/ui/data-table';
import Modal from '@/components/ui/modal';
import { AppRoute } from '@/const/routes';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchCompaniesAction } from '@/store/companies-slice/companies-api-actions';
import { getCompanies } from '@/store/companies-slice/companies-selector';
import { fetchVacanciesAction } from '@/store/vacancies-slice/vacancies-api-actions';
import { getVacancies } from '@/store/vacancies-slice/vacancies-selector';
import { Vacancy } from '@/types/vacancies';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import React, { ReactNode, useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

function VacanciesPage(): ReactNode {
  const dispatch = useAppDispatch();
  const vacancies = useAppSelector(getVacancies);
  const companies = useAppSelector(getCompanies);
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: 0,
  });

  useEffect(() => {
    if (!vacancies) dispatch(fetchVacanciesAction());
    if (!companies) dispatch(fetchCompaniesAction());
  }, [companies, dispatch, vacancies]);

  const columns: ColumnDef<Vacancy>[] = [
    {
      id: 'ID',
      accessorKey: 'id',
      header: 'ID',
      enableSorting: true,
    },
    {
      id: 'Горячие вакансии',
      accessorKey: 'hot',
      header: '🔥',
      enableSorting: true,
      cell: ({ row }) => <input type="checkbox" checked={row.original.hot} readOnly />,
    },
    {
      id: 'Заголовок',
      accessorKey: 'title',
      header: 'Заголовок',
      enableSorting: true,
      cell: ({ row }) => row.original.title.replace(/<[^>]*>/g, ''),
    },
    {
      id: 'Содержание',
      accessorKey: 'content',
      header: 'Содержание',
      enableSorting: true,
      cell: ({ row }) => <div dangerouslySetInnerHTML={{ __html: row.original.content }} />,
    },
    {
      id: 'Город',
      accessorKey: 'city',
      header: 'Город',
      enableSorting: true,
    },
    {
      id: 'Картинка',
      accessorKey: 'image',
      header: 'Картинка',
      enableSorting: true,
      cell: ({ row }) => <img className="min-w-32 max-w-32 aspect-[3/2] object-cover" src={row.original.image} />,
    },
    {
      id: 'Направление',
      accessorKey: 'direction',
      header: 'Направление',
      enableSorting: true,
    },
    {
      id: 'Компания',
      accessorKey: 'company',
      header: 'Компания',
      enableSorting: true,
      cell: ({ row }) => companies?.find(({ id }) => +id === Number(row.original.company_id))?.title,
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
            icon="visibility"
            variant="light"
            href={generatePath(AppRoute.Vacancies.Show, { id: row.original.id })}
            target="_blank"
          >
            <span className="sr-only">Просмотреть на сайте</span>
          </Button>
          <Button
            icon="edit"
            variant="warn"
            href={generatePath(AppRoute.Dashboard.Vacancies.Edit, { id: row.original.id })}
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
          Вакансии ({vacancies?.length})
        </h1>

        {vacancies &&
          <DataTable
            className="mx-4 mb-10"
            data={vacancies}
            columns={columns}
            visibility={{
              'Содержание': false,
              'Картинка': false,
            }}
            onCreateButtonClick={() => navigate(AppRoute.Dashboard.Vacancies.Create)}
          />}
      </main>

      <Modal isOpen={deleteModal.isOpen}>
        <VacanciesDeleteForm modal={deleteModal} setModal={setDeleteModal} />
      </Modal>
    </DashboardLayout>
  );
}

export default VacanciesPage;
