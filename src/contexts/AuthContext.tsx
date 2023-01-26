import { createContext, useMemo, useReducer } from 'react';
import { UserType } from '@src/ts/types';
import { authReducer, authState } from '@src/reducers/AuthReducer';

type AuthContextType = {
  user: UserType | null;
  login: (userData: UserType) => void;
  logout: () => void
};

const authContext: AuthContextType = {
  user: null,
  login: (userData) => {},
  logout: () => {},
};

const AuthContext = createContext(authContext);

const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, authState);

  authContext.login = (userData) => {
    localStorage.setItem('token', userData.access_token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };

  authContext.logout = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
  };
  const value = useMemo(() => ({ ...authContext, user: state.user }), [state.user]);
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
