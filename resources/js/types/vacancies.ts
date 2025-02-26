import { ID } from '.';
import { CompanyId } from './companies';

export type VacancyId = ID;

export type Vacancy = {
  id: VacancyId;
  title: string;
  content: string;
  hot: boolean;
  city: string;
  image: string;
  direction: string;
  company_id?: CompanyId;
  created_at: string;
  updated_at: string;
};

export type Vacancies = Vacancy[];
