import { AuthorizationStatus, SliceName } from '@/const/store';
import { State } from '@/types/state';

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[SliceName.Auth].authStatus;
