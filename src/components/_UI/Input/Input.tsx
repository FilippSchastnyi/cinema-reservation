import classes from './Input.module.scss';

interface IInput {
  type?: string,
  label?: string,
  name?: string,
  onChange?: () => void,
  onBlur?: () => void
}

function Input({
  type,
  label,
  name,
  onChange,
  onBlur,
}: IInput) {
  const idGen = Math.round(Math.random() * 1e8)
    .toString(16);
  const inputType = type || 'text';
  return (
    <div className={classes.input}>
      <input
        type={inputType}
        id={`${inputType}-${idGen}`}
        name={name}
        onChange={onChange}
        onChangeCapture={onBlur}
        required
      />
      <label htmlFor={`${inputType}-${idGen}`}>{label}</label>
    </div>
  );
}

export default Input;
