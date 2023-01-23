import Image from '@components/Image/Image';
import logInBgImg from '@assets/auth/login-bg.jpg';
import logInBgImgX2 from '@assets/auth/login-bg@2x.jpg';
import AuthForm from '@components/Auth/AuthForm/AuthForm';
import { AuthVariant } from '@src/ts/enums';
import Button from '@ui/Button/Button';
import AuthCss from './Auth.module.scss';

const Login = ({ changeAuthMethod }: { changeAuthMethod: any }) => (
  <div className={AuthCss.authContainer}>
    <div className={AuthCss.imageContainer}>
      <Image
        alt="hello"
        src={logInBgImg}
        srcSet={logInBgImgX2}
      />
    </div>
    <div className={AuthCss.content}>
      <h2 className={AuthCss.title}>Log In</h2>
      <AuthForm variant={AuthVariant.LogIn} />
      <div className={AuthCss.confirmation}>
        <span> Don't have an account? </span>
        <Button size="sm" onClick={changeAuthMethod}> Sign Up </Button>
      </div>
    </div>
  </div>
);

export default Login;
