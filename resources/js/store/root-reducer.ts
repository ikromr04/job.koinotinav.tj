import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth-slice/auth-slice';
import { SliceName } from '@/const/store';
import { bannersSlice } from './banners-slice/banners-slice';
import { vacanciesSlice } from './vacancies-slice/vacancies-slice';
import { companiesSlice } from './companies-slice/companies-slice';

export const rootReducer = combineReducers({
  [SliceName.Auth]: authSlice.reducer,
  [SliceName.Banners]: bannersSlice.reducer,
  [SliceName.Vacancies]: vacanciesSlice.reducer,
  [SliceName.Companies]: companiesSlice.reducer,
});
