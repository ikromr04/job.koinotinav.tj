import React from 'react';
import { Icons } from '../icons';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}:PaginationProps):JSX.Element {
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
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        <Icons.previous width={16} />
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
            className={`px-3 py-1 border rounded ${page === currentPage ? 'bg-blue-500 text-white' : ''}`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        <Icons.next width={16} />
      </button>
    </div>
  );
};

export default Pagination;
