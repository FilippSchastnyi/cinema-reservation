import Image from '@components/Image/Image';
import logInBgImg from '@assets/auth/login-bg.jpg';
import logInBgImgX2 from '@assets/auth/login-bg@2x.jpg';
import AuthForm from '@components/Auth/AuthForm/AuthForm';
import { AuthVariant } from '@src/ts/enums';
import LoginCss from './Login.module.scss';

const Login = () => (
  <div className={LoginCss.Login}>
    <div className={LoginCss.leftContainer}>
      <Image
        alt="hello"
        src={logInBgImg}
        srcSet={logInBgImgX2}
      />
    </div>
    <div className={LoginCss.rightContainer}>
      <h2 className={LoginCss.LoginTitle}>Log In</h2>
      <AuthForm variant={AuthVariant.LogIn} />
    </div>
  </div>
);

export default Login;
