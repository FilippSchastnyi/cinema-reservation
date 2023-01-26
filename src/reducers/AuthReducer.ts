import { UserType } from '@src/ts/types';
import { Reducer } from 'react';

type AuthStateType = { user: UserType | null };

type AuthActionType =
  { type: 'LOGIN'; payload: UserType } |
  { type: 'LOGOUT' };

export const authState: AuthStateType = {
  user: null,
};

export const authReducer: Reducer<AuthStateType, AuthActionType> = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};
