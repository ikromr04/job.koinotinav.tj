import { SliceName } from '@/const/store';
import { Banners } from '@/types/banners';
import { State } from '@/types/state';

export const getBanners = (state: State): Banners | null =>
  state[SliceName.Banners].banners;
