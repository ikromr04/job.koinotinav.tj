import { Vacancies } from '@/types/vacancies';
import React, { BaseSyntheticEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Select from '../forms/filter-form/select';
import { Option } from '@/types';
import { Icons } from '@/components/icons';
import Companies from '../forms/filter-form/companies';
import classNames from 'classnames';
import Spinner from '../ui/spinner';
import { useAppDispatch } from '@/hooks';
import { sendResumeAction } from '@/store/vacancies-slice/vacancies-api-actions';
import { toast } from 'react-toastify';

type FilterBlockProps = {
  vacancies: Vacancies;
  className?: string;
};

function FilterBlock({
  vacancies,
  className,
}: FilterBlockProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const cityOptions = [...new Set(vacancies.map(({ city }) => city))];
  const directionOptions = [...new Set(vacancies.map(({ direction }) => direction))];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCityChange = (option: Option) => {
    document.getElementById('#vacancies')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setSearchParams((prev) => {
      if (prev.get('keyword')) prev.set('keyword', prev.get('keyword')?.toString() || '');
      if (prev.get('direction')) prev.set('direction', prev.get('direction')?.toString() || '');
      if (prev.get('company')) prev.set('company', prev.get('company')?.toString() || '');

      if (!option.value) {
        prev.delete('city');
      } else {
        prev.set('city', option.value);
      }

      prev.delete('page');

      return prev;
    });
  };

  const handleDirectionChange = (option: Option) => {
    document.getElementById('#vacancies')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setSearchParams((prev) => {
      prev.delete('page');

      if (!option.value) {
        prev.delete('direction');
      } else {
        prev.set('direction', option.value);
      }
      return prev;
    });

    setSearchParams((prev) => {
      if (prev.get('keyword')) prev.set('keyword', prev.get('keyword')?.toString() || '');
      if (prev.get('city')) prev.set('city', prev.get('city')?.toString() || '');
      if (prev.get('company')) prev.set('company', prev.get('company')?.toString() || '');

      if (!option.value) {
        prev.delete('direction');
      } else {
        prev.set('direction', option.value);
      }

      prev.delete('page');

      return prev;
    });
  };

  const handleCompanyChange = (companyId: string) => {
    document.getElementById('#vacancies')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setSearchParams((prev) => {
      if (prev.get('keyword')) prev.set('keyword', prev.get('keyword')?.toString() || '');
      if (prev.get('city')) prev.set('city', prev.get('city')?.toString() || '');
      if (prev.get('direction')) prev.set('direction', prev.get('direction')?.toString() || '');

      if (!companyId) {
        prev.delete('company');
      } else {
        prev.set('company', companyId);
      }

      prev.delete('page');

      return prev;
    });
  };

  const handleResetButtonClick = () => {
    document.getElementById('#vacancies')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setSearchParams((prev) => {
      prev.delete('page');
      prev.delete('city');
      prev.delete('direction');
      prev.delete('company');

      return prev;
    });
  };

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
    setIsSubmitting(true);

    const formData = new FormData();

    formData.append('resume', evt.target.files[0]);

    await dispatch(sendResumeAction({
      formData,
      onSuccess: () => {
        toast.success('Ваше резюме успешно отправлено.');
      },
      onFail: () => toast.error('Не удалось отправить ваше резюме. Попробуйте позже.'),
    }));

    setIsSubmitting(false);
  };

  return (
    <section className={className}>
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
          onChange={handleCompanyChange}
        />

        <button
          className="text-lg font-bold flex justify-center"
          type="reset"
          onClick={handleResetButtonClick}
        >
          Сбросить все
        </button>
      </div>

      <div className="hidden p-5 lg:block">
        <p className="leading-[1.2] mb-4">
          Если Вы не нашли подходящую вакансию, прикрепите своё резюме для Резерва:
        </p>

        <label
          className={classNames(
            'flex items-center bg-secondary text-white rounded px-4 h-9 w-max shadow-md leading-none gap-2 cursor-pointer',
            isSubmitting && 'pointer-events-none opacity-50'
          )}
        >
          {isSubmitting
            ? <Spinner className="!w-5 !h-5" />
            : <Icons.attachFile width={16} />}

          Прикрепить файл

          <input
            className="sr-only"
            type="file"
            onChange={handleInputChange}
          />
        </label>
      </div>
    </section>
  );
}

export default FilterBlock;
