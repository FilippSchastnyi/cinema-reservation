import Image from '@components/Image/Image';
import RegistrationBgImg from '@assets/auth/registration-bg.jpg';
import RegistrationBgImgX2 from '@assets/auth/registration-bg@2x.jpg';
import AuthForm from '@components/Auth/AuthForm/AuthForm';
import { AuthVariant } from '@src/ts/enums';
import RegistrationCss from './Registration.module.scss';

const Registration = () => (
  <div className={RegistrationCss.Registration}>
    <div className={RegistrationCss.leftContainer}>
      <h2 className={RegistrationCss.RegistrationTitle}>Registration</h2>
      <AuthForm variant={AuthVariant.SignUp} />
    </div>
    <div className={RegistrationCss.rightContainer}>
      <Image
        src={RegistrationBgImg}
        srcSet={RegistrationBgImgX2}
      />
    </div>
  </div>
);

export default Registration;
