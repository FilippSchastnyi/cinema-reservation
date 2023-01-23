import '@css/common/section.scss';
import '@css/common/container.scss';
import Slider from '@components/Slider/Slider';
import HeroCss from './Hero.module.scss';

const Hero = (): JSX.Element => (
  <section className={`section section--no-margin ${HeroCss.hero}`}>
    <div className={HeroCss.backGround}>
      <Slider />
    </div>
  </section>
);

export default Hero;
