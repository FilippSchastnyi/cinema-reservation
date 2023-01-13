import { useState } from 'react';
import classes from './Header.module.scss';
import Button from '../../../_UI/Button/Button';
import Logo from '../../../Logo/Logo';
import Modal from '../../../_UI/Modal/Modal';
import Login from '../../../Authentification/Login/Login.';
import Registration from '../../../Authentification/Registration/Registration';

enum AuthVariant {
  None,
  LogIn,
  SignUp,
}

const Header = (): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [authPopupState, setAuthPopupState] = useState(AuthVariant.None);

  const onHandleLoginClick = (authPopupVariant: AuthVariant) => {
    return () => {
      setModalActive(!modalActive);
      setAuthPopupState(authPopupVariant);
    };
  };

  const renderAuthModal = (authPopupVariant: AuthVariant): JSX.Element | null => {
    switch (authPopupVariant) {
      case AuthVariant.None:
        return null;
      case AuthVariant.LogIn:
        return <Login />;
      case AuthVariant.SignUp:
        return <Registration />;
      default:
        return null;
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Logo />
        <div className={classes.buttonGroup}>
          <Button size="sm" onClick={onHandleLoginClick(AuthVariant.LogIn)}>
            Log In
          </Button>
          <Button size="sm" onClick={onHandleLoginClick(AuthVariant.SignUp)}>
            Sign Up
          </Button>
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
      >
        <>
          {renderAuthModal(authPopupState)}
        </>
      </Modal>
    </header>
  );
};

export default Header;
