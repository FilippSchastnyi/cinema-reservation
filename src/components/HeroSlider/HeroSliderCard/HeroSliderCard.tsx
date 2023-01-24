import React from 'react';
import Button from '@ui/Button/Button';
import HeroSliderCardCss from './HeroSliderCard.module.scss';
import '@css/common/text.scss';

interface IHeroSliderInfoProps {
  title: string,
  text: string,
}

const HeroSliderCard = ({ text, title }:IHeroSliderInfoProps):JSX.Element => (
  <div className={HeroSliderCardCss.content}>
    <h1 className="title--main">
      {title}
    </h1>
    <p className="title--subtitle">
      {text}
    </p>
    <Button size="lg">
      Заказать билет
    </Button>
  </div>
);

export default HeroSliderCard;
