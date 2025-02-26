import { APIRoute } from '@/const/routes';
import { LoginCredentials } from '@/dto/auth-dto';
import { dropToken, saveToken, Token } from '@/services/token';
import { ValidationError } from '@/types/validation-error';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'auth/check',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Auth.Check);
  },
);

export const loginAction = createAsyncThunk<void, {
  dto: LoginCredentials,
  onValidationError?: (error: ValidationError) => void,
}, {
  extra: AxiosInstance;
  rejectWithValue: ValidationError;
}>(
  'auth/login',
  async ({ dto, onValidationError }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post< Token>(APIRoute.Auth.Login, dto);
      saveToken(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err;
      if (!error.response) throw err;
      if (onValidationError && (error.response?.status === 422)) onValidationError(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Auth.Logout);
    dropToken();
  },
);
