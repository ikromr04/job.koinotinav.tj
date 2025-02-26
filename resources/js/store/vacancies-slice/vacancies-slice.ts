import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '@/const/store';
import { Vacancies } from '@/types/vacancies';
import {
  deleteVacancyAction,
  fetchVacanciesAction,
  storeVacancyAction,
  updateVacancyAction,
} from './vacancies-api-actions';

export type VacanciesSlice = {
  vacancies: Vacancies | null;
}

const initialState: VacanciesSlice = {
  vacancies: null,
};

export const vacanciesSlice = createSlice({
  name: SliceName.Vacancies,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVacanciesAction.fulfilled, (state, action) => {
        state.vacancies = action.payload;
      })
      .addCase(storeVacancyAction.fulfilled, (state, action) => {
        state.vacancies = [action.payload, ...(state.vacancies || [])];
      })
      .addCase(updateVacancyAction.fulfilled, (state, action) => {
        if (state.vacancies) {
          state.vacancies = state.vacancies.map((vacancy) =>
            vacancy.id === action.payload.id ? { ...action.payload } : vacancy
          );
        }
      })
      .addCase(deleteVacancyAction.fulfilled, (state, action) => {
        if (state.vacancies) {
          state.vacancies = state.vacancies.filter(({ id }) =>
            id !== action.payload
          );
        }
      });
  },
});
