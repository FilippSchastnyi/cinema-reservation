import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.scss';
import Button from '../_UI/Button/Button';
import Modal from '../_UI/Modal/Modal';
import Flyout from '../_UI/Flyout/Flyout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Layout = (): JSX.Element => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [flyoutState, setFlyoutState] = useState<boolean>(false);

  return (
    <div className={classes.layout}>
      <Header />
      <Flyout
        isOpen={flyoutState}
        closeFlyout={() => {
          setFlyoutState(false);
        }}
      />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
      <Modal
        isOpen={modalState}
        closePopup={() => {
          setModalState(false);
        }}
      >
        <Button onClick={() => setModalState(true)}>
          Registration
        </Button>
      </Modal>
    </div>
  );
};

export default Layout;
