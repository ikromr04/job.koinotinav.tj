import { Vacancies } from '@/types/vacancies';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Select from '../forms/filter-form/select';
import { Option } from '@/types';
import { Icons } from '@/components/icons';
import Companies from '../forms/filter-form/companies';

type FilterBlockProps = {
  vacancies: Vacancies;
};

function FilterBlock({
  vacancies,
}: FilterBlockProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const cityOptions = [...new Set(vacancies.map(({ city }) => city))];
  const directionOptions = [...new Set(vacancies.map(({ direction }) => direction))];

  const handleCityChange = (option: Option) => {
    setSearchParams((prev) => {
      if (!option.value) {
        prev.delete('city');
      } else {
        prev.set('city', option.value);
      }
      return prev;
    });
  };

  const handleDirectionChange = (option: Option) => {
    setSearchParams((prev) => {
      if (!option.value) {
        prev.delete('direction');
      } else {
        prev.set('direction', option.value);
      }
      return prev;
    });
  };

  const handleResetButtonClick = () => {
    setSearchParams((prev) => {
      prev.delete('city');
      prev.delete('direction');
      prev.delete('company');

      return prev;
    });
  };

  return (
    <section>
      <button
        className="flex items-center leading-none font-bold text-lg text-gray-600 gap-x-2 ml-auto lg:hidden lg:invisible"
        type="button"
        onClick={() => document.body.classList.add('overflow-hidden')}
      >
        Фильтр <Icons.filter width={18} />
      </button>

      <div
        className="fixed left-0 top-0 z-10 w-screen h-screen overflow-x-hidden overflow-y-scroll scrollbar-y flex flex-col bg-white !px-[5vw] py-4 transition-all duration-300 transform invisible opacity-0 -translate-y-full group-[.overflow-hidden]:visible group-[.overflow-hidden]:opacity-100 group-[.overflow-hidden]:translate-y-0 lg:static lg:visible lg:opacity-100 lg:translate-y-0 lg:w-auto lg:h-auto lg:rounded-lg lg:!px-6 lg:py-8"
      >
        <h2 className="flex justify-between items-center text-xl font-bold mb-6">
          Фильтр

          <button
            className="lg:hidden"
            type="button"
            onClick={() => document.body.classList.remove('overflow-hidden')}
          >
            <span className="sr-only">Скрыть</span>
            <Icons.close width={14} height={14} />
          </button>
        </h2>

        <Select
          className="mb-4"
          options={cityOptions.map((option) => ({ value: option, label: option }))}
          placeholder="Город"
          value={searchParams.get('city')?.toString() || ''}
          onChange={handleCityChange}
        />

        <Select
          className="mb-4"
          options={directionOptions.map((option) => ({ value: option, label: option }))}
          placeholder="Направление"
          value={searchParams.get('direction')?.toString() || ''}
          onChange={handleDirectionChange}
        />

        <Companies
          className="mb-4"
          vacancies={vacancies}
          value={searchParams.get('company')?.toString() || ''}
          onChange={(companyId) => setSearchParams((prev) => ({ ...prev, company: companyId }))}
        />

        <button
          className="text-lg font-bold flex justify-center"
          type="reset"
          onClick={handleResetButtonClick}
        >
          Сбросить все
        </button>
      </div>

      <div className="p-5">
        <p className="leading-[1.2] mb-4">
          Если Вы не нашли подходящую вакансию, прикрепите своё резюме для Резерва:
        </p>

        <label className="flex items-center bg-secondary text-white rounded px-4 h-9 w-max shadow-md leading-none gap-2 cursor-pointer">
          <Icons.attachFile width={16} /> Прикрепить файл

          <input
            className="sr-only"
            type="file"
          />
        </label>
      </div>
    </section>
  );
}

export default FilterBlock;
