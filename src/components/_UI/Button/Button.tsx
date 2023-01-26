import { MouseEventHandler } from 'react';
import ButtonCss from './Button.module.scss';

interface IButtonProps {
  /**
   * Function for clicking
   */
  onClick?: MouseEventHandler<any> | undefined;
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
  /**
   * Determines the default behavior of the button
   */
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  children,
  size = 'md',
  variant = 'contained',
  onClick = undefined,
  showSpinner = false,
  isDisabled = false,
  type = 'button',
}: IButtonProps): JSX.Element => {
  const cls = [ButtonCss.btn];
  cls.push(ButtonCss[`btn--${size}`]);
  cls.push(ButtonCss[variant]);

  return (
    <button
      type={type}
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
