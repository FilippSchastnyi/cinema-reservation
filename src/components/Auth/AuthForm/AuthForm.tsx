import { FormProvider, useForm } from 'react-hook-form';
import RegistrationFormControls
  from '@components/Auth/AuthForm/FormControls/RegistrationFormControls';
import { AuthVariant } from '@src/ts/enums';
import LoginFormControls from '@components/Auth/AuthForm/FormControls/LoginFormControls';
import { yupResolver } from '@hookform/resolvers/yup';
import FormValidationService from '@src/ts/services/FormValidationService';
import Button from '@ui/Button/Button';

interface IAuthFormProps {
  variant: AuthVariant.SignUp | AuthVariant.LogIn
}

const AuthForm = ({ variant }: IAuthFormProps) => {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(FormValidationService.getValidationSchema(variant)),
  });

  const onFormSubmit = (data: any) => {
    console.log(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onFormSubmit)}>
        {variant === AuthVariant.LogIn && <LoginFormControls />}
        {variant === AuthVariant.SignUp && <RegistrationFormControls />}
        <Button size="sm" type="submit">
          {variant === AuthVariant.SignUp ? ('Register') : ('Log In')}
        </Button>
      </form>
    </FormProvider>
  );
};

export default AuthForm;
