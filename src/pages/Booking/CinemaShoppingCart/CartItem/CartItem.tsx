import {GoodsTypeVariant, SeatStatusVariant} from "@src/ts/enums"
import CartItemCss from './CartItem.module.scss'

type CartItemProps = {
  title: string
  status: SeatStatusVariant | GoodsTypeVariant
  price: number
}

const CartItem = ({title, status, price }: CartItemProps): JSX.Element => {

  let statusClass;
  switch (status) {
  case 'STANDARD':
    statusClass = 'text--grey';
    break;
  case 'VIP':
    statusClass = 'text--blue-80';
    break;
  case 'FOOD':
    statusClass = 'text--green';
    break;
  default:
    statusClass = '';
    break;
  }

  return (
    <div className={CartItemCss.container}>
      <div className={CartItemCss.inner}>
        <span className='text text--bold text--14'>{title}</span>
        <span className={`text--bold ${statusClass}`}>{status}</span>
      </div>
      <span className='text text--bold'>
        ${price}
      </span>
    </div>
  )
}

export default CartItem
