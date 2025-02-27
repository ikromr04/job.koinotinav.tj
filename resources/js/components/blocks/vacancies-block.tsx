import { Vacancies } from '@/types/vacancies';
import classNames from 'classnames';
import React, { useState } from 'react';
import VacancyCard from '../ui/vacancy-card';
import Pagination from '../ui/pagination';

type VacanciesBlockProps = {
  vacancies: Vacancies;
  className?: string;
};

function VacanciesBlock({
  vacancies,
  className,
}: VacanciesBlockProps): JSX.Element {
  const recordsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(vacancies.length / recordsPerPage);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const displayedVacancies = vacancies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('#vacancies')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={classNames(
        'flex flex-col gap-4 lg:gap-6',
        className,
      )}
    >
      {displayedVacancies.map((vacancy) => (
        <VacancyCard key={JSON.stringify(vacancy)} vacancy={vacancy} />
      ))}

      <div className="flex justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default VacanciesBlock;
