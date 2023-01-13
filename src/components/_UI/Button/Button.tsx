import { MouseEventHandler } from 'react';
import classes from './Button.module.scss';

interface IButtonProps {
  /**
   * Function for clicking
   */
  onClick: MouseEventHandler<any> | undefined;
  /**
   * Children to be displayed in the button
   */
  children: string | JSX.Element;
  /**
   * The size of button to be used
   * one of 'lg' | 'sm' | 'md | w100'
   */
  size?: | 'lg' | 'sm' | 'md' | 'w100';
  /**
   * The type of button to be used
   * one of 'outlined' | 'text' | 'contained'
   */
  variant?: 'outlined' | 'text' | 'contained';
  /**
   * Checks if the button should be disabled
   */
  isDisabled?: boolean;
  /**
   * Determines if the spinner is to be shown or not.
   * @type {boolean}
   */
  showSpinner?: boolean;
}

const Button = ({
  children,
  size = 'md',
  variant = 'contained',
  onClick = undefined,
  showSpinner = false,
  isDisabled = false,
}: IButtonProps): JSX.Element => {
  const cls = [classes.btn];
  cls.push(classes[`btn--${size}`]);
  cls.push(classes[variant]);

  return (
    <button
      type="button"
      className={cls.join(' ')}
      disabled={isDisabled}
      onClick={onClick}
    >
      {showSpinner && (<>loading...</>)}
      {/* Spinner ::TODO */}
      {children}
    </button>
  );
};

export default Button;
