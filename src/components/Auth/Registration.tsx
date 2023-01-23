import Image from '@components/Image/Image';
import RegistrationBgImg from '@assets/auth/registration-bg.jpg';
import RegistrationBgImgX2 from '@assets/auth/registration-bg@2x.jpg';
import AuthForm from '@components/Auth/AuthForm/AuthForm';
import { AuthVariant } from '@src/ts/enums';
import Button from '@ui/Button/Button';
import AuthCss from './Auth.module.scss';

const Registration = ({ changeAuthMethod }: { changeAuthMethod: any }) => (
  <div className={AuthCss.authContainer}>
    <div className={AuthCss.content}>
      <h2 className={AuthCss.title}>Registration</h2>
      <AuthForm variant={AuthVariant.SignUp} />
      <div className={AuthCss.confirmation}>
        <span> Already have an account? </span>
        <Button size="sm" onClick={changeAuthMethod}> Log In </Button>
      </div>
    </div>
    <div className={AuthCss.imageContainer}>
      <Image
        src={RegistrationBgImg}
        srcSet={RegistrationBgImgX2}
      />
    </div>
  </div>
);

export default Registration;
