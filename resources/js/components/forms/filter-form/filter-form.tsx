import { Vacancies } from '@/types/vacancies';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Select from './select';
import { Option } from '@/types';
import { Icons } from '@/components/icons';

type FilterFormProps = {
  vacancies: Vacancies;
};

function FilterForm({
  vacancies,
}: FilterFormProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cityOptions, setCityOptions] = useState([...new Set(vacancies.map((vacancy) => vacancy.city))]);

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

  return (
    <section>
      <button
        className="flex items-center leading-none font-bold text-lg text-gray-600 gap-x-2 ml-auto"
        type="button"
        onClick={() => document.body.classList.add('overflow-hidden')}
      >
        Фильтр <Icons.filter width={18} />
      </button>

      <form
        className="fixed left-0 top-0 z-10 w-screen h-screen overflow-x-hidden overflow-y-scroll scrollbar-y flex flex-col bg-white !px-[5vw] py-4  transition-all duration-300 transform invisible opacity-0 -translate-y-full group-[.overflow-hidden]:visible group-[.overflow-hidden]:opacity-100 group-[.overflow-hidden]:translate-y-0"
      >
        <h2 className="flex justify-between items-center text-xl font-bold mb-6">
          Фильтр

          <button
            type="button"
            onClick={() => document.body.classList.remove('overflow-hidden')}
          >
            <span className="sr-only">Скрыть</span>
            <Icons.close width={14} height={14} />
          </button>
        </h2>

        <Select
          options={cityOptions.map((option) => ({ value: option, label: option }))}
          placeholder="Город"
          value={searchParams.get('city')?.toString() || ''}
          onChange={handleCityChange}
        />
      </form>
    </section>
  );
}

export default FilterForm;
