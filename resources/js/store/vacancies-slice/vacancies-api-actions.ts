import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { ValidationError } from '@/types/validation-error';
import { generatePath } from 'react-router-dom';
import { APIRoute } from '@/const/routes';
import { ResponseMessage } from '@/types';
import { Vacancies, Vacancy, VacancyId } from '@/types/vacancies';

export const fetchVacanciesAction = createAsyncThunk<Vacancies, undefined, {
  extra: AxiosInstance
}>(
  'vacancies/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Vacancies>(APIRoute.Vacancies.Index);

    return data;
  },
);

export const fetchTrashedVacanciesAction = createAsyncThunk<Vacancies, undefined, {
  extra: AxiosInstance;
}>(
  'vacancies/fetchTrashedVacancies',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Vacancies>(APIRoute.Vacancies.Trash);

    return data;
  },
);

export const storeVacancyAction = createAsyncThunk<Vacancy, {
  formData: FormData,
  onSuccess?: () => void,
  onValidationError?: (error: ValidationError) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'vacancies/store',
  async ({ formData, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Vacancy>(APIRoute.Vacancies.Index, formData);
      if (onSuccess) onSuccess();
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onValidationError && (error.response?.status === 422)) onValidationError(error.response.data);
      if (onFail && (error.response?.status !== 422)) onFail(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  },
);

export const restoreVacancyAction = createAsyncThunk<Vacancy, {
  id: VacancyId,
  onSuccess?: () => void,
  onValidationError?: (error: ValidationError) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'vacancies/restore',
  async ({ id, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.put<Vacancy>(generatePath(APIRoute.Vacancies.Restore, { id }));
      if (onSuccess) onSuccess();
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onValidationError && (error.response?.status === 422)) onValidationError(error.response.data);
      if (onFail && (error.response?.status !== 422)) onFail(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateVacancyAction = createAsyncThunk<Vacancy, {
  id: VacancyId;
  formData: FormData;
  onSuccess?: () => void;
  onValidationError?: (error: ValidationError) => void;
  onFail?: (message: string) => void;
}, {
  extra: AxiosInstance;
  rejectWithValue: ValidationError;
}>(
  'vacancies/update',
  async ({ id, formData, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    formData.append('_method', 'put');

    try {
      const { data } = await api.post<Vacancy>(generatePath(APIRoute.Vacancies.Show, { id }), formData);
      if (onSuccess) onSuccess();
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onValidationError && (error.response?.status === 422)) onValidationError(error.response.data);
      if (onFail && (error.response?.status !== 422)) onFail(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteVacancyAction = createAsyncThunk<VacancyId, {
  id: VacancyId,
  onSuccess?: () => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'vacancies/delete',
  async ({ id, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      await api.delete<ResponseMessage>(generatePath(APIRoute.Vacancies.Show, { id }));
      if (onSuccess) onSuccess();
      return id;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onFail && (error.response?.status !== 422)) onFail(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  },
);

export const sendResumeAction = createAsyncThunk<Vacancy, {
  formData: FormData;
  onSuccess?: () => void;
  onValidationError?: (error: ValidationError) => void;
  onFail?: (message: string) => void;
}, {
  extra: AxiosInstance;
  rejectWithValue: ValidationError;
}>(
  'vacancies/sendResume',
  async ({ formData, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post(APIRoute.Vacancies.Resume, formData);
      if (onSuccess) onSuccess();
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onValidationError && (error.response?.status === 422)) onValidationError(error.response.data);
      if (onFail && (error.response?.status !== 422)) onFail(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  },
);
