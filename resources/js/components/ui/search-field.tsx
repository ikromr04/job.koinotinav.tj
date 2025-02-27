import React, { BaseSyntheticEvent, useState } from 'react';
import { Icons } from '../icons';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

type SearchFieldProps = {
  className?: string;
};

function SearchField({
  className,
}: SearchFieldProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword')?.toString());

  const handleResetButtonClick = () => {
    setKeyword('');
    setSearchParams((prev) => {
      prev.delete('keyword');
      return prev;
    });
  };

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setSearchParams((prev) => ({
      ...prev,
      keyword,
    }));
  };

  return (
    <form
      className={classNames(
        'flex container shadow-md bg-white rounded-lg h-12',
        className,
      )}
    >
      <label className="flex grow">
        <span className="sr-only">Поиск</span>
        <input
          className="flex grow rounded-l-lg px-4"
          type="search"
          placeholder="Введите название вакансии"
          value={keyword}
          onInput={(evt: BaseSyntheticEvent) => setKeyword(evt.target.value)}
        />
      </label>

      <button
        className={classNames(
          'flex items-center h-full px-4 text-primary -ml-12 transition-all duration-300',
          keyword ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        type="reset"
        onClick={handleResetButtonClick}
      >
        <Icons.close width={14} height={14} />
        <span className="sr-only">Найти</span>
      </button>
      <button
        className="bg-primary-light text-white px-8 transition-all duration-300 hover:bg-primary-light/90 rounded-r-lg"
        type="submit"
        onClick={handleSubmitButtonClick}
      >
        <Icons.search width={18} height={18} />
        <span className="sr-only">Найти</span>
      </button>
    </form>
  );
}

export default SearchField;
