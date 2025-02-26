import { ID } from '.';

export type BannerId = ID;

export type Banner = {
  id: BannerId;
  background: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export type Banners = Banner[];
