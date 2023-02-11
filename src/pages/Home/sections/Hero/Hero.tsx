import '@css/common/section.scss'
import '@css/common/container.scss'
import HeroSlider from '@components/HeroSlider/HeroSlider'
import HeroCss from './Hero.module.scss'

const Hero = (): JSX.Element => (
  <section className={`section section--no-margin ${HeroCss.hero}`}>
    <div className={HeroCss.backGround}>
      <HeroSlider />
    </div>
  </section>
)

export default Hero
