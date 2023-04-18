import {useTypedSelector} from "@src/hooks/redux"
import CartItem from "@pages/Booking/CinemaShoppingCart/CartItem/CartItem"
import {GoodsType, SeatType} from "@src/ts/types"
import {GoodsTypeVariant} from "@src/ts/enums"
import {Button} from "antd"
import CinemaShoppingCartCss from "./CinemaShoppingCart.module.scss"

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
      <CartItem
        key={item.id}
        title={`${item.name}, ${item.count}`}
        price={item.price}
        status={GoodsTypeVariant.FOOD}
      />
    )
  }

  return (
    <div className={CinemaShoppingCartCss.container}>
      SHOP
      <div className={CinemaShoppingCartCss.track}>
        <ul className={CinemaShoppingCartCss.list}>
          {cartItems.map((item) => item && renderCartItem(item))}
        </ul>
      </div>
      <div className={CinemaShoppingCartCss.footer}>
        <div>
          Total:
        </div>
        <Button block type="primary" size="large">
          Buy
        </Button>
      </div>
    </div>
  )
}
export default CinemaShoppingCart
