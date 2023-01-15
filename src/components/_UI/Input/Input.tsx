import InputCss from './Input.module.scss';

interface IInputProps {
  type?: string,
  label?: string,
  name?: string,
  onChange?: () => void,
  onBlur?: () => void
}

const Input = ({
  type,
  label,
  name,
  onChange,
  onBlur,
}: IInputProps) => {
  const idGen = Math.round(Math.random() * 1e8)
    .toString(16);
  const inputType = type || 'text';
  return (
    <div className={InputCss.input}>
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
};

export default Input;
