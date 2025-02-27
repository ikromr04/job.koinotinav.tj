import React from 'react';
import { Icons } from '../icons';
import classNames from 'classnames';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps): JSX.Element {
  const getPagination = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const delta = 1;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > delta + 2) pages.push('...');

      const start = Math.max(2, currentPage - delta);
      const end = Math.min(totalPages - 1, currentPage + delta);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - (delta + 1)) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 text-primary">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-lg disabled:opacity-50 disabled:pointer-events-none hover:border"
      >
        <Icons.previous height={14} />
      </button>

      {getPagination().map((page, index) =>
        page === '...' ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            className={classNames(
              'flex items-center justify-center text-lg w-10 h-10 rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none hover:border-gray-300',
              page === currentPage && 'bg-primary-light text-white hover:border-transparent',
            )}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-lg disabled:opacity-50 disabled:pointer-events-none hover:border"
      >
        <Icons.next height={14} />
      </button>
    </div>
  );
};

export default Pagination;
