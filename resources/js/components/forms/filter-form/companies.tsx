import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchCompaniesAction } from '@/store/companies-slice/companies-api-actions';
import { getCompanies } from '@/store/companies-slice/companies-selector';
import { Vacancies } from '@/types/vacancies';
import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';

type CompaniesProps = {
  value: string;
  vacancies: Vacancies;
  onChange: (companyId: string) => void;
  className?: string;
};

function Companies({
  value,
  vacancies,
  onChange,
  className,
}: CompaniesProps): ReactNode {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(getCompanies);

  useEffect(() => {
    if (!companies) dispatch(fetchCompaniesAction());
  }, [companies, dispatch]);

  return (
    <div
      className={classNames(
        'flex flex-col gap-1 p-1 rounded bg-white border md:grid md:grid-cols-2 lg:flex lg:border-none',
        className,
      )}
    >
      <button
        className={classNames(
          'flex items-center gap-2 p-1 pr-2 pl-[52px] rounded-l-full h-12 transition-all duration-300 hover:bg-gray-100 md:col-span-2',
          !value && 'bg-primary-light/20 pointer-events-none',
        )}
        type="button"
        onClick={() => onChange('')}
      >
        Все компании
      </button>

      {companies?.map((company) => (
        <button
          key={JSON.stringify(company)}
          className={classNames(
            'flex items-center gap-2 p-1 pr-2 rounded-l-full h-12 transition-all duration-300 text-left leading-[1.2] hover:bg-gray-100',
            value === company.id.toString() && 'bg-primary-light/20 pointer-events-none',
          )}
          type="button"
          onClick={() => onChange(company.id.toString())}
        >
          <img
            className="flex min-w-10 min-h-10 rounded-full"
            src={company.logo}
            width={40}
            height={40}
            alt={company.title}
          />
          {company.title}
          <span className="flex items-center justify-center text-xs leading-none ml-auto min-w-5 min-h-5 rounded-full bg-primary-light text-white">
            {vacancies.filter(({ company_id }) => company_id === company.id).length}
          </span>
        </button>
      ))}
    </div>
  );
}

export default Companies;
