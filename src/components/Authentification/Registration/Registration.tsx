import Image from '@components/Image/Image';
import RegistrationBgImg from '@assets/authentification/registration-bg.jpg';
import RegistrationBgImgX2 from '@assets/authentification/registration-bg@2x.jpg';
import RegistrationForm from '@components/Authentification/Form/RegistrationForm/RegistrationForm';
import RegistrationCss from './Registration.module.scss';

const Registration = () => (
  <div className={RegistrationCss.Registration}>
    <div className={RegistrationCss.leftContainer}>
      <h2 className={RegistrationCss.RegistrationTitle}>Registration</h2>
      <RegistrationForm />
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
