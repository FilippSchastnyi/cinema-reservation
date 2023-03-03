import { useTypedSelector } from '@src/hooks/redux'
import CartItem from '@pages/Booking/CinemaShoppingCart/CartItem/CartItem'
import CinemaShoppingCartCss from './CinemaShoppingCart.module.scss'
import { GoodsType, TicketType } from '@src/ts/types'

const CinemaShoppingCart = () => {
  const shopStore = useTypedSelector((state) => state.shopCart)
  return (
    <div>
      SHOP
      <ul className={CinemaShoppingCartCss.container}>
        {shopStore.map((item: GoodsType | TicketType | null) => {
          if (!item) return null
          return (
            <li key={item.id}>
              <CartItem
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CinemaShoppingCart
