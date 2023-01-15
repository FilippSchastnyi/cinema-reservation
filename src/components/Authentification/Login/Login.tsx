import Image from '@components/Image/Image';
import logInBgImg from '@assets/authentification/login-bg.jpg';
import logInBgImgX2 from '@assets/authentification/login-bg@2x.jpg';
import LoginForm from '@components/Authentification/Form/LoginForm/LoginForm';
import LoginCss from './Login.module.scss';

const Login = () => (
  <div className={LoginCss.Login}>
    <div className={LoginCss.leftContainer}>
      <Image
        src={logInBgImg}
        srcSet={logInBgImgX2}
      />
    </div>
    <div className={LoginCss.rightContainer}>
      <h2 className={LoginCss.LoginTitle}>Log In</h2>
      <LoginForm />
    </div>
  </div>
);

export default Login;
