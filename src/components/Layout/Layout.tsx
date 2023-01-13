import { Outlet } from 'react-router-dom';
import classes from './Layout.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Layout = (): JSX.Element => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
