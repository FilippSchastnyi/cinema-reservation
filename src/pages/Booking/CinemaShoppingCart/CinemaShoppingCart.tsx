import { useTypedSelector } from '@src/hooks/redux'
import CartItem from '@pages/Booking/CinemaShoppingCart/CartItem/CartItem'
import {GoodsType, SeatType,} from "@src/ts/types"
import CinemaShoppingCartCss from './CinemaShoppingCart.module.scss'

const CinemaShoppingCart = () => {
  const shopStore = useTypedSelector((state) => state.shopCart)

  return (
    <div className={CinemaShoppingCartCss.container}>
      SHOP
      <ul className={CinemaShoppingCartCss.track}>
        {shopStore.map((item: GoodsType | SeatType | null) => {
          if (!item) return null
          return ('status' in item)
            ?(
              <li key={item.id}>
                <CartItem
                  price={item.price}
                  status={item.status}
                  title={`Row ${  item.row  }, Seat ${  item.seatNumber}`}
                />
              </li>
            )
            :(
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
