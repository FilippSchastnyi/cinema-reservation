import { useTypedSelector } from '@src/hooks/redux'
import CartItem from '@pages/Booking/CinemaShoppingCart/CartItem/CartItem'
import { GoodsType, SeatType } from '@src/ts/types'
import CinemaShoppingCartCss from './CinemaShoppingCart.module.scss'

const CinemaShoppingCart = () => {
  const cartItems = useTypedSelector((state) => state.shopCart.cartItems)

  const renderCartItem = (item: GoodsType | SeatType) => {
    const isSeat = 'seatNumber' in item

    return isSeat ? (
      <CartItem
        key={item.id}
        price={item.price}
        status={item.status}
        title={`Row ${item.row}, Seat ${item.seatNumber}`}
      />
    ) : (
      <CartItem key={item.id} price={item.price} />
    )
  }

  return (
    <div className={CinemaShoppingCartCss.container}>
      SHOP
      <ul className={CinemaShoppingCartCss.track}>
        {cartItems.map((item) => item && renderCartItem(item))}
      </ul>
    </div>
  )
}
export default CinemaShoppingCart
