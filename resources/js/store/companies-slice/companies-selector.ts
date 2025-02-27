import { SliceName } from '@/const/store';
import { Companies } from '@/types/companies';
import { State } from '@/types/state';

export const getCompanies = (state: State): Companies | null =>
  state[SliceName.Companies].companies;
