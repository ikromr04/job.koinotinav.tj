import { Vacancies } from '@/types/vacancies';
import classNames from 'classnames';
import React from 'react';
import VacancyCard from '../ui/vacancy-card';
import Pagination from '../ui/pagination';
import { useSearchParams } from 'react-router-dom';

type VacanciesBlockProps = {
  vacancies: Vacancies;
  className?: string;
};

function VacanciesBlock(props: VacanciesBlockProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const vacancies = props.vacancies.filter((vacancy) => (
    (searchParams.get('keyword') ? vacancy.title.toLowerCase().includes(searchParams.get('keyword')?.toString().toLowerCase() || '') : true) &&
    (searchParams.get('city') ? (vacancy.city === searchParams.get('city')?.toString()) : true) &&
    (searchParams.get('direction') ? (vacancy.direction === searchParams.get('direction')?.toString()) : true) &&
    ((searchParams.get('company') && vacancy.company_id) ? (vacancy.company_id.toString() === searchParams.get('company')?.toString()) : true)
  ));

  const recordsPerPage = 6;
  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(vacancies.length / recordsPerPage);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const displayedVacancies = vacancies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      if (prev.get('keyword')) prev.set('keyword', prev.get('keyword')?.toString() || '');
      if (prev.get('city')) prev.set('city', prev.get('city')?.toString() || '');
      if (prev.get('direction')) prev.set('direction', prev.get('direction')?.toString() || '');
      if (prev.get('company')) prev.set('company', prev.get('company')?.toString() || '');

      prev.set('page', page.toString());

      return prev;
    });

    document.getElementById('#vacancies')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={classNames(
        'flex flex-col gap-4 lg:gap-6',
        props.className,
      )}
    >
      {displayedVacancies.map((vacancy) => (
        <VacancyCard key={JSON.stringify(vacancy)} vacancy={vacancy} />
      ))}
      {totalPages > 1 &&
        <div className="flex justify-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      }
    </div>
  );
}

export default VacanciesBlock;
