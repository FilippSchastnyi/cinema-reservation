import Input from '@ui/Input/Input';
import { useFormContext } from 'react-hook-form';

const RegistrationFormControls = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <>
      <Input
        label="Email"
        name="email"
        register={register('email')}
        errors={errors}
      />
      <Input
        label="Password"
        name="password"
        register={register('password')}
        errors={errors}
      />
      <Input
        label="Repeat password"
        name="confirm_password"
        register={register('confirm_password')}
        errors={errors}
      />
    </>
  );
};

export default RegistrationFormControls;
