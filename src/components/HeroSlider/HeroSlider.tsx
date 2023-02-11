import Slick from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import avengers from '@src/assets/images/hero-slider/bg.jpg'
import crew from '@src/assets/images/hero-slider/bg_1.jpeg'
import joker from '@src/assets/images/hero-slider/bg_2.jpeg'
import Image from '@components/Image/Image'
import './HeroSlider.scss'
import HeroSliderCard from '@components/HeroSlider/HeroSliderCard/HeroSliderCard'

const HeroSlider = (): JSX.Element => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    infinite: true,
  }

  return (
    <Slick {...settings}>
      <div>
        <Image src={crew} alt="crew" />
        <HeroSliderCard title="crew" text="crew" />
      </div>

      <div>
        <Image src={joker} alt="joker" />
        <HeroSliderCard title="joker" text="joker" />
      </div>
      <div>
        <Image src={avengers} alt="avengers" />
        <HeroSliderCard title="avengers" text="avengers" />
      </div>
    </Slick>
  )
}

export default HeroSlider
