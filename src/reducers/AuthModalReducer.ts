import { Reducer } from 'react';
import { AuthVariant } from '@src/ts/enums';

type AuthModalType = {
  isModalActive: boolean,
  authPopupVariant: AuthVariant
};

const authModalState: AuthModalType = {
  isModalActive: false,
  authPopupVariant: AuthVariant.LogOut,
};

const authModalReducer: Reducer<AuthModalType, any> = (state, action: { type: AuthVariant }) => {
  switch (action.type) {
    case AuthVariant.None:
      return { ...state, isModalActive: false, authPopupVariant: AuthVariant.None };
    case AuthVariant.LogIn:
      return { ...state, isModalActive: true, authPopupVariant: AuthVariant.LogIn };
    case AuthVariant.SignUp:
      return { ...state, isModalActive: true, authPopupVariant: AuthVariant.SignUp };
    default: return state;
  }
};

export { authModalReducer, authModalState };
