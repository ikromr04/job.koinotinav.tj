import { SliceName } from '@/const/store';
import { State } from '@/types/state';
import { Vacancies } from '@/types/vacancies';

export const getVacancies = (state: State): Vacancies | null =>
  state[SliceName.Vacancies].vacancies;

export const getTrashedVacancies = (state: State): Vacancies | null =>
  state[SliceName.Vacancies].trashedVacancies;
