import classes from './Button.module.scss';

type ButtonSize =
  | 'lg'
  | 'sm'
  | 'md'
  | 'w100';

type ButtonVariant =
    | 'default'
    | 'link';

interface IButton {
  onClick: () => void;
  children?: JSX.Element;
  size?: ButtonSize;
  variant?: ButtonVariant
  isDisabled?: boolean
}

function Button({
  children,
  size = 'md',
  variant = 'default',
  onClick,
  isDisabled = false,
}: IButton): JSX.Element {
  const cls = [classes.btn];
  cls.push(`btn--${classes[size]}`);
  cls.push(classes[variant]);

  return (
    <button
      type="button"
      className={cls.join(' ')}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
