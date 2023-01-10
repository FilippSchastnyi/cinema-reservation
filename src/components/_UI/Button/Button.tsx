import classes from './Button.module.scss';

type ButtonSize =
  | 'btn--lg'
  | 'btn--sm'
  | 'btn--md'
  | 'btn--w100';

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
  size = 'btn--md',
  variant = 'default',
  onClick,
  isDisabled = false,
}: IButton): JSX.Element {
  const cls = [classes.btn];
  cls.push(classes[size]);
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
