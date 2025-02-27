import { useDropdown } from '@/hooks/use-dropdown';
import React, { BaseSyntheticEvent } from 'react';
import { Option, Options } from '@/types';
import { Icons } from '@/components/icons';
import classNames from 'classnames';

type SelectProps = {
  options: Options;
  placeholder: string;
  value: string;
  onChange: (option: Option) => void;
};

function Select(props: SelectProps) {
  const { ref, menuRef, isOpen, setIsOpen } = useDropdown<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="relative z-0 flex"
    >
      <button
        className={classNames(
          'flex items-center justify-between gap-x-2 w-full px-4 h-12 border bg-white transition-all duration-150',
          isOpen ? 'rounded-t' : 'rounded',
        )}
        type="button"
        onClick={(evt: BaseSyntheticEvent) => !evt.target.classList.contains('remove-selection') && setIsOpen(!isOpen)}
      >
        <span className="flex overflow-y-hidden overflow-x-scroll no-scrollbar whitespace-pre w-full">
          {props.value
            ?
            <span className="flex items-center justify-between w-full">
              {props.value}
              <span
                className="remove-selection flex items-center justify-center rounded-l h-8 w-8"
                onClick={() => props.onChange({ value: '', label: '' })}
              >
                <Icons.close className="pointer-events-none" width={12} height={12} />
              </span>
            </span>
            :
            <span className="text-gray-500">{props.placeholder}</span>
          }
        </span>

        <Icons.chevronDown
          className={classNames(
            'transition-all duration-300 transform',
            isOpen && 'scale-[-1]'
          )}
          width={14}
        />
      </button>

      <div
        ref={menuRef}
        className={classNames(
          'absolute left-0 top-full flex flex-col gap-1 p-1 w-full max-h-56 overflow-y-scroll scrollbar-y border-r border-b border-l transition-all transform duration-150 rounded-b shadow',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        {props.options.map((option) => (
          <button
            key={option.value}
            className={classNames(
              'flex items-center py-2 px-4 transition-all duration-300 hover:bg-gray-100 rounded',
              option.value === props.value && 'pointer-events-none bg-primary-light/20'
            )}
            type="button"
            onClick={() => {
              props.onChange(option);
              setIsOpen(false);
            }}
          >
            {option.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Select;
