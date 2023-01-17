import { useState } from 'react';
import Registration from '@components/Auth/Registration/Registration';
import Button from '@ui/Button/Button';
import Logo from '@components/Logo/Logo';
import Modal from '@ui/Modal/Modal';
import Login from '@components/Auth/Login/Login';
import { AuthVariant } from '@src/ts/enums';
import HeaderCss from './Header.module.scss';

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
    <header className={HeaderCss.header}>
      <div className={HeaderCss.wrapper}>
        <Logo />
        <div className={HeaderCss.buttonGroup}>
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
