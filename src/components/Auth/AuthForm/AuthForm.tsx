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
import { useContext } from 'react';
import { AuthContext } from '@src/contexts/AuthContext';
import { UserType } from '@src/ts/types';

interface IAuthFormProps {
  variant: AuthVariant.SignUp | AuthVariant.LogIn,
  completeAuthMethod: any
}

const AuthForm = ({ variant, completeAuthMethod }: IAuthFormProps) => {
  const [createUser] = useMutation(CREATE_USER);
  const [logInUser] = useMutation(LOGIN_USER);
  const authContext = useContext(AuthContext);

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(FormValidationService.getValidationSchema(variant)),
  });

  const onHandleSubmitForm = (formData: any, actionType: AuthVariant) => {
    const actionVariant = (actionType === AuthVariant.LogIn) ? 'logInUser' : 'createUser';
    (actionVariant === 'logInUser' ? logInUser : createUser)({
      variables: {
        input: {
          email: formData.email,
          password: formData.password,
        },
      },
    })
      .then(({ data }) => {
        const userData = data[actionVariant] as UserType;
        authContext.login(userData);
        completeAuthMethod();
      });
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => { onHandleSubmitForm(data, variant); })}>
        {variant === AuthVariant.LogIn && <LoginFormControls />}
        {variant === AuthVariant.SignUp && <RegistrationFormControls />}
        <Button size="w100" type="submit">
          {variant === AuthVariant.SignUp ? ('Register') : ('Log In')}
        </Button>
      </form>
    </FormProvider>
  );
};

export default AuthForm;
