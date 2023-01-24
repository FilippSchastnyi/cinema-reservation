import { UserType } from '@src/ts/types';
import { createContext } from 'react';

type AuthContextType<UserType> = UserType & { isLoggedIn: boolean };

export const authContext: AuthContextType<UserType> = {
  isLoggedIn: false,
  roles: [],
  user_id: '',
  email: '',
};

export const AuthContext = createContext(authContext);
