import { AppRoute } from '@/const/routes';
import { Vacancy } from '@/types/vacancies';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { Icons } from '../icons';

type VacancyCardProps = {
  vacancy: Vacancy;
};

function VacancyCard({
  vacancy,
}: VacancyCardProps): JSX.Element {
  const text = vacancy.content.replace(/<[^>]*>/g, '');
  const match = text.match(/[^.!?]+[.!?]/);

  return (
    <Link
      className="flex flex-col bg-white rounded-lg border py-8 px-6 gap-2 sm:flex-row sm:items-start md:gap-3 transition-all duration-300 hover:shadow-md"
      to={generatePath(AppRoute.Vacancies.Show, { id: vacancy.id })}
    >
      <div className="mb-2">
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: vacancy.title }}
        />
        <div>
          {match ? match[0].trim() : text.trim()}
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-500 ml-auto">
        <Icons.location className="text-success" width={16} />
        {vacancy.city}
      </div>
    </Link>
  );
}

export default VacancyCard;
