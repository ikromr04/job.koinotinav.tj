import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth-slice/auth-slice';
import { SliceName } from '@/const/store';
import { bannersSlice } from './banners-slice/banners-slice';

export const rootReducer = combineReducers({
  [SliceName.Auth]: authSlice.reducer,
  [SliceName.Banners]: bannersSlice.reducer,
});
