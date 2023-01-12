import classes from './Header.module.scss';

export interface IHeader {
  setModalState?: (modalState: boolean) => void;
  setFlyoutState?: (flyoutState: boolean) => void;
}

const Header = ({ setModalState, setFlyoutState }: IHeader): JSX.Element => (
  <header className={classes.header} />
  /* COoooDEeee Meee please! :TODO */
);

export default Header;
