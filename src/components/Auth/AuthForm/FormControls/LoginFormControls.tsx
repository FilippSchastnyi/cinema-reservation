import Input from '@ui/Input/Input';
import { useFormContext } from 'react-hook-form';

const LoginFormControls = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <>
      <div className="form-control">
        <Input
          label="Email"
          name="email"
          register={register('email')}
          errors={errors}
        />
      </div>
      <Input
        label="Password"
        name="password"
        register={register('password')}
        errors={errors}
      />
    </>
  );
};

export default LoginFormControls;
