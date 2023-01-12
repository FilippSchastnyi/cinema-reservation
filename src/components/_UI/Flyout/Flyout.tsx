import classes from './Flyout.module.scss';
import Portal from '../../Portal/Portal';
import Overlay from '../Overlay/Overlay';
import Button from '../Button/Button';

const Flyout = ({ isOpen, closeFlyout }: any): any => {
  if (!isOpen) return null;
  return (
    <Portal>
      <>
        <Overlay onHandleOverlayClick={closeFlyout} />
        <div className={classes.flyout}>
          <Button onClick={closeFlyout}>
            X
          </Button>
          {/*  FLyout ::TODO me pls :( */}
        </div>
      </>
    </Portal>
  );
};

export default Flyout;
