import { SeatStatusVariant } from '@src/ts/enums'
import CartItemCss from './CartItem.module.scss'

type CartItemProps = {
  title: string
  status?: SeatStatusVariant
  price: number
}

const CartItem = ({title, status, price }: CartItemProps): JSX.Element => {
  return (
    <div className={CartItemCss.container}>
      <div>
        <span>{title}</span>
        <span>{status}</span>
      </div>
      <span>
        ${price}
      </span>
    </div>
  )
}

export default CartItem
