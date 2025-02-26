import { createSlice } from '@reduxjs/toolkit';
import { Banners } from '@/types/banners';
import {
  deleteBannerAction,
  fetchBannersAction,
  storeBannerAction,
  updateBannerAction,
} from './banners-api-actions';
import { SliceName } from '@/const/store';

export type BannersSlice = {
  banners: Banners | null;
}

const initialState: BannersSlice = {
  banners: null,
};

export const bannersSlice = createSlice({
  name: SliceName.Banners,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBannersAction.fulfilled, (state, action) => {
        state.banners = action.payload;
      })
      .addCase(storeBannerAction.fulfilled, (state, action) => {
        state.banners = [action.payload, ...(state.banners || [])];
      })
      .addCase(updateBannerAction.fulfilled, (state, action) => {
        if (state.banners) {
          state.banners = state.banners.map((banner) =>
            banner.id === action.payload.id ? { ...action.payload } : banner
          );
        }
      })
      .addCase(deleteBannerAction.fulfilled, (state, action) => {
        if (state.banners) {
          state.banners = state.banners.filter(({ id }) =>
            id !== action.payload
          );
        }
      });
  },
});
