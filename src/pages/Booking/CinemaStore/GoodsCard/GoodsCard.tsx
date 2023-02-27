import React from 'react'
import { GoodsType } from '@src/ts/types'
import InlineSVG from "react-inlinesvg"
import GoodsCardCss from './GoodsCard.module.scss'

const GoodsCard = ({ name, image, price, count }: GoodsType) => {
  return <div className={GoodsCardCss.container}>
    <div className={GoodsCardCss.image}>
      <InlineSVG width='100%' height='100%' src={image}/>
    </div>

    <p className={GoodsCardCss.content}>
      <span className="text">{name}</span>
      <span className="text">${price}</span>
    </p>
  </div>
}

export default GoodsCard
