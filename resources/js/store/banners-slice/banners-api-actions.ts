import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { ValidationError } from '@/types/validation-error';
import { generatePath } from 'react-router-dom';
import { Banner, BannerId, Banners } from '@/types/banners';
import { APIRoute } from '@/const/routes';
import { ResponseMessage } from '@/types';

export const fetchBannersAction = createAsyncThunk<Banners, undefined, {
  extra: AxiosInstance
}>(
  'banners/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Banners>(APIRoute.Banners.Index);

    return data;
  },
);

export const storeBannerAction = createAsyncThunk<Banner, {
  formData: FormData,
  onSuccess?: (banner: Banner) => void,
  onValidationError?: (error: ValidationError) => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'banners/store',
  async ({ formData, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Banner>(APIRoute.Banners.Index, formData);
      if (onSuccess) onSuccess(data);
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

export const updateBannerAction = createAsyncThunk<Banner, {
  id: BannerId;
  formData: FormData;
  onSuccess?: (banner: Banner) => void;
  onValidationError?: (error: ValidationError) => void;
  onFail?: (message: string) => void;
}, {
  extra: AxiosInstance;
  rejectWithValue: ValidationError;
}>(
  'banners/update',
  async ({ id, formData, onValidationError, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    formData.append('_method', 'put');

    try {
      const { data } = await api.post<Banner>(generatePath(APIRoute.Banners.Show, { id }), formData);
      if (onSuccess) onSuccess(data);
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

export const deleteBannerAction = createAsyncThunk<BannerId, {
  id: BannerId,
  onSuccess?: () => void,
  onFail?: (message: string) => void,
}, {
  extra: AxiosInstance,
  rejectWithValue: ValidationError,
}>(
  'banners/delete',
  async ({ id, onSuccess, onFail }, { extra: api, rejectWithValue }) => {
    try {
      await api.delete<ResponseMessage>(generatePath(APIRoute.Banners.Show, { id }));
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
