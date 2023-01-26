import { useContext, useEffect, useReducer } from 'react';
import Button from '@ui/Button/Button';
import Logo from '@components/Logo/Logo';
import Modal from '@ui/Modal/Modal';
import Login from '@components/Auth/Login';
import { AuthVariant } from '@src/ts/enums';
import { AuthContext } from '@src/contexts/AuthContext';
import { authModalReducer, authModalState } from '@src/reducers/AuthModalReducer';
import Registration from '@components/Auth/Registration';
import HeaderCss from './Header.module.scss';

const Header = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  const [state, dispatch] = useReducer(authModalReducer, authModalState);
  useEffect(() => {
    console.log(state.isModalActive);
    dispatch({
      type: state.authPopupVariant,
    });
  }, [state.isModalActive, state.authPopupVariant]);

  const onHandleAuthMethodChange = (variant: AuthVariant) => {
    return () => {
      if (variant !== AuthVariant.LogOut) {
        dispatch({
          type: variant,
        });
      } else if (variant === AuthVariant.LogOut) {
        authContext.logout();
      }
    };
  };

  const renderAuthModal = (authPopupVariant: AuthVariant): JSX.Element | null => {
    switch (authPopupVariant) {
      case AuthVariant.None:
        return null;
      case AuthVariant.LogIn:
        return <Login changeAuthMethod={onHandleAuthMethodChange(AuthVariant.SignUp)} />;
      case AuthVariant.SignUp:
        return <Registration changeAuthMethod={onHandleAuthMethodChange(AuthVariant.LogIn)} />;
      default:
        return null;
    }
  };

  return (
    <header className={HeaderCss.header}>
      <div className={HeaderCss.wrapper}>
        <Logo />
        <div className={HeaderCss.buttonGroup}>
          {
            authContext.user?.email
              ? (
                <Button size="sm" onClick={onHandleAuthMethodChange(AuthVariant.LogOut)}>
                  Log Out
                </Button>
              )
              : (
                <>
                  <Button size="sm" onClick={onHandleAuthMethodChange(AuthVariant.LogIn)}>
                    Log In
                  </Button>
                  <Button size="sm" onClick={onHandleAuthMethodChange(AuthVariant.SignUp)}>
                    Sign Up
                  </Button>
                </>
              )
          }

        </div>
      </div>
      <Modal
        active={state.isModalActive}
        closeModal={onHandleAuthMethodChange(AuthVariant.None)}
      >
        <>
          {renderAuthModal(state.authPopupVariant)}
        </>
      </Modal>
    </header>
  );
};

export default Header;
