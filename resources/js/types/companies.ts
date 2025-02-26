import { ID } from '.';

export type CompanyId = ID;

export type Company = {
  id: CompanyId;
  title: string;
  logo: string;
  created_at: string;
  updated_at: string;
};

export type Companies = Company[];
