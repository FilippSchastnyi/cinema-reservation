import React from 'react'
import { GoodsType } from '@src/ts/types'
import InlineSVG from "react-inlinesvg"
import Numeric from "@ui/Numeric/Numeric"
import {useTypedDispatch} from "@src/hooks/redux"
import {shopCartSlice} from "@src/store/reducers/shopCartSlice"
import GoodsCardCss from './GoodsCard.module.scss'

const GoodsCard = ({ id, name, image, price }: GoodsType) => {
  const dispatch = useTypedDispatch()
  const {addItem, removeItem} = shopCartSlice.actions

  const addGoodsToCart = (count: number) => {
    dispatch(addItem({
      id,
      name,
      price,
      count,
      image
    }))
  }

  const removeGoodsFromCart = (count: number) => {
    dispatch(removeItem({
      id,
      name,
      price,
      count,
      image
    }))
  }

  return <div className={GoodsCardCss.container}>
    <div className={GoodsCardCss.image}>
      <InlineSVG width='100%' height='100%' src={image as string}/>
    </div>

    <p className={GoodsCardCss.content}>
      <span className="text">{name}</span>
      <span className="text">${price}</span>
    </p>
    <Numeric
    onIncrementNumber = {addGoodsToCart}
    onDecrementNumber = {removeGoodsFromCart}
    />
  </div>
}

export default GoodsCard
