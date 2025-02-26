import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '@/const/store';
import { Companies } from '@/types/companies';
import {
  deleteCompanyAction,
  fetchCompaniesAction,
  storeCompanyAction,
  updateCompanyAction,
} from './companies-api-actions';

export type CompaniesSlice = {
  companies: Companies | null;
}

const initialState: CompaniesSlice = {
  companies: null,
};

export const companiesSlice = createSlice({
  name: SliceName.Companies,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCompaniesAction.fulfilled, (state, action) => {
        state.companies = action.payload;
      })
      .addCase(storeCompanyAction.fulfilled, (state, action) => {
        state.companies = [action.payload, ...(state.companies || [])];
      })
      .addCase(updateCompanyAction.fulfilled, (state, action) => {
        if (state.companies) {
          state.companies = state.companies.map((company) =>
            company.id === action.payload.id ? { ...action.payload } : company
          );
        }
      })
      .addCase(deleteCompanyAction.fulfilled, (state, action) => {
        if (state.companies) {
          state.companies = state.companies.filter(({ id }) =>
            id !== action.payload
          );
        }
      });
  },
});
