import { FormProvider, useForm } from 'react-hook-form';
import RegistrationFormControls
  from '@components/Auth/AuthForm/FormControls/RegistrationFormControls';
import { AuthVariant } from '@src/ts/enums';
import LoginFormControls from '@components/Auth/AuthForm/FormControls/LoginFormControls';
import { yupResolver } from '@hookform/resolvers/yup';
import FormValidationService from '@src/ts/services/FormValidationService';
import Button from '@ui/Button/Button';
import { useMutation } from '@apollo/client';
import { CREATE_USER, LOGIN_USER } from '@src/graphQL/mutations/user';

interface IAuthFormProps {
  variant: AuthVariant.SignUp | AuthVariant.LogIn
}

const AuthForm = ({ variant }: IAuthFormProps) => {
  const [signUpUser] = useMutation(CREATE_USER);
  const [logInUser] = useMutation(LOGIN_USER);

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(FormValidationService.getValidationSchema(variant)),
  });

  const onHandleSubmitForm = (formData: any, actionType: AuthVariant) => {
    (actionType === AuthVariant.LogIn ? logInUser : signUpUser)({
      variables: {
        input: {
          email: formData.email,
          password: formData.password,
        },
      },
    })
      .then((data) => {
        console.log(data);
      });
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => { onHandleSubmitForm(data, variant); })}>
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
